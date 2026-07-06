const DATA_URL = "data/projects.json";
const CONFIG_URL = "data/projects.config.json";

const defaultConfig = {
  "github": {
    "username": "ARtheboss",
    "perPage": 100,
    "sort": "updated",
    "direction": "desc",
    "excludeForks": true,
    "excludeArchived": true
  },
  "curation": {
    "featured": [],
    "research": [],
    "selected": [],
    "hidden": []
  },
  "categoryTopics": {
    "systems": [
      "systems",
      "system",
      "cpp",
      "cplus",
      "performance",
      "backend",
      "infra"
    ],
    "data": [
      "data",
      "analytics",
      "clustering",
      "etl",
      "pipeline"
    ]
  },
  "site": {
    "hero": {
      "eyebrow": "Computer architecture \u00b7 hardware \u00b7 systems",
      "headline": "I design and model large-scale systems and verify they actually work.",
      "subheadline": "I'm a UC Berkeley EECS grad (class of 2026) focused on computer architecture and digital design. I've built performance models for ML accelerators, FPGA systems for trading, and CPU design tooling, with research on LLMs for hardware design along the way.",
      "summary": "The entries below are the ones I'd point someone to. They cover chip performance modeling, FPGA and CPU design internships, a 16nm tapeout project, hardware/ML research, and Berkeleytime, the course-planning platform I led \u2014 plus some of the earlier projects that got me here.",
      "actions": [],
      "links": [
        {
          "label": "GitHub",
          "href": "https://github.com/ARtheboss",
          "variant": "subtle"
        },
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/advay-ratan/",
          "variant": "subtle"
        },
        {
          "label": "Instagram",
          "href": "https://www.instagram.com/advay_ratan/",
          "variant": "subtle"
        },
        {
          "label": "Guitar",
          "href": "https://www.instagram.com/advayronguitar/",
          "variant": "subtle"
        }
      ]
    },
    "fit": [
      {
        "label": "Focus",
        "value": "Computer architecture and hardware systems, mostly \u2014 chip performance modeling, FPGA design, and CPU verification. Some ML-for-hardware research and full-stack work too."
      },
      {
        "label": "How I work",
        "value": "I like taking things apart to see how they work, then rebuilding them from scratch until I actually understand them."
      },
      {
        "label": "Open to",
        "value": "Full-time software and hardware engineering roles."
      }
    ],
    "proofMetrics": [
      {
        "value": "1000x",
        "label": "Faster than RTL sims, <5% error (Annapurna Labs)"
      },
      {
        "value": "~30k",
        "label": "Users on Berkeleytime"
      },
      {
        "value": "2x",
        "label": "FPGA lab performance after board migration"
      },
      {
        "value": "4.0 GPA",
        "label": "EECS, UC Berkeley"
      },
      {
        "value": "150+",
        "label": "Student employees managed (Res Life)"
      }
    ],
    "credentials": {
      "eyebrow": "Background",
      "title": "What the work has in common.",
      "summary": "There isn't one layer of the stack I stick to \u2014 chips, FPGAs, simulators, and the software around them. What's consistent is picking a real problem, learning whatever piece I don't know yet, and verifying that it actually works.",
      "lead": "I first started \"coding\" in elementary school, when I was exposed to Scratch. Since then I've picked up new languages and applied them wherever a problem needed it \u2014 these days that mostly means computer architecture, digital design, and the tools used to verify chips. I graduated with my B.S. in EECS from UC Berkeley in May 2026. Outside of code (and RTL), I play guitar \u2014 I started in 2011, and it turned into a real hobby once I got my first electric guitar in 2017.",
      "items": [
        {
          "label": "Education",
          "value": "UC Berkeley \u00b7 B.S. Electrical Engineering & Computer Science (Aug 2022 \u2013 May 2026)"
        },
        {
          "label": "GPA",
          "value": "4.0 / 4.0"
        },
        {
          "label": "Coursework",
          "value": "Compilers, Quantum Computing, Microfabrication, Tapeout, Digital Design & ICs, Computer Architecture, Algorithms & Data Structures, Networks, Operating Systems, Microelectronic Devices, Discrete Math & Probability, Signals & Systems, Optimization, Databases, Analog Design, Probability & Random Processes, Graphics."
        },
        {
          "label": "Lab Assistant \u2014 EECS 16A",
          "value": "Part of course staff, working 8 hours a week to help ~100 students across two sections with circuits and controls labs."
        },
        {
          "label": "Residential Life Safety Program \u2014 Administrative Coordinator",
          "value": "Working with a team of 7 to manage 150+ student employees across nightly shifts, with spreadsheet and script automations that simplified admin work."
        },
        {
          "label": "Guitar",
          "value": "Trinity Guitar Rock & Pop Grade 8 with Distinction, ABRSM Classical Guitar Grade 5 with Merit. Posted at @advayronguitar."
        }
      ]
    },
    "skills": {
      "eyebrow": "Skills",
      "title": "Different tools, similar kind of work.",
      "summary": "Depending on the project, I'm modeling chip performance, writing RTL, wiring up an FPGA, or putting together a small site.",
      "groups": [
        {
          "title": "Languages",
          "meta": "Core CS / HDLs",
          "items": [
            "Python",
            "C++",
            "C",
            "Java",
            "SQL",
            "Bash",
            "Verilog",
            "SystemVerilog",
            "VHDL",
            "RISC-V",
            "Tcl",
            "Chisel"
          ]
        },
        {
          "title": "Software & EDA tools",
          "meta": "Tooling",
          "items": [
            "Git",
            "Linux",
            "SPICE",
            "KiCad",
            "Cadence Virtuoso",
            "Synopsys PrimeTime",
            "Cadence Innovus",
            "Xilinx Vivado"
          ]
        },
        {
          "title": "Hardware",
          "meta": "Systems / Lab",
          "items": [
            "FPGA",
            "Arduino",
            "Electrical Lab Equipment",
            "Physical Design",
            "PCB Design"
          ]
        }
      ]
    },
    "contact": {
      "eyebrow": "Contact",
      "title": "I'm looking for full-time software and hardware engineering roles.",
      "summary": "Email's the easiest way to reach me. The code is on GitHub, and the usual background is on LinkedIn.",
      "items": [
        {
          "label": "Email",
          "value": "advayratan@berkeley.edu",
          "href": "mailto:advayratan@berkeley.edu"
        },
        {
          "label": "Based in",
          "value": "Berkeley, California"
        },
        {
          "label": "University",
          "value": "UC Berkeley"
        }
      ],
      "links": [
        {
          "label": "Email me",
          "href": "mailto:advayratan@berkeley.edu",
          "variant": "primary"
        },
        {
          "label": "GitHub",
          "href": "https://github.com/ARtheboss",
          "variant": "ghost"
        },
        {
          "label": "LinkedIn",
          "href": "https://www.linkedin.com/in/advay-ratan/",
          "variant": "ghost"
        }
      ]
    }
  },
  "projectOverrides": {}
};
const filterDefinitions = [
  { key: "all", label: "All" },
  { key: "hardware", label: "Hardware" },
  { key: "systems", label: "Systems" },
  { key: "web", label: "Web" },
  { key: "games", label: "Games" },
  { key: "tools", label: "Tools" },
];

