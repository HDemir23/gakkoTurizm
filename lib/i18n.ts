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
        "C2 / K1 kapsamina uygun ticari yuk organizasyonu, U-ETDS odakli sefer bilgisi, evrak takibi ve patlayici haric genis yuk kabul kapasitesiyle Avrupa hattinda calisan pratik lojistik ekip.",
      primaryCta: "Tasima teklifi al",
      secondaryCta: "Belge kapsami"
    },
    stats: [
      { value: "C2 / K1", label: "ticari yuk altyapisi" },
      { value: "Patlayici haric", label: "genis tasima kapsami" },
      { value: "TR / EU", label: "gumruk ve rota takibi" }
    ],
    signals: ["C2 uyumlu operasyon", "K1 yurtiçi tasima", "U-ETDS bilgi hazirligi", "ADR on kontrol"],
    capabilities: {
      eyebrow: "Belge ve uygunluk",
      title: "Kucuk firma hizi, belgeli tasimaci disiplini.",
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
          title: "Patlayici haric kontrollu kabul",
          text:
            "ADR veya ek izin gerektiren yuklerde sinif, UN kodu, ambalaj ve arac uygunlugu patlayici madde haric onceden incelenir."
        }
      ]
    },
    services: {
      eyebrow: "Tasima hizmetleri",
      title: "Komple tir, parsiyel yuk ve proje parcalarinda sahaya yakin takip.",
      text:
        "Buyuk firma gibi evrakli, kucuk firma gibi hizli calisir: yukleme saati, arac durumu, gumruk evragi ve teslim teyidi ayni hattan takip edilir.",
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
          text: "Belge kapsami, tasit uygunlugu, surucu bilgisi, rota ve yasakli/patlayici yuk riski kontrol edilir."
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
      title: "Yukunu, rotani ve gerekli belgeleri gonder; uygun araci ve tasima planini netlestirelim.",
      text:
        "Talep geldikten sonra belge kapsami, yuk sinifi, arac uygunlugu, gumruk evraki ve teslim penceresi hizli on kontrolden gecirilir.",
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
    footer: "Patlayici haric genis kapsamli, belgeli kara yolu tasimaciligi."
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
        "A practical logistics team for C2 / K1 aligned commercial cargo, U-ETDS-ready trip data, document follow-up and broad cargo acceptance except explosive goods.",
      primaryCta: "Get transport quote",
      secondaryCta: "Document scope"
    },
    stats: [
      { value: "C2 / K1", label: "commercial cargo base" },
      { value: "No explosives", label: "broad cargo scope" },
      { value: "TR / EU", label: "customs and route follow-up" }
    ],
    signals: ["C2-aligned operation", "K1 domestic leg", "U-ETDS data ready", "ADR pre-check"],
    capabilities: {
      eyebrow: "Documents and fit",
      title: "Small-company speed with documented carrier discipline.",
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
          title: "Controlled acceptance, no explosives",
          text:
            "For ADR or permit-sensitive loads, class, UN code, packaging and vehicle fit are reviewed before pickup."
        }
      ]
    },
    services: {
      eyebrow: "Transport services",
      title: "Full truckload, partial cargo and project parts with field-level follow-up.",
      text:
        "Documented like a large operator, fast like a small one: loading time, vehicle status, customs papers and delivery confirmation stay on one line.",
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
          text: "Document scope, vehicle fit, driver data, route and explosive/prohibited cargo risk are reviewed."
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
        "After the request, document scope, cargo class, vehicle fit, customs papers and delivery window pass a quick pre-check.",
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
    footer: "Documented road transport for broad cargo scope except explosives."
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
        "Практичная команда для коммерческих грузов с проверкой разрешений, данных рейса, документов и широким приемом грузов кроме взрывчатых.",
      primaryCta: "Запросить расчет",
      secondaryCta: "Типы грузов"
    },
    stats: [
      { value: "C2 / K1", label: "коммерческая основа" },
      { value: "Без взрывчатых", label: "широкий спектр грузов" },
      { value: "TR / EU", label: "таможня и маршрут" }
    ],
    signals: ["Операция C2", "Внутренний K1", "Данные U-ETDS", "Предпроверка ADR"],
    capabilities: {
      eyebrow: "Документы и допуск",
      title: "Скорость небольшой фирмы с дисциплиной документированной перевозки.",
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
          title: "Без взрывчатых",
          text: "Для ADR или грузов с разрешениями заранее проверяются класс, UN-код, упаковка и пригодность машины."
        }
      ]
    },
    services: {
      eyebrow: "Операционная модель",
      title: "Полная фура, частичный груз и проектные партии с живым контролем.",
      text: "Документально как крупный оператор, быстро как небольшая фирма: загрузка, машина, таможня и доставка в одной линии.",
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
        "После заявки маршрут, пригодность машины, документы и окно доставки уточняются в одном операционном процессе.",
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
    footer: "Бордово-белые международные автоперевозки."
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
        "Praktische Logistik fur gewerbliche Ladungen mit Dokumentenprufung, Fahrtdaten, Zollabgleich und breitem Frachtumfang außer Explosivgut.",
      primaryCta: "Angebot anfragen",
      secondaryCta: "Frachtumfang"
    },
    stats: [
      { value: "C2 / K1", label: "gewerbliche Frachtbasis" },
      { value: "Ohne Explosivgut", label: "breiter Frachtumfang" },
      { value: "TR / EU", label: "Zoll und Route" }
    ],
    signals: ["C2-konforme Operation", "K1 Inlandsstrecke", "U-ETDS Daten", "ADR Vorprufung"],
    capabilities: {
      eyebrow: "Dokumente und Eignung",
      title: "Kleine-Firma-Tempo mit dokumentierter Transportdisziplin.",
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
          text: "ADR- oder genehmigungspflichtige Ladungen werden außer Explosivgut nach Klasse, UN-Code und Fahrzeug gepruft."
        }
      ]
    },
    services: {
      eyebrow: "Operationsstruktur",
      title: "Komplettladung, Teilladung und Projektteile mit naher Operationsfuhrung.",
      text:
        "Dokumentiert wie ein großer Betreiber, schnell wie eine kleine Firma: Ladezeit, Fahrzeugstatus, Zoll und Lieferung bleiben in einer Linie.",
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
        "Nach Eingang der Anfrage werden Route, Fahrzeugeignung, Dokumentenbedarf und Lieferfenster im selben Operationsfluss geklart.",
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
    footer: "Bordeaux-weißer internationaler Straßentransport."
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
        "Echipa practica pentru marfa comerciala cu verificare documente, date cursa, vama si gama larga de acceptare fara explozivi.",
      primaryCta: "Cere oferta",
      secondaryCta: "Tipuri marfa"
    },
    stats: [
      { value: "C2 / K1", label: "baza marfa comerciala" },
      { value: "Fara explozivi", label: "gama larga de marfuri" },
      { value: "TR / EU", label: "vama si ruta" }
    ],
    signals: ["Operare C2", "Tronson K1", "Date U-ETDS", "Preverificare ADR"],
    capabilities: {
      eyebrow: "Documente si conformitate",
      title: "Viteza unei firme mici cu disciplina unui transport documentat.",
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
          text: "Pentru ADR sau permise speciale, fara explozivi, se verifica clasa, codul UN, ambalajul si camionul."
        }
      ]
    },
    services: {
      eyebrow: "Structura operationala",
      title: "Camion complet, marfa partiala si piese de proiect cu urmarire apropiata.",
      text:
        "Documentat ca un operator mare, rapid ca o firma mica: incarcare, camion, vama si confirmare livrare raman pe acelasi fir.",
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
        "Dupa primirea cererii, ruta, disponibilitatea camionului, documentele si fereastra de livrare sunt clarificate in acelasi flux operational.",
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
    footer: "Transport rutier documentat, fara explozivi, pe gama larga de marfuri."
  }
} as const;

export type Dictionary = (typeof dictionaries)[LanguageCode];

export function isLanguageCode(value: string): value is LanguageCode {
  return value in dictionaries;
}
