// Service catalog. Every entry needs confirmation before its description
// copy is treated as final, since none of it is directly supported yet by
// verified business information (see src/data/business.js).

export const services = [
  {
    id: 'drain-cleaning',
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    route: '/services/drain-cleaning',
    summary: null,
    status: 'needsClientConfirmation',
  },
  {
    id: 'water-heaters',
    slug: 'water-heaters',
    name: 'Water Heater Repair',
    route: '/services/water-heaters',
    summary: null,
    status: 'needsClientConfirmation',
  },
  {
    id: 'faucets-fixtures',
    slug: 'faucets-fixtures',
    name: 'Faucet and Fixture Repair',
    route: '/services/faucets-fixtures',
    summary: null,
    status: 'needsClientConfirmation',
  },
  {
    id: 'plumbing-repairs',
    slug: 'plumbing-repairs',
    name: 'Leak and Plumbing Repair',
    route: '/services/plumbing-repairs',
    summary: null,
    status: 'needsClientConfirmation',
  },
  {
    id: 'emergency-plumbing',
    slug: 'emergency-plumbing',
    name: 'Emergency Plumbing',
    route: '/emergency-plumbing',
    summary: null,
    status: 'needsClientConfirmation',
  },
]