const THEME_STORAGE_KEY = "portfolio-theme";

const projectsStatus = document.getElementById("projectsStatus");
const featuredGrid = document.getElementById("featuredGrid");
const researchGrid = document.getElementById("researchGrid");
const projectsGrid = document.getElementById("projectsGrid");
const featuredBlock = document.querySelector(".featured-block");
const researchBlock = document.querySelector(".research-block");
const projectsBlock = document.querySelector(".projects-block");
const projectFilters = document.getElementById("projectFilters");
const themeToggle = document.getElementById("themeToggle");

let baseStatusMessage = "";
let activeProjectFilter = "all";

const unique = (values) => [...new Set((values || []).filter(Boolean))];

const normalizeTopic = (topic) =>
  String(topic || "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

const escapeHtml = (value) =>
  String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const toSafeHttpUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) return "";

  try {
    const url = new URL(value);
    if (url.protocol === "http:" || url.protocol === "https:") {
      return url.href;
    }
  } catch (_error) {
    return "";
  }

  return "";
};

const toSafeMailtoUrl = (value) => {
  if (typeof value !== "string" || !value.trim()) return "";

  try {
    const url = new URL(value);
    if (url.protocol === "mailto:") {
      return url.href;
    }
  } catch (_error) {
    return "";
  }

  return "";
};

const toLinkHref = (value) => toSafeHttpUrl(value) || toSafeMailtoUrl(value);

const getYearFromDate = (dateString) => {
  const date = new Date(dateString || "");
  if (Number.isNaN(date.getTime())) return "";
  return String(date.getFullYear());
};

