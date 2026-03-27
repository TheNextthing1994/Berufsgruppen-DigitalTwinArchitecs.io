export type Language = 'de' | 'ru';

export interface TranslationType {
  nav: {
    solutions: string;
    caseStudies: string;
    methodology: string;
    contact: string;
    start: string;
    strategy: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    title3: string;
    subtitle: string;
    cta1: string;
    cta2: string;
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
}

export const translations: Record<Language, TranslationType> = {
  de: {
    nav: {
      solutions: 'Lösungen',
      caseStudies: 'Case Studies',
      methodology: 'Team-Methodik',
      contact: 'Kontakt',
      start: 'Starten',
      strategy: 'Strategiegespräch'
    },
    hero: {
      badge: 'Standardisierung von Wissen',
      title1: 'Wir transformieren',
      title2: 'Fachwissen',
      title3: 'in digitale Standards.',
      subtitle: 'Ihr Team für KI-Apps, automatisierte Workflows und intelligente Sprachsysteme. Wir bauen keine Software – wir bauen Ihre digitale Belegschaft.',
      cta1: 'Strategiegespräch vereinbaren',
      cta2: 'Unsere Expertisen entdecken'
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
      systemPrompt: 'Du bist ein Experte von DigitalTwinArchitecs.io. Dein Ziel ist es, dem Nutzer zu erklären, wie ein Digitaler Zwilling und KI-Automatisierung speziell für seine Branche ({industry}) helfen kann. Sei professionell, innovativ und lösungsorientiert. Erwähne VayFlow und unsere Expertise in Wissens-Standardisierung. Am Ende des Gesprächs soll der Nutzer auf den Button klicken, um ein Strategiegespräch zu vereinbaren.',
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
    }
  },
  ru: {
    nav: {
      solutions: 'Решения',
      caseStudies: 'Кейсы',
      methodology: 'Методология',
      contact: 'Контакт',
      start: 'Начать',
      strategy: 'Стратегия'
    },
    hero: {
      badge: 'Стандартизация знаний',
      title1: 'Мы трансформируем',
      title2: 'Экспертизу',
      title3: 'в диджитал-стандарты.',
      subtitle: 'Ваша команда по разработке ИИ-приложений, автоматизированных рабочих процессов и интеллектуальных голосовых систем. Мы не просто создаем ПО — мы создаем вашу диджитал-команду.',
      cta1: 'Записаться на консультацию',
      cta2: 'Узнать больше'
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
          desc: 'Мы оцифровываем неявный опыт и делаем его доступным для ИИ-моделей.'
        },
        {
          title: 'Автоматизированное взаимодействие',
          desc: 'Ваш двойник берет на себя запросы клиентов, бронирование и консультации.'
        },
        {
          title: 'Синхронизация процессов',
          desc: 'Бесшовная интеграция с вашими текущими CRM и ERP системами.'
        }
      ]
    },
    chat: {
      placeholder: 'Задайте вопрос...',
      send: 'Отправить',
      close: 'Закрыть',
      cta: 'Отправить запрос с историей чата',
      systemPrompt: 'Вы эксперт DigitalTwinArchitecs.io. Ваша цель — объяснить пользователю, как Цифровой Двойник и ИИ-автоматизация могут помочь именно в его отрасли ({industry}). Будьте профессиональны, инновационны и ориентированы на решение. Упомяните VayFlow и наш опыт в стандартизации знаний. В конце разговора пользователь должен нажать кнопку, чтобы записаться на стратегическую сессию.',
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
      subtitle: 'От идеи до готовой системы в рекордные сроки. Мы используем нашу собственную инфраструктуру VayFlow для превращения сложных рабочих процессов в масштабируемые диджитал-стандарты.',
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
      ctaHighlight: 'Диджитал-стандарт.',
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
    }
  }
};
