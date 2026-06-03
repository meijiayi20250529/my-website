const cases = {
  "baidu-ai": {
    meta: "2025-2026 / Baidu Miaobi / AI Creation Platform",
    title: "百度 AI 智能创作平台",
    summary:
      "A one-stop AI creation platform based on Baidu Miaobi, covering graphic content, video, digital-human narration, and smart editing from one-line input to final export.",
    context:
      "The product helps users generate videos, graphics, posters, long images, narration, and edited content from lightweight text inputs. The interface needed to support both PC entry points and end-to-end digital-human creation paths.",
    role:
      "Designed PC entry, home pages in light and dark versions, new-user guidance, digital-human setting flows, avatar and voice selection, duration selection, custom digital-human creation, script generation and editing, loading/error states, personal center, login reward, invitation reward, and mobile invitation pages.",
    impact:
      "The project demonstrates the ability to handle complex AI workflows, multi-state product logic, desktop/mobile consistency, and detailed production-ready UI states.",
    gallery: [
      ["assets/site/baidu-ai/gallery-01.jpg", "Home page"],
      ["assets/site/baidu-ai/gallery-02.jpg", "Dark mode home"],
      ["assets/site/baidu-ai/gallery-03.jpg", "Digital-human script generation"],
      ["assets/site/baidu-ai/gallery-04.jpg", "Video editing"],
      ["assets/site/baidu-ai/gallery-05.jpg", "Digital-human selection"],
      ["assets/site/baidu-ai/gallery-06.jpg", "Personal center"],
      ["assets/site/baidu-ai/gallery-07.jpg", "Mobile invitation page", "phone"]
    ]
  },
  huiboxing: {
    meta: "2025-2026 / Internal Operations / B-side Optimization",
    title: "慧播星运营平台",
    summary:
      "A B-side AI digital-human internal operations platform for operations, algorithm, and strategy teams. The redesign optimized multiple core modules without changing business logic.",
    context:
      "The original platform had dense tables, unclear hierarchy, long text overload, mixed action weights, and high-risk irreversible actions. The goal was to improve scan efficiency, operation accuracy, and error prevention.",
    role:
      "Optimized sidebar navigation, grouped menus, single-line filters, table hierarchy, column priority, colored status badges, long-text folding with tabs, right-side details, card/list asset views, pagination, delete confirmation, and create/edit modals with tag inputs and variable chips.",
    impact:
      "The main tables were reduced from 9 columns to 5-6 high-priority columns, removing horizontal scrolling and making key states, actions, and content easier for operators to understand.",
    gallery: [
      ["assets/site/huiboxing/gallery-01.jpg", "Expand all transition text"],
      ["assets/site/huiboxing/gallery-02.jpg", "Account Application Management"],
      ["assets/site/huiboxing/gallery-03.jpg", "Image Library - Public Library - List View"],
      ["assets/site/huiboxing/gallery-04.jpg", "Image Library - Public Library - Card View"],
      ["assets/site/huiboxing/gallery-05.jpg", "Image Generation - Image Generation Prompt Library"],
      ["assets/site/huiboxing/gallery-06.jpg", "Image Library - Custom Library - List View"],
      ["assets/site/huiboxing/gallery-07.jpg", "Create a new pop-up window"],
      ["assets/site/huiboxing/gallery-08.jpg", "Delete confirmation"]
    ]
  },
  "baidu-youxuan": {
    meta: "2025 / Baidu Youxuan / Consumer App",
    title: "百度电商 - 百度优选 App",
    summary:
      "A Baidu Search e-commerce project covering search result card optimization and AI shopping assistant design, aiming to improve shopping decision efficiency and user experience.",
    context:
      "Baidu Youxuan is deeply integrated with search scenarios, allowing users to reach shopping functions directly while searching for products. The work included search-result information architecture and the new AI shopping companion capability.",
    role:
      "Designed parameter comparison card upgrades, AI assistant product recommendation optimization, livestream center entries, weather and outfit recommendation scenarios, intelligent price comparison, and search-to-purchase shopping paths.",
    impact:
      "The project helped connect search, content recommendation, livestream exposure, AI assistance, and transaction conversion into a clearer e-commerce decision loop.",
    gallery: [
      ["assets/site/baidu-youxuan/gallery-01.jpg", "Page Optimization", "phone"],
      ["assets/site/baidu-youxuan/gallery-02.jpg", "Page Optimization", "phone"],
      ["assets/site/baidu-youxuan/gallery-03.jpg", "Page Optimization", "phone"],
      ["assets/site/baidu-youxuan/gallery-04.jpg", "Page Optimization", "phone"],
      ["assets/site/baidu-youxuan/gallery-05.jpg", "New Feature: Shopping Buddy AI Assistant", "phone"],
      ["assets/site/baidu-youxuan/gallery-06.jpg", "New Feature: Shopping Buddy AI Assistant", "phone"],
      ["assets/site/baidu-youxuan/gallery-07.jpg", "Page Optimization", "phone"],
      ["assets/site/baidu-youxuan/gallery-08.jpg", "Exception States and the Component System", "phone"]
    ]
  },
  "digital-human": {
    meta: "2025-2026 / Design System / Digital-human Video",
    title: "数字人视频化内容系统设计规范",
    summary:
      "A reusable visual design specification for digital-human talking-head videos across nine e-commerce categories and multiple content types such as education, e-commerce, and reviews.",
    context:
      "Manual video design was inefficient and visually inconsistent across categories. The system needed to balance unified quality with flexible category tone and multiple content states.",
    role:
      "Participated in visual component design, storyboard templates, category style definition, typography components, data visualization icons, subtitle styles, horizontal-to-vertical adaptation, material rules, and multi-round iteration.",
    impact:
      "The system became a reusable production guideline for digital-human video content, improving visual consistency, content production efficiency, and scenario adaptability.",
    gallery: [
      ["assets/site/digital-human/gallery-01.jpg", "Template overview", "full"],
      ["assets/site/digital-human/gallery-02.jpg", "16:9 Landscape"],
      ["assets/site/digital-human/gallery-03.jpg", "List class"],
      ["assets/site/digital-human/gallery-04.jpg", "Digital Scroll"],
      ["assets/site/digital-human/gallery-05.jpg", "Highlight state"],
      ["assets/site/digital-human/gallery-06.jpg", "Beauty category"],
      ["assets/site/digital-human/gallery-07.jpg", "3C category"],
      ["assets/site/digital-human/gallery-08.jpg", "General style"]
    ]
  },
  "image-workflow": {
    meta: "2025-2026 / AIGC / Visual Production Workflow",
    title: "AIGC 生图工作流",
    summary:
      "An AIGC-based visual production workflow for Baidu content videoization and Baijiahao UGC review-content growth, built with development collaboration for automated production.",
    context:
      "The project covered video cover images and realistic UGC-style beauty, personal-care, and 3C review images. The workflow needed repeatable prompt rules, quality evaluation, and batch production logic.",
    role:
      "Participated in requirement analysis, reference-image reverse engineering, prompt engineering, batch generation strategy, visual quality evaluation, and frontend collaboration for automated delivery.",
    impact:
      "The workflow transformed design judgment into reusable generation rules, improving efficiency, visual consistency, and scalable delivery for content-platform visual production.",
    gallery: [
      ["assets/site/image-workflow/gallery-01.jpg", "Workflow overview"],
      ["assets/site/image-workflow/gallery-02.jpg", "UGC review image workflow", "phone"],
      ["assets/site/image-workflow/gallery-03.jpg", "Batch production examples", "phone"]
    ]
  },
  "pet-cloud": {
    meta: "2024 / Graduation Project / App UI",
    title: "宠物云伴 App",
    summary:
      "A pet cloud-companion app designed for people who own pets, have owned pets, or are interested in pet companionship. The concept helps busy pet owners remotely care for, monitor, and interact with pets.",
    context:
      "The project began with questionnaires, competitor analysis, user interviews, personas, storyboard, user flow, and design strategy. It responds to problems such as lack of companionship, remote feeding, safety concerns, pet health, and pet-service access.",
    role:
      "Completed the app concept, research synthesis, feature planning, user journey, design system, icon style, and high-fidelity app screens using Figma and Adobe Illustrator.",
    impact:
      "This graduation project shows a full academic UI/UX process from research to high-fidelity interface design, with a warm visual direction and pet-service ecosystem thinking.",
    gallery: [
      ["assets/site/student-work/pet-cloud/page-05.jpg", "Project introduction"],
      ["assets/site/student-work/pet-cloud/page-06.jpg", "Research background"],
      ["assets/site/student-work/pet-cloud/page-09.jpg", "Storyboard and design strategy"],
      ["assets/site/student-work/pet-cloud/page-10.jpg", "User flow"],
      ["assets/site/student-work/pet-cloud/page-11.jpg", "Design system"],
      ["assets/site/student-work/pet-cloud/page-12.jpg", "High-fidelity app screens"]
    ]
  },
  "palace-app": {
    meta: "2023 / Coursework / Cultural App UI",
    title: "寻物紫禁 App",
    summary:
      "A Forbidden City education and culture app concept that introduces museum knowledge through digital display, interactive learning, virtual visiting, cultural stories, photo spots, and creative merchandise.",
    context:
      "The project explored younger users' interest in historical culture and the Forbidden City through online research, market research, interviews, field observation, personas, and user flow planning.",
    role:
      "Designed the app concept, research plan, product structure, day/night browsing modes, cultural-content pages, route and photo-spot features, merchandise pages, and high-fidelity mobile screens.",
    impact:
      "The project shows cultural-content UI storytelling, research-driven feature planning, and visual design inspired by Forbidden City colors, architecture, and cultural products.",
    gallery: [
      ["assets/site/student-work/palace-app/page-13.jpg", "Project introduction"],
      ["assets/site/student-work/palace-app/page-14.jpg", "Research plan"],
      ["assets/site/student-work/palace-app/page-19.jpg", "Design concept"],
      ["assets/site/student-work/palace-app/page-21.jpg", "Day and night page details", "phone"],
      ["assets/site/student-work/palace-app/page-23.jpg", "Feature pages", "phone"],
      ["assets/site/student-work/palace-app/page-24.jpg", "High-fidelity app screens"]
    ]
  },
  "medical-screen": {
    meta: "2023 / Competition Project / Medical Interaction Design",
    title: "智能医疗终端 UI",
    summary:
      "An open smart medical terminal interaction design for elderly users, focused on improving appointment, payment, guidance, accompaniment, and care-service experiences.",
    context:
      "The project responds to aging population growth, complex medical processes, unclear resources, technical barriers, and the need for more personalized support for older adults.",
    role:
      "Participated in research, elderly-user interviews, focus group synthesis, journey mapping, logic flow, low-fidelity process design, high-fidelity UI, and interaction animation planning.",
    impact:
      "This awarded entrepreneurship/competition project shows service-design thinking, elderly-friendly interaction, terminal UI logic, and medical scenario visualization.",
    gallery: [
      ["assets/site/student-work/medical-screen/page-25.jpg", "Project introduction"],
      ["assets/site/student-work/medical-screen/page-26.jpg", "Background research"],
      ["assets/site/student-work/medical-screen/page-29.jpg", "User journey"],
      ["assets/site/student-work/medical-screen/page-30.jpg", "Low-fidelity flow"],
      ["assets/site/student-work/medical-screen/page-31.jpg", "High-fidelity UI"],
      ["assets/site/student-work/medical-screen/page-32.jpg", "Interaction demo page"]
    ]
  },
  "digital-dashboard": {
    meta: "Practice / Data Visualization / Big-screen UI",
    title: "数字智能大屏设计",
    summary:
      "A practice set for digital intelligence dashboard design, exploring large-screen composition, data hierarchy, dark visual style, map/metric modules, and monitoring-style information density.",
    context:
      "The work focuses on visualizing complex information in a high-density screen environment where users need fast scanning, comparison, and situational awareness.",
    role:
      "Designed dashboard compositions, visual hierarchy, chart layouts, map modules, data cards, and dark-theme presentation styles.",
    impact:
      "The project strengthens the data visualization part of the portfolio and supports the B-side/product design direction with big-screen UI capability.",
    gallery: [
      ["assets/site/digital-dashboard/gallery-01.jpg", "Dashboard overview"],
      ["assets/site/digital-dashboard/gallery-02.jpg", "Dashboard variation"],
      ["assets/site/digital-dashboard/gallery-03.jpg", "Detailed dashboard screen"],
      ["assets/site/digital-dashboard/gallery-04.jpg", "Vertical big-screen concept", "phone"],
      ["assets/site/digital-dashboard/gallery-05.jpg", "Wide dashboard composition"]
    ]
  },
  "visual-work": {
    meta: "Visual Design / Poster / Illustration / Brand Materials",
    title: "Visual Works",
    summary:
      "A collection of visual design work including flat illustration, poster/KV design, material extension, and brand-style exploration.",
    context:
      "These works supplement the product design portfolio by showing visual craft, composition, color control, illustration ability, and campaign material thinking.",
    role:
      "Created poster visuals, illustration layouts, KV displays, and extended material designs using graphic design tools and visual communication methods.",
    impact:
      "The section gives hiring reviewers a faster sense of visual taste and execution ability beyond interface design.",
    gallery: [
      ["assets/site/student-work/visual-work/page-47.jpg", "Other design section"],
      ["assets/site/student-work/visual-work/page-48.jpg", "Flat illustration"],
      ["assets/site/student-work/visual-work/page-51.jpg", "Poster and KV display"],
      ["assets/site/student-work/visual-work/page-52.jpg", "Material extension"],
      ["assets/site/student-work/visual-work/page-53.jpg", "Material extension"]
    ]
  }
};

