import { BRAND_FULL_NAME, BRAND_SHORT_NAME } from "@/lib/brand";

export const languages = {
  tr: { code: "TR", label: "Türkçe", flag: "🇹🇷" },
  el: { code: "EL", label: "Ελληνικά", flag: "🇬🇷" },
  en: { code: "EN", label: "English", flag: "🇬🇧" },
  ru: { code: "RU", label: "Русский", flag: "🇷🇺" },
  de: { code: "DE", label: "Deutsch", flag: "🇩🇪" },
  ro: { code: "RO", label: "Română", flag: "🇷🇴" }
} as const;

export type LanguageCode = keyof typeof languages;

export const defaultLanguage: LanguageCode = "tr";

export const dictionaries = {
  tr: {
    nav: {
      capabilities: "Belgeler",
      services: "Taşıma",
      process: "Operasyon",
      contact: "İletişim"
    },
    hero: {
      eyebrow: "Belgeli uluslararası kara yolu taşımacılığı",
      title: BRAND_SHORT_NAME,
      lead:
        "C2 / K1 kapsamına uygun ticari yük organizasyonu, U-ETDS odaklı sefer bilgisi, evrak takibi ve özel yük uygunluk kontrolüyle Avrupa hattında planlı lojistik hizmeti.",
      primaryCta: "Taşıma teklifi al",
      secondaryCta: "Belge kapsamı"
    },
    stats: [
      { value: "C2 / K1", label: "ticari yük altyapısı" },
      { value: "Yük uygunluğu", label: "belge ve rota ön kontrolü" },
      { value: "TR / EU", label: "gümrük ve rota takibi" }
    ],
    signals: ["C2 uyumlu operasyon", "K1 yurt içi taşıma", "U-ETDS bilgi hazırlığı", "Özel yük ön kontrolü"],
    capabilities: {
      eyebrow: "Belge ve uygunluk",
      title: "Esnek operasyon, belgeli taşımacı disiplini.",
      text:
        "Yük kabulünden önce yetki belgesi kapsamı, taşıt uygunluğu, sefer bildirimi, gümrük evrakı ve tehlikeli madde sınıfı ayrıca kontrol edilir.",
      cards: [
        {
          title: "C2 / uluslararası eşya taşıma",
          text:
            "Ticari yüklerde Türkiye çıkışlı Avrupa hatları için araç, sürücü, sefer ve teslim bilgileri tek dosyada toplanır."
        },
        {
          title: "K1 / yurt içi ticari yük",
          text:
            "Yükleme noktasından liman, antrepo, fabrika veya alıcı adresine kadar yurt içi ayak mevzuata uygun planlanır."
        },
        {
          title: "U-ETDS ve evrak düzeni",
          text:
            "Gönderici, alıcı, plaka, sürücü, yük cinsi, ağırlık ve yükleme-boşaltma bilgileri operasyon başında netleştirilir."
        },
        {
          title: "Kontrollü yük kabul",
          text:
            "ADR veya ek izin gerektiren yüklerde sınıf, UN kodu, ambalaj ve araç uygunluğu sevkiyat öncesinde incelenir."
        }
      ]
    },
    services: {
      eyebrow: "Taşıma hizmetleri",
      title: "Komple tır, parsiyel yük ve proje parçalarında sürekli operasyon takibi.",
      text:
        "Yükleme planından teslim teyidine kadar araç durumu, gümrük evrakı ve operasyon güncellemeleri tek koordinasyon sürecinde takip edilir.",
      items: [
        {
          title: "Komple tır ve parsiyel taşıma",
          text:
            "Paletli ticari ürün, makine parçası, tekstil, ambalaj, otomotiv yan sanayi ve düzenli sevkiyatlar için kapasite planlanır."
        },
        {
          title: "Gümrük ve sınır koordinasyonu",
          text:
            "İhracat evrakı, alıcı bilgisi, teslim penceresi ve sınır geçişi süreci göndericiyle açık şekilde paylaşılır."
        },
        {
          title: "Çok dilli operasyon iletişimi",
          text:
            "Türkçe ve Yunanca iletişimle sürücü, gönderici ve alıcı arasındaki bilgi kaybı azaltılır."
        }
      ]
    },
    process: {
      eyebrow: "Operasyon akışı",
      title: "Önce uygunluk, sonra net fiyat ve sevkiyat.",
      steps: [
        {
          title: "Yük ve belge bilgisi",
          text: "Çıkış-varış, yük cinsi, ölçü, ağırlık, fatura/irsaliye, gümrük ve varsa ADR bilgisi alınır."
        },
        {
          title: "Yetki ve araç kontrolü",
          text: "Belge kapsamı, taşıt uygunluğu, sürücü bilgisi, rota ve özel yük kabul koşulları kontrol edilir."
        },
        {
          title: "Yükleme ve sefer",
          text: "Yükleme saati, plaka, sefer bilgisi ve sınır/gümrük geçiş durumu operasyon boyunca güncellenir."
        },
        {
          title: "Teslim ve kapanış",
          text: "Teslim teyidi, alıcı notu, eksik/hasar kontrolü ve gerekli kapanış belgeleri paylaşılır."
        }
      ]
    },
    quote: {
      eyebrow: "Teklif ve sevkiyat",
      title: "Yük, güzergâh ve gerekli belgeleri iletin; uygun aracı ve taşıma planını netleştirelim.",
      text:
        "Talep geldikten sonra belge kapsamı, yük sınıfı, araç uygunluğu, gümrük evrakı ve teslim penceresi ilk operasyon kontrolünden geçirilir.",
      fields: {
        name: "Ad soyad",
        company: "Firma",
        contact: "E-posta veya telefon",
        route: "Güzergâh",
        routePlaceholder: "İstanbul - Berlin",
        cargo: "Yük bilgisi",
        cargoPlaceholder: "Palet sayısı, kilo, ölçü, teslim tarihi"
      },
      button: "Taşıma talebi oluştur",
      submitting: "Talep gönderiliyor...",
      success: "Talebiniz alındı. Yük, belge ve rota bilgileri operasyon ön kontrolüne aktarılacak.",
      error: "Talep gönderilemedi. Lütfen daha sonra tekrar deneyin veya direkt iletişim kanallarını kullanın."
    },
    contact: {
      eyebrow: "Direkt iletişim",
      title: "Teklif, evrak veya rota için doğru kanalı seçin.",
      text: "Telefonla hızlı görüşün, e-posta ile yük detaylarını gönderin veya konumu haritada açın.",
      mailSubject: `${BRAND_FULL_NAME} taşıma talebi`,
      channels: {
        phone: { label: "Telefon", action: "Ara" },
        email: { label: "E-posta", action: "Mail aç" },
        whatsapp: { label: "WhatsApp", action: "Mesaj yaz" },
        address: { label: "Adres", action: "Haritada aç" }
      },
      footerLinks: {
        phone: "Ara",
        email: "Mail gönder",
        address: "Harita"
      }
    },
    footer: "Belge, rota ve yük uygunluğu ön kontrolüyle kara yolu taşımacılığı."
  },
  el: {
    nav: {
      capabilities: "Έγγραφα",
      services: "Μεταφορές",
      process: "Λειτουργία",
      contact: "Επικοινωνία"
    },
    hero: {
      eyebrow: "Πιστοποιημένες διεθνείς οδικές μεταφορές",
      title: BRAND_SHORT_NAME,
      lead:
        "Προγραμματισμένη υπηρεσία logistics στη γραμμή Ευρώπης με οργάνωση εμπορικών φορτίων σύμφωνα με C2 / K1, στοιχεία δρομολογίου για U-ETDS, παρακολούθηση εγγράφων και έλεγχο καταλληλότητας ειδικών φορτίων.",
      primaryCta: "Ζητήστε προσφορά μεταφοράς",
      secondaryCta: "Πεδίο εγγράφων"
    },
    stats: [
      { value: "C2 / K1", label: "υποδομή εμπορικού φορτίου" },
      { value: "Καταλληλότητα φορτίου", label: "προέλεγχος εγγράφων και διαδρομής" },
      { value: "TR / EU", label: "τελωνειακή και δρομολογιακή παρακολούθηση" }
    ],
    signals: [
      "Λειτουργία συμβατή με C2",
      "Εγχώρια μεταφορά K1",
      "Προετοιμασία στοιχείων U-ETDS",
      "Προέλεγχος ειδικού φορτίου"
    ],
    capabilities: {
      eyebrow: "Έγγραφα και συμμόρφωση",
      title: "Ευέλικτη λειτουργία με πειθαρχία αδειοδοτημένου μεταφορέα.",
      text:
        "Πριν από την αποδοχή φορτίου ελέγχονται το πεδίο της άδειας, η καταλληλότητα του οχήματος, η δήλωση δρομολογίου, τα τελωνειακά έγγραφα και η κατηγορία επικίνδυνων εμπορευμάτων.",
      cards: [
        {
          title: "C2 / διεθνής μεταφορά εμπορευμάτων",
          text:
            "Για εμπορικά φορτία με αναχώρηση από την Τουρκία προς ευρωπαϊκές γραμμές, τα στοιχεία οχήματος, οδηγού, δρομολογίου και παράδοσης συγκεντρώνονται σε έναν φάκελο."
        },
        {
          title: "K1 / εγχώριο εμπορικό φορτίο",
          text:
            "Το εγχώριο σκέλος από το σημείο φόρτωσης έως λιμάνι, αποθήκη, εργοστάσιο ή διεύθυνση παραλήπτη σχεδιάζεται σύμφωνα με τη νομοθεσία."
        },
        {
          title: "U-ETDS και τάξη εγγράφων",
          text:
            "Αποστολέας, παραλήπτης, πινακίδα, οδηγός, είδος φορτίου, βάρος και στοιχεία φόρτωσης-εκφόρτωσης διευκρινίζονται στην αρχή της λειτουργίας."
        },
        {
          title: "Ελεγχόμενη αποδοχή φορτίου",
          text:
            "Για φορτία ADR ή φορτία που απαιτούν πρόσθετη άδεια, η κλάση, ο κωδικός UN, η συσκευασία και η καταλληλότητα του οχήματος εξετάζονται πριν από την αποστολή."
        }
      ]
    },
    services: {
      eyebrow: "Υπηρεσίες μεταφοράς",
      title: "Συνεχής λειτουργική παρακολούθηση για πλήρη φορτία, μερικά φορτία και project cargo.",
      text:
        "Από τον σχεδιασμό φόρτωσης έως την επιβεβαίωση παράδοσης, η κατάσταση οχήματος, τα τελωνειακά έγγραφα και οι λειτουργικές ενημερώσεις παρακολουθούνται σε μία συντονισμένη διαδικασία.",
      items: [
        {
          title: "Πλήρες φορτίο και μερική μεταφορά",
          text:
            "Προγραμματίζεται χωρητικότητα για εμπορεύματα σε παλέτες, εξαρτήματα μηχανημάτων, κλωστοϋφαντουργικά, συσκευασίες, ανταλλακτικά αυτοκινητοβιομηχανίας και τακτικές αποστολές."
        },
        {
          title: "Συντονισμός τελωνείων και συνόρων",
          text:
            "Τα έγγραφα εξαγωγής, τα στοιχεία παραλήπτη, το παράθυρο παράδοσης και η διαδικασία διέλευσης συνόρων κοινοποιούνται καθαρά στον αποστολέα."
        },
        {
          title: "Πολύγλωσση λειτουργική επικοινωνία",
          text:
            "Η επικοινωνία στα Τουρκικά και στα Ελληνικά μειώνει την απώλεια πληροφορίας μεταξύ οδηγού, αποστολέα και παραλήπτη."
        }
      ]
    },
    process: {
      eyebrow: "Ροή λειτουργίας",
      title: "Πρώτα έλεγχος καταλληλότητας, μετά καθαρή τιμή και αποστολή.",
      steps: [
        {
          title: "Στοιχεία φορτίου και εγγράφων",
          text:
            "Λαμβάνονται αφετηρία-προορισμός, είδος φορτίου, διαστάσεις, βάρος, τιμολόγιο/δελτίο αποστολής, τελωνείο και τυχόν στοιχεία ADR."
        },
        {
          title: "Έλεγχος άδειας και οχήματος",
          text:
            "Ελέγχονται το πεδίο εγγράφων, η καταλληλότητα οχήματος, τα στοιχεία οδηγού, η διαδρομή και οι ειδικοί όροι αποδοχής φορτίου."
        },
        {
          title: "Φόρτωση και δρομολόγιο",
          text:
            "Η ώρα φόρτωσης, η πινακίδα, τα στοιχεία δρομολογίου και η κατάσταση συνόρων/τελωνείου ενημερώνονται σε όλη τη λειτουργία."
        },
        {
          title: "Παράδοση και κλείσιμο",
          text:
            "Κοινοποιούνται η επιβεβαίωση παράδοσης, οι σημειώσεις παραλήπτη, ο έλεγχος ελλείψεων/ζημιών και τα απαραίτητα έγγραφα κλεισίματος."
        }
      ]
    },
    quote: {
      eyebrow: "Προσφορά και αποστολή",
      title:
        "Στείλτε το φορτίο, τη διαδρομή και τα απαραίτητα έγγραφα· να οριστικοποιήσουμε το κατάλληλο όχημα και το πλάνο μεταφοράς.",
      text:
        "Μετά την παραλαβή του αιτήματος, το πεδίο εγγράφων, η κατηγορία φορτίου, η καταλληλότητα οχήματος, τα τελωνειακά έγγραφα και το παράθυρο παράδοσης περνούν από αρχικό λειτουργικό έλεγχο.",
      fields: {
        name: "Ονοματεπώνυμο",
        company: "Εταιρεία",
        contact: "E-mail ή τηλέφωνο",
        route: "Διαδρομή",
        routePlaceholder: "Κωνσταντινούπολη - Βερολίνο",
        cargo: "Στοιχεία φορτίου",
        cargoPlaceholder: "Αριθμός παλετών, βάρος, διαστάσεις, ημερομηνία παράδοσης"
      },
      button: "Δημιουργία αιτήματος μεταφοράς",
      submitting: "Το αίτημα αποστέλλεται...",
      success:
        "Το αίτημά σας ελήφθη. Τα στοιχεία φορτίου, εγγράφων και διαδρομής θα περάσουν στον προέλεγχο λειτουργίας.",
      error:
        "Δεν ήταν δυνατή η αποστολή του αιτήματος. Δοκιμάστε ξανά αργότερα ή χρησιμοποιήστε τα άμεσα κανάλια επικοινωνίας."
    },
    contact: {
      eyebrow: "Άμεση επικοινωνία",
      title: "Επιλέξτε το σωστό κανάλι για προσφορά, έγγραφα ή διαδρομή.",
      text:
        "Καλέστε για γρήγορο συντονισμό, στείλτε τα στοιχεία φορτίου με e-mail ή ανοίξτε την τοποθεσία στον χάρτη.",
      mailSubject: `Αίτημα μεταφοράς ${BRAND_FULL_NAME}`,
      channels: {
        phone: { label: "Τηλέφωνο", action: "Κλήση" },
        email: { label: "E-mail", action: "Άνοιγμα mail" },
        whatsapp: { label: "WhatsApp", action: "Μήνυμα" },
        address: { label: "Διεύθυνση", action: "Άνοιγμα χάρτη" }
      },
      footerLinks: {
        phone: "Κλήση",
        email: "E-mail",
        address: "Χάρτης"
      }
    },
    footer: "Οδικές μεταφορές με προέλεγχο εγγράφων, διαδρομής και καταλληλότητας φορτίου."
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
      title: BRAND_SHORT_NAME,
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
            "Turkish and Greek communication reduces gaps between driver, shipper and consignee."
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
      submitting: "Sending request...",
      success: "Your request has been received. Cargo, document and route details will move to operations pre-check.",
      error: "The request could not be sent. Please try again later or use a direct contact channel."
    },
    contact: {
      eyebrow: "Direct contact",
      title: "Choose the right channel for quotes, documents or routes.",
      text: "Call for quick coordination, send cargo details by email or open the address in maps.",
      mailSubject: `${BRAND_FULL_NAME} transport request`,
      channels: {
        phone: { label: "Phone", action: "Call" },
        email: { label: "Email", action: "Open mail" },
        whatsapp: { label: "WhatsApp", action: "Message" },
        address: { label: "Address", action: "Open map" }
      },
      footerLinks: {
        phone: "Call",
        email: "Email",
        address: "Map"
      }
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
      title: BRAND_SHORT_NAME,
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
          text: "Турецкий и греческий упрощают связь между водителем, отправителем и получателем."
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
      submitting: "Заявка отправляется...",
      success: "Заявка получена. Данные груза, документов и маршрута будут переданы на операционную проверку.",
      error: "Заявку не удалось отправить. Попробуйте позже или используйте прямой канал связи."
    },
    contact: {
      eyebrow: "Прямой контакт",
      title: "Выберите канал для расчета, документов или маршрута.",
      text: "Позвоните для быстрой координации, отправьте данные груза по email или откройте адрес на карте.",
      mailSubject: `Заявка на перевозку ${BRAND_FULL_NAME}`,
      channels: {
        phone: { label: "Телефон", action: "Позвонить" },
        email: { label: "Email", action: "Открыть почту" },
        whatsapp: { label: "WhatsApp", action: "Написать" },
        address: { label: "Адрес", action: "Открыть карту" }
      },
      footerLinks: {
        phone: "Телефон",
        email: "Email",
        address: "Карта"
      }
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
      title: BRAND_SHORT_NAME,
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
          text: "Türkisch und Griechisch erleichtern die Kommunikation zwischen Fahrer, Absender und Empfänger."
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
      submitting: "Anfrage wird gesendet...",
      success: "Ihre Anfrage wurde empfangen. Fracht-, Dokumenten- und Routendaten gehen in die operative Vorprufung.",
      error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es spater erneut oder nutzen Sie einen direkten Kontaktkanal."
    },
    contact: {
      eyebrow: "Direkter Kontakt",
      title: "Wahlen Sie den passenden Kanal fur Angebot, Dokumente oder Route.",
      text: "Rufen Sie fur schnelle Abstimmung an, senden Sie Frachtdaten per E-Mail oder offnen Sie die Adresse in Maps.",
      mailSubject: `${BRAND_FULL_NAME} Transportanfrage`,
      channels: {
        phone: { label: "Telefon", action: "Anrufen" },
        email: { label: "E-Mail", action: "Mail offnen" },
        whatsapp: { label: "WhatsApp", action: "Nachricht" },
        address: { label: "Adresse", action: "Karte offnen" }
      },
      footerLinks: {
        phone: "Anrufen",
        email: "E-Mail",
        address: "Karte"
      }
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
      title: BRAND_SHORT_NAME,
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
          text: "Turca si greaca simplifica legatura dintre sofer, expeditor si destinatar."
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
      submitting: "Cererea se trimite...",
      success: "Cererea a fost primita. Detaliile despre marfa, documente si ruta vor intra in verificarea operationala.",
      error: "Cererea nu a putut fi trimisa. Incearca din nou mai tarziu sau foloseste un canal de contact direct."
    },
    contact: {
      eyebrow: "Contact direct",
      title: "Alege canalul potrivit pentru oferta, documente sau ruta.",
      text: "Suna pentru coordonare rapida, trimite detaliile marfii pe email sau deschide adresa in harta.",
      mailSubject: `Cerere transport ${BRAND_FULL_NAME}`,
      channels: {
        phone: { label: "Telefon", action: "Suna" },
        email: { label: "Email", action: "Deschide mail" },
        whatsapp: { label: "WhatsApp", action: "Mesaj" },
        address: { label: "Adresa", action: "Deschide harta" }
      },
      footerLinks: {
        phone: "Suna",
        email: "Email",
        address: "Harta"
      }
    },
    footer: "Transport rutier cu preverificare de documente, ruta si potrivire marfa."
  }
} as const;

export type Dictionary = (typeof dictionaries)[LanguageCode];

export function isLanguageCode(value: string): value is LanguageCode {
  return value in dictionaries;
}
