export const languages = {
  tr: { code: "TR", label: "Turkce", flag: "🇹🇷" },
  en: { code: "EN", label: "English", flag: "🇬🇧" },
  ru: { code: "RU", label: "Русский", flag: "🇷🇺" },
  de: { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  ro: { code: "RO", label: "Romana", flag: "🇷🇴" }
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = "tr";

export const dictionaries = {
  tr: {
    nav: {
      capabilities: "Belgeler",
      services: "Tasima",
      process: "Operasyon",
      contact: "Iletisim"
    },
    hero: {
      eyebrow: "Belgeli uluslararasi kara yolu tasimaciligi",
      title: "GakkoTransport23",
      lead:
        "C2 / K1 kapsamina uygun ticari yuk organizasyonu, U-ETDS odakli sefer bilgisi, evrak takibi ve ozel yuk uygunluk kontroluyle Avrupa hattinda planli lojistik hizmeti.",
      primaryCta: "Tasima teklifi al",
      secondaryCta: "Belge kapsami"
    },
    stats: [
      { value: "C2 / K1", label: "ticari yuk altyapisi" },
      { value: "Yuk uygunlugu", label: "belge ve rota on kontrolu" },
      { value: "TR / EU", label: "gumruk ve rota takibi" }
    ],
    signals: ["C2 uyumlu operasyon", "K1 yurtiçi tasima", "U-ETDS bilgi hazirligi", "Ozel yuk on kontrolu"],
    capabilities: {
      eyebrow: "Belge ve uygunluk",
      title: "Esnek operasyon, belgeli tasimaci disiplini.",
      text:
        "Yuk kabulunden once yetki belgesi kapsami, tasit uygunlugu, sefer bildirimi, gumruk evraki ve tehlikeli madde sinifi ayrica kontrol edilir.",
      cards: [
        {
          title: "C2 / uluslararasi esya tasima",
          text:
            "Ticari yuklerde Turkiye cikisli Avrupa hatlari icin arac, surucu, sefer ve teslim bilgileri tek dosyada toplanir."
        },
        {
          title: "K1 / yurtiçi ticari yuk",
          text:
            "Yukleme noktasindan liman, antrepo, fabrika veya alici adresine kadar yurtiçi ayak mevzuata uygun planlanir."
        },
        {
          title: "U-ETDS ve evrak duzeni",
          text:
            "Gonderici, alici, plaka, surucu, yuk cinsi, agirlik ve yukleme-bosaltma bilgileri operasyon basinda netlestirilir."
        },
        {
          title: "Kontrollu yuk kabul",
          text:
            "ADR veya ek izin gerektiren yuklerde sinif, UN kodu, ambalaj ve arac uygunlugu sevkiyat oncesinde incelenir."
        }
      ]
    },
    services: {
      eyebrow: "Tasima hizmetleri",
      title: "Komple tir, parsiyel yuk ve proje parcalarinda surekli operasyon takibi.",
      text:
        "Yukleme planindan teslim teyidine kadar arac durumu, gumruk evraki ve operasyon guncellemeleri tek koordinasyon surecinde takip edilir.",
      items: [
        {
          title: "Komple tir ve parsiyel tasima",
          text:
            "Paletli ticari urun, makine parcasi, tekstil, ambalaj, otomotiv yan sanayi ve duzenli sevkiyatlar icin kapasite planlanir."
        },
        {
          title: "Gumruk ve sinir koordinasyonu",
          text:
            "Ihracat evraki, alici bilgisi, teslim penceresi ve sinir gecisi sureci gondericiyle acik sekilde paylasilir."
        },
        {
          title: "Cok dilli operasyon iletisimi",
          text:
            "Turkce, Ingilizce, Rusca, Almanca ve Romence ile surucu, gonderici ve alici arasindaki bilgi kaybi azaltilir."
        }
      ]
    },
    process: {
      eyebrow: "Operasyon akisi",
      title: "Once uygunluk, sonra net fiyat ve sevkiyat.",
      steps: [
        {
          title: "Yuk ve belge bilgisi",
          text: "Cikis-varis, yuk cinsi, olcu, agirlik, fatura/irsaliye, gumruk ve varsa ADR bilgisi alinir."
        },
        {
          title: "Yetki ve arac kontrolu",
          text: "Belge kapsami, tasit uygunlugu, surucu bilgisi, rota ve ozel yuk kabul kosullari kontrol edilir."
        },
        {
          title: "Yukleme ve sefer",
          text: "Yukleme saati, plaka, sefer bilgisi ve sinir/gumruk gecis durumu operasyon boyunca guncellenir."
        },
        {
          title: "Teslim ve kapanis",
          text: "Teslim teyidi, alici notu, eksik/hasar kontrolu ve gerekli kapanis belgeleri paylasilir."
        }
      ]
    },
    quote: {
      eyebrow: "Teklif ve sevkiyat",
      title: "Yuk, guzergah ve gerekli belgeleri iletin; uygun araci ve tasima planini netlestirelim.",
      text:
        "Talep geldikten sonra belge kapsami, yuk sinifi, arac uygunlugu, gumruk evraki ve teslim penceresi ilk operasyon kontrolunden gecirilir.",
      fields: {
        name: "Ad soyad",
        company: "Firma",
        contact: "E-posta veya telefon",
        route: "Guzergah",
        routePlaceholder: "Istanbul - Berlin",
        cargo: "Yuk bilgisi",
        cargoPlaceholder: "Palet sayisi, kilo, olcu, teslim tarihi"
      },
      button: "Tasima talebi olustur",
      success: "Talep taslagi hazirlandi. Yuk, belge ve rota bilgileri operasyon on kontrolune aktarilacak."
    },
    footer: "Belge, rota ve yuk uygunlugu on kontroluyle kara yolu tasimaciligi."
  },
  en: {
    nav: {
      capabilities: "Documents",
      services: "Transport",
      process: "Operations",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Document-led international road transport",
      title: "GakkoTransport23",
      lead:
        "Planned logistics service for C2 / K1 aligned commercial cargo, U-ETDS-ready trip data, document follow-up and special cargo fit checks.",
      primaryCta: "Get transport quote",
      secondaryCta: "Document scope"
    },
    stats: [
      { value: "C2 / K1", label: "commercial cargo base" },
      { value: "Cargo fit", label: "document and route pre-check" },
      { value: "TR / EU", label: "customs and route follow-up" }
    ],
    signals: ["C2-aligned operation", "K1 domestic leg", "U-ETDS data ready", "Special cargo pre-check"],
    capabilities: {
      eyebrow: "Documents and fit",
      title: "Flexible operations with documented carrier discipline.",
      text:
        "Before accepting cargo, document scope, vehicle fit, trip data, customs papers and dangerous-goods class are checked.",
      cards: [
        {
          title: "C2 / international cargo",
          text:
            "For Turkey-Europe commercial cargo, vehicle, driver, trip and delivery information is gathered in one file."
        },
        {
          title: "K1 / domestic cargo leg",
          text:
            "Domestic legs from loading point to port, warehouse, factory or consignee address are planned with clear documents."
        },
        {
          title: "U-ETDS and paperwork",
          text:
            "Sender, consignee, plate, driver, cargo type, weight and loading-unloading data are clarified at the start."
        },
        {
          title: "Controlled cargo acceptance",
          text:
            "For ADR or permit-sensitive loads, class, UN code, packaging and vehicle fit are reviewed before pickup."
        }
      ]
    },
    services: {
      eyebrow: "Transport services",
      title: "Full truckload, partial cargo and project parts with consistent operations follow-up.",
      text:
        "From loading plan to delivery confirmation, vehicle status, customs paperwork and operations updates are tracked through one coordinated process.",
      items: [
        {
          title: "Full truckload and partial cargo",
          text:
            "Capacity is planned for pallet cargo, machinery parts, textile, packaging, automotive supply and regular shipments."
        },
        {
          title: "Customs and border coordination",
          text:
            "Export papers, consignee data, delivery window and border progress are shared clearly with the shipper."
        },
        {
          title: "Multilingual operations",
          text:
            "Turkish, English, Russian, German and Romanian communication reduces gaps between driver, shipper and consignee."
        }
      ]
    },
    process: {
      eyebrow: "Operations flow",
      title: "Fit check first, then clear price and dispatch.",
      steps: [
        {
          title: "Cargo and document data",
          text: "Origin, destination, cargo type, dimensions, weight, invoice/waybill, customs and ADR data are collected."
        },
        {
          title: "Permit and vehicle check",
          text: "Document scope, vehicle fit, driver data, route and special cargo acceptance conditions are reviewed."
        },
        {
          title: "Loading and trip",
          text: "Loading time, plate, trip data and customs/border status are updated throughout the operation."
        },
        {
          title: "Delivery closeout",
          text: "Delivery confirmation, consignee notes, shortage/damage checks and closeout documents are shared."
        }
      ]
    },
    quote: {
      eyebrow: "Quote and dispatch",
      title: "Send the load, route and documents; we will clarify the right vehicle and transport plan.",
      text:
        "After the request, document scope, cargo class, vehicle fit, customs papers and delivery window are reviewed in the initial operations check.",
      fields: {
        name: "Full name",
        company: "Company",
        contact: "Email or phone",
        route: "Route",
        routePlaceholder: "Istanbul - Berlin",
        cargo: "Cargo details",
        cargoPlaceholder: "Pallet count, weight, dimensions, delivery date"
      },
      button: "Create transport request",
      success: "Request draft prepared. Cargo, document and route details will move to operations pre-check."
    },
    footer: "Road transport with document, route and cargo-fit pre-checks."
  },
  ru: {
    nav: {
      capabilities: "Допуски",
      services: "Услуги",
      process: "Процесс",
      contact: "Контакт"
    },
    hero: {
      eyebrow: "Автологистика европейского стандарта",
      title: "GakkoTransport23",
      lead:
        "Логистическое сопровождение коммерческих грузов с проверкой разрешений, данных рейса, документов и условий приема специальных грузов.",
      primaryCta: "Запросить расчет",
      secondaryCta: "Типы грузов"
    },
    stats: [
      { value: "C2 / K1", label: "коммерческая основа" },
      { value: "Пригодность груза", label: "проверка документов и маршрута" },
      { value: "TR / EU", label: "таможня и маршрут" }
    ],
    signals: ["Операция C2", "Внутренний K1", "Данные U-ETDS", "Проверка спецгруза"],
    capabilities: {
      eyebrow: "Документы и допуск",
      title: "Гибкая операционная работа с дисциплиной документированной перевозки.",
      text:
        "Перед приемом груза проверяются разрешения, пригодность машины, данные рейса, таможенные документы и класс груза.",
      cards: [
        {
          title: "C2 / международный груз",
          text: "Для маршрутов Турция-Европа данные машины, водителя, рейса и доставки собираются в один файл."
        },
        {
          title: "K1 / внутренний участок",
          text: "Участок до порта, склада, завода или адреса получателя планируется с понятными документами."
        },
        {
          title: "U-ETDS и документы",
          text: "Отправитель, получатель, номер машины, водитель, тип груза, вес и точки загрузки уточняются заранее."
        },
        {
          title: "Контролируемый прием",
          text: "Для ADR или грузов с разрешениями заранее проверяются класс, UN-код, упаковка и пригодность машины."
        }
      ]
    },
    services: {
      eyebrow: "Операционная модель",
      title: "Полная фура, частичный груз и проектные партии с постоянным операционным сопровождением.",
      text: "От плана загрузки до подтверждения доставки статус машины, таможенные документы и операционные обновления ведутся в едином процессе.",
      items: [
        {
          title: "Полная и частичная загрузка",
          text: "Паллеты, оборудование, текстиль, упаковка, автокомпоненты и регулярные отправки планируются по емкости."
        },
        {
          title: "Многоязычная координация",
          text: "Турецкий, английский, русский, немецкий и румынский упрощают связь сторон."
        },
        {
          title: "Маршрут, таможня и граница",
          text: "Документы, данные получателя, окно доставки и статус границы обновляются по ходу перевозки."
        }
      ]
    },
    process: {
      eyebrow: "Рабочий процесс",
      title: "Сначала проверка допуска, затем цена и отправка.",
      steps: [
        { title: "Данные груза", text: "Принимаются пункты, габариты, вес, тип груза и окно доставки." },
        { title: "Проверка", text: "Документы, разрешения, маршрут и пригодность машины проверяются в тот же день." },
        { title: "Загрузка", text: "Склад, водитель и операционная команда работают в едином потоке информации." },
        { title: "Отчет", text: "Подтверждение прибытия, заметки и нужные документы передаются при закрытии." }
      ]
    },
    quote: {
      eyebrow: "Расчет и операция",
      title: "Отправьте маршрут, тип груза и дату доставки; мы уточним план перевозки.",
      text:
        "После заявки маршрут, пригодность машины, документы и окно доставки проходят первичную операционную проверку.",
      fields: {
        name: "Имя и фамилия",
        company: "Компания",
        contact: "Email или телефон",
        route: "Маршрут",
        routePlaceholder: "Стамбул - Берлин",
        cargo: "Информация о грузе",
        cargoPlaceholder: "Паллеты, вес, габариты, дата доставки"
      },
      button: "Создать заявку",
      success: "Черновик заявки подготовлен. После добавления адреса отправки форма пойдет напрямую в операцию."
    },
    footer: "Автоперевозки с предварительной проверкой документов, маршрута и пригодности груза."
  },
  de: {
    nav: {
      capabilities: "Umfang",
      services: "Leistungen",
      process: "Ablauf",
      contact: "Kontakt"
    },
    hero: {
      eyebrow: "Straßenlogistik nach europäischem Standard",
      title: "GakkoTransport23",
      lead:
        "Geplante Logistik fur gewerbliche Ladungen mit Dokumentenprufung, Fahrtdaten, Zollabgleich und Eignungsprufung fur Sonderfracht.",
      primaryCta: "Angebot anfragen",
      secondaryCta: "Frachtumfang"
    },
    stats: [
      { value: "C2 / K1", label: "gewerbliche Frachtbasis" },
      { value: "Fracht-Eignung", label: "Dokument- und Routenvorprufung" },
      { value: "TR / EU", label: "Zoll und Route" }
    ],
    signals: ["C2-konforme Operation", "K1 Inlandsstrecke", "U-ETDS Daten", "Sonderfracht-Vorprufung"],
    capabilities: {
      eyebrow: "Dokumente und Eignung",
      title: "Flexible Operations mit dokumentierter Transportdisziplin.",
      text:
        "Vor Annahme werden Dokumentenumfang, Fahrzeugeignung, Fahrtdaten, Zollpapiere und Frachtklasse gepruft.",
      cards: [
        {
          title: "C2 / internationale Fracht",
          text: "Fur Turkei-Europa Ladungen werden Fahrzeug, Fahrer, Fahrt und Lieferdaten in einem Ablauf gesammelt."
        },
        {
          title: "K1 / Inlandsstrecke",
          text: "Die Strecke zu Hafen, Lager, Werk oder Empfangeradresse wird mit klaren Dokumenten geplant."
        },
        {
          title: "U-ETDS und Unterlagen",
          text: "Absender, Empfanger, Kennzeichen, Fahrer, Frachtart, Gewicht und Ladepunkte werden vorab geklart."
        },
        {
          title: "Kontrollierte Annahme",
          text: "ADR- oder genehmigungspflichtige Ladungen werden nach Klasse, UN-Code, Verpackung und Fahrzeug gepruft."
        }
      ]
    },
    services: {
      eyebrow: "Operationsstruktur",
      title: "Komplettladung, Teilladung und Projektteile mit kontinuierlicher Operationsfuhrung.",
      text:
        "Vom Ladeplan bis zur Lieferbestatigung werden Fahrzeugstatus, Zollunterlagen und operative Updates in einem abgestimmten Prozess verfolgt.",
      items: [
        {
          title: "Komplett- und Teilladung",
          text: "Paletten, Maschinenteile, Textil, Verpackung, Automotive-Zulieferteile und regelmaßige Sendungen werden geplant."
        },
        {
          title: "Mehrsprachige Koordination",
          text: "Turkisch, Englisch, Russisch, Deutsch und Rumanisch erleichtern die Kommunikation."
        },
        {
          title: "Zoll, Route und Grenze",
          text: "Exportpapiere, Empfangerdaten, Lieferfenster und Grenzstatus werden transparent geteilt."
        }
      ]
    },
    process: {
      eyebrow: "Workflow",
      title: "Erst Eignungsprufung, dann Preis und Disposition.",
      steps: [
        { title: "Frachtspezifikation", text: "Start, Ziel, Maße, Gewicht, Frachttyp und Lieferfenster werden aufgenommen." },
        { title: "Eignungsprufung", text: "Dokumente, Genehmigungen, Route und Fahrzeugeignung werden am selben Tag gepruft." },
        { title: "Beladung und Tracking", text: "Ladestelle, Fahrer und Operations-Team arbeiten uber einen gemeinsamen Informationsfluss." },
        { title: "Lieferbericht", text: "Ankunftsbestatigung, Liefernotizen und erforderliche Dokumente werden geteilt." }
      ]
    },
    quote: {
      eyebrow: "Angebot und Operation",
      title: "Senden Sie Route, Frachttyp und Lieferdatum; wir klaren den Transportplan.",
      text:
        "Nach Eingang der Anfrage werden Route, Fahrzeugeignung, Dokumentenbedarf und Lieferfenster in der ersten operativen Prufung geklart.",
      fields: {
        name: "Name",
        company: "Firma",
        contact: "E-Mail oder Telefon",
        route: "Route",
        routePlaceholder: "Istanbul - Berlin",
        cargo: "Frachtdetails",
        cargoPlaceholder: "Paletten, Gewicht, Maße, Lieferdatum"
      },
      button: "Anfrage erstellen",
      success: "Anfrageentwurf vorbereitet. Sobald eine Empfangsadresse hinterlegt ist, lauft das Formular direkt in die Operation."
    },
    footer: "Straßentransport mit Vorprufung von Dokumenten, Route und Frachteignung."
  },
  ro: {
    nav: {
      capabilities: "Autorizari",
      services: "Servicii",
      process: "Proces",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Logistica rutiera la standard european",
      title: "GakkoTransport23",
      lead:
        "Serviciu logistic planificat pentru marfa comerciala, cu verificare documente, date cursa, vama si conditii de acceptare pentru marfa speciala.",
      primaryCta: "Cere oferta",
      secondaryCta: "Tipuri marfa"
    },
    stats: [
      { value: "C2 / K1", label: "baza marfa comerciala" },
      { value: "Potrivire marfa", label: "preverificare acte si ruta" },
      { value: "TR / EU", label: "vama si ruta" }
    ],
    signals: ["Operare C2", "Tronson K1", "Date U-ETDS", "Preverificare marfa speciala"],
    capabilities: {
      eyebrow: "Documente si conformitate",
      title: "Operatiuni flexibile cu disciplina unui transport documentat.",
      text:
        "Inainte de acceptare se verifica documentele, camionul, datele cursei, vama si clasa marfii.",
      cards: [
        {
          title: "C2 / marfa internationala",
          text: "Pentru ruta Turcia-Europa, datele camionului, soferului, cursei si livrarii sunt puse intr-un singur flux."
        },
        {
          title: "K1 / tronson intern",
          text: "Tronsonul catre port, depozit, fabrica sau destinatar este planificat cu documente clare."
        },
        {
          title: "U-ETDS si acte",
          text: "Expeditorul, destinatarul, numarul camionului, soferul, tipul marfii, greutatea si punctele de incarcare se clarifica initial."
        },
        {
          title: "Acceptare controlata",
          text: "Pentru ADR sau permise speciale se verifica clasa, codul UN, ambalajul si camionul."
        }
      ]
    },
    services: {
      eyebrow: "Structura operationala",
      title: "Camion complet, marfa partiala si piese de proiect cu urmarire operationala constanta.",
      text:
        "De la planul de incarcare pana la confirmarea livrarii, statusul camionului, actele vamale si actualizarile operationale sunt urmarite intr-un proces coordonat.",
      items: [
        {
          title: "Camion complet si partial",
          text: "Paleti, piese utilaje, textile, ambalaje, automotive si livrari regulate sunt planificate dupa capacitate."
        },
        {
          title: "Coordonare multilingva",
          text: "Turca, engleza, rusa, germana si romana simplifica legatura dintre expeditor si destinatar."
        },
        {
          title: "Vama, ruta si frontiera",
          text: "Actele de export, datele destinatarului, fereastra de livrare si statusul frontierei sunt comunicate clar."
        }
      ]
    },
    process: {
      eyebrow: "Flux de lucru",
      title: "Intai verificare, apoi pret clar si expediere.",
      steps: [
        { title: "Detalii marfa", text: "Se colecteaza originea, destinatia, dimensiunile, greutatea si fereastra de livrare." },
        { title: "Verificare", text: "Documentele, permisele, ruta si disponibilitatea camionului sunt verificate in aceeasi zi." },
        { title: "Incarcare", text: "Locatia, soferul si echipa operationala lucreaza cu acelasi flux de informatii." },
        { title: "Raport", text: "Confirmarea sosirii, notele de livrare si documentele necesare sunt trimise la inchidere." }
      ]
    },
    quote: {
      eyebrow: "Oferta si operatiuni",
      title: "Trimite ruta, tipul de marfa si data livrarii; clarificam planul de transport.",
      text:
        "Dupa primirea cererii, ruta, disponibilitatea camionului, documentele si fereastra de livrare sunt verificate in primul control operational.",
      fields: {
        name: "Nume complet",
        company: "Companie",
        contact: "Email sau telefon",
        route: "Ruta",
        routePlaceholder: "Istanbul - Berlin",
        cargo: "Detalii marfa",
        cargoPlaceholder: "Numar paleti, greutate, dimensiuni, data livrarii"
      },
      button: "Creeaza cerere",
      success: "Sablonul cererii este pregatit. Dupa adaugarea unei adrese de primire, formularul va merge direct catre operatiuni."
    },
    footer: "Transport rutier cu preverificare de documente, ruta si potrivire marfa."
  }
} as const;

export type Dictionary = (typeof dictionaries)[LanguageCode];

export function isLanguageCode(value: string): value is LanguageCode {
  return value in dictionaries;
}
