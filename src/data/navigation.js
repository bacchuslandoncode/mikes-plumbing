// Approved sitemap. See docs/PROJECT_BRIEF.md for the content plan behind each route.

export const navigation = [
  { label: 'Home', route: '/' },
  {
    label: 'Services',
    route: '/services',
    children: [
      { label: 'Drain Cleaning', route: '/services/drain-cleaning' },
      { label: 'Water Heaters', route: '/services/water-heaters' },
      { label: 'Faucets & Fixtures', route: '/services/faucets-fixtures' },
      { label: 'Plumbing Repairs', route: '/services/plumbing-repairs' },
    ],
  },
  { label: 'Emergency Plumbing', route: '/emergency-plumbing' },
  { label: 'About', route: '/about' },
  { label: 'Service Areas', route: '/service-areas' },
  { label: 'Contact', route: '/contact' },
]
