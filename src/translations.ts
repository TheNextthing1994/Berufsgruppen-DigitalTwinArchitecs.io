export type Language = 'de' | 'ru';

export interface TranslationType {
  nav: {
    start: string;
    consulting: string;
    automation: string;
    chatbot: string;
    pricing: string;
    faq: string;
    strategy: string;
  };
  hero: {
    title1: string;
    rotatingWords: string[];
    subtitle: string;
    cta1: string;
    cta2: string;
    trustMarkers: string[];
  };
  targetGroups: string[];
  industrySolutions: Record<string, string[]>;
  digitalTwin: {
    title: string;
    subtitle: string;
    description: string;
    features: { title: string; desc: string }[];
  };
  chat: {
    placeholder: string;
    send: string;
    close: string;
    cta: string;
    systemPrompt: string;
    initialMessage: string;
  };
  caseStudies: {
    title: string;
    subtitle: string;
    badge: string;
    details: string;
    missingTitle: string;
    missingDesc: string;
    missingCta: string;
    units: Record<string, { title: string; desc: string }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: { name: string; role: string; text: string; audioLength: string }[];
  };
  methodology: {
    title: string;
    highlight: string;
    subtitle: string;
    steps: { title: string; desc: string }[];
  };
  footer: {
    ctaTitle: string;
    ctaHighlight: string;
    ctaDesc: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      send: string;
    };
    links: {
      imprint: string;
      privacy: string;
    };
    automationTasks: string[];
  };
  roi: {
    title: string;
    subtitle: string;
    cards: {
      title: string;
      desc: string;
      impact: string;
    }[];
  };
  radar: {
    title: string;
    labels: Record<string, string>;
    details: Record<string, string>;
    potential: string;
    usage: string;
    analysis: string;
    deepAnalysis: string;
    source: string;
  };
  quiz: {
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    step: string;
    next: string;
    back: string;
    send: string;
    questions: {
      goal: {
        title: string;
        options: Record<string, string>;
      };
      size: {
        title: string;
        options: Record<string, string>;
      };
      timing: {
        title: string;
        options: Record<string, string>;
      };
      budget: {
        title: string;
        options: Record<string, string>;
      };
      contact: {
        title: string;
        subtitle: string;
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        company: string;
        companyPlaceholder: string;
        phone: string;
        phonePlaceholder: string;
        cta: string;
      };
    };
  };
}

