/*
  Simple bilingual content manager for AÇÚCAR 37.
  Add future translations by extending the translations object with new keys.
*/
const translations = {
  pt: {
    pageTitle: "AÇÚCAR 37 — Cooperativa de Atividades Culturais",
    metaDescription: "AÇÚCAR 37 é uma cooperativa cultural sem fins lucrativos em Lisboa, dedicada à programação cultural, criação artística e desenvolvimento comunitário.",
    ogDescription: "Cooperativa cultural portuguesa sem fins lucrativos sediada em Lisboa.",
    skipLink: "Saltar para o conteúdo principal",
    menuToggle: "Abrir ou fechar menu de navegação",
    navAbout: "Sobre",
    navMission: "Missão",
    navInstitutional: "Informação",
    navTransparency: "Transparência",
    navContact: "Contactos",
    heroEyebrow: "Cooperativa cultural sem fins lucrativos · Lisboa",
    heroTitle: "AÇÚCAR 37",
    heroSubtitle: "Cooperativa de Atividades Culturais",
    heroText: "A Açúcar 37 é uma cooperativa cultural sem fins lucrativos sediada em Lisboa, dedicada à programação, criação, acolhimento e desenvolvimento de projectos artísticos e culturais.",
    heroButton: "Contactar",
    heroCardTitle: "Entidade cultural sem fins lucrativos",
    labelTaxShort: "NIF",
    labelLocationShort: "Localização",
    locationLisbon: "Lisboa, Portugal",
    labelSector: "Sector",
    sectorCulture: "Cultura",
    aboutLabel: "Sobre",
    aboutTitle: "Sobre a Cooperativa",
    aboutTextOne: "A Cooperativa tem por objecto principal a gestão e programação cultural do espaço sito na Rua do Açúcar, 37, em Lisboa, através de produções próprias e produções de entidades terceiras.",
    aboutTextTwo: "Promove, organiza, apoia e executa actividades culturais, socioculturais, artísticas e educativas, incluindo música, teatro, dança, cinema, artes visuais, literatura, audiovisual, cultura popular e património cultural.",
    missionLabel: "Missão",
    missionTitle: "Cultura, criação e comunidade",
    missionIntro: "A AÇÚCAR 37 trabalha para tornar a criação artística mais acessível, colaborativa e presente na vida cultural de Lisboa.",
    missionCardOneTitle: "Criação Artística",
    missionCardOneText: "Apoio à criação, produção e apresentação de projectos artísticos contemporâneos, com atenção à experimentação e à diversidade de linguagens.",
    missionCardTwoTitle: "Programação Cultural",
    missionCardTwoText: "Desenvolvimento de uma programação cultural regular, independente e plural, através de produções próprias e colaborações institucionais.",
    missionCardThreeTitle: "Desenvolvimento Comunitário",
    missionCardThreeText: "Promoção de actividades educativas, socioculturais e comunitárias que reforçam a participação pública e o acesso à cultura.",
    institutionalLabel: "Informação Institucional",
    institutionalTitle: "Dados legais e administrativos",
    institutionalNote: "Informação apresentada de forma clara para processos de validação institucional e programas internacionais de apoio a organizações sem fins lucrativos.",
    legalNameLabel: "Denominação",
    taxLabel: "NIF",
    legalFormLabel: "Natureza Jurídica",
    legalFormValue: "Cooperativa Cultural sem fins lucrativos",
    sectorLabel: "Sector",
    addressLabel: "Morada",
    transparencyLabel: "Transparência",
    transparencyTitle: "Compromisso institucional",
    transparencyText: "A Açúcar 37 é uma cooperativa cultural portuguesa sem fins lucrativos, constituída ao abrigo da legislação cooperativa nacional. A organização desenvolve actividades culturais, artísticas, educativas e comunitárias orientadas para a promoção da cultura e do acesso à criação artística.",
    docStatutesTitle: "Estatutos",
    docStatutesText: "Área preparada para publicação dos estatutos e documentos legais da Cooperativa.",
    docReportsTitle: "Relatório de Actividades",
    docReportsText: "Espaço reservado a relatórios de actividade, programação cultural e impacto comunitário.",
    docInstitutionalTitle: "Documentação Institucional",
    docInstitutionalText: "Secção destinada a certificados, declarações e outros documentos institucionais relevantes.",
    docStatus: "Disponibilização em preparação",
    contactLabel: "Contactos",
    contactTitle: "Fale connosco",
    contactIntro: "Para assuntos institucionais, programação cultural, parcerias ou documentação, contacte a cooperativa através do email oficial.",
    footerTax: "NIF"
  },
  en: {
    pageTitle: "AÇÚCAR 37 — Cultural Activities Cooperative",
    metaDescription: "AÇÚCAR 37 is a non-profit cultural cooperative in Lisbon, dedicated to cultural programming, artistic creation and community development.",
    ogDescription: "Portuguese non-profit cultural cooperative based in Lisbon.",
    skipLink: "Skip to main content",
    menuToggle: "Open or close navigation menu",
    navAbout: "About",
    navMission: "Mission",
    navInstitutional: "Information",
    navTransparency: "Transparency",
    navContact: "Contact",
    heroEyebrow: "Non-profit cultural cooperative · Lisbon",
    heroTitle: "AÇÚCAR 37",
    heroSubtitle: "Cultural Activities Cooperative",
    heroText: "Açúcar 37 is a non-profit cultural cooperative based in Lisbon, dedicated to cultural programming, artistic creation, hosting and development of cultural projects.",
    heroButton: "Contact",
    heroCardTitle: "Non-profit cultural organisation",
    labelTaxShort: "Tax No.",
    labelLocationShort: "Location",
    locationLisbon: "Lisbon, Portugal",
    labelSector: "Sector",
    sectorCulture: "Culture",
    aboutLabel: "About",
    aboutTitle: "About the Cooperative",
    aboutTextOne: "The Cooperative's primary purpose is the management and cultural programming of the venue located at Rua do Açúcar 37, Lisbon, through its own productions and collaborations with third-party organisations.",
    aboutTextTwo: "It promotes, organises, supports and develops cultural, social, artistic and educational activities, including music, theatre, dance, cinema, visual arts, literature, audiovisual projects, popular culture and cultural heritage.",
    missionLabel: "Mission",
    missionTitle: "Culture, creation and community",
    missionIntro: "AÇÚCAR 37 works to make artistic creation more accessible, collaborative and present in Lisbon's cultural life.",
    missionCardOneTitle: "Artistic Creation",
    missionCardOneText: "Support for the creation, production and presentation of contemporary artistic projects, with attention to experimentation and diverse artistic languages.",
    missionCardTwoTitle: "Cultural Programming",
    missionCardTwoText: "Development of regular, independent and plural cultural programming through in-house productions and institutional collaborations.",
    missionCardThreeTitle: "Community Development",
    missionCardThreeText: "Promotion of educational, social and community activities that strengthen public participation and access to culture.",
    institutionalLabel: "Institutional Information",
    institutionalTitle: "Legal and administrative details",
    institutionalNote: "Information presented clearly for institutional validation processes and international programmes supporting non-profit organisations.",
    legalNameLabel: "Legal Name",
    taxLabel: "Tax Number",
    legalFormLabel: "Legal Form",
    legalFormValue: "Non-profit Cultural Cooperative",
    sectorLabel: "Sector",
    addressLabel: "Address",
    transparencyLabel: "Transparency",
    transparencyTitle: "Institutional commitment",
    transparencyText: "Açúcar 37 is a Portuguese non-profit cultural cooperative established under Portuguese cooperative law. The organisation develops cultural, artistic, educational and community activities aimed at promoting culture and access to artistic creation.",
    docStatutesTitle: "Statutes",
    docStatutesText: "Area prepared for publishing the Cooperative's statutes and legal documents.",
    docReportsTitle: "Activity Reports",
    docReportsText: "Space reserved for activity reports, cultural programming and community impact information.",
    docInstitutionalTitle: "Institutional Documents",
    docInstitutionalText: "Section for certificates, statements and other relevant institutional documents.",
    docStatus: "Publication in preparation",
    contactLabel: "Contact",
    contactTitle: "Get in touch",
    contactIntro: "For institutional matters, cultural programming, partnerships or documentation, contact the cooperative through the official email address.",
    footerTax: "Tax No."
  }
};

