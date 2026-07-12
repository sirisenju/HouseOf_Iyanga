// ─── Calendly Event Type URLs ────────────────────────────────────────────────
export const CALENDLY_URLS = {
  nuptials:    "https://calendly.com/bookiyanga/the-nuptials-bridal",
  gemBride:    "https://calendly.com/bookiyanga/the-gem-bride-bridal",
  luxeBride:   "https://calendly.com/bookiyanga/the-luxe-bride-bridal",
  partyExtras: "https://calendly.com/bookiyanga/party-extras-enquiry",
  general:     "https://calendly.com/bookiyanga/general-glam-enquiry",
};

// ─── Bridal Packages ─────────────────────────────────────────────────────────
export const bridalPackages = [
  {
    id: "nuptials",
    name: "The Nuptials",
    tag: "Single Day Package",
    price: "₦200,000",
    image: "/galleryImages/img1.jpeg",
    calendlyKey: "nuptials",
    inclusions: [
      "Bridal Makeup",
      "Bridal Prep",
      "Touch up (second outfit / reception)",
    ],
    description:
      "Your most important day deserves nothing short of perfection. The Nuptials covers your full bridal look from prep to reception touch-up — so you stay flawless from aisle to after-party.",
  },
  {
    id: "gemBride",
    name: "The Gem-Bride",
    tag: "Dual Day Package",
    price: "₦350,000",
    image: "/galleryImages/img4.jpeg",
    calendlyKey: "gemBride",
    inclusions: [
      "Makeup for traditional wedding",
      "Makeup for white wedding",
      "Touch up (second outfit / reception)",
      "Bridal Prep",
      "Complimentary makeup for MOH",
    ],
    description:
      "For the bride celebrating in style across two ceremonies. The Gem-Bride ensures you're radiant for every moment — from traditional splendour to white-wedding elegance — with your Maid of Honour glowing alongside you.",
  },
  {
    id: "luxeBride",
    name: "The Luxe-Bride",
    tag: "Dual Day Package",
    price: "₦450,000",
    image: "/galleryImages/img7.jpeg",
    calendlyKey: "luxeBride",
    inclusions: [
      "Makeup for both weddings",
      "Bridal Prep",
      "Touch up for both weddings",
      "Makeup for bridal shower",
      "Complimentary makeup for MOH / MOB",
      "Original coral beads for bride & groom",
    ],
    description:
      "The ultimate luxury bridal experience. From your bridal shower to both ceremony days, every moment is covered. Includes complimentary looks for your MOH and Mother of the Bride, plus an exquisite set of original coral beads.",
  },
];

// ─── Party Extras ─────────────────────────────────────────────────────────────
export const partyExtras = {
  asoebi: {
    title: "Asoebi Package",
    tag: "Group Glam",
    image: "/galleryImages/img9.jpeg",
    calendlyKey: "partyExtras",
    pricing: [
      { label: "Single Person", detail: "Makeup & Gele", price: "₦60,000" },
      { label: "Group of 5", detail: "Makeup & Gele", price: "₦300,000" },
    ],
  },
  bridalGirls: {
    title: "Bridal Girls Package",
    tag: "Squad Goals",
    image: "/galleryImages/img11.jpeg",
    calendlyKey: "partyExtras",
    pricing: [
      { label: "Single Person", detail: "Makeup only", price: "₦45,000" },
      { label: "Group of 5", detail: "Makeup only", price: "₦200,000" },
    ],
  },
};

// ─── Logistics Clause ─────────────────────────────────────────────────────────
export const logistics = [
  {
    zone: "Delta 1",
    areas: "Kwale, Issele-Uku, Agbor, Obosi, Nnewi, Onitsha etc.",
    fee: "₦20,000 – ₦40,000",
  },
  {
    zone: "Delta 2",
    areas: "Ughelli, Warri, Sapele, Benin, Patani, Yenagoa, PH etc.",
    fee: "₦30,000 – ₦50,000",
  },
  {
    zone: "The East",
    areas: "Eastern states",
    fee: "₦40,000 – ₦70,000",
  },
  {
    zone: "The West",
    areas: "Western states",
    fee: "₦40,000 – ₦70,000",
  },
  {
    zone: "Lagos / Abuja",
    areas: "Flight bookings handled by clients",
    fee: "Flight only",
    note: "Road transport via GUO Transport only",
  },
  {
    zone: "The North",
    areas: "Northern states",
    fee: "Flight only",
    note: "Flight bookings handled by clients",
  },
];