const formatDate = (dateString) => {
  const date = new Date(dateString || "");
  if (Number.isNaN(date.getTime())) return "";

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const setStatus = (message, { persist = true } = {}) => {
  if (persist) {
    baseStatusMessage = message;
  }

  if (projectsStatus) {
    projectsStatus.textContent = message;
  }
};

const renderButtons = (items, fallbackClass = "ghost") =>
  (Array.isArray(items) ? items : [])
    .map((item) => {
      const href = toLinkHref(item?.href || "");
      if (!href) return "";

      const variant = item?.variant || fallbackClass;
      const isExternal = /^https?:/i.test(href);

      return `<a class="button ${escapeHtml(variant)}" href="${escapeHtml(
        href
      )}"${isExternal ? ' target="_blank" rel="noreferrer"' : ""}>${escapeHtml(
        item?.label || "Open"
      )}</a>`;
    })
    .join("");

const renderSite = (site) => {
  const hero = site?.hero || {};
  const credentials = site?.credentials || {};
  const skills = site?.skills || {};
  const contact = site?.contact || {};

  const setText = (id, value) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value || "";
    }
  };

  setText("heroEyebrow", hero.eyebrow);
  setText("heroSubheadline", hero.subheadline);
  setText("heroSummary", hero.summary);

  const heroHeadline = document.getElementById("heroHeadline");
  if (heroHeadline) {
    const headline = hero.headline || "";
    heroHeadline.dataset.text = headline;
    heroHeadline.textContent = headline;
  }

  const heroActions = document.getElementById("heroActions");
  if (heroActions) {
    heroActions.innerHTML = renderButtons(hero.actions, "ghost");
  }

  const heroLinks = document.getElementById("heroLinks");
  if (heroLinks) {
    heroLinks.innerHTML = renderButtons(hero.links, "subtle");
  }

  const fitBand = document.getElementById("fitBand");
  if (fitBand) {
    fitBand.innerHTML = (Array.isArray(site?.fit) ? site.fit : [])
      .map(
        (item) => `
          <div class="fit-item">
            <div class="fit-label">${escapeHtml(item?.label || "")}</div>
            <div class="fit-value">${escapeHtml(item?.value || "")}</div>
          </div>
        `
      )
      .join("");
  }

  const proofStrip = document.getElementById("proofStrip");
  if (proofStrip) {
    proofStrip.innerHTML = (Array.isArray(site?.proofMetrics) ? site.proofMetrics : [])
      .map(
        (item) => `
          <div class="proof-item">
            <div class="proof-value">${escapeHtml(item?.value || "")}</div>
            <div class="proof-label">${escapeHtml(item?.label || "")}</div>
          </div>
        `
      )
      .join("");
  }

  setText("credentialsEyebrow", credentials.eyebrow);
  setText("credentialsTitle", credentials.title);
  setText("credentialsSummary", credentials.summary);
  setText("credentialsLead", credentials.lead);

  const credentialsGrid = document.getElementById("credentialsGrid");
  if (credentialsGrid) {
    credentialsGrid.innerHTML = (Array.isArray(credentials?.items) ? credentials.items : [])
      .map(
        (item) => `
          <div class="credential-item">
            <div class="credential-label">${escapeHtml(item?.label || "")}</div>
            <div class="credential-value">${escapeHtml(item?.value || "")}</div>
          </div>
        `
      )
      .join("");
  }

  setText("skillsEyebrow", skills.eyebrow);
  setText("skillsTitle", skills.title);
  setText("skillsSummary", skills.summary);

  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = (Array.isArray(skills?.groups) ? skills.groups : [])
      .map(
        (group) => `
          <article class="skill-card">
            <div class="skill-meta">${escapeHtml(group?.meta || "")}</div>
            <h3>${escapeHtml(group?.title || "")}</h3>
            <div class="skill-list">
              ${(Array.isArray(group?.items) ? group.items : [])
                .map((item) => `<span>${escapeHtml(item)}</span>`)
                .join("")}
            </div>
          </article>
        `
      )
      .join("");
  }

  setText("contactEyebrow", contact.eyebrow);
  setText("contactTitle", contact.title);
  setText("contactSummary", contact.summary);

  const contactItems = document.getElementById("contactItems");
  if (contactItems) {
    contactItems.innerHTML = (Array.isArray(contact?.items) ? contact.items : [])
      .map((item) => {
        const href = toLinkHref(item?.href || "");
        const valueMarkup = href
          ? `<a href="${escapeHtml(href)}"${
              /^https?:/i.test(href) ? ' target="_blank" rel="noreferrer"' : ""
            }>${escapeHtml(item?.value || "")}</a>`
          : escapeHtml(item?.value || "");

        return `
          <div class="contact-item">
            <div class="contact-label">${escapeHtml(item?.label || "")}</div>
            <div class="contact-value">${valueMarkup}</div>
          </div>
        `;
      })
      .join("");
  }

  const contactLinks = document.getElementById("contactLinks");
  if (contactLinks) {
    contactLinks.innerHTML = renderButtons(contact.links, "ghost");
  }
};

const getStoredTheme = () => {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === "light" || value === "dark" ? value : "";
  } catch (_error) {
    return "";
  }
};

const updateThemeToggleLabel = (theme) => {
  if (!themeToggle) return;

  const isDark = theme === "dark";
  themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
};

const applyTheme = (theme, { persist = true } = {}) => {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  updateThemeToggleLabel(nextTheme);

  if (!persist) return;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch (_error) {
    // Ignore storage write failures.
  }
};