const drawer = document.querySelector("#caseDrawer");
const drawerClose = document.querySelector("#drawerClose");
const caseMeta = document.querySelector("#caseMeta");
const caseTitle = document.querySelector("#caseTitle");
const caseSummary = document.querySelector("#caseSummary");
const caseContext = document.querySelector("#caseContext");
const caseRole = document.querySelector("#caseRole");
const caseImpact = document.querySelector("#caseImpact");
const caseGallery = document.querySelector("#caseGallery");
let pageScrollBeforeCase = 0;

function openCase(key) {
  const selectedCase = cases[key];
  if (!selectedCase || !drawer) return;
  pageScrollBeforeCase = window.scrollY;

  caseMeta.textContent = selectedCase.meta;
  caseTitle.textContent = selectedCase.title;
  caseSummary.textContent = selectedCase.summary;
  caseContext.textContent = selectedCase.context;
  caseRole.textContent = selectedCase.role;
  caseImpact.textContent = selectedCase.impact;
  caseGallery.innerHTML = selectedCase.gallery
    .map(([src, caption, type], index) => {
      const className = type === "phone" ? " is-phone" : type === "full" ? " is-full" : "";
      const number = String(index + 1).padStart(2, "0");
      return `<figure class="case-shot${className}"><img src="${src}" alt="${caption}" loading="lazy"><figcaption><span>${number}</span>${caption}</figcaption></figure>`;
    })
    .join("");

  drawer.classList.add("is-open");
  document.body.classList.add("case-open");
  drawer.scrollTop = 0;
}

