export type LangCode = 'de' | 'en';

export interface ServiceTranslation {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  actionText: string;
  features: string[];
}

export interface TranslationSchema {
  nav: {
    about: string;
    services: string;
    whyUs: string;
    contactBtn: string;
    openMenu: string;
  };
  hero: {
    locationBadge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    bottomText: string;
    discoverMore: string;
  };
  trust: {
    item1: string;
    item2: string;
    item3: string;
  };
  about: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    p1: string;
    p2: string;
    promiseTitle: string;
    promiseSubtitle: string;
  };
  services: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    descLine1: string;
    descLine2: string;
    descLine3: string;
    items: ServiceTranslation[];
  };
  whyUs: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    value4Title: string;
    value4Desc: string;
  };
  contact: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    phoneSubtext: string;
    whatsappBtn: string;
    location: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceDefaultOption: string;
    otherServiceOption: string;
    messageLabel: string;
    messagePlaceholder: string;
    consentText: string;
    submitBtn: string;
    submittingBtn: string;
    footnote: string;
    successTitle: string;
    successDesc: string;
    errors: {
      fullName: string;
      email: string;
      message: string;
      consent: string;
    };
  };
  footer: {
    tagline: string;
    backToTop: string;
    copyright: string;
    imprint: string;
    privacy: string;
  };
  quickBar: {
    call: string;
    whatsapp: string;
  };
}