const initThemeToggle = () => {
  const initialTheme =
    getStoredTheme() ||
    (document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light");

  applyTheme(initialTheme, { persist: false });

  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
};

const normalizeMetric = (metric) => {
  if (typeof metric === "string") {
    return {
      value: metric,
      label: "",
    };
  }

  return {
    value: String(metric?.value || ""),
    label: String(metric?.label || ""),
  };
};

const normalizeCaseStudy = (caseStudy) => ({
  problem: String(caseStudy?.problem || ""),
  approach: String(caseStudy?.approach || ""),
  outcome: String(caseStudy?.outcome || ""),
});

const coerceConfig = (rawConfig) => {
  const github = {
    username: rawConfig?.github?.username || defaultConfig.github.username,
    perPage: Number(rawConfig?.github?.perPage) || defaultConfig.github.perPage,
    sort: rawConfig?.github?.sort || defaultConfig.github.sort,
    direction:
      rawConfig?.github?.direction ||
      rawConfig?.github?.order ||
      defaultConfig.github.direction,
    excludeForks: rawConfig?.github?.excludeForks !== false,
    excludeArchived: rawConfig?.github?.excludeArchived !== false,
  };

  const curation = {
    featured: Array.isArray(rawConfig?.curation?.featured)
      ? rawConfig.curation.featured
      : defaultConfig.curation.featured,
    research: Array.isArray(rawConfig?.curation?.research)
      ? rawConfig.curation.research
      : defaultConfig.curation.research,
    selected: Array.isArray(rawConfig?.curation?.selected)
      ? rawConfig.curation.selected
      : defaultConfig.curation.selected,
    hidden: Array.isArray(rawConfig?.curation?.hidden)
      ? rawConfig.curation.hidden
      : defaultConfig.curation.hidden,
  };

  const categoryTopics = {
    systems: Array.isArray(rawConfig?.categoryTopics?.systems)
      ? rawConfig.categoryTopics.systems
      : defaultConfig.categoryTopics.systems,
    data: Array.isArray(rawConfig?.categoryTopics?.data)
      ? rawConfig.categoryTopics.data
      : defaultConfig.categoryTopics.data,
  };

  const site = {
    hero: rawConfig?.site?.hero || defaultConfig.site.hero,
    fit: Array.isArray(rawConfig?.site?.fit)
      ? rawConfig.site.fit
      : defaultConfig.site.fit,
    proofMetrics: Array.isArray(rawConfig?.site?.proofMetrics)
      ? rawConfig.site.proofMetrics
      : defaultConfig.site.proofMetrics,
    credentials: rawConfig?.site?.credentials || defaultConfig.site.credentials,
    skills: rawConfig?.site?.skills || defaultConfig.site.skills,
    contact: rawConfig?.site?.contact || defaultConfig.site.contact,
  };

  const projectOverrides =
    rawConfig && typeof rawConfig.projectOverrides === "object"
      ? rawConfig.projectOverrides
      : defaultConfig.projectOverrides;

  return {
    github,
    curation,
    categoryTopics,
    site,
    projectOverrides,
  };
};

const loadConfig = async () => {
  try {
    if (window.PORTFOLIO_CONFIG) {
      return coerceConfig(window.PORTFOLIO_CONFIG);
    }

    const response = await fetch(CONFIG_URL, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Config fetch failed (${response.status})`);
    }

    const data = await response.json();
    return coerceConfig(data);
  } catch (_error) {
    return defaultConfig;
  }
};

const deriveCategories = (repo, config) => {
  const topics = Array.isArray(repo?.topics) ? repo.topics : [];
  const normalizedTopics = topics.map(normalizeTopic);
  const categories = [];

  const mlTopics = new Set(["machinelearning", "machine-learning", "ml", "gnn", "diffusion"].map(normalizeTopic));
  const quantTopics = new Set(["quant", "trading", "finance", "microstructure"].map(normalizeTopic));
  const systemsSet = new Set(config.categoryTopics.systems.map(normalizeTopic));
  const dataSet = new Set(config.categoryTopics.data.map(normalizeTopic));

  if (normalizedTopics.some((topic) => mlTopics.has(topic))) {
    categories.push("ml");
  }

  if (normalizedTopics.some((topic) => quantTopics.has(topic))) {
    categories.push("quant");
  }

  if (normalizedTopics.some((topic) => systemsSet.has(topic))) {
    categories.push("systems");
  }

  if (normalizedTopics.some((topic) => dataSet.has(topic))) {
    categories.push("data");
  }

  const language = String(repo?.language || "").toLowerCase();
  if (!categories.includes("systems") && ["c", "c++", "rust", "go"].includes(language)) {
    categories.push("systems");
  }

  if (!categories.includes("data") && ["r", "sql"].includes(language)) {
    categories.push("data");
  }

  return unique(categories);
};

const getFallbackStack = (repo) =>
  unique([repo?.language, ...(Array.isArray(repo?.topics) ? repo.topics : [])].filter(Boolean)).slice(
    0,
    5
  );

const normalizeLinks = (override, repo, username, name) => {
  const links = override?.links && typeof override.links === "object" ? override.links : {};
  const defaultRepoUrl =
    typeof repo?.html_url === "string"
      ? repo.html_url
      : username
        ? `https://github.com/${username}/${name}`
        : "";

  return {
    code:
      typeof links.code === "string"
        ? links.code
        : typeof override?.code === "string"
          ? override.code
          : defaultRepoUrl,
    demo:
      typeof links.demo === "string"
        ? links.demo
        : typeof override?.demo === "string"
          ? override.demo
          : typeof repo?.homepage === "string"
            ? repo.homepage
            : "",
    paper:
      typeof links.paper === "string"
        ? links.paper
        : "",
  };
};

const toProject = (name, config, repoMap) => {
  const repo = repoMap.get(name) || null;
  const override = config.projectOverrides[name] || {};
  const categories = Array.isArray(override.categories)
    ? unique(override.categories.map(normalizeTopic))
    : deriveCategories(repo, config);
  const stack = Array.isArray(override.stack)
    ? override.stack
    : Array.isArray(override.tags)
      ? override.tags
      : getFallbackStack(repo);
  const metrics = Array.isArray(override.metrics)
    ? override.metrics.map(normalizeMetric).filter((item) => item.value)
    : [];
  const links = normalizeLinks(override, repo, config.github.username, name);
  const caseStudy = normalizeCaseStudy(override.caseStudy || {});
  const year = override.year || getYearFromDate(repo?.pushed_at || repo?.updated_at);
  const headline =
    override.headline ||
    override.summary ||
    repo?.description ||
      "Project entry.";
  const summary =
    override.summary ||
    repo?.description ||
      "Project entry.";

  return {
    name,
    displayName: override.displayName || name,
    year,
    headline,
    summary,
    categories,
    stack,
    metrics,
    links,
    status: override.status || "",
    highlight: override.highlight || "",
    note: typeof override.note === "string" ? override.note : "",
    image:
      override?.image && typeof override.image === "object"
        ? {
            src: String(override.image.src || ""),
            alt: String(override.image.alt || ""),
            fit: String(override.image.fit || ""),
            caption: String(override.image.caption || ""),
          }
        : null,
    caseStudy,
  };
};

const buildProjectPayload = (config, repos = [], sourceMeta = {}) => {
  const repoMap = new Map(repos.map((repo) => [repo.name, repo]));
  const hidden = new Set((config.curation.hidden || []).map(String));

  const featuredNames = unique(config.curation.featured).filter((name) => !hidden.has(name));
  const researchNames = unique(config.curation.research)
    .filter((name) => !hidden.has(name))
    .filter((name) => !featuredNames.includes(name));
  const selectedNames = unique(config.curation.selected)
    .filter((name) => !hidden.has(name))
    .filter((name) => !featuredNames.includes(name))
    .filter((name) => !researchNames.includes(name));

  return {
    generatedAt: new Date().toISOString(),
    source: {
      mode: sourceMeta.source || "unknown",
      fetchedRepoCount: Array.isArray(repos) ? repos.length : 0,
    },
    featured: featuredNames.map((name) => toProject(name, config, repoMap)),
    research: researchNames.map((name) => toProject(name, config, repoMap)),
    projects: selectedNames.map((name) => toProject(name, config, repoMap)),
  };
};

const createMetricMarkup = (metrics) =>
  metrics
    .map(
      (metric) => `
        <div class="project-metric">
          <div class="metric-value">${escapeHtml(metric.value)}</div>
          <div class="metric-label">${escapeHtml(metric.label || "")}</div>
        </div>
      `
    )
    .join("");

const createCaseStudyRowsMarkup = (caseStudy = {}) => {
  const rows = [
    { label: "Problem", body: caseStudy.problem },
    { label: "Approach", body: caseStudy.approach },
    { label: "Outcome", body: caseStudy.outcome },
  ].filter((item) => item.body);

  return rows
    .map(
      (item) => `
        <div class="detail-row">
          <div class="detail-label">${escapeHtml(item.label)}</div>
          <div class="detail-body">${escapeHtml(item.body)}</div>
        </div>
      `
    )
    .join("");
};

const createProjectLinksMarkup = (links) => {
  const order = [
    { key: "code", label: "Code" },
    { key: "demo", label: "Demo" },
    { key: "paper", label: "Paper" },
  ];

  return order
    .map((item) => {
      const href = toSafeHttpUrl(links?.[item.key] || "");
      if (!href) return "";
      return `<a class="button subtle" href="${escapeHtml(
        href
      )}" target="_blank" rel="noreferrer">${escapeHtml(item.label)}</a>`;
    })
    .join("");
};

const createProjectImageMarkup = (image, title) => {
  const src = toSafeHttpUrl(image?.src || "") || String(image?.src || "");
  if (!src || /^(?:javascript|data):/i.test(src)) return "";

  const fit = image?.fit === "contain" ? "contain" : "cover";
  const alt = image?.alt || `${title || "Project"} preview`;
  const caption = String(image?.caption || "");

  return `
    <figure class="project-visual project-visual--${fit}">
      <img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}" loading="lazy" />
      ${caption ? `<figcaption>${escapeHtml(caption)}</figcaption>` : ""}
    </figure>
  `;
};

const createProjectCard = (project, isFeatured = false) => {
  const categories = Array.isArray(project?.categories)
    ? project.categories.map(normalizeTopic).filter(Boolean)
    : [];
  const stack = Array.isArray(project?.stack) ? project.stack : [];
  const metrics = Array.isArray(project?.metrics) ? project.metrics : [];
  const links = project?.links || {};
  const caseStudy = project?.caseStudy || {};
  const hasCaseStudy = Boolean(caseStudy.problem || caseStudy.approach || caseStudy.outcome);
  const caseStudyRowsMarkup = createCaseStudyRowsMarkup(caseStudy);
  const projectTitle = project?.displayName || project?.name || "Untitled";
  const detailsMarkup = hasCaseStudy
    ? `<div class="project-details">${caseStudyRowsMarkup}</div>`
    : "";

  const caseStudyId = `case-${escapeHtml(
    String(project?.name || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
  )}`;

  const projectTitleHref = toSafeHttpUrl(links.code || "");
  const titleMarkup = projectTitleHref
    ? `<a class="project-title" href="${escapeHtml(
        projectTitleHref
      )}" target="_blank" rel="noreferrer">${escapeHtml(projectTitle)}</a>`
    : `<div class="project-title">${escapeHtml(projectTitle)}</div>`;

  const toggleMarkup =
    hasCaseStudy
      ? `<button class="case-toggle" type="button" aria-expanded="false" aria-controls="${caseStudyId}">View case study</button>`
      : "";
  const toggledMarkup =
    hasCaseStudy
      ? `<div class="project-details" id="${caseStudyId}" hidden>${caseStudyRowsMarkup}</div>`
      : "";
  const noteMarkup = project?.note
    ? `<p class="project-note">${escapeHtml(project.note)}</p>`
    : "";
  const imageMarkup = createProjectImageMarkup(project?.image, projectTitle);

  return `
    <article class="project-card${isFeatured ? " featured" : ""}" data-categories="${categories.join(",")}">
      ${imageMarkup}
      <div class="project-body">
        <div class="project-header">
          <div>
            <div class="project-overline">${escapeHtml(project?.highlight || (isFeatured ? "Featured" : "Additional"))}</div>
            ${titleMarkup}
          </div>
          <div class="project-meta">
            ${
              project?.status
                ? `<div class="status-badge">${escapeHtml(project.status)}</div>`
                : ""
            }
            <div class="project-year">${escapeHtml(project?.year || "")}</div>
          </div>
        </div>
        <div class="project-headline">${escapeHtml(project?.headline || "")}</div>
        <p class="project-summary">${escapeHtml(project?.summary || "")}</p>
        ${noteMarkup}
        ${metrics.length ? `<div class="project-metrics">${createMetricMarkup(metrics)}</div>` : ""}
        ${toggleMarkup}
        ${toggledMarkup}
        ${
          stack.length
            ? `<div class="project-stack">${stack
                .map((item) => `<span>${escapeHtml(item)}</span>`)
                .join("")}</div>`
            : ""
        }
        <div class="project-links">${createProjectLinksMarkup(links)}</div>
      </div>
    </article>
  `;
};

const getProjectCards = () =>
  Array.from(document.querySelectorAll(".project-card")).filter(
    (card) => !card.classList.contains("empty")
  );

const cardCategories = (card) =>
  String(card?.dataset?.categories || "")
    .split(",")
    .map(normalizeTopic)
    .filter(Boolean);

const applyProjectFilter = (filterKey = "all") => {
  activeProjectFilter = filterKey;
  const cards = getProjectCards();

  let visibleCount = 0;
  cards.forEach((card) => {
    const categories = cardCategories(card);
    const shouldShow = filterKey === "all" || categories.includes(filterKey);
    card.hidden = !shouldShow;
    if (shouldShow) {
      visibleCount += 1;
    }
  });

  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === filterKey);
    chip.setAttribute(
      "aria-pressed",
      chip.dataset.filter === filterKey ? "true" : "false"
    );
  });

  if (featuredGrid && featuredBlock) {
    featuredBlock.hidden = !featuredGrid.querySelector(".project-card:not([hidden])");
  }

  if (researchGrid && researchBlock) {
    researchBlock.hidden = !researchGrid.querySelector(".project-card:not([hidden])");
  }

  if (projectsGrid && projectsBlock) {
    projectsBlock.hidden = !projectsGrid.querySelector(".project-card:not([hidden])");
  }

  if (filterKey === "all") {
    setStatus(baseStatusMessage, { persist: false });
  } else {
    const selectedFilter =
      filterDefinitions.find((item) => item.key === filterKey)?.label ||
      filterKey.toUpperCase();
    const prefix = baseStatusMessage ? `${baseStatusMessage} ` : "";
    setStatus(
      `${prefix}Showing ${visibleCount} ${
        visibleCount === 1 ? "project" : "projects"
      } in ${selectedFilter}.`,
      { persist: false }
    );
  }
};