function closeCase() {
  if (!drawer) return;
  drawer.classList.remove("is-open");
  document.body.classList.remove("case-open");
  window.scrollTo({ top: pageScrollBeforeCase, behavior: "auto" });
}

document.querySelectorAll("[data-project]").forEach((card) => {
  card.tabIndex = 0;
  card.addEventListener("click", () => openCase(card.dataset.project));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCase(card.dataset.project);
    }
  });
});

drawerClose?.addEventListener("click", closeCase);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && drawer?.classList.contains("is-open")) closeCase();
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const arenaImages = document.querySelector(".arena-images");
const floatingImages = document.querySelectorAll(".arena-img");

document.querySelectorAll(".highlight").forEach((highlight) => {
  const images = highlight.dataset.images?.split(";") || [];
  images.forEach((src) => {
    const image = new Image();
    image.src = src;
  });

  highlight.addEventListener("mouseenter", () => {
    if (!arenaImages || floatingImages.length === 0) return;
    floatingImages.forEach((image, index) => {
      image.src = images[index] || images[0] || "";
    });
    highlight.classList.add("hovered");
    arenaImages.classList.add("is-in");
  });

  highlight.addEventListener("mouseleave", () => {
    highlight.classList.remove("hovered");
    arenaImages?.classList.remove("is-in");
  });
});