const elements = {
  year: document.querySelector("#current-year"),
  langButtons: document.querySelectorAll(".lang-btn"),
  menuToggle: document.querySelector(".menu-toggle"),
  nav: document.querySelector(".main-nav")
};

function setMeta(name, content, attribute = "name") {
  const tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) tag.setAttribute("content", content);
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.pt;
  document.documentElement.lang = language === "en" ? "en" : "pt-PT";
  document.title = dictionary.pageTitle;

  setMeta("description", dictionary.metaDescription);
  setMeta("og:title", dictionary.pageTitle, "property");
  setMeta("og:description", dictionary.ogDescription, "property");
  setMeta("og:locale", language === "en" ? "en_US" : "pt_PT", "property");
  setMeta("twitter:title", dictionary.pageTitle);
  setMeta("twitter:description", dictionary.ogDescription);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((node) => {
    const key = node.getAttribute("data-i18n-aria-label");
    if (dictionary[key]) node.setAttribute("aria-label", dictionary[key]);
  });

  elements.langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("acucar37-language", language);
}

function closeMenu() {
  elements.nav.classList.remove("is-open");
  elements.menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
}

function initNavigation() {
  elements.menuToggle.addEventListener("click", () => {
    const isOpen = elements.nav.classList.toggle("is-open");
    elements.menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });

  elements.nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function initLanguageSwitcher() {
  elements.langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });

  const urlLanguage = new URLSearchParams(window.location.search).get("lang");
  const storedLanguage = localStorage.getItem("acucar37-language");
  const initialLanguage = urlLanguage === "en" || storedLanguage === "en" ? "en" : "pt";
  setLanguage(initialLanguage);
}

function initYear() {
  elements.year.textContent = new Date().getFullYear();
}

initYear();
initNavigation();
initLanguageSwitcher();
