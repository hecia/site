export const languages = {
  fr: "Fran\u00e7ais",
  en: "English",
} as const

export const defaultLang = "fr"
export const showDefaultLang = false

export const ui = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.events": "\u00c9v\u00e9nements",
    "nav.projects": "Projets",
    "nav.blog": "Blog",
    "nav.news": "Actualit\u00e9s",
    "nav.gallery": "Galerie",
    "nav.menu": "Menu",

    // Layout
    "layout.title": "HEC IA - Association \u00c9tudiante",
    "layout.description":
      "L'association \u00e9tudiante de HEC Paris d\u00e9di\u00e9e \u00e0 l'intelligence artificielle.",
    "layout.footer.rights": "Tous droits r\u00e9serv\u00e9s.",

    // Home - Hero
    "home.title": "HEC IA - Accueil",
    "home.hero.subtitle":
      "Nous sommes l'association \u00e9tudiante d\u00e9di\u00e9e \u00e0 la d\u00e9mocratisation, l'apprentissage et l'application de l'IA dans le monde des affaires.",
    "home.hero.cta.events": "Nos \u00c9v\u00e9nements",
    "home.hero.cta.projects": "D\u00e9couvrir nos Projets",
    "home.hero.suffix": "\u00e0",

    // Home - Bureau
    "home.bureau.title": "Le Bureau",
    "home.bureau.subtitle":
      "Les membres qui font vivre l'association au quotidien.",
    "bureau.role.coPresident": "Co-Président",
    "bureau.role.secretaryGeneral": "Secrétaire Général",
    "bureau.role.treasurer": "Trésorière",
    "bureau.role.vicePresident": "Vice-Président : HEC IA Intelligence",

    // Home - Sections
    "home.events.title": "\u00c9v\u00e9nements \u00e0 venir",
    "home.events.seeAll": "Voir tout",
    "home.projects.title": "Projets en vedette",
    "home.projects.seeAll": "Voir tout",
    "home.blog.title": "Derniers articles",
    "home.blog.seeAll": "Voir tout",
    "home.news.title": "Actualit\u00e9s",
    "home.news.seeAll": "Voir tout",
    "home.join.title": "Rejoignez-nous",
    "home.join.subtitle":
      "Suivez nos activit\u00e9s et rejoignez la communaut\u00e9 HEC IA.",

    // Events page
    "events.title": "\u00c9v\u00e9nements",
    "events.pageTitle": "\u00c9v\u00e9nements | HEC IA",
    "events.description":
      "D\u00e9couvrez nos prochains \u00e9v\u00e9nements, ateliers et conf\u00e9rences sur l'IA.",
    "events.subtitle":
      "Ateliers, conf\u00e9rences, et rencontres pour explorer l'intelligence artificielle.",
    "events.upcoming": "\u00c0 venir",
    "events.past": "Pass\u00e9s",
    "events.none":
      "Aucun \u00e9v\u00e9nement \u00e0 venir pour le moment. Restez \u00e0 l'aff\u00fbt !",
    "events.online": "En ligne",
    "events.register": "S'inscrire \u00e0 l'\u00e9v\u00e9nement",

    // Projects page
    "projects.title": "Projets",
    "projects.pageTitle": "Projets | HEC IA",
    "projects.description":
      "D\u00e9couvrez les projets d'intelligence artificielle r\u00e9alis\u00e9s par les membres de HEC IA.",
    "projects.subtitle":
      "D\u00e9couvrez les initiatives et projets techniques r\u00e9alis\u00e9s par nos membres.",
    "projects.status.active": "En cours",
    "projects.status.completed": "Termin\u00e9",
    "projects.status.archived": "Archiv\u00e9",
    "projects.startedOn": "D\u00e9marr\u00e9 le",
    "projects.team": "\u00c9quipe",
    "projects.sourceCode": "Code Source",
    "projects.viewDemo": "Voir la D\u00e9mo",

    // Blog page
    "blog.title": "Blog",
    "blog.pageTitle": "Blog | HEC IA",
    "blog.description":
      "Articles et r\u00e9flexions sur l'intelligence artificielle par les membres de HEC IA.",
    "blog.subtitle":
      "Articles, tutoriels et r\u00e9flexions sur l'intelligence artificielle par notre communaut\u00e9.",
    "blog.by": "Par",

    // News page
    "news.title": "Actualit\u00e9s",
    "news.pageTitle": "Actualit\u00e9s | HEC IA",
    "news.description":
      "Les derni\u00e8res actualit\u00e9s de l'association HEC IA et du monde de l'intelligence artificielle.",
    "news.subtitle":
      "Restez inform\u00e9 des derni\u00e8res nouvelles de l'association et de l'industrie.",
    "news.source": "Source :",
    "news.category.association": "Association",
    "news.category.ai": "IA",
    "news.category.industry": "Industrie",
    "news.category.academic": "Académique",

    // Gallery page
    "gallery.title": "Galerie",
    "gallery.pageTitle": "Galerie | HEC IA",
    "gallery.description":
      "Photos et images de la vie de l'association HEC IA.",
    "gallery.subtitle":
      "Retour en images sur nos \u00e9v\u00e9nements, projets et moments forts de l'association.",
    "gallery.noImages": "Aucune image pour le moment",
    "gallery.noImagesSub":
      "Revenez bient\u00f4t pour d\u00e9couvrir nos photos.",
    "gallery.imageToAdd": "Image \u00e0 ajouter",
    "gallery.category.\u00e9v\u00e9nements": "\u00c9v\u00e9nements",
    "gallery.category.projets": "Projets",
    "gallery.category.vie-associative": "Vie associative",
    "gallery.category.autre": "Autre",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.events": "Events",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.news": "News",
    "nav.gallery": "Gallery",
    "nav.menu": "Menu",

    // Layout
    "layout.title": "HEC IA - Student Association",
    "layout.description":
      "The HEC Paris student association dedicated to artificial intelligence.",
    "layout.footer.rights": "All rights reserved.",

    // Home - Hero
    "home.title": "HEC IA - Home",
    "home.hero.subtitle":
      "We are the student association dedicated to democratizing, learning and applying AI in the business world.",
    "home.hero.cta.events": "Our Events",
    "home.hero.cta.projects": "Discover our Projects",
    "home.hero.suffix": "at",

    // Home - Bureau
    "home.bureau.title": "The Board",
    "home.bureau.subtitle":
      "The members who bring the association to life every day.",
    "bureau.role.coPresident": "Co-President",
    "bureau.role.secretaryGeneral": "Secretary General",
    "bureau.role.treasurer": "Treasurer",
    "bureau.role.vicePresident": "Vice-President: HEC IA Intelligence",

    // Home - Sections
    "home.events.title": "Upcoming Events",
    "home.events.seeAll": "See all",
    "home.projects.title": "Featured Projects",
    "home.projects.seeAll": "See all",
    "home.blog.title": "Latest Articles",
    "home.blog.seeAll": "See all",
    "home.news.title": "News",
    "home.news.seeAll": "See all",
    "home.join.title": "Join Us",
    "home.join.subtitle":
      "Follow our activities and join the HEC IA community.",

    // Events page
    "events.title": "Events",
    "events.pageTitle": "Events | HEC IA",
    "events.description":
      "Discover our upcoming events, workshops and conferences on AI.",
    "events.subtitle":
      "Workshops, conferences, and meetups to explore artificial intelligence.",
    "events.upcoming": "Upcoming",
    "events.past": "Past",
    "events.none": "No upcoming events at the moment. Stay tuned!",
    "events.online": "Online",
    "events.register": "Register for the event",

    // Projects page
    "projects.title": "Projects",
    "projects.pageTitle": "Projects | HEC IA",
    "projects.description": "Discover AI projects built by HEC IA members.",
    "projects.subtitle":
      "Discover the initiatives and technical projects built by our members.",
    "projects.status.active": "Active",
    "projects.status.completed": "Completed",
    "projects.status.archived": "Archived",
    "projects.startedOn": "Started on",
    "projects.team": "Team",
    "projects.sourceCode": "Source Code",
    "projects.viewDemo": "View Demo",

    // Blog page
    "blog.title": "Blog",
    "blog.pageTitle": "Blog | HEC IA",
    "blog.description":
      "Articles and insights on artificial intelligence by HEC IA members.",
    "blog.subtitle":
      "Articles, tutorials and insights on artificial intelligence by our community.",
    "blog.by": "By",

    // News page
    "news.title": "News",
    "news.pageTitle": "News | HEC IA",
    "news.description":
      "The latest news from HEC IA and the world of artificial intelligence.",
    "news.subtitle":
      "Stay informed about the latest news from the association and the industry.",
    "news.source": "Source:",
    "news.category.association": "Association",
    "news.category.ai": "AI",
    "news.category.industry": "Industry",
    "news.category.academic": "Academic",

    // Gallery page
    "gallery.title": "Gallery",
    "gallery.pageTitle": "Gallery | HEC IA",
    "gallery.description": "Photos and images from the life of HEC IA.",
    "gallery.subtitle":
      "A look back in pictures at our events, projects and highlights.",
    "gallery.noImages": "No images yet",
    "gallery.noImagesSub": "Come back soon to see our photos.",
    "gallery.imageToAdd": "Image to add",
    "gallery.category.\u00e9v\u00e9nements": "Events",
    "gallery.category.projets": "Projects",
    "gallery.category.vie-associative": "Community Life",
    "gallery.category.autre": "Other",
  },
} as const

export type UiKey = keyof (typeof ui)[typeof defaultLang]