document.querySelectorAll(".tilt-card").forEach((card) => {
  const shine = card.querySelector(".card-shine");

  card.addEventListener("mousemove", (event) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.boxShadow = "10px 14px 0 rgba(17, 17, 17, 0.12)";
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
    if (shine) shine.style.opacity = "1";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.boxShadow = "";
    if (shine) shine.style.opacity = "0";
  });
});

(function () {
  const board = document.querySelector(".skill-board");
  if (!board || typeof Matter === "undefined") return;

  const pills = Array.from(board.querySelectorAll("span"));
  if (!pills.length) return;

  const { Engine, Runner, Bodies, Body, World, Mouse, MouseConstraint } = Matter;

  function initPhysics() {
    const W = board.offsetWidth;
    const H = 520;
    board.style.height = H + "px";

    const engine = Engine.create({ gravity: { y: 1.4 } });
    const world = engine.world;

    const wallThick = 60;
    const ground = Bodies.rectangle(W / 2, H + wallThick / 2 - 8, W * 2, wallThick, {
      isStatic: true, label: "ground", friction: 0.8,
    });
    const leftWall = Bodies.rectangle(-wallThick / 2, H / 2, wallThick, H * 3, {
      isStatic: true, label: "wall",
    });
    const rightWall = Bodies.rectangle(W + wallThick / 2, H / 2, wallThick, H * 3, {
      isStatic: true, label: "wall",
    });
    World.add(world, [ground, leftWall, rightWall]);

    const bodies = [];

    pills.forEach((pill, i) => {
      const bw = pill.offsetWidth;
      const bh = pill.offsetHeight;

      const x = 40 + Math.random() * Math.max(40, W - bw - 80);
      const y = -bh - i * 55 - Math.random() * 100;

      const body = Bodies.rectangle(x, y, bw, bh, {
        restitution: 0.3,
        friction: 0.5,
        frictionAir: 0.02,
        chamfer: { radius: bh * 0.45 },
      });

      body._el = pill;
      body._bw = bw;
      body._bh = bh;

      World.add(world, body);
      bodies.push(body);

      pill.style.transform = `translate(${x - bw / 2}px, ${y - bh / 2}px)`;
    });

    const mouse = Mouse.create(board);
    mouse.pixelRatio = 1;
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.25,
        damping: 0.08,
        render: { visible: false },
      },
    });
    World.add(world, mouseConstraint);

    Runner.run(Runner.create(), engine);

    function sync() {
      bodies.forEach((b) => {
        if (!b._el) return;
        const { x, y } = b.position;
        b._el.style.transform = `translate(${x - b._bw / 2}px, ${y - b._bh / 2}px) rotate(${b.angle}rad)`;
      });
      requestAnimationFrame(sync);
    }
    sync();

    board.classList.add("is-ready");

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const newW = board.offsetWidth;
        Body.setPosition(ground, { x: newW / 2, y: H + wallThick / 2 - 8 });
        Body.setPosition(leftWall, { x: -wallThick / 2, y: H / 2 });
        Body.setPosition(rightWall, { x: newW + wallThick / 2, y: H / 2 });
      }, 150);
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(initPhysics);
  } else {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initPhysics);
    } else {
      initPhysics();
    }
  }
})();

