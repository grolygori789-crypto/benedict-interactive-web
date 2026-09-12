export const site = {
  name: 'Benedict Interactive',
  tagline: 'Ideas for a brighter everyday',
  description:
    'Thoughtful software and digital experiences designed to feel clear, capable, and human.',
  repository: 'grolygori789-crypto/benedict-interactive-web',
} as const;

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Philosophy', href: '/#philosophy' },
  { label: 'Support', href: '/support' },
] as const;

export const products = [
  {
    name: 'Bearagnostic',
    eyebrow: 'Android utility',
    description:
      'A privacy-first file clarity assistant that helps people understand clutter before they remove it.',
    promise: 'Find clutter. Explain the risk. Clean with confidence.',
    href: '/products/bearagnostic',
    status: 'In development',
    accent: 'blue',
  },
  {
    name: 'Benedict Test Center',
    eyebrow: 'Quality platform',
    description:
      'A reusable testing and release-evidence system designed for structured feedback, retesting, and trustworthy QA history.',
    promise: 'Test clearly. Record evidence. Improve with confidence.',
    href: '/products#test-center',
    status: 'Planned',
    accent: 'violet',
  },
] as const;
