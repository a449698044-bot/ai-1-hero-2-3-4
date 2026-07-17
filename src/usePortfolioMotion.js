import { useEffect } from 'react';

const EASE_OUT_EXPO = 'cubic-bezier(0.16, 1, 0.3, 1)';
const EASE_IN_OUT = 'cubic-bezier(0.76, 0, 0.24, 1)';

function runAnimation(element, keyframes, options) {
  if (!element) return null;

  const { persist = false, ...animationOptions } = options;

  const animation = element.animate(keyframes, {
    fill: 'both',
    easing: EASE_OUT_EXPO,
    ...animationOptions,
  });

  if (!persist) {
    animation.addEventListener('finish', () => animation.cancel(), { once: true });
  }
  return animation;
}

function animateHeroOpening(compactMotion) {
  const hero = document.querySelector('.hero');
  if (!hero) return [];

  const animations = [];
  const video = hero.querySelector('.hero-video');
  const nav = document.querySelector('.hero-nav');
  const titleLines = [...hero.querySelectorAll('h1 span')];
  const curtainTop = hero.querySelector('.hero-opening-curtain span:first-child');
  const curtainBottom = hero.querySelector('.hero-opening-curtain span:last-child');

  const videoFrames = compactMotion
    ? [{ transform: 'scale(1.08)' }, { transform: 'scale(1)' }]
    : [
        { transform: 'scale(1.16)', filter: 'saturate(0.45) contrast(1.28) brightness(0.38)' },
        { transform: 'scale(1)', filter: 'saturate(0.9) contrast(1.1) brightness(0.72)' },
      ];

  animations.push(runAnimation(video, videoFrames, {
    duration: compactMotion ? 1450 : 1900,
    delay: 120,
    easing: EASE_IN_OUT,
  }));

  animations.push(runAnimation(nav, [
    { opacity: 0, transform: 'translate(-50%, -42px)' },
    { opacity: 1, transform: 'translate(-50%, 0)' },
  ], { duration: 1050, delay: 420 }));

  animations.push(runAnimation(curtainTop, [
    { transform: 'translateY(0)' },
    { transform: 'translateY(-102%)' },
  ], { duration: 1350, delay: 180, easing: EASE_IN_OUT, persist: true }));

  animations.push(runAnimation(curtainBottom, [
    { transform: 'translateY(0)' },
    { transform: 'translateY(102%)' },
  ], { duration: 1350, delay: 180, easing: EASE_IN_OUT, persist: true }));

  titleLines.forEach((line, index) => {
    animations.push(runAnimation(line, [
      {
        opacity: 0,
        clipPath: 'inset(100% 0 0 0)',
        transform: 'translate3d(0, 92px, 0) scaleX(0.68)',
        transformOrigin: 'left center',
      },
      {
        opacity: 1,
        clipPath: 'inset(0 0 0 0)',
        transform: 'translate3d(0, 0, 0) scaleX(1)',
        transformOrigin: 'left center',
      },
    ], { duration: 1280, delay: 720 + index * 190 }));
  });

  return animations.filter(Boolean);
}

const sectionMotion = {
  partners: {
    english: '.profile-heading h2',
    title: '.profile-heading span',
    cards: '.profile-intro, .profile-stat',
    images: '',
  },
  projects: {
    english: '.tvc-heading p',
    title: '.tvc-heading h2',
    cards: '.tvc-column',
    images: '.tvc-cover-video',
  },
  strengths: {
    english: '.scene-copy p',
    title: '.scene-copy h2',
    cards: '.scene-stage',
    images: '.scene-card img',
  },
  'commerce-video': {
    english: '.commerce-video-heading p',
    title: '.commerce-video-heading h2',
    cards: '.commerce-video-card',
    images: '.commerce-video-card img, .commerce-card-cover-video',
  },
  contact: {
    english: '',
    title: '.contact-inner h2',
    cards: '.contact-logo, .contact-inner > p, .contact-message-card',
    images: '.contact-handshake',
  },
};