export const translations: Record<Language, TranslationType> = {
  de: {
    nav: {
      start: 'Start',
      consulting: 'KI-Beratung',
      automation: 'Automatisierung',
      chatbot: 'Chatbot',
      pricing: 'Preise',
      faq: 'FAQ',
      strategy: 'Potenzial-Check'
    },
    hero: {
      title1: 'Wir machen Ihren Betrieb',
      rotatingWords: ['zukunftssicher.', 'skalierbar.', 'wettbewerbsfähig.', 'effizient.'],
      subtitle: 'Ihr Team für intelligente Automatisierung. Wir verwandeln Ihre täglichen Abläufe in digitale Mitarbeiter, die 24/7 für Sie arbeiten. Ach ja, und ganz "nebenbei" bauen wir auch noch super Apps und setzen Websites auf – falls Ihnen KI allein zu wenig ist.',
      cta1: 'Potenzial-Check starten',
      cta2: "So funktioniert's",
      trustMarkers: [
        'Proof-of-Concept in 5 Tagen',
        'ISO 27001',
        'DSGVO-konform'
      ]
    },
    targetGroups: [
      'Hautärzte', 'Frisöre', 'Online Shop Owner', 'Elektriker', 'Büromitarbeiter',
      'Immobilienmakler', 'Logistikleiter', 'Praxispersonal', 'E-Commerce Manager',
      'Handwerksmeister', 'Finanzberater', 'Kundenbetreuer', 'Projektleiter',
      'Vertriebsteams', 'Marketing Agenturen', 'Fitnessstudio Besitzer',
      'Gastronomen', 'Architekten', 'Rechtsanwälte', 'Steuerberater'
    ],
    industrySolutions: {
      'Hautärzte': ['Automatisierte Patienten-Triage', 'KI-Telefonassistenz', 'Digitale Anamnese-Standards'],
      'Frisöre': ['KI-Terminbuchungssystem', 'Automatisierte Kundenbindung', 'Bestandsmanagement-KI'],
      'Online Shop Owner': ['Personalisierte Kaufberatung', 'KI-gestützte Logistik', 'Automatisierter Kundensupport'],
      'Elektriker': ['KI-Kalkulationsassistent', 'Automatisierte Materialbestellung', 'Digitale Baustellendokumentation'],
      'Büromitarbeiter': ['Workflow-Automatisierung', 'KI-Dokumentenanalyse', 'Intelligente E-Mail-Sortierung'],
      'Immobilienmakler': ['KI-Lead-Qualifizierung', 'Automatisierte Exposé-Erstellung', 'Virtuelle Besichtigungs-KI'],
      'Logistikleiter': ['Routenoptimierung via KI', 'Echtzeit-Materialtracking', 'Automatisierte Lieferketten-Analyse'],
      'Praxispersonal': ['KI-gestützte Terminplanung', 'Automatisierte Abrechnungshilfe', 'Digitale Patientenakte-KI'],
      'E-Commerce Manager': ['KI-Marketing-Automatisierung', 'Dynamische Preisgestaltung', 'KI-Bestandsvorhersage'],
      'Handwerksmeister': ['KI-Projektplanung', 'Automatisierte Zeiterfassung', 'KI-Ressourcenmanagement'],
      'Finanzberater': ['KI-Portfolioanalyse', 'Automatisierte Compliance-Prüfung', 'Lead-Generierung via KI'],
      'Kundenbetreuer': ['KI-Chatbots & Voice-AI', 'Automatisierte Ticket-Priorisierung', 'Sentiment-Analyse'],
      'Projektleiter': ['KI-Risikoanalyse', 'Automatisierte Statusberichte', 'Ressourcen-Optimierung'],
      'Vertriebsteams': ['KI-Sales-Assistant', 'Automatisierte Lead-Recherche', 'CRM-Datenpflege via KI'],
      'Marketing Agenturen': ['KI-Content-Generierung', 'Automatisierte Kampagnen-Analyse', 'Trend-Vorhersage via KI'],
      'Fitnessstudio Besitzer': ['KI-Trainingsplan-Erstellung', 'Automatisierte Mitgliederverwaltung', 'KI-Churn-Prevention'],
      'Gastronomen': ['KI-Reservierungsmanagement', 'Automatisierte Warenwirtschaft', 'KI-Personalplanung'],
      'Architekten': ['KI-Design-Optimierung', 'Automatisierte Normenprüfung', 'KI-Projektkosten-Kalkulation'],
      'Rechtsanwälte': ['KI-Vertragsanalyse', 'Automatisierte Fristenkontrolle', 'Rechtsprechungs-Recherche via KI'],
      'Steuerberater': ['KI-Belegprüfung', 'Automatisierte Steuerprognose', 'Digitale Buchhaltungs-KI'],
      'default': ['KI-Workflow-Optimierung', 'Wissens-Standardisierung', 'Automatisierte Kommunikation']
    },
    digitalTwin: {
      title: 'Der Digitale Zwilling',
      subtitle: 'Wir erschaffen ein digitales Abbild Ihres Fachwissens.',
      description: 'Ein Digitaler Zwilling ist nicht nur eine Kopie – es ist eine intelligente, automatisierte Version Ihrer betrieblichen Intelligenz. Er lernt, antwortet und handelt genau wie Ihr bestes Teammitglied, nur 24/7 und ohne Ermüdung.',
      features: [
        {
          title: 'Wissens-Extraktion',
          desc: 'Wir digitalisieren implizites Fachwissen und machen es für KI-Modelle nutzbar.'
        },
        {
          title: 'Automatisierte Interaktion',
          desc: 'Ihr Zwilling übernimmt Kundenanfragen, Terminbuchungen und Beratungsgespräche.'
        },
        {
          title: 'Prozess-Synchronisation',
          desc: 'Nahtlose Anbindung an Ihre bestehenden CRM- und ERP-Systeme.'
        }
      ]
    },
    chat: {
      placeholder: 'Stellen Sie eine Frage...',
      send: 'Senden',
      close: 'Schließen',
      cta: 'Anfrage mit Chat-Verlauf senden',
      systemPrompt: 'Du bist ein spezialisierter KI-Experte von Tassam.ai für die Branche: {industry}. DEINE STRIKTE REGEL: Antworte immer extrem kurz und prägnant (maximal 2-3 Sätze). Du darfst ausschließlich über Themen sprechen, die mit der Digitalisierung, Automatisierung und Wissens-Standardisierung im Bereich {industry} zu tun haben. Wenn der Nutzer fachfremde Fragen stellt (z.B. Popkultur, Spongebob), lehne diese sofort und kurz ab und frage nach einem Bezug zu {industry}. Dein Ziel: Kurze, wertvolle Impulse geben und zum Strategiegespräch bewegen.',
      initialMessage: 'Hallo! Ich bin Ihr KI-Experte für {industry}. Wie kann ich Ihnen helfen, Ihr Fachwissen in einen digitalen Standard zu verwandeln?'
    },
    caseStudies: {
      title: 'Die 5 Expertisen',
      subtitle: 'Spezialisierte KI-Lösungen für unterschiedliche Branchen. Jede Expertise ist ein Standard für Effizienz.',
      badge: 'Case Studies',
      details: 'Details ansehen',
      missingTitle: 'Ihre Expertise fehlt?',
      missingDesc: 'Wir bauen maßgeschneiderte KI-Lösungen für Ihre spezifischen Anforderungen.',
      missingCta: 'Projekt anfragen',
      units: {
        rodar: {
          title: 'Retail & Service (Rodar)',
          desc: 'App für Termin- & Kundenmanagement. Automatisierte Buchungsprozesse und CRM-Integration.'
        },
        osman: {
          title: 'Industrial Operations (Osman)',
          desc: 'Echtzeit-Kalkulation & Materiallogistik. KI-gestützte Optimierung von Lieferketten.'
        },
        max: {
          title: 'Financial Services (Max)',
          desc: 'KI-Personal Assistant für Makler-Workflows. Dokumentenanalyse und Lead-Qualifizierung.'
        },
        gamezone: {
          title: 'Next-Gen E-Commerce (Gamezone)',
          desc: 'High-Performance Shop-Systeme mit personalisierter KI-Kaufberatung.'
        },
        wolber: {
          title: 'Medical Voice-AI (Dr. Wolber)',
          desc: 'KI-Telefonassistenz & Patienten-Triage. Entlastung des Praxispersonals durch intelligente Sprachsysteme.'
        }
      }
    },
    testimonials: {
      title: 'Das sagt der Markt',
      subtitle: 'Direktes Feedback unserer Partner. Hören Sie selbst, wie wir Prozesse transformieren.',
      items: [
        {
          name: 'Thomas Rodar',
          role: 'CEO, Rodar Retail',
          text: 'Die KI-Integration hat unsere Kundenbindung verdoppelt. Der Buchungsprozess läuft nun komplett autonom.',
          audioLength: '0:45'
        },
        {
          name: 'Dr. Elena Wolber',
          role: 'Chefärztin, MedCenter',
          text: 'Die Voice-AI entlastet mein Team täglich um mehrere Stunden. Die Patienten-Triage ist präzise und menschlich.',
          audioLength: '1:12'
        },
        {
          name: 'Markus Osman',
          role: 'Logistikleiter, Osman Industrial',
          text: 'Echtzeit-Kalkulationen waren früher ein Albtraum. Heute erledigt das die KI in Millisekunden.',
          audioLength: '0:58'
        }
      ]
    },
    methodology: {
      title: 'Unsere Methodik:',
      highlight: 'VayFlow',
      subtitle: 'Von der Idee zum fertigen System in Rekordzeit. Wir nutzen unsere proprietäre VayFlow-Infrastruktur, um komplexe Workflows in skalierbare digitale Standards zu verwandeln.',
      steps: [
        {
          title: 'Idee & Strategie',
          desc: 'Wir analysieren Ihr Fachwissen und identifizieren Automatisierungspotenziale.'
        },
        {
          title: 'VayFlow Prozess',
          desc: 'Schnelle Prototypisierung durch unsere VayFlow-Infrastruktur.'
        },
        {
          title: 'KI-Integration',
          desc: 'Anbindung modernster LLMs und spezialisierter Sprachmodelle.'
        },
        {
          title: 'Skalierbares Backend',
          desc: 'Sichere Datenhaltung und performante APIs via Surreal DB 3.0.'
        },
        {
          title: 'Native Deployment',
          desc: 'Rollout als Web-App oder integrierte Enterprise-Lösung.'
        }
      ]
    },
    footer: {
      ctaTitle: 'Ihre Vision.',
      ctaHighlight: 'Digitaler Standard.',
      ctaDesc: 'Lassen Sie uns gemeinsam die Architektur Ihrer digitalen Zukunft entwerfen.',
      form: {
        name: 'Name',
        namePlaceholder: 'Ihr Name',
        email: 'Email',
        emailPlaceholder: 'ihre@email.de',
        message: 'Nachricht',
        messagePlaceholder: 'Wie können wir helfen?',
        send: 'Anfrage senden'
      },
      links: {
        imprint: 'Impressum',
        privacy: 'Datenschutz'
      },
      automationTasks: [
        'Daten sichten',
        'E-Mails abschicken',
        'Anrufe entgegennehmen',
        'Termine koordinieren',
        'Berichte erstellen',
        'Rechnungen prüfen'
      ]
    },
    roi: {
      title: 'Warum KI-Automatisierung?',
      subtitle: 'Geschäftsprozesse automatisieren bedeutet mehr als nur Effizienzsteigerung – es ist Ihr strategischer Marktvorteil.',
      cards: [
        {
          title: 'Zeit-Elite: Maximale Freiheit',
          desc: 'Wir überführen Ihre wertvollsten Ressourcen – Zeit und Fachwissen – in einen neuen Standard. Ihr Digitaler Zwilling agiert als autonomer Teil Ihrer Belegschaft und entlastet Ihr Kernteam dort, wo Routine bisher wertvolle Kapasitäten gebunden hat.\n\nIntelligentes Postfach-Management: E-Mails werden nicht nur empfangen, sondern sofort kategorisiert, nach Relevanz priorisiert und für die Bearbeitung vorbereitet.\n\nReaktionsgeschwindigkeit 24/7: Kundenanfragen werden unmittelbar und mit einer persönlichen, präzisen Note beantwortet – ohne Wartezeiten.\n\nNahtlose Koordination: Terminanfragen und Abstimmungsprozesse erfolgen vollautomatisch und synchron mit Ihren bestehenden Systemen.\n\nPräzise Datenverarbeitung: Die Extraktion von Informationen aus komplexen Dokumenten verkürzt sich von Stunden auf wenige Sekunden.\n\nDas Ergebnis: Eine messbare Entlastung von bis zu 70 % bei administrativen Routineaufgaben. Wir schaffen den Freiraum für Ihr strategisches Wachstum.',
          impact: '70% Zeitgewinn'
        },
        {
          title: 'Grenzenlose Skalierung',
          desc: 'Manuelle Prozesse treiben Kosten durch Fehler und mangelnde Skalierbarkeit. KI skaliert beliebig ohne lineare Kostensteigerung.\n\nROI-Beispiele: 1.000 Anfragen zum Bruchteil der Kosten eines Teams. Automatisierte Rechnungsprüfung eliminiert Outsourcing-Kosten. Lead-Qualifizierung reduziert Vertriebskosten um 40%.\n\nAmortisation: Typischerweise innerhalb von 3-6 Monaten.',
          impact: 'ROI in 3-6 Monaten'
        },
        {
          title: 'Null-Fehler-Architektur',
          desc: 'Menschliche Fehler bei Monotonie kosten Vertrauen. Ihr Zwilling arbeitet mit konstanter Präzision – unabhängig von Auslastung oder Ermüdung.\n\nMessbare Verbesserung: Datenerfassung erreicht 99,5%+ Genauigkeit. Die KI erkennt Anomalien, die Menschen übersehen. Compliance-Regeln werden zu 100% ohne Ausnahmen eingehalten.\n\nStatus: Absolut konsistent & zuverlässig.',
          impact: '99,5%+ Genauigkeit'
        }
      ]
    },
    radar: {
      title: 'KI-Potenzial',
      labels: {
        management: 'Management',
        finances: 'Finanzen',
        it: 'IT & Software',
        engineering: 'Ingenieurwesen',
        legal: 'Recht & Compliance',
        education: 'Bildung',
        media: 'Medien & Design',
        health: 'Gesundheitswesen',
        sales: 'Vertrieb',
        admin: 'Verwaltung'
      },
      details: {
        management: 'KI unterstützt strategische Entscheidungen durch prädiktive Analysen, während menschliche Führung für Vision und Kultur unverzichtbar bleibt.',
        finances: 'Automatisierte Risikoanalyse und algorithmischer Handel sind bereits Standard, doch komplexe Beratung bleibt menschlich.',
        it: 'KI-gestützte Code-Generierung und Systemüberwachung transformieren die Softwareentwicklung grundlegend.',
        engineering: 'Generatives Design und Simulationen beschleunigen Innovationszyklen in der Produktentwicklung.',
        legal: 'Die Analyse riesiger Dokumentenmengen und Rechercheaufgaben werden durch LLMs massiv effizienter.',
        education: 'Personalisiertes Lernen und adaptive Curricula ermöglichen eine neue Ära der individuellen Wissensvermittlung.',
        media: 'Generative KI revolutioniert die visuelle Erstellung und das Storytelling in Rekordzeit.',
        health: 'KI-gestützte Diagnostik verbessert die Präzision, während die direkte Patientenpflege menschlich bleibt.',
        sales: 'Prädiktive Lead-Generierung und automatisierte Kundenansprache steigern die Konversionsraten.',
        admin: 'Standardisierte Prozesse und Datenmanagement bieten das höchste Potenzial für sofortige Automatisierung.'
      },
      potential: 'Potenzial',
      usage: 'AKTUELLE NUTZUNG',
      analysis: 'Klicken für Analyse',
      deepAnalysis: 'Tiefenanalyse',
      source: 'Datenquelle: Labor Market Impacts of AI (Anthropic Research)'
    },
    quiz: {
      titlePrefix: 'Finden Sie Ihre',
      titleHighlight: 'Passende KI-Lösung',
      subtitle: 'Beantworten Sie 4 kurze Fragen und erhalten Sie ein individuelles Angebot für Ihre KI-Automatisierung',
      step: 'Schritt',
      next: 'Weiter',
      back: 'Zurück',
      send: 'Ergebnis anfordern',
      questions: {
        goal: {
          title: 'Was möchten Sie primär mit KI-Automatisierung erreichen?',
          options: {
            service: 'Kundensupport & Kommunikation optimieren',
            processes: 'Interne Geschäftsprozesse automatisieren',
            data: 'Datenanalyse & Entscheidungsfindung verbessern',
            unsure: 'Ich bin mir noch unsicher'
          }
        },
        size: {
          title: 'Wie groß ist Ihr Unternehmen?',
          options: {
            small: '1-10 Mitarbeiter',
            medium: '11-50 Mitarbeiter',
            large: '51-200 Mitarbeiter',
            enterprise: 'Mehr als 200 Mitarbeiter'
          }
        },
        timing: {
          title: 'Wann möchten Sie starten?',
          options: {
            asap: 'So schnell wie möglich',
            short: 'In 1-3 Monaten',
            medium: 'In 3-6 Monaten',
            info: 'Ich möchte mich nur informieren'
          }
        },
        budget: {
          title: 'Welches Budget planen Sie ein?',
          options: {
            low: 'Unter 5.000 €',
            mid: '5.000 - 15.000 €',
            high: '15.000 - 50.000 €',
            veryHigh: 'Über 50.000 €',
            unsure: 'Bin mir noch unsicher'
          }
        },
        contact: {
          title: 'Fast geschafft!',
          subtitle: 'Wohin dürfen wir Ihr individuelles Angebot senden?',
          name: 'Ihr Name',
          namePlaceholder: 'Max Mustermann',
          email: 'Ihre E-Mail',
          emailPlaceholder: 'm.mustermann@firma.de',
          company: 'Firma (optional)',
          companyPlaceholder: 'Ihre Firma GmbH',
          phone: 'Telefon (optional)',
          phonePlaceholder: '+43 664 1234567',
          cta: 'Individuelles Angebot anfordern'
        }
      }
    }
  },
  ru: {
    nav: {
      start: 'Главная',
      consulting: 'ИИ-Консалтинг',
      automation: 'Автоматизация',
      chatbot: 'Чат-бот',
      pricing: 'Цены',
      faq: 'FAQ',
      strategy: 'Потенциал-чек'
    },
    hero: {
      title1: 'Мы делаем ваш бизнес',
      rotatingWords: ['готовым к будущему.', 'масштабируемым.', 'конкурентоспособным.', 'эффективным.'],
      subtitle: 'Ваша команда по интеллектуальной автоматизации. Мы превращаем ваши ежедневные рабочие процессы в цифровых сотрудников, работающих на вас 24/7. Ах да, и "между прочим" мы также создаем супер-приложения и запускаем веб-сайты – если одного ИИ вам недостаточно.',
      cta1: 'Проверить ИИ-потенциал',
      cta2: 'Кейсы',
      trustMarkers: [
        'Proof-of-Concept за 5 дней',
        'ISO 27001',
        'Соответствие GDPR'
      ]
    },
    targetGroups: [
      'Дерматологи', 'Парикмахеры', 'Владельцы интернет-магазинов', 'Электрики', 'Офисные сотрудники',
      'Риелторы', 'Логисты', 'Медперсонал', 'E-Commerce менеджеры',
      'Мастера', 'Финансовые консультанты', 'Менеджеры по работе с клиентами', 'Руководители проектов',
      'Отделы продаж', 'Маркетинговые агентства', 'Владельцы фитнес-клубов',
      'Рестораторы', 'Архитекторы', 'Юристы', 'Налоговые консультанты'
    ],
    industrySolutions: {
      'Дерматологи': ['Автоматизированная сортировка пациентов', 'ИИ-телефонный ассистент', 'Цифровые стандарты анамнеза'],
      'Парикмахеры': ['Система ИИ-записи', 'Автоматизированное удержание клиентов', 'ИИ-управление запасами'],
      'Владельцы интернет-магазинов': ['Персонализированные консультации', 'ИИ-логистика', 'Автоматизированная поддержка'],
      'Электрики': ['ИИ-калькулятор смет', 'Автоматизированный заказ материалов', 'Цифровая документация объекта'],
      'Офисные сотрудники': ['Автоматизация рабочих процессов', 'ИИ-анализ документов', 'Умная сортировка почты'],
      'Риелторы': ['ИИ-квалификация лидов', 'Автоматическое создание объявлений', 'ИИ-виртуальные туры'],
      'Логисты': ['Оптимизация маршрутов ИИ', 'Отслеживание материалов в реальном времени', 'Автоматический анализ поставок'],
      'Медперсонал': ['ИИ-планирование графиков', 'Автоматизированная помощь в биллинге', 'ИИ-цифровая медкарта'],
      'E-Commerce менеджеры': ['ИИ-маркетинг', 'Динамическое ценообразование', 'ИИ-прогноз запасов'],
      'Мастера': ['ИИ-планирование проектов', 'Автоматический учет времени', 'ИИ-управление ресурсами'],
      'Финансовые консультанты': ['ИИ-анализ портфеля', 'Автоматическая проверка комплаенса', 'Генерация лидов через ИИ'],
      'Менеджеры по работе с клиентами': ['ИИ-чат-боты и голосовой ИИ', 'Автоматическая приоритизация тикетов', 'Анализ настроений'],
      'Руководители проектов': ['ИИ-анализ рисков', 'Автоматические отчеты о статусе', 'Оптимизация ресурсов'],
      'Отделы продаж': ['ИИ-ассистент по продажам', 'Автоматический поиск лидов', 'ИИ-ведение CRM'],
      'Маркетинговые агентства': ['ИИ-генерация контента', 'Автоматический анализ кампаний', 'ИИ-прогноз трендов'],
      'Владельцы фитнес-клубов': ['ИИ-планы тренировок', 'Автоматизация работы с членами клуба', 'ИИ-предотвращение оттока'],
      'Рестораторы': ['ИИ-управление бронированием', 'Автоматизированный складской учет', 'ИИ-планирование персонала'],
      'Архитекторы': ['ИИ-оптимизация дизайна', 'Автоматическая проверка норм', 'ИИ-расчет стоимости проекта'],
      'Юристы': ['ИИ-анализ контрактов', 'Автоматический контроль сроков', 'ИИ-поиск судебной практики'],
      'Налоговые консультанты': ['ИИ-проверка документов', 'Автоматический налоговый прогноз', 'ИИ-цифровая бухгалтерия'],
      'default': ['ИИ-оптимизация процессов', 'Стандартизация знаний', 'Автоматизированная коммуникация']
    },
    digitalTwin: {
      title: 'Цифровой Двойник',
      subtitle: 'Мы создаем цифровое отражение вашего экспертного опыта.',
      description: 'Цифровой двойник — это не просто копия, это интеллектуальная автоматизированная версия вашего бизнеса. Он обучается, отвечает и действует как ваш лучший сотрудник, только 24/7 и без усталости.',
      features: [
        {
          title: 'Извлечение знаний',
          desc: 'Мы оцифровываем неявный экспертный опыт и делаем его доступным для ИИ-моделей.'
        },
        {
          title: 'Автоматизированное взаимодействие',
          desc: 'Ваш двойник берет на себя запросы клиентов, бронирование встреч и консультации.'
        },
        {
          title: 'Синхронизация процессов',
          desc: 'Бесшовная интеграция с вашими существующими CRM и ERP системами.'
        }
      ]
    },
    chat: {
      placeholder: 'Задайте вопрос...',
      send: 'Отправить',
      close: 'Закрыть',
      cta: 'Отправить запрос с историей чата',
      systemPrompt: 'Вы являетесь специализированным ИИ-экспертом Tassam.ai в отрасли: {industry}. ВАШЕ СТРОГОЕ ПРАВИЛО: отвечайте всегда максимально кратко и лаконично (максимум 2-3 предложения). Вы должны говорить исключительно на темы, связанные с цифровизацией, автоматизацией и стандартизацией знаний в сфере {industry}. Если пользователь задает посторонние вопросы (например, о поп-культуре или Спанч Бобе), немедленно и кратко откажите в ответе и вернитесь к теме {industry}. Ваша цель: давать короткие, ценные идеи и убеждать записаться на стратегическую сессию.',
      initialMessage: 'Здравствуйте! Я ваш ИИ-эксперт по направлению {industry}. Как я могу помочь вам превратить ваш опыт в цифровой стандарт?'
    },
    caseStudies: {
      title: '5 Направлений Экспертизы',
      subtitle: 'Специализированные ИИ-решения для различных отраслей. Каждая экспертиза — это стандарт эффективности.',
      badge: 'Кейсы',
      details: 'Подробнее',
      missingTitle: 'Вашей сферы нет в списке?',
      missingDesc: 'Мы создаем индивидуальные ИИ-решения под ваши специфические задачи.',
      missingCta: 'Запросить проект',
      units: {
        rodar: {
          title: 'Retail & Service (Rodar)',
          desc: 'Приложение для управления записями и клиентами. Автоматизация бронирования и интеграция с CRM.'
        },
        osman: {
          title: 'Industrial Operations (Osman)',
          desc: 'Расчеты в реальном времени и логистика материалов. Оптимизация цепочек поставок с помощью ИИ.'
        },
        max: {
          title: 'Financial Services (Max)',
          desc: 'ИИ-ассистент для рабочих процессов брокеров. Анализ документов и квалификация лидов.'
        },
        gamezone: {
          title: 'Next-Gen E-Commerce (Gamezone)',
          desc: 'Высокопроизводительные системы магазинов с персональными ИИ-консультациями.'
        },
        wolber: {
          title: 'Medical Voice-AI (Dr. Wolber)',
          desc: 'Голосовой ИИ-ассистент и сортировка пациентов. Разгрузка персонала клиник с помощью умных систем.'
        }
      }
    },
    testimonials: {
      title: 'Что говорит рынок',
      subtitle: 'Прямые отзывы наших партнеров. Послушайте, как мы трансформируем процессы.',
      items: [
        {
          name: 'Томас Родар',
          role: 'CEO, Rodar Retail',
          text: 'Интеграция ИИ удвоила удержание клиентов. Процесс бронирования теперь полностью автономен.',
          audioLength: '0:45'
        },
        {
          name: 'Д-р Елена Вольбер',
          role: 'Главврач, MedCenter',
          text: 'Голосовой ИИ ежедневно экономит моей команде несколько часов. Сортировка пациентов точная и человечная.',
          audioLength: '1:12'
        },
        {
          name: 'Маркус Осман',
          role: 'Руководитель логистики, Osman Industrial',
          text: 'Расчеты в реальном времени раньше были кошмаром. Сегодня ИИ делает это за миллисекунды.',
          audioLength: '0:58'
        }
      ]
    },
    methodology: {
      title: 'Наша методология:',
      highlight: 'VayFlow',
      subtitle: 'От идеи до готовой системы в рекордные сроки. Мы используем нашу собственную инфраструктуру VayFlow для превращения сложных рабочих процессов в масштабируемые дигитальные стандарты.',
      steps: [
        {
          title: 'Идея и стратегия',
          desc: 'Мы анализируем вашу экспертизу и выявляем потенциал для автоматизации.'
        },
        {
          title: 'Процесс VayFlow',
          desc: 'Быстрое прототипирование с помощью нашей инфраструктуры VayFlow.'
        },
        {
          title: 'Интеграция ИИ',
          desc: 'Подключение современных LLM и специализированных языковых моделей.'
        },
        {
          title: 'Масштабируемый бэкенд',
          desc: 'Безопасное хранение данных и производительные API через Surreal DB 3.0.'
        },
        {
          title: 'Нативное развертывание',
          desc: 'Запуск в виде веб-приложения или интегрированного корпоративного решения.'
        }
      ]
    },
    footer: {
      ctaTitle: 'Ваше видение.',
      ctaHighlight: 'Дигитальный стандарт.',
      ctaDesc: 'Давайте вместе спроектируем архитектуру вашего цифрового будущего.',
      form: {
        name: 'Имя',
        namePlaceholder: 'Ваше имя',
        email: 'Email',
        emailPlaceholder: 'vash@email.ru',
        message: 'Сообщение',
        messagePlaceholder: 'Чем мы можем помочь?',
        send: 'Отправить запрос'
      },
      links: {
        imprint: 'Выходные данные',
        privacy: 'Конфиденциальность'
      },
      automationTasks: [
        'Анализ данных',
        'Отправка писем',
        'Прием звонков',
        'Координация встреч',
        'Создание отчетов',
        'Проверка счетов'
      ]
    },
    roi: {
      title: 'Почему ИИ-автоматизация?',
      subtitle: 'Автоматизация бизнес-процессов — это больше, чем просто повышение эффективности. Это ваше стратегическое преимущество.',
      cards: [
        {
          title: 'Элита времени: Максимальная свобода',
          desc: 'Ваши эксперты ежедневно тратят часы на рутину: сортировку почты, ввод данных и координацию встреч. Ваш Цифровой Двойник берет на себя эти задачи полностью — точно, быстро и 24/7.\n\nКонкретные примеры: Автоматическая категоризация почты. Мгновенные персонализированные ответы клиентам. Ввод данных из документов за секунды вместо часов.\n\nРезультат: До 70% экономии времени на рутинных задачах.',
          impact: '70% экономии времени'
        },
        {
          title: 'Масштабирование без границ',
          desc: 'Ручные процессы увеличивают расходы из-за ошибок и плохой масштабируемости. ИИ масштабируется без линейного роста затрат.\n\nПримеры ROI: 1000 запросов за долю стоимости команды. Автоматизация счетов исключает затраты на аутсорсинг. Квалификация лидов снижает затраты на продажи на 40%.\n\nОкупаемость: Обычно в течение 3-6 месяцев.',
          impact: 'ROI за 3-6 месяцев'
        },
        {
          title: 'Архитектура нулевых ошибок',
          desc: 'Человеческие ошибки при монотонности стоят доверия клиентов. Ваш Двойник работает с постоянной точностью — независимо от нагрузки или усталости.\n\nИзмеримое улучшение: Точность ввода данных 99,5%+. ИИ распознает аномалии, которые пропускают люди. Правила комплаенса соблюдаются на 100% без исключений.\n\nСтатус: Абсолютная надежность и стабильность.',
          impact: '99,5%+ точность'
        }
      ]
    },
    radar: {
      title: 'Потенциал ИИ',
      labels: {
        management: 'Менеджмент',
        finances: 'Финансы',
        it: 'IT и ПО',
        engineering: 'Инженерия',
        legal: 'Право и Комлпаенс',
        education: 'Образование',
        media: 'Медиа и Дизайн',
        health: 'Здравоохранение',
        sales: 'Продажи',
        admin: 'Администрирование'
      },
      details: {
        management: 'ИИ поддерживает стратегические решения с помощью прогнозной аналитики, в то время как человеческое лидерство остается незаменимым для формирования видения и культуры.',
        finances: 'Автоматизированный анализ рисков и алгоритмическая торговля уже стали стандартом, но сложные консультации остаются за человеком.',
        it: 'Генерация кода с помощью ИИ и мониторинг систем коренным образом трансформируют разработку программного обеспечения.',
        engineering: 'Генеративный дизайн и симуляции ускоряют циклы инноваций в разработке продуктов.',
        legal: 'Анализ огромных объемов документов и исследовательские задачи становятся в разы эффективнее благодаря LLM.',
        education: 'Персонализированное обучение и адаптивные учебные программы открывают новую эру индивидуальной передачи знаний.',
        media: 'Генеративный ИИ революционизирует создание визуального контента и сторителлинг в рекордные сроки.',
        health: 'Диагностика с поддержкой ИИ повышает точность, в то время как непосредственный уход за пациентами остается человеческим.',
        sales: 'Прогнозная генерация лидов и автоматизированное взаимодействие с клиентами повышают показатели конверсии.',
        admin: 'Стандартизированные процессы и управление данными открывают самый высокий потенциал для немедленной автоматизации.'
      },
      potential: 'Потенциал',
      usage: 'ТЕКУЩЕЕ ИСПОЛЬЗОВАНИЕ',
      analysis: 'Нажмите для анализа',
      deepAnalysis: 'Глубокий анализ',
      source: 'Источник данных: Labor Market Impacts of AI (Anthropic Research)'
    },
    quiz: {
      titlePrefix: 'Найдите подходящее',
      titleHighlight: 'ИИ-решение',
      subtitle: 'Ответьте на 4 коротких вопроса и получите индивидуальное предложение по автоматизации вашего бизнеса',
      step: 'Шаг',
      next: 'Далее',
      back: 'Назад',
      send: 'Получить результат',
      questions: {
        goal: {
          title: 'Чего вы в первую очередь хотите достичь с помощью ИИ-автоматизации?',
          options: {
            service: 'Оптимизация клиентской поддержки и коммуникации',
            processes: 'Автоматизация внутренних бизнес-процессов',
            data: 'Улучшение анализа данных и принятия решений',
            unsure: 'Я пока не уверен'
          }
        },
        size: {
          title: 'Какой размер вашей компании?',
          options: {
            small: '1-10 сотрудников',
            medium: '11-50 сотрудников',
            large: '51-200 сотрудников',
            enterprise: 'Более 200 сотрудников'
          }
        },
        timing: {
          title: 'Когда вы хотите начать?',
          options: {
            asap: 'Как можно скорее',
            short: 'В течение 1-3 месяцев',
            medium: 'В течение 3-6 месяцев',
            info: 'Я только хочу получить информацию'
          }
        },
        budget: {
          title: 'Какой бюджет вы планируете?',
          options: {
            low: 'Менее 5 000 €',
            mid: '5 000 - 15 000 €',
            high: '15 000 - 50 000 €',
            veryHigh: 'Более 50 000 €',
            unsure: 'Пока не уверен'
          }
        },
        contact: {
          title: 'Почти готово!',
          subtitle: 'Куда мы можем отправить ваше индивидуальное предложение?',
          name: 'Ваше имя',
          namePlaceholder: 'Иван Иванов',
          email: 'Ваш E-Mail',
          emailPlaceholder: 'i.ivanov@companiya.ru',
          company: 'Компания (необязательно)',
          companyPlaceholder: 'ООО Ваша Компания',
          phone: 'Телефон (необязательно)',
          phonePlaceholder: '+7 123 456 78 90',
          cta: 'Запросить индивидуальное предложение'
        }
      }
    }
  }
};