const renderProjectFilters = () => {
  if (!projectFilters) return;

  const availableCategories = new Set();
  getProjectCards().forEach((card) => {
    cardCategories(card).forEach((category) => availableCategories.add(category));
  });

  const filtersToRender = filterDefinitions.filter(
    (item) => item.key === "all" || availableCategories.has(item.key)
  );

  if (filtersToRender.length <= 1) {
    projectFilters.hidden = true;
    projectFilters.innerHTML = "";
    return;
  }

  projectFilters.hidden = false;
  projectFilters.innerHTML = filtersToRender
    .map(
      (item) =>
        `<button type="button" class="filter-chip${
          item.key === activeProjectFilter ? " is-active" : ""
        }" data-filter="${item.key}" aria-pressed="${
          item.key === activeProjectFilter ? "true" : "false"
        }">${item.label}</button>`
    )
    .join("");

  projectFilters.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const filterKey = chip.dataset.filter || "all";
      applyProjectFilter(filterKey);
    });
  });
};

const wireCaseStudyToggles = () => {
  document.querySelectorAll(".case-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const panelId = button.getAttribute("aria-controls");
      if (!panelId) return;

      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const nextExpanded = !isExpanded;
      button.setAttribute("aria-expanded", String(nextExpanded));
      button.textContent = nextExpanded ? "Hide case study" : "View case study";
      panel.hidden = !nextExpanded;
    });
  });
};

