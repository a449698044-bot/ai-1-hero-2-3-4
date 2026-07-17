import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { createPortal } from 'react-dom';
import {
  ArrowUpRight,
  Bot,
  Camera,
  ChevronLeft,
  ChevronRight,
  Contact,
  Layers3,
  Mail,
  Menu,
  MapPin,
  Phone,
  Play,
  Sparkles,
  Wand2,
  X,
} from 'lucide-react';
import BorderGlow from './BorderGlow';
import usePortfolioMotion from './usePortfolioMotion';
import './styles.css';

const COS_ASSET_BASE = 'https://qiyue-1455073558.cos.ap-guangzhou.myqcloud.com/videos';
const cloudAsset = (fileName) => `${COS_ASSET_BASE}/${fileName}`;
const videoAsset = cloudAsset;

const projectCards = [
  {
    title: '柒月商业摄影',
    category: '影像品牌 / 商业摄影',
    image: cloudAsset('project-content.png'),
    summary: '全国接单，覆盖美食摄影、电商产品、人像服装、白酒摄影、广告片与电商视频拍摄。',
  },
  {
    title: '智能视觉广告',
    category: '智能视觉 / 广告创意',
    image: cloudAsset('project-ai.png'),
    summary: '以智能生成工作流辅助品牌视觉探索，从概念设定到主视觉延展保持统一质感。',
  },
  {
    title: '品牌视觉系统',
    category: '品牌设计 / 视觉系统',
    image: cloudAsset('brand-system.png'),
    summary: '为品牌建立可持续使用的视觉语言，兼顾识别度、传播效率和商业落地。',
  },
];

const strengths = [
  {
    icon: Layers3,
    title: '品牌视觉系统',
    text: '从标志、字体、色彩到应用规范，建立高一致性的品牌表达。',
  },
  {
    icon: Wand2,
    title: '智能创意生产',
    text: '使用智能工具进行概念草图、风格探索、海报合成和高效视觉迭代。',
  },
  {
    icon: Camera,
    title: '商业影像审美',
    text: '理解产品、人像与场景的视觉叙事，让画面服务于销售和品牌记忆。',
  },
  {
    icon: Bot,
    title: '跨媒介落地',
    text: '将品牌视觉延展到电商、视频、社媒与线下物料，保持统一体验。',
  },
];

const metrics = [
  ['6+', '核心设计方向'],
  ['100+', '商业视觉项目'],
  ['全国', '摄影与视频接单'],
  ['智能', '创意工作流'],
];

const tvcColumns = [
  {
    number: '01',
    title: '回力1927TVC宣传视频',
    items: ['形象广告片', '品牌故事片'],
    video: videoAsset('huili-1927-tvc.m4v'),
    coverTime: 2.8,
  },
  {
    number: '02',
    title: '旗舰店新品发布视频',
    items: ['产品卖点视频', '场景故事情节片', '电商主推视频'],
    video: videoAsset('product-launch-tvc.mp4'),
    coverTime: 3.2,
  },
  {
    number: '03',
    title: '白酒Tvc视频',
    items: ['白酒视频拍摄', '产品动态展示'],
    video: videoAsset('baijiu-tvc-collection.m4v'),
    coverTime: 4.5,
  },
];

