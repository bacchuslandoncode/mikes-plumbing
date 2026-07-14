// Single source of truth for business facts. Every field carries a `status`
// so pages can decide whether a fact is safe to display. Never render a
// field's value as public fact unless status === 'verified'.
//
// status values:
//   verified              - directly supplied and confirmed for this project
//   unverified             - a candidate value exists but has not been confirmed
//   placeholder            - no real value exists yet; `value` is null
//   needsClientConfirmation - must be confirmed with the client before publishing

export const business = {
  name: {
    value: "Mike's Plumbing",
    status: 'verified',
  },
  market: {
    value: 'Phoenix, Arizona',
    status: 'verified',
  },
  ownerName: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  phone: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  foundedYear: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  streetAddress: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  licenseNumber: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  businessHours: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  is24HourAvailable: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  reviews: {
    value: [],
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  averageRating: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  reviewCount: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  serviceAreaCities: {
    value: [],
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  certifications: {
    value: [],
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  financingOptions: {
    value: [],
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  warranty: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
  responseTime: {
    value: null,
    status: 'placeholder',
    needsClientConfirmation: true,
  },
}