const setupProjectInteractions = () => {
  activeProjectFilter = "all";
  renderProjectFilters();
  wireCaseStudyToggles();
  applyProjectFilter("all");

  [featuredGrid, researchGrid, projectsGrid].forEach((grid) => {
    if (grid) {
      revealElements(grid.querySelectorAll(".project-card"), { stagger: 70 });
    }
  });
};

const renderEmptyState = (message) => {
  if (featuredGrid) {
    featuredGrid.innerHTML = "";
  }

  if (researchGrid) {
    researchGrid.innerHTML = "";
  }

  if (projectsGrid) {
    projectsGrid.innerHTML = `
      <article class="project-card empty">
        <p>${escapeHtml(message)}</p>
      </article>
    `;
  }

  if (featuredBlock) {
    featuredBlock.hidden = true;
  }

  if (researchBlock) {
    researchBlock.hidden = true;
  }

  if (projectsBlock) {
    projectsBlock.hidden = false;
  }

  if (projectFilters) {
    projectFilters.hidden = true;
    projectFilters.innerHTML = "";
  }
};

const renderProjects = ({ featured = [], research = [], projects = [] }) => {
  const total = featured.length + research.length + projects.length;

  if (!total) {
    renderEmptyState("No projects to show yet — check back soon.");
    setStatus("");
    return;
  }

  if (featuredGrid) {
    featuredGrid.innerHTML = featured.map((project) => createProjectCard(project, true)).join("");
  }

  if (researchGrid) {
    researchGrid.innerHTML = research.map((project) => createProjectCard(project)).join("");
  }

  if (projectsGrid) {
    projectsGrid.innerHTML = projects.map((project) => createProjectCard(project)).join("");
  }

  if (featuredBlock) {
    featuredBlock.hidden = !featured.length;
  }

  if (researchBlock) {
    researchBlock.hidden = !research.length;
  }

  if (projectsBlock) {
    projectsBlock.hidden = !projects.length;
  }

  setupProjectInteractions();
};