const sceneCards = [
  {
    title: '五粮液天猫官方旗舰店白酒系列拍摄',
    label: 'WULIANGYE TMALL SERIES',
    image: cloudAsset('wuliangye-snake-15.jpg'),
    text: '围绕蛇年限定礼盒与白酒产品质感，打造更有节庆记忆点的电商视觉场景。',
    gallery: [
      cloudAsset('wuliangye-snake-01.jpg'),
      cloudAsset('wuliangye-snake-02.jpg'),
      cloudAsset('wuliangye-snake-03.jpg'),
      cloudAsset('wuliangye-snake-04.jpg'),
      cloudAsset('wuliangye-snake-05.jpg'),
      cloudAsset('wuliangye-snake-06.jpg'),
      cloudAsset('wuliangye-snake-07.jpg'),
      cloudAsset('wuliangye-snake-08.jpg'),
      cloudAsset('wuliangye-snake-09.jpg'),
      cloudAsset('wuliangye-snake-10.jpg'),
      cloudAsset('wuliangye-snake-11.jpg'),
      cloudAsset('wuliangye-snake-12.jpg'),
      cloudAsset('wuliangye-snake-13.jpg'),
      cloudAsset('wuliangye-snake-14.jpg'),
      cloudAsset('wuliangye-snake-15.jpg'),
      cloudAsset('wuliangye-snake-16.jpg'),
      cloudAsset('wuliangye-snake-17.jpg'),
      cloudAsset('wuliangye-snake-18.jpg'),
    ],
  },
  {
    title: '洋河股份天之蓝系列拍摄',
    label: 'YANGHE BLUE CLASSIC',
    image: cloudAsset('mengzhilan-01.jpg'),
    text: '以酒体质感、品牌蓝调与场景氛围建立高端白酒视觉记忆。',
    gallery: [
      cloudAsset('mengzhilan-01.jpg'),
      cloudAsset('mengzhilan-02.jpg'),
      cloudAsset('mengzhilan-03.jpg'),
      cloudAsset('mengzhilan-04.jpg'),
      cloudAsset('mengzhilan-05.jpg'),
      cloudAsset('mengzhilan-06.jpg'),
      cloudAsset('mengzhilan-07.jpg'),
      cloudAsset('mengzhilan-08.jpg'),
      cloudAsset('mengzhilan-09.jpg'),
    ],
  },
  {
    title: '京东AI太阳眼镜系列拍摄',
    label: 'JD AI SUNGLASSES',
    image: cloudAsset('ai-sunglasses-07.jpg'),
    text: '结合智能穿戴属性、人物状态与户外运动场景，呈现更具科技感的太阳眼镜视觉。',
    gallery: [
      cloudAsset('ai-sunglasses-01.jpg'),
      cloudAsset('ai-sunglasses-02.jpg'),
      cloudAsset('ai-sunglasses-03.jpg'),
      cloudAsset('ai-sunglasses-04.jpg'),
      cloudAsset('ai-sunglasses-05.jpg'),
      cloudAsset('ai-sunglasses-06.jpg'),
      cloudAsset('ai-sunglasses-07.jpg'),
      cloudAsset('ai-sunglasses-08.jpg'),
      cloudAsset('ai-sunglasses-09.jpg'),
      cloudAsset('ai-sunglasses-10.jpg'),
      cloudAsset('ai-sunglasses-11.jpg'),
      cloudAsset('ai-sunglasses-12.jpg'),
      cloudAsset('ai-sunglasses-13.jpg'),
      cloudAsset('ai-sunglasses-14.jpg'),
    ],
  },
  {
    title: '香港首饰系列拍摄',
    label: 'HONG KONG JEWELRY',
    image: cloudAsset('hk-jewelry-22.jpg'),
    text: '以模特状态、妆造氛围与首饰细节呈现轻奢质感，强化佩戴场景与产品记忆。',
    gallery: [
      cloudAsset('hk-jewelry-01.jpg'),
      cloudAsset('hk-jewelry-02.jpg'),
      cloudAsset('hk-jewelry-03.jpg'),
      cloudAsset('hk-jewelry-04.jpg'),
      cloudAsset('hk-jewelry-05.jpg'),
      cloudAsset('hk-jewelry-06.jpg'),
      cloudAsset('hk-jewelry-07.jpg'),
      cloudAsset('hk-jewelry-08.jpg'),
      cloudAsset('hk-jewelry-09.jpg'),
      cloudAsset('hk-jewelry-10.jpg'),
      cloudAsset('hk-jewelry-11.jpg'),
      cloudAsset('hk-jewelry-12.jpg'),
      cloudAsset('hk-jewelry-13.jpg'),
      cloudAsset('hk-jewelry-14.jpg'),
      cloudAsset('hk-jewelry-15.jpg'),
      cloudAsset('hk-jewelry-16.jpg'),
      cloudAsset('hk-jewelry-17.jpg'),
      cloudAsset('hk-jewelry-18.jpg'),
      cloudAsset('hk-jewelry-19.jpg'),
      cloudAsset('hk-jewelry-20.jpg'),
      cloudAsset('hk-jewelry-21.jpg'),
      cloudAsset('hk-jewelry-22.jpg'),
      cloudAsset('hk-jewelry-23.jpg'),
      cloudAsset('hk-jewelry-24.jpg'),
      cloudAsset('hk-jewelry-25.jpg'),
      cloudAsset('hk-jewelry-26.jpg'),
      cloudAsset('hk-jewelry-27.jpg'),
      cloudAsset('hk-jewelry-28.jpg'),
      cloudAsset('hk-jewelry-29.jpg'),
      cloudAsset('hk-jewelry-30.jpg'),
      cloudAsset('hk-jewelry-31.jpg'),
      cloudAsset('hk-jewelry-32.jpg'),
      cloudAsset('hk-jewelry-33.jpg'),
      cloudAsset('hk-jewelry-34.jpg'),
      cloudAsset('hk-jewelry-35.jpg'),
      cloudAsset('hk-jewelry-36.jpg'),
      cloudAsset('hk-jewelry-37.jpg'),
    ],
  },
  {
    title: '回力1972天猫官方旗舰店我自飞将板鞋拍摄',
    label: 'WARRIOR 1972 TMALL',
    image: cloudAsset('huili-1972-19.jpg'),
    text: '以国潮板鞋、场景人物与产品细节组合，呈现更有品牌记忆点的电商视觉内容。',
    gallery: [
      cloudAsset('huili-1972-01.jpg'),
      cloudAsset('huili-1972-02.jpg'),
      cloudAsset('huili-1972-03.jpg'),
      cloudAsset('huili-1972-04.jpg'),
      cloudAsset('huili-1972-05.jpg'),
      cloudAsset('huili-1972-06.jpg'),
      cloudAsset('huili-1972-07.jpg'),
      cloudAsset('huili-1972-08.jpg'),
      cloudAsset('huili-1972-09.jpg'),
      cloudAsset('huili-1972-10.jpg'),
      cloudAsset('huili-1972-11.jpg'),
      cloudAsset('huili-1972-12.jpg'),
      cloudAsset('huili-1972-13.jpg'),
      cloudAsset('huili-1972-14.jpg'),
      cloudAsset('huili-1972-15.jpg'),
      cloudAsset('huili-1972-16.jpg'),
      cloudAsset('huili-1972-17.jpg'),
      cloudAsset('huili-1972-18.jpg'),
      cloudAsset('huili-1972-19.jpg'),
      cloudAsset('huili-1972-20.jpg'),
      cloudAsset('huili-1972-21.jpg'),
      cloudAsset('huili-1972-22.jpg'),
      cloudAsset('huili-1972-23.jpg'),
      cloudAsset('huili-1972-24.jpg'),
      cloudAsset('huili-1972-25.jpg'),
      cloudAsset('huili-1972-26.jpg'),
      cloudAsset('huili-1972-27.jpg'),
      cloudAsset('huili-1972-28.jpg'),
      cloudAsset('huili-1972-29.jpg'),
      cloudAsset('huili-1972-30.jpg'),
      cloudAsset('huili-1972-31.jpg'),
      cloudAsset('huili-1972-32.jpg'),
      cloudAsset('huili-1972-33.jpg'),
      cloudAsset('huili-1972-34.jpg'),
      cloudAsset('huili-1972-35.jpg'),
      cloudAsset('huili-1972-36.jpg'),
    ],
  },
];

