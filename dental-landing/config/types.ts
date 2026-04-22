export type AccentSegment = {
  text: string;
  accent?: boolean;
};

export type NavLink = {
  label: string;
  href?: string;
  external?: boolean;
  whatsapp?: boolean;
};

export type HeroStat = {
  value: string;
  label: string;
  labelStyle?: "default" | "stars";
};

export type Service = {
  name: string;
  image: string;
};

export type MethodologyCard =
  | { type: "content"; title: string; body: string }
  | { type: "image"; image: string };

export type TeamMember = {
  name: string;
  role: string;
  experience: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  rating: number;
  gender?: "male" | "female";
  avatar?: string;
};

export type FooterItem = {
  label: string;
  href?: string;
  external?: boolean;
  whatsapp?: boolean;
  muted?: boolean;
};

export type FooterColumn = {
  heading: string;
  items: FooterItem[];
};

export type FooterSocial = {
  label: string;
  href?: string;
  whatsapp?: boolean;
  external?: boolean;
};

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export type OpeningHours = {
  days: DayOfWeek[];
  opens: string;
  closes: string;
};

export type PostalAddress = {
  street: string;
  city: string;
  region: string;
  postalCode?: string;
  country: string;
};

export type GeoCoordinates = {
  lat: number;
  lng: number;
};

export type AggregateRating = {
  value: number;
  count: number;
};

export type StructuredData = {
  type?: "Dentist" | "MedicalBusiness" | "LocalBusiness";
  address: PostalAddress;
  hours?: OpeningHours[];
  geo?: GeoCoordinates;
  priceRange?: string;
  rating?: AggregateRating;
};

export type BrandLogo =
  | { type: "text" }
  | {
      type: "image";
      src: string;
      srcOnDark?: string;
      alt: string;
      height: number;
    };

export type ClinicConfig = {
  brand: {
    name: string;
    shortName?: string;
    logo?: BrandLogo;
  };
  theme: {
    primary: string;
    accent: string;
    label: string;
    bgSoft: string;
    footerBg: string;
    footerText: string;
    text: string;
  };
  contact: {
    whatsapp: {
      phone: string;
      defaultMessage: string;
    };
    email?: string;
    phoneDisplay: string;
    address: string;
    hours: string;
    mapQuery: string;
  };
  seo: {
    baseUrl: string;
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogAlt: string;
    siteName: string;
    locale: string;
    htmlLang: string;
    twitterDescription: string;
    structuredData?: StructuredData;
    noindex?: boolean;
  };
  nav: NavLink[];
  cta: {
    primaryLabel: string;
    contactLabel: string;
  };
  sections: {
    hero: {
      eyebrow: string;
      headline: AccentSegment[];
      subheadline: string;
      ctaLabel: string;
      image: string;
      laurel: {
        brand: string;
        label: string;
      };
      stats: HeroStat[];
    };
    services: {
      eyebrow: string;
      heading: AccentSegment[];
      items: Service[];
    };
    methodology: {
      eyebrow: string;
      paragraph: AccentSegment[];
      cards: MethodologyCard[];
    };
    team: {
      eyebrow: string;
      heading: AccentSegment[];
      members: TeamMember[];
    };
    testimonials: {
      eyebrow: string;
      heading: AccentSegment[];
      items: Testimonial[];
    };
    contactCta: {
      eyebrow: string;
      heading: AccentSegment[];
      description: string;
      ctaLabel: string;
      addressLine: string;
      hoursLine: string;
      mapTitle: string;
    };
    footer: {
      about: string;
      socials: FooterSocial[];
      columns: FooterColumn[];
      copyrightName: string;
    };
  };
};