const sortByUpdatedDesc = (repos) =>
  [...repos].sort((a, b) => {
    const aTime = new Date(a?.pushed_at || a?.updated_at || 0).getTime();
    const bTime = new Date(b?.pushed_at || b?.updated_at || 0).getTime();
    return bTime - aTime;
  });

const loadSnapshot = async () => {
  if (window.PORTFOLIO_PROJECTS) {
    const inlinePayload = window.PORTFOLIO_PROJECTS;
    if (
      Array.isArray(inlinePayload?.featured) &&
      Array.isArray(inlinePayload?.projects)
    ) {
      return inlinePayload;
    }
  }

  const response = await fetch(DATA_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Snapshot fetch failed (${response.status})`);
  }

  const payload = await response.json();
  if (!Array.isArray(payload?.featured) || !Array.isArray(payload?.projects)) {
    throw new Error("Snapshot format is invalid.");
  }

  return payload;
};

const fetchLiveProjects = async (config) => {
  if (!config.github.username) {
    throw new Error("GitHub username is missing in configuration.");
  }

  const url = `https://api.github.com/users/${encodeURIComponent(
    config.github.username
  )}/repos?sort=${encodeURIComponent(config.github.sort)}&direction=${encodeURIComponent(
    config.github.direction
  )}&per_page=${encodeURIComponent(config.github.perPage)}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos = sortByUpdatedDesc(await response.json()).filter((repo) => {
    if (config.github.excludeForks && repo?.fork) return false;
    if (config.github.excludeArchived && repo?.archived) return false;
    return true;
  });

  return buildProjectPayload(config, repos, {
    source: "github-api-live",
  });
};