const ecommerceVideoCards = [
  {
    title: '食品类视频',
    label: 'FOOD VIDEO',
    videoPreview: videoAsset('food-video-01.mp4'),
    videoAsCover: true,
    videos: [
      videoAsset('food-video-01.mp4'),
      videoAsset('food-video-02.mp4'),
      videoAsset('food-video-04.mp4'),
      videoAsset('food-video-05.mp4'),
      videoAsset('food-video-07.mp4'),
      videoAsset('food-video-08.mp4'),
      videoAsset('food-video-09.mp4'),
      videoAsset('food-video-10.mp4'),
    ],
    className: 'commerce-card-tall commerce-card-left',
  },
  {
    title: '酒水类视频',
    label: 'BEVERAGE VIDEO',
    videoPreview: videoAsset('beverage-video-01.mp4'),
    videoAsCover: true,
    videos: [
      videoAsset('beverage-video-01.mp4'),
      videoAsset('beverage-video-02.mp4'),
      videoAsset('beverage-video-03.mp4'),
      videoAsset('beverage-video-04.mp4'),
      videoAsset('beverage-video-05.mp4'),
      videoAsset('beverage-video-06.mp4'),
      videoAsset('beverage-video-07.mp4'),
    ],
    className: 'commerce-card-mid commerce-card-center-left',
  },
  {
    title: '服饰类主图视频',
    label: 'APPAREL MAIN VIDEO',
    videoPreview: videoAsset('apparel-main-video-01.mp4'),
    videoAsCover: true,
    videos: [
      videoAsset('apparel-main-video-01.mp4'),
      videoAsset('apparel-main-video-02.mp4'),
      videoAsset('apparel-main-video-03.mp4'),
      videoAsset('apparel-main-video-04.mp4'),
      videoAsset('apparel-main-video-05.mp4'),
      videoAsset('apparel-main-video-06.mp4'),
      videoAsset('apparel-main-video-07.mp4'),
      videoAsset('apparel-main-video-08.mp4'),
      videoAsset('apparel-main-video-09.mp4'),
      videoAsset('apparel-main-video-10.mp4'),
      videoAsset('apparel-main-video-11.mp4'),
      videoAsset('apparel-main-video-12.mp4'),
    ],
    className: 'commerce-card-main',
  },
  {
    title: '鞋类主图视频',
    label: 'SHOES MAIN VIDEO',
    videoPreview: videoAsset('women-shoe-main-video-01.m4v'),
    videoAsCover: true,
    videos: [
      videoAsset('women-shoe-main-video-01.m4v'),
      videoAsset('women-shoe-main-video-02.m4v'),
      videoAsset('women-shoe-main-video-03.mp4'),
      videoAsset('women-shoe-main-video-04.mp4'),
      videoAsset('women-shoe-main-video-05.m4v'),
      videoAsset('women-shoe-main-video-06.mp4'),
      videoAsset('women-shoe-main-video-07.mp4'),
      videoAsset('women-shoe-main-video-08.mp4'),
      videoAsset('women-shoe-main-video-09.mp4'),
      videoAsset('women-shoe-main-video-10.mp4'),
      videoAsset('women-shoe-main-video-11.mp4'),
      videoAsset('women-shoe-main-video-12.mp4'),
    ],
    className: 'commerce-card-mid commerce-card-center-right',
  },
  {
    title: '首饰主图视频',
    label: 'JEWELRY MAIN VIDEO',
    image: cloudAsset('jewelry-main-video-cover.jpg'),
    videoPreview: videoAsset('jewelry-main-video-01.mp4'),
    videos: [
      videoAsset('jewelry-main-video-01.mp4'),
      videoAsset('jewelry-main-video-02.mp4'),
      videoAsset('jewelry-main-video-03.mp4'),
      videoAsset('jewelry-main-video-04.mp4'),
      videoAsset('jewelry-main-video-05.mp4'),
      videoAsset('jewelry-main-video-06.mp4'),
      videoAsset('jewelry-main-video-07.mp4'),
    ],
    className: 'commerce-card-tall commerce-card-right',
  },
  {
    title: '生活类主图视频',
    label: 'LIFESTYLE MAIN VIDEO',
    videoPreview: videoAsset('lifestyle-main-video-01.mp4'),
    videoAsCover: true,
    videos: [
      videoAsset('lifestyle-main-video-01.mp4'),
      videoAsset('lifestyle-main-video-02.mp4'),
      videoAsset('lifestyle-main-video-03.mp4'),
      videoAsset('lifestyle-main-video-04.mp4'),
      videoAsset('lifestyle-main-video-05.mp4'),
      videoAsset('lifestyle-main-video-06.mp4'),
      videoAsset('lifestyle-main-video-07.mp4'),
      videoAsset('lifestyle-main-video-08.mp4'),
      videoAsset('lifestyle-main-video-09.mp4'),
      videoAsset('lifestyle-main-video-10.mp4'),
      videoAsset('lifestyle-main-video-11.mp4'),
    ],
    className: 'commerce-card-small commerce-card-bottom-left',
  },
];