// ─── Retainer Amounts (50% of package price) ─────────────────────────────────
// Paystack amounts are stored in Naira; the widget converts to kobo internally.
// null = enquiry only, no payment required.
export const RETAINER_AMOUNTS = {
  nuptials:    100000,  // 50% of ₦200,000
  gemBride:    175000,  // 50% of ₦350,000
  luxeBride:   225000,  // 50% of ₦450,000
  partyExtras: null,    // enquiry only
  general:     null,    // enquiry only
};

// Full package prices shown alongside retainer for context
export const PACKAGE_FULL_PRICES = {
  nuptials:    '₦200,000',
  gemBride:    '₦350,000',
  luxeBride:   '₦450,000',
  partyExtras: null,
  general:     null,
};

// ─── Location → Logistics Zone Map ───────────────────────────────────────────
// Maps every Nigerian state to its logistics zone + fee estimate.
// Used in the pre-booking location step of ReservationModal.
export const locationZoneMap = {
  // Delta 1 — ₦20,000–₦40,000
  'Delta':         { zone: 'Delta 1', fee: '₦20,000 – ₦40,000', note: 'Our home base in Asaba. Standard travel rates apply.' },
  'Anambra':       { zone: 'Delta 1', fee: '₦20,000 – ₦40,000', note: null },

  // Delta 2 — ₦30,000–₦50,000
  'Edo':           { zone: 'Delta 2', fee: '₦30,000 – ₦50,000', note: null },
  'Bayelsa':       { zone: 'Delta 2', fee: '₦30,000 – ₦50,000', note: null },
  'Rivers':        { zone: 'Delta 2', fee: '₦30,000 – ₦50,000', note: null },

  // The East — ₦40,000–₦70,000
  'Abia':          { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },
  'Akwa Ibom':     { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },
  'Cross River':   { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },
  'Ebonyi':        { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },
  'Enugu':         { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },
  'Imo':           { zone: 'The East', fee: '₦40,000 – ₦70,000', note: null },

  // The West — ₦40,000–₦70,000
  'Ekiti':         { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },
  'Kwara':         { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },
  'Ogun':          { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },
  'Ondo':          { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },
  'Osun':          { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },
  'Oyo':           { zone: 'The West', fee: '₦40,000 – ₦70,000', note: null },

  // Lagos / Abuja — Flight only
  'Lagos':         { zone: 'Lagos / Abuja', fee: 'Flight only', note: 'Road transport via GUO Transport only. Client handles flight booking.' },
  'FCT (Abuja)':   { zone: 'Lagos / Abuja', fee: 'Flight only', note: 'Client handles flight booking.' },

  // The North — Flight only
  'Adamawa':       { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Bauchi':        { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Benue':         { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Borno':         { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Gombe':         { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Jigawa':        { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Kaduna':        { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Kano':          { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Katsina':       { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Kebbi':         { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Kogi':          { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Nasarawa':      { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Niger':         { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Plateau':       { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Sokoto':        { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Taraba':        { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Yobe':          { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
  'Zamfara':       { zone: 'The North', fee: 'Flight only', note: 'Client handles flight booking.' },
};

// ─── Booking Terms ─────────────────────────────────────────────────────────────
export const bookingTerms = [
  {
    title: "Retainer to Confirm",
    body: "All bridal bookings are confirmed only after a non-refundable retainer fee is paid. This secures your wedding date exclusively.",
  },
  {
    title: "Non-Refundable Retainer",
    body: "Retainer fees are non-refundable, deducted from your total bridal service cost, and dates are not held without payment.",
  },
  {
    title: "Full Payment Deadline",
    body: "Full payment must be completed at least 48 hours before the wedding date. No services commence without cleared payment.",
  },
  {
    title: "Reschedule & Cancellation",
    body: "One reschedule is permitted with a minimum of 7 days' notice, subject to availability. Cancellations within 7 days of the event forfeit all payments made.",
  },
  {
    title: "Timeline & Punctuality",
    body: "Kindly ensure your timeline is realistic and communicated early. Delays beyond the agreed start time may affect service delivery.",
  },
  {
    title: "Additional Clients",
    body: "All additional clients must be declared during booking. Unscheduled additions will be catered to based on discretion and availability.",
  },
  {
    title: "Accommodation",
    body: "A suitable and decent accommodation should be provided for the Head Artist and Assistant for destination / location bookings.",
  },
];