function animateSection(section, compactMotion) {
  const config = sectionMotion[section.id];
  if (!config) return [];

  const animations = [];
  const english = config.english ? section.querySelector(config.english) : null;
  const title = section.querySelector(config.title);
  const cards = config.cards ? [...section.querySelectorAll(config.cards)] : [];
  const images = config.images ? [...section.querySelectorAll(config.images)] : [];

  animations.push(runAnimation(english, [
    {
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
      transform: 'translate3d(-150px, 0, 0) scaleX(0.58)',
      transformOrigin: 'left center',
    },
    {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transform: 'translate3d(0, 0, 0) scaleX(1)',
      transformOrigin: 'left center',
    },
  ], { duration: 1200, delay: 30 }));

  animations.push(runAnimation(title, [
    {
      opacity: 0,
      clipPath: 'inset(100% 0 0 0)',
      transform: 'translate3d(0, 88px, 0) scaleY(0.76)',
      transformOrigin: 'left bottom',
    },
    {
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transform: 'translate3d(0, 0, 0) scaleY(1)',
      transformOrigin: 'left bottom',
    },
  ], { duration: 1320, delay: 190 }));

  cards.forEach((card, index) => {
    const cardStart = compactMotion
      ? { opacity: 0, transform: 'translate3d(0, 48px, 0)' }
      : {
          opacity: 0,
          clipPath: 'inset(12% 0 0 0)',
          transform: 'perspective(1000px) translate3d(0, 96px, 0) rotateX(8deg)',
          transformOrigin: 'center bottom',
        };
    const cardEnd = compactMotion
      ? {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)',
          transformOrigin: 'center bottom',
        }
      : {
          opacity: 1,
          clipPath: 'inset(0 0 0 0)',
          transform: 'perspective(1000px) translate3d(0, 0, 0) rotateX(0deg)',
          transformOrigin: 'center bottom',
        };

    animations.push(runAnimation(card, [
      cardStart,
      cardEnd,
    ], {
      duration: compactMotion ? 900 : 1180,
      delay: 500 + index * (compactMotion ? 90 : 140),
    }));
  });

  images.forEach((image, index) => {
    const imageFrames = compactMotion
      ? [{ opacity: 0.5, transform: 'scale(1.06)' }, { opacity: 1, transform: 'scale(1)' }]
      : [
          { opacity: 0.35, clipPath: 'inset(0 0 100% 0)', transform: 'scale(1.12)' },
          { opacity: 1, clipPath: 'inset(0 0 0 0)', transform: 'scale(1)' },
        ];

    animations.push(runAnimation(image, imageFrames, {
      duration: compactMotion ? 980 : 1420,
      delay: 620 + index * (compactMotion ? 70 : 95),
      easing: EASE_IN_OUT,
    }));
  });

  return animations.filter(Boolean);
}

function setupParallax(compactMotion) {
  if (compactMotion) return () => {};

  const media = [...document.querySelectorAll([
    '.tvc-cover-video',
    '.scene-card img',
    '.commerce-video-card img',
    '.commerce-card-cover-video',
    '.contact-handshake',
  ].join(', '))];

  let frame = 0;

  const update = () => {
    frame = 0;
    const viewportHeight = window.innerHeight;

    media.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > viewportHeight + 100) return;

      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const travel = Math.max(-16, Math.min(16, centerOffset * -0.018));
      element.style.translate = `0 ${travel.toFixed(2)}px`;
    });
  };

  const requestUpdate = () => {
    if (frame) return;
    frame = window.requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);

  return () => {
    if (frame) window.cancelAnimationFrame(frame);
    window.removeEventListener('scroll', requestUpdate);
    window.removeEventListener('resize', requestUpdate);
    media.forEach((element) => {
      element.style.translate = '';
    });
  };
}

export default function usePortfolioMotion() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const compactMotion = window.matchMedia('(max-width: 760px), (pointer: coarse)').matches;
    document.documentElement.classList.add('portfolio-motion-active');
    const animations = animateHeroOpening(compactMotion);
    const sections = Object.keys(sectionMotion)
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animations.push(...animateSection(entry.target, compactMotion));
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -14% 0px',
      threshold: 0.16,
    });

    sections.forEach((section) => observer.observe(section));
    const teardownParallax = setupParallax(compactMotion);

    return () => {
      observer.disconnect();
      teardownParallax();
      animations.forEach((animation) => animation?.cancel());
      document.documentElement.classList.remove('portfolio-motion-active');
    };
  }, []);
}
