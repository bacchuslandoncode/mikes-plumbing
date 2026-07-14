// Full detail and rationale for every entry lives in docs/IMAGE_INVENTORY.md.
// Keys are stable identifiers; `file` is the exact current filename on disk.

import gasPipeManifold from '../assets/images/compagnons-4CNNH2KEjhc-unsplash.jpg'
import exteriorPvcPipes from '../assets/images/pexels-brett-sayles-12778827.jpg'
import waterMetersValves from '../assets/images/pexels-ian-panelo-4494653.jpg'
import waterDropGrayscale from '../assets/images/pexels-pixabay-34228.jpg'
import waterDropBlue from '../assets/images/pexels-qimono-238681.jpg'
import pipePouringWater from '../assets/images/pexels-ranjit-2152375414-32200999.jpg'
import plumbingTools from '../assets/images/stevepb-plumbing-840835_1920.jpg'

export const images = {
  gasPipeManifold: {
    src: gasPipeManifold,
    file: 'compagnons-4CNNH2KEjhc-unsplash.jpg',
    width: 4032,
    height: 3024,
    orientation: 'horizontal',
    subject: 'Industrial gas pipe manifold on a brick wall with visible French-language utility signage',
    caution: 'Visible foreign-language signage; needs cropping before use in a primary placement',
  },
  exteriorPvcPipes: {
    src: exteriorPvcPipes,
    file: 'pexels-brett-sayles-12778827.jpg',
    width: 4019,
    height: 6042,
    orientation: 'vertical',
    subject: 'Exterior PVC and cast-iron pipe cluster on a building wall, moody low-light composition',
    caution: null,
  },
  waterMetersValves: {
    src: waterMetersValves,
    file: 'pexels-ian-panelo-4494653.jpg',
    width: 2848,
    height: 4272,
    orientation: 'vertical',
    subject: 'Close-up row of outdoor water meters and shutoff valves',
    caution: null,
  },
  waterDropGrayscale: {
    src: waterDropGrayscale,
    file: 'pexels-pixabay-34228.jpg',
    width: 3846,
    height: 2552,
    orientation: 'horizontal',
    subject: 'Abstract grayscale water droplet and ripple, generic stock style',
    caution: 'Conceptually redundant with waterDropBlue; use at most one sitewide',
  },
  waterDropBlue: {
    src: waterDropBlue,
    file: 'pexels-qimono-238681.jpg',
    width: 4000,
    height: 2667,
    orientation: 'horizontal',
    subject: 'Abstract blue-toned water droplet and ripple, generic stock style',
    caution: 'Conceptually redundant with waterDropGrayscale; use at most one sitewide',
  },
  pipePouringWater: {
    src: pipePouringWater,
    file: 'pexels-ranjit-2152375414-32200999.jpg',
    width: 3072,
    height: 3840,
    orientation: 'vertical',
    subject: 'Water actively pouring from a metal pipe outlet against a dark background',
    caution: null,
  },
  plumbingTools: {
    src: plumbingTools,
    file: 'stevepb-plumbing-840835_1920.jpg',
    width: 1920,
    height: 1280,
    orientation: 'horizontal',
    subject: "Plumber's hand tools (pipe wrenches, tube cutter, fittings) on a tile floor",
    caution: 'Lowest resolution file in the set; limited headroom for large crops',
  },
}

// Recommended placements. Sections with no defensible photographic match
// are intentionally left unset rather than filled with an unrelated image.
export const imagePlacements = {
  homepageHero: images.plumbingTools,
  emergencyPlumbing: images.pipePouringWater,
  drainCleaning: null,
  waterHeaters: null,
  faucetsFixtures: null,
  generalPlumbingRepair: images.plumbingTools,
  aboutOwner: null,
  serviceAreas: images.waterMetersValves,
  contact: images.waterDropBlue,
}
