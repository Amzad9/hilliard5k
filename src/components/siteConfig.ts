export type SiteNavItem = {
  label: string;
  href: string;
};

export const siteNav: SiteNavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Event Details", href: "/event-details" },
  { label: "Race Map", href: "/maps" },
  { label: "Swag", href: "/swag" },
  { label: "Packet Pickup", href: "/packet-pickup" },
  { label: "Questions", href: "/questions" },
];

export const siteContact = {
  emailShowroom: "jeff@ultrafitusa.com",
  emailOperations: "jeff@ultrafitusa.com",
  phone: "614-332-5205",
  phoneHref: "tel:+16143325205",
  addressLines: [
    "Hilliard Sports Complex",
    "5001 Scioto Darby Rd,",
    "Hilliard, OH 43026",
  ],
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=5001+Scioto+Darby+Rd,+Hilliard,+OH+43026",
  businessHours: [
    "Collection & Race Morning | 5K begins at 9:00 AM",
    "Collection & Race Morning | 1-Mile Fun Run begins around 9:10 AM",
    "Venue | Hilliard Sports Complex in Hilliard, OH",
  ],
  socials: [
    {
      label: "Facebook (Hilliard 5K)",
      href: "https://www.facebook.com/",
      key: "facebook_turkey_trot",
    },
    {
      label: "Instagram (Hilliard 5K)",
      href: "https://www.instagram.com/",
      key: "instagram_easterseals",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/",
      key: "x",
    },
  ],
} as const;