function TvcVideoCover({ src, coverTime = 1.5 }) {
  const videoRef = React.useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const seekToCover = () => {
      const safeTime = Math.min(coverTime, Math.max(video.duration - 0.2, 0));
      if (Number.isFinite(safeTime)) video.currentTime = safeTime;
    };

    video.addEventListener('loadedmetadata', seekToCover);
    return () => video.removeEventListener('loadedmetadata', seekToCover);
  }, [coverTime]);

  return (
    <video
      ref={videoRef}
      className="tvc-cover-video"
      src={src}
      muted
      playsInline
      preload="metadata"
      aria-hidden="true"
    />
  );
}

const navServices = [
  { label: '关于我们/联系我们', href: '#partners' },
  { label: 'TVC视频部分案例', href: '#projects' },
  { label: '定制场景拍摄案例', href: '#strengths' },
  { label: '电商主图视频案例', href: '#commerce-video' },
];

const partnerLogos = [
  {
    name: '华为',
    image: cloudAsset('partners/huawei.png'),
    size: 'mark',
  },
  {
    name: '恩威集团',
    image: cloudAsset('partners/enwei.png'),
    size: 'wide',
  },
  {
    name: '百草味',
    image: cloudAsset('partners/baicaowei.png'),
    size: 'wide',
  },
  {
    name: '绿色品牌',
    image: cloudAsset('partners/green.png'),
    size: 'wide',
  },
  {
    name: '洋河股份',
    image: cloudAsset('partners/yanghe.png'),
    size: 'wide',
  },
  {
    name: '五粮液官方旗舰店',
    image: cloudAsset('partners/wuliangye.png'),
    size: 'mark',
  },
  {
    name: '回力 1927',
    image: cloudAsset('partners/huili.png'),
    size: 'huili',
  },
  {
    name: '新希望乳业',
    image: cloudAsset('partners/new-hope-wide.png'),
    size: 'wide',
  },
];