const typeHeadline = () => {
  const headline = document.getElementById("heroHeadline");
  if (!headline) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const fullText = headline.dataset.text || headline.textContent || "";
  if (!fullText) return;

  headline.textContent = "";
  headline.classList.add("is-typing");
  let index = 0;

  const tick = () => {
    headline.textContent += fullText.charAt(index);
    index += 1;

    if (index < fullText.length) {
      setTimeout(tick, 24);
    } else {
      headline.classList.remove("is-typing");
    }
  };

  setTimeout(tick, 220);
};

let revealObserver = null;

const getRevealObserver = () => {
  if (typeof IntersectionObserver === "undefined") return null;
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return null;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
  }

  return revealObserver;
};

const revealElements = (elements, { stagger = 0 } = {}) => {
  const observer = getRevealObserver();
  const list = Array.from(elements || []);
  if (!observer) return;

  list.forEach((element, index) => {
    if (stagger) {
      element.style.transitionDelay = `${Math.min(index, 6) * stagger}ms`;
    }
    element.classList.add("reveal");
    observer.observe(element);
  });
};

const setupNavToggle = () => {
  const nav = document.querySelector(".nav");
  const toggle = document.getElementById("navToggle");
  if (!nav || !toggle) return;

  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
  };

  toggle.addEventListener("click", () => {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after picking a destination.
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
};

const setupScrollSpy = () => {
  const navLinks = Array.from(
    document.querySelectorAll('.nav-links a[href^="#"]')
  );
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const setActiveLink = (activeId) => {
    navLinks.forEach((link) => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      const isActive = id === activeId;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  if (typeof IntersectionObserver !== "undefined") {
    const visibleRatios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleRatios.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleRatios.delete(entry.target.id);
          }
        });

        if (!visibleRatios.size) return;

        const [activeId] = [...visibleRatios.entries()].sort(
          (a, b) => b[1] - a[1]
        )[0];
        setActiveLink(activeId);
      },
      {
        rootMargin: "-28% 0px -54% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const hashId = window.location.hash.replace("#", "");
  if (hashId) {
    setActiveLink(hashId);
  } else {
    setActiveLink(sections[0].id);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const id = (link.getAttribute("href") || "").replace("#", "");
      if (id) {
        setActiveLink(id);
      }
    });
  });
};

const init = async () => {
  const config = await loadConfig();
  renderSite(config.site);
  typeHeadline();

  initThemeToggle();
  setupNavToggle();
  setupScrollSpy();

  revealElements(document.querySelectorAll(".proof-strip, .signal-panel"));
  revealElements(document.querySelectorAll(".section-header"));
  revealElements(
    document.querySelectorAll(".credentials-card--lead, .credential-item"),
    { stagger: 60 }
  );
  revealElements(document.querySelectorAll(".skill-card"), { stagger: 60 });
  revealElements(document.querySelectorAll(".contact-card"));

  setStatus("Loading projects…");

  try {
    const snapshot = await loadSnapshot();
    const featured = Array.isArray(snapshot.featured) ? snapshot.featured : [];
    const research = Array.isArray(snapshot.research) ? snapshot.research : [];
    const projects = Array.isArray(snapshot.projects) ? snapshot.projects : [];

    if (featured.length || research.length || projects.length) {
      renderProjects({ featured, research, projects });
      setStatus("");
      return;
    }
  } catch (_error) {
    // Continue to live GitHub fallback.
  }

  try {
    setStatus("Loading projects…");
    const livePayload = await fetchLiveProjects(config);
    renderProjects(livePayload);
    setStatus("");
  } catch (error) {
    renderEmptyState(
      "Projects couldn't be loaded right now. Please try again shortly, or browse my work on GitHub."
    );
    setStatus("");
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

init();
