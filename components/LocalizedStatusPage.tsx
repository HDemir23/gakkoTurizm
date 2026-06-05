"use client";

import { LanguageProvider, useLanguage } from "@/components/LanguageProvider";
import { StatusPage } from "@/components/StatusPage";
import {
  BRAND_CONTACT_EMAIL,
  BRAND_CONTACT_PHONE_HREF,
  BRAND_CONTACT_WHATSAPP_HREF,
  BRAND_SHORT_NAME
} from "@/lib/brand";
import { languages, type LanguageCode } from "@/lib/i18n";
import { Construction, FileQuestion, Home, Mail, MessageCircle, Phone } from "lucide-react";
import { useMemo } from "react";

type StatusPageKind = "notFound" | "maintenance";

type LocalizedStatusPageProps = {
  kind: StatusPageKind;
};

type StatusPageCopy = {
  status: string;
  eyebrow: string;
  title: string;
  lead: string;
  points: string[];
  labels: {
    homeAria: string;
    points: string;
    actions: string;
    contact: string;
    language: string;
    whatsapp: string;
  };
  actions: {
    primary: string;
    secondary: string;
    tertiary?: string;
  };
};

const statusPageCopy: Record<LanguageCode, Record<StatusPageKind, StatusPageCopy>> = {
  tr: {
    notFound: {
      status: "404",
      eyebrow: "Sayfa bulunamadı",
      title: "Aradığınız sayfa bulunamadı.",
      lead: `${BRAND_SHORT_NAME} bağlantısı değişmiş olabilir. Taşıma hizmetleri, rota bilgileri ve teklif formu için ana sayfaya dönebilirsiniz.`,
      points: [
        "URL adresini kontrol edin.",
        "Ana sayfadan hizmet ve rota bilgilerine ulaşın.",
        "Acil taşıma talepleri için WhatsApp kanalını kullanın."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} ana sayfa`,
        points: "Durum bilgileri",
        actions: "Sayfa işlemleri",
        contact: "Hızlı iletişim",
        language: "Dil seçimi",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Ana sayfa",
        secondary: "Teklif alanı",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Bakım",
      eyebrow: "Planlı bakım",
      title: "Site kısa süreliğine bakımda.",
      lead: "Web sitesi üzerinde kısa süreli teknik düzenleme yapılıyor. Taşıma talebi, evrak veya rota bilgisi için doğrudan iletişim kanalları açıktır.",
      points: [
        "Telefon ve WhatsApp üzerinden operasyon iletişimi devam ediyor.",
        "Yük, güzergah ve evrak bilgileri e-posta ile alınabilir.",
        "Site aynı domain üzerinden tekrar yayına alınacak."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} ana sayfa`,
        points: "Durum bilgileri",
        actions: "Sayfa işlemleri",
        contact: "Hızlı iletişim",
        language: "Dil seçimi",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "WhatsApp'tan yaz",
        secondary: "Ara",
        tertiary: "E-posta gönder"
      }
    }
  },
  el: {
    notFound: {
      status: "404",
      eyebrow: "Η σελίδα δεν βρέθηκε",
      title: "Η σελίδα που ζητήσατε δεν βρέθηκε.",
      lead: `Ο σύνδεσμος του ${BRAND_SHORT_NAME} μπορεί να έχει αλλάξει. Μπορείτε να επιστρέψετε στην αρχική σελίδα για υπηρεσίες μεταφοράς, διαδρομές και τη φόρμα προσφοράς.`,
      points: [
        "Ελέγξτε τη διεύθυνση URL.",
        "Βρείτε υπηρεσίες και διαδρομές από την αρχική σελίδα.",
        "Για επείγοντα αιτήματα μεταφοράς χρησιμοποιήστε το WhatsApp."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} αρχική σελίδα`,
        points: "Πληροφορίες κατάστασης",
        actions: "Ενέργειες σελίδας",
        contact: "Γρήγορη επικοινωνία",
        language: "Επιλογή γλώσσας",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Αρχική σελίδα",
        secondary: "Πεδίο προσφοράς",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Συντήρηση",
      eyebrow: "Προγραμματισμένη συντήρηση",
      title: "Ο ιστότοπος είναι προσωρινά σε συντήρηση.",
      lead: "Πραγματοποιείται σύντομη τεχνική ενημέρωση στον ιστότοπο. Για αιτήματα μεταφοράς, έγγραφα ή πληροφορίες διαδρομής, τα άμεσα κανάλια επικοινωνίας παραμένουν διαθέσιμα.",
      points: [
        "Η επιχειρησιακή επικοινωνία συνεχίζεται μέσω τηλεφώνου και WhatsApp.",
        "Τα στοιχεία φορτίου, διαδρομής και εγγράφων μπορούν να σταλούν με e-mail.",
        "Ο ιστότοπος θα επανέλθει στο ίδιο domain."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} αρχική σελίδα`,
        points: "Πληροφορίες κατάστασης",
        actions: "Ενέργειες σελίδας",
        contact: "Γρήγορη επικοινωνία",
        language: "Επιλογή γλώσσας",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Γράψτε στο WhatsApp",
        secondary: "Κλήση",
        tertiary: "Στείλτε e-mail"
      }
    }
  },
  en: {
    notFound: {
      status: "404",
      eyebrow: "Page not found",
      title: "The page you are looking for was not found.",
      lead: `The ${BRAND_SHORT_NAME} link may have changed. Return to the homepage for transport services, route information, and the quote form.`,
      points: [
        "Check the URL address.",
        "Use the homepage to reach service and route details.",
        "For urgent transport requests, use the WhatsApp channel."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} homepage`,
        points: "Status details",
        actions: "Page actions",
        contact: "Quick contact",
        language: "Language selection",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Homepage",
        secondary: "Quote area",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Maintenance",
      eyebrow: "Scheduled maintenance",
      title: "The site is briefly under maintenance.",
      lead: "A short technical update is being made to the website. Direct contact channels remain available for transport requests, documents, or route details.",
      points: [
        "Operations contact continues by phone and WhatsApp.",
        "Cargo, route, and document details can be sent by email.",
        "The site will return on the same domain."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} homepage`,
        points: "Status details",
        actions: "Page actions",
        contact: "Quick contact",
        language: "Language selection",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Write on WhatsApp",
        secondary: "Call",
        tertiary: "Send email"
      }
    }
  },
  ru: {
    notFound: {
      status: "404",
      eyebrow: "Страница не найдена",
      title: "Запрошенная страница не найдена.",
      lead: `Ссылка ${BRAND_SHORT_NAME} могла измениться. Вернитесь на главную страницу, чтобы посмотреть услуги перевозки, маршруты и форму запроса.`,
      points: [
        "Проверьте адрес URL.",
        "Информация об услугах и маршрутах доступна на главной странице.",
        "Для срочных запросов на перевозку используйте WhatsApp."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} главная страница`,
        points: "Информация о статусе",
        actions: "Действия страницы",
        contact: "Быстрая связь",
        language: "Выбор языка",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Главная",
        secondary: "Запрос цены",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Работы",
      eyebrow: "Плановое обслуживание",
      title: "Сайт временно на обслуживании.",
      lead: "На сайте выполняется короткое техническое обновление. Для запросов на перевозку, документов или информации о маршруте доступны прямые каналы связи.",
      points: [
        "Операционная связь продолжается по телефону и WhatsApp.",
        "Данные о грузе, маршруте и документах можно отправить по e-mail.",
        "Сайт снова будет доступен на том же домене."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} главная страница`,
        points: "Информация о статусе",
        actions: "Действия страницы",
        contact: "Быстрая связь",
        language: "Выбор языка",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Написать в WhatsApp",
        secondary: "Позвонить",
        tertiary: "Отправить e-mail"
      }
    }
  },
  de: {
    notFound: {
      status: "404",
      eyebrow: "Seite nicht gefunden",
      title: "Die gesuchte Seite wurde nicht gefunden.",
      lead: `Der Link von ${BRAND_SHORT_NAME} kann sich geändert haben. Auf der Startseite finden Sie Transportleistungen, Routeninformationen und das Anfrageformular.`,
      points: [
        "Prüfen Sie die URL-Adresse.",
        "Nutzen Sie die Startseite für Services und Routen.",
        "Für dringende Transportanfragen nutzen Sie WhatsApp."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} Startseite`,
        points: "Statusinformationen",
        actions: "Seitenaktionen",
        contact: "Schnellkontakt",
        language: "Sprachauswahl",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Startseite",
        secondary: "Anfragebereich",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Wartung",
      eyebrow: "Geplante Wartung",
      title: "Die Website ist kurzzeitig in Wartung.",
      lead: "Auf der Website wird eine kurze technische Aktualisierung durchgeführt. Direkte Kontaktkanäle bleiben für Transportanfragen, Dokumente und Routeninformationen verfügbar.",
      points: [
        "Die operative Kommunikation läuft per Telefon und WhatsApp weiter.",
        "Ladungs-, Routen- und Dokumentdetails können per E-Mail gesendet werden.",
        "Die Website wird auf derselben Domain wieder online sein."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} Startseite`,
        points: "Statusinformationen",
        actions: "Seitenaktionen",
        contact: "Schnellkontakt",
        language: "Sprachauswahl",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Per WhatsApp schreiben",
        secondary: "Anrufen",
        tertiary: "E-Mail senden"
      }
    }
  },
  ro: {
    notFound: {
      status: "404",
      eyebrow: "Pagina nu a fost găsită",
      title: "Pagina căutată nu a fost găsită.",
      lead: `Linkul ${BRAND_SHORT_NAME} este posibil să se fi schimbat. Reveniți la pagina principală pentru servicii de transport, rute și formularul de ofertă.`,
      points: [
        "Verificați adresa URL.",
        "Accesați pagina principală pentru servicii și rute.",
        "Pentru solicitări urgente de transport, folosiți WhatsApp."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} pagina principală`,
        points: "Detalii stare",
        actions: "Acțiuni pagină",
        contact: "Contact rapid",
        language: "Selectare limbă",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Pagina principală",
        secondary: "Zona ofertă",
        tertiary: "WhatsApp"
      }
    },
    maintenance: {
      status: "Mentenanță",
      eyebrow: "Mentenanță planificată",
      title: "Site-ul este temporar în mentenanță.",
      lead: "Pe site se face o scurtă actualizare tehnică. Canalele directe de contact rămân disponibile pentru solicitări de transport, documente sau detalii despre rute.",
      points: [
        "Comunicarea operațională continuă prin telefon și WhatsApp.",
        "Detaliile despre marfă, rută și documente pot fi trimise prin e-mail.",
        "Site-ul va reveni pe același domeniu."
      ],
      labels: {
        homeAria: `${BRAND_SHORT_NAME} pagina principală`,
        points: "Detalii stare",
        actions: "Acțiuni pagină",
        contact: "Contact rapid",
        language: "Selectare limbă",
        whatsapp: "WhatsApp"
      },
      actions: {
        primary: "Scrie pe WhatsApp",
        secondary: "Sună",
        tertiary: "Trimite e-mail"
      }
    }
  }
};

const languageCodes = Object.keys(languages) as LanguageCode[];

export function LocalizedStatusPage({ kind }: LocalizedStatusPageProps) {
  return (
    <LanguageProvider>
      <LocalizedStatusPageContent kind={kind} />
    </LanguageProvider>
  );
}

function LocalizedStatusPageContent({ kind }: LocalizedStatusPageProps) {
  const { language, setLanguage } = useLanguage();
  const copy = statusPageCopy[language][kind];
  const Icon = kind === "maintenance" ? Construction : FileQuestion;

  const actions = useMemo(() => {
    if (kind === "maintenance") {
      return [
        {
          href: BRAND_CONTACT_WHATSAPP_HREF,
          label: copy.actions.primary,
          icon: MessageCircle,
          variant: "primary" as const
        },
        { href: BRAND_CONTACT_PHONE_HREF, label: copy.actions.secondary, icon: Phone },
        { href: `mailto:${BRAND_CONTACT_EMAIL}`, label: copy.actions.tertiary ?? "Email", icon: Mail }
      ];
    }

    return [
      { href: "/", label: copy.actions.primary, icon: Home, variant: "primary" as const },
      { href: "/#contact", label: copy.actions.secondary, icon: MessageCircle },
      {
        href: BRAND_CONTACT_WHATSAPP_HREF,
        label: copy.actions.tertiary ?? copy.labels.whatsapp,
        icon: MessageCircle
      }
    ];
  }, [copy, kind]);

  const languageControl = (
    <div className="status-language-switcher" aria-label={copy.labels.language}>
      {languageCodes.map((code) => {
        const languageOption = languages[code];

        return (
          <button
            key={code}
            className="status-language-button"
            type="button"
            aria-pressed={language === code}
            aria-label={languageOption.label}
            onClick={() => setLanguage(code)}
          >
            <span className="status-language-flag" aria-hidden="true">
              {languageOption.flag}
            </span>
            <span>{languageOption.code}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <StatusPage
      status={copy.status}
      eyebrow={copy.eyebrow}
      title={copy.title}
      lead={copy.lead}
      icon={Icon}
      actions={actions}
      points={copy.points}
      labels={copy.labels}
      languageControl={languageControl}
    />
  );
}