function App() {
  const [isNavPinned, setIsNavPinned] = useState(false);
  usePortfolioMotion();

  useEffect(() => {
    const targetId = window.location.hash.slice(1);
    if (!targetId) return;

    window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({ block: 'start' });
    });
  }, []);

  useEffect(() => {
    const updateNav = () => {
      setIsNavPinned(window.scrollY > window.innerHeight * 0.72);
    };

    updateNav();
    window.addEventListener('scroll', updateNav, { passive: true });
    window.addEventListener('resize', updateNav);
    return () => {
      window.removeEventListener('scroll', updateNav);
      window.removeEventListener('resize', updateNav);
    };
  }, []);

  return (
    <main className="site-shell">
      <PortfolioNav pinned={isNavPinned} />
      <Hero />
      <div className="below-hero-surface">
        <Partners />
        <Projects />
        <Strengths />
        <EcommerceVideos />
        <ContactSection />
      </div>
    </main>
  );
}

function PortfolioNav({ pinned }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`hero-nav ${pinned ? 'is-pinned' : ''}`} aria-label="服务导航">
      <a className="hero-nav-logo" href="#home" aria-label="返回首页">
        <img src={cloudAsset('personal-logo.png')} alt="柒月映画" />
      </a>
      <button
        className="hero-nav-menu-toggle"
        type="button"
        aria-label={menuOpen ? '关闭导航菜单' : '打开导航菜单'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <div className={`hero-nav-links ${menuOpen ? 'is-open' : ''}`}>
        {navServices.map((item) => (
          <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
      <a className="hero-nav-contact" href="#contact">
        图片案例
        <ArrowUpRight size={16} />
      </a>
    </nav>
  );
}

function Partners() {
  return (
    <section className="partners-section" id="partners" aria-label="公司介绍">
      <div className="profile-aurora" aria-hidden="true" />
      <div className="company-poster">
        <div className="profile-heading">
          <h2>PROFILE</h2>
          <span>关于我们 / ABOUT US</span>
        </div>

        <BorderGlow
          className="profile-card profile-identity profile-glow-card"
          edgeSensitivity={21}
          glowColor="196 86 72"
          backgroundColor="#0b0d11"
          borderRadius={34}
          glowRadius={30}
          glowIntensity={1.45}
          coneSpread={18}
          animated
          colors={['#38bdf8', '#c084fc', '#f472b6']}
          fillOpacity={0.38}
        >
          <img className="profile-handshake" src={cloudAsset('handshake-reference.png')} alt="合作握手视觉" />
        </BorderGlow>

        <BorderGlow
          className="profile-card profile-intro profile-glow-card"
          edgeSensitivity={18}
          glowColor="286 90 78"
          backgroundColor="#101018"
          borderRadius={34}
          glowRadius={34}
          glowIntensity={1.55}
          coneSpread={20}
          animated
          colors={['#c084fc', '#f472b6', '#38bdf8']}
          fillOpacity={0.42}
        >
          <h3>会做策划的摄影设计公司，让创意变成成交。</h3>
          <p>
            （柒月映画）是一家有着新视觉、新理念的新时代文化传媒公司。公司自2016年成立至今，为上百家国内外知名品牌提供服务。我们紧跟时代潮流，捕捉行业风向，不断突破创新，抓住产品亮点，注重差异化视觉体现，以多样的视觉创意方式展现品牌价值，让产品在竞品中脱颖而出，帮助品牌在视觉层面被消费者记住，为品牌提供一站式视觉服务。主要服务内容：商业摄影 丨 电商视频 丨 TVC制作丨视觉后期丨平面广告设计丨品牌全案设计。部分服务品牌：保利地产、洋河股份梦之蓝、天之蓝等系列、五粮液官方旗舰店、天工白酒、回力1972旗舰店、香港珠宝首饰公司、全友家居、杜甫草堂旗舰店、妈祖酒系列、华为、爱怡美妆、蜀道集团、恩威集团，Ranyi服装品牌、亚马逊女鞋头部等更多商家。
          </p>
          <div className="profile-contact-row">
            <span><Phone size={14} /> 18628055770</span>
            <span><Phone size={14} /> 18180991213</span>
            <span><Contact size={14} /> 微信同号</span>
          </div>
        </BorderGlow>

        {[
          ['2016', '公司成立时间'],
          ['100+', '服务品牌客户'],
          ['500强企业做背书', '项目经验丰富'],
        ].map(([value, label], index) => (
          <BorderGlow
            className={`profile-stat profile-stat-${index + 1} profile-glow-card`}
            key={label}
            edgeSensitivity={24}
            glowColor={index === 1 ? '320 88 76' : '196 86 72'}
            backgroundColor="#0c0f14"
            borderRadius={28}
            glowRadius={24}
            glowIntensity={1.35}
            coneSpread={16}
            colors={index === 1 ? ['#f472b6', '#c084fc', '#38bdf8'] : ['#38bdf8', '#c084fc', '#f8fafc']}
            fillOpacity={0.32}
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="hero" id="home" aria-label="首页">
      <div className="hero-opening-curtain" aria-hidden="true">
        <span />
        <span />
      </div>
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={cloudAsset('fluid-glass-hero.jpeg')}
      >
        <source src={videoAsset('hero-background-video.mp4')} type="video/mp4" />
      </video>
      <div className="hero-shade" />

      <div className="hero-content">
        <div className="hero-text-box">
          <h1 aria-label="只做具有销售力的摄影设计">
            <span>只做具有销售力的，</span>
            <span>摄影设计。</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container split-grid">
        <div className="portrait-panel" aria-label="设计师人物图">
          <div className="portrait-orbit" />
          <div className="portrait-figure">
            <Sparkles size={42} />
            <span>智能设计</span>
          </div>
        </div>
        <div className="section-copy">
          <p className="eyebrow">关于我</p>
          <h2>视觉设计师，连接品牌策略、智能工具与商业影像。</h2>
          <p>
            我是一名视觉设计师 / 智能设计师 / 品牌设计师，长期关注品牌视觉系统、广告传播画面和商业内容的统一表达。我的工作方式强调清晰的设计判断、稳定的审美控制，以及面向实际业务场景的交付效率。
          </p>
          <div className="contact-grid">
            <a href="#contact">
              <Mail size={18} />
              微信 / 邮箱待补充
            </a>
            <a href="tel:+8613800000000">
              <Phone size={18} />
              +86 138 0000 0000
            </a>
            <span>
              <MapPin size={18} />
              全国远程 / 项目合作
            </span>
          </div>
          <div className="metrics">
            {metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="section projects tvc-projects" id="projects" aria-label="TVC视频作品">
      <div className="container tvc-shell">
        <div className="tvc-heading">
          <p>TVC CASES</p>
          <h2>TVC视频部分案例</h2>
        </div>
        <div className="tvc-grid">
          {tvcColumns.map((column) => (
            <article className="tvc-column" key={column.number}>
              {column.video && <TvcVideoCover src={column.video} coverTime={column.coverTime} />}
              <div>
                <strong>{column.number}</strong>
                <span>{column.title}</span>
              </div>
              {column.video && (
                <button
                  className="tvc-play-button"
                  type="button"
                  aria-label="播放回力1927TVC宣传视频"
                  onClick={() => setActiveVideo(column.video)}
                >
                  <Play size={34} fill="currentColor" />
                </button>
              )}
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
      {activeVideo && (
        <div className="video-lightbox" role="dialog" aria-modal="true" aria-label="TVC视频播放">
          <video className="video-lightbox-player" src={activeVideo} autoPlay controls playsInline />
          <button
            className="video-lightbox-close"
            type="button"
            aria-label="关闭视频"
            onClick={() => setActiveVideo(null)}
          >
            <X size={26} />
          </button>
        </div>
      )}
    </section>
  );
}

function Strengths() {
  const [activeScene, setActiveScene] = useState(1);
  const [scenePointer, setScenePointer] = useState(0);
  const [sceneViewportWidth, setSceneViewportWidth] = useState(() => window.innerWidth);
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeGalleryTitle, setActiveGalleryTitle] = useState('');
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const galleryScrollTop = React.useRef(0);

  useEffect(() => {
    const updateSceneViewport = () => setSceneViewportWidth(window.innerWidth);
    window.addEventListener('resize', updateSceneViewport);
    return () => window.removeEventListener('resize', updateSceneViewport);
  }, []);

  useEffect(() => {
    if (!activeGallery) return undefined;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousOverflow = document.body.style.overflow;

    root.classList.add('is-scene-lightbox-open');
    body.classList.add('is-scene-lightbox-open');
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      root.classList.remove('is-scene-lightbox-open');
      body.classList.remove('is-scene-lightbox-open');
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousOverflow;
    };
  }, [activeGallery]);

  const updatePointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const next = (event.clientX - rect.left) / rect.width - 0.5;
    setScenePointer(Number((next * 2).toFixed(3)));
  };

  const shiftScene = (direction) => {
    setActiveScene((current) => (current + direction + sceneCards.length) % sceneCards.length);
  };

  const openGallery = (gallery, title) => {
    galleryScrollTop.current = window.scrollY;
    setActiveGallery(gallery);
    setActiveGalleryTitle(title);
    setActiveGalleryIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveGalleryTitle('');
    setActiveGalleryIndex(0);
    window.requestAnimationFrame(() => {
      window.scrollTo(0, galleryScrollTop.current);
    });
  };

  const shiftGallery = (direction) => {
    setActiveGalleryIndex((current) => {
      const next = current + direction;
      if (!activeGallery) return current;
      if (next < 0) return activeGallery.length - 1;
      if (next >= activeGallery.length) return activeGallery.length - 1;
      return next;
    });
  };

  const resetGallery = () => {
    setActiveGalleryIndex(0);
  };

  return (
    <section
      className="scene-section"
      id="strengths"
      onMouseMove={updatePointer}
      onMouseLeave={() => setScenePointer(0)}
      aria-label="定制场景拍摄案例"
    >
      <div className="container scene-shell">
        <div className="scene-copy">
          <p>Custom scene photography for products, people and stories.</p>
          <h2>定制场景拍摄案例</h2>
          <span>
            从产品卖点、品牌情绪到画面脚本，搭建更适合成交与传播的专属拍摄场景。
          </span>
        </div>

        <div className="scene-stage">
          <div className="scene-card-track" aria-live="polite">
            {sceneCards.map((card, index) => {
              const rawOffset = index - activeScene;
              const offset = rawOffset > sceneCards.length / 2
                ? rawOffset - sceneCards.length
                : rawOffset < -sceneCards.length / 2
                  ? rawOffset + sceneCards.length
                  : rawOffset;
              const abs = Math.abs(offset);
              const sceneStep = sceneViewportWidth <= 360
                ? sceneViewportWidth * 0.72
                : sceneViewportWidth <= 760
                  ? Math.min(sceneViewportWidth * 0.72, 290)
                  : 292;
              const pointerOffset = sceneViewportWidth <= 760 ? 0 : scenePointer * -48;
              const x = offset * sceneStep + pointerOffset;
              const y = abs * 32;
              const scale = Math.max(0.74, 1 - abs * 0.12);
              const rotate = offset * -7;

              return (
                <article
                  className={`scene-card ${offset === 0 ? 'is-active' : ''} ${card.gallery ? 'has-gallery' : ''}`}
                  key={card.title}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${-abs * 90}px) scale(${scale}) rotateY(${rotate}deg)`,
                    zIndex: 10 - abs,
                    opacity: abs > 2 ? 0 : 1 - abs * 0.18,
                  }}
                >
                  <img src={card.image} alt={card.title} />
                  <div>
                    <small>{card.label}</small>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  {card.gallery && (
                    <button className="scene-gallery-button" type="button" onClick={() => openGallery(card.gallery, card.title)}>
                      点击查看图片包
                    </button>
                  )}
                </article>
              );
            })}
          </div>

          <button className="scene-arrow scene-arrow-left" type="button" aria-label="查看上一组场景" onClick={() => shiftScene(-1)}>
            <ChevronLeft size={30} />
          </button>
          <button className="scene-arrow scene-arrow-right" type="button" aria-label="查看下一组场景" onClick={() => shiftScene(1)}>
            <ChevronRight size={30} />
          </button>
        </div>
      </div>

      {activeGallery && createPortal(
        <div className="scene-lightbox" role="dialog" aria-modal="true" aria-label={`${activeGalleryTitle}图片包`}>
          <img className="scene-lightbox-image" src={activeGallery[activeGalleryIndex]} alt={activeGalleryTitle} />
          <button className="scene-lightbox-close" type="button" aria-label="关闭图片" onClick={closeGallery}>
            <X size={26} />
          </button>
          <button className="scene-lightbox-arrow scene-lightbox-prev" type="button" aria-label="上一张图片" onClick={() => shiftGallery(-1)}>
            <ChevronLeft size={30} />
          </button>
          {activeGalleryIndex < activeGallery.length - 1 && (
            <button className="scene-lightbox-arrow scene-lightbox-next" type="button" aria-label="下一张图片" onClick={() => shiftGallery(1)}>
              <ChevronRight size={30} />
            </button>
          )}
          {activeGalleryIndex === activeGallery.length - 1 && (
            <button className="scene-lightbox-reset" type="button" onClick={resetGallery}>
              点击返回第一张图片
            </button>
          )}
        </div>,
        document.body,
      )}
    </section>
  );
}

function EcommerceVideos() {
  const [activeVideos, setActiveVideos] = useState(null);
  const [activeVideoTitle, setActiveVideoTitle] = useState('');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const commerceScrollTop = React.useRef(0);

  useEffect(() => {
    if (!activeVideos) return undefined;
    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousOverflow = body.style.overflow;

    root.classList.add('is-commerce-video-open');
    body.classList.add('is-commerce-video-open');
    root.style.overflow = 'hidden';
    body.style.overflow = 'hidden';

    return () => {
      root.classList.remove('is-commerce-video-open');
      body.classList.remove('is-commerce-video-open');
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousOverflow;
    };
  }, [activeVideos]);

  const openVideos = (videos, title) => {
    commerceScrollTop.current = window.scrollY;
    setActiveVideos(videos);
    setActiveVideoTitle(title);
    setActiveVideoIndex(0);
  };

  const closeVideos = () => {
    setActiveVideos(null);
    setActiveVideoTitle('');
    setActiveVideoIndex(0);
    window.requestAnimationFrame(() => {
      window.scrollTo(0, commerceScrollTop.current);
    });
  };

  const shiftVideos = (direction) => {
    setActiveVideoIndex((current) => {
      if (!activeVideos) return current;
      return (current + direction + activeVideos.length) % activeVideos.length;
    });
  };

  const playPreview = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  };

  const pausePreview = (event) => {
    const video = event.currentTarget.querySelector('video');
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <section className="commerce-video-section" id="commerce-video" aria-label="电商主图视频案例">
      <div className="container commerce-video-shell">
        <div className="commerce-video-heading">
          <p>E-commerce main image video cases</p>
          <h2>电商主图视频案例</h2>
          <span>从一次清晰的沟通开始，让下一个视觉成交更容易。</span>
        </div>

        <div className="commerce-video-board">
          {ecommerceVideoCards.map((card) => (
            <article
              className={`commerce-video-card ${card.className} ${card.videos ? 'has-video' : ''}`}
              key={card.title}
              onMouseEnter={card.videoPreview ? playPreview : undefined}
              onMouseLeave={card.videoPreview ? pausePreview : undefined}
            >
              {card.videoAsCover ? (
                <video
                  className="commerce-card-cover-video"
                  src={card.videoPreview}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={card.title}
                />
              ) : (
                <img src={card.image} alt={card.title} />
              )}
              {card.videoPreview && !card.videoAsCover && (
                <video
                  className="commerce-card-preview-video"
                  src={card.videoPreview}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
              )}
              <div>
                <small>{card.label}</small>
                <strong>{card.title}</strong>
              </div>
              {card.videos && (
                <button className="commerce-card-play" type="button" aria-label={`播放${card.title}`} onClick={() => openVideos(card.videos, card.title)}>
                  <Play size={26} fill="currentColor" />
                </button>
              )}
            </article>
          ))}
        </div>
      </div>
      {activeVideos && createPortal(
        <div className="commerce-video-lightbox" role="dialog" aria-modal="true" aria-label={`${activeVideoTitle}播放`}>
          <video
            className="commerce-video-player"
            src={activeVideos[activeVideoIndex]}
            autoPlay
            controls
            playsInline
          />
          <button className="commerce-video-close" type="button" aria-label="关闭视频" onClick={closeVideos}>
            <X size={26} />
          </button>
          <button className="commerce-video-lightbox-arrow commerce-video-lightbox-prev" type="button" aria-label="上一个视频" onClick={() => shiftVideos(-1)}>
            <ChevronLeft size={32} />
          </button>
          <button className="commerce-video-lightbox-arrow commerce-video-lightbox-next" type="button" aria-label="下一个视频" onClick={() => shiftVideos(1)}>
            <ChevronRight size={32} />
          </button>
          <div className="commerce-video-counter">
            {String(activeVideoIndex + 1).padStart(2, '0')} / {String(activeVideos.length).padStart(2, '0')}
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <img className="contact-logo" src={cloudAsset('personal-logo.png')} alt="柒月映画" />
        <h2>
          <span>让下一个视觉项目，</span>
          <span>从一次清晰的沟通开始。</span>
        </h2>
        <p>
          可合作方向：品牌视觉系统、智能视觉创意、商业摄影、电商视觉、广告片 / 短视频内容、亚马逊拍摄设计与整合型宣传物料。
        </p>
        <div className="contact-message-card">
          <img className="contact-handshake" src={cloudAsset('handshake-reference.png')} alt="" aria-hidden="true" />
          <p>
            谢谢观看，图片作品更新过快，篇幅过长，这里就不做展示了，详细可以联系我们。
          </p>
        </div>
      </div>
    </section>
  );
}

createRoot(document.getElementById('root')).render(<App />);
