# Image Inventory

Recursive inspection of `src/assets/` as of this audit. No files were deleted, renamed, cropped, converted, or moved.

## Summary

- Total files found: 7
- Location: `src/assets/images/` (7 files)
- `src/assets/logos/`: empty, no logo file exists yet
- Duplicate files (by content hash): none found
- Conceptually redundant pair: `pexels-pixabay-34228.jpg` and `pexels-qimono-238681.jpg` are both generic abstract water-droplet stock photography. Recommend using at most one sitewide to avoid a repeated "stock water" look.

## File-by-File Detail

### 1. compagnons-4CNNH2KEjhc-unsplash.jpg
- File type: JPEG (progressive)
- Dimensions: 4032 x 3024
- Aspect ratio: 4:3 (1.33), horizontal
- Subject: Close-up of an industrial gas pipe manifold mounted on a brick wall. Visible French-language safety signage ("GAZ NATUREL", "911", "Energir" utility logo).
- Duplicate: No
- Resolution suitability: High enough for a hero or large section image.
- Caution: The visible French-language utility signage reads as Quebec/Canadian, not Arizona. Using this image at a size where the text is legible would look out of place and could confuse visitors. Not recommended for primary placement as-is. Usable later only if cropped tightly to exclude the signage, or as a small, blurred background texture.

### 2. pexels-brett-sayles-12778827.jpg
- File type: JPEG (baseline, EXIF)
- Dimensions: 4019 x 6042
- Aspect ratio: ~2:3 (0.665), vertical
- Subject: Exterior PVC and cast-iron pipe cluster on a building wall, moody low-light artistic composition.
- Duplicate: No
- Resolution suitability: High enough for a tall section image or vertical card. Too dark/artistic for a bright hero.
- Likely use: Atmospheric background or side visual, not a literal "action" photo.

### 3. pexels-ian-panelo-4494653.jpg
- File type: JPEG (baseline, EXIF)
- Dimensions: 2848 x 4272
- Aspect ratio: ~2:3 (0.667), vertical
- Subject: Close-up row of outdoor water meters and shutoff valves.
- Duplicate: No
- Resolution suitability: Suitable for a section image or card.
- Likely use: Infrastructure/service-area imagery.

### 4. pexels-pixabay-34228.jpg
- File type: JPEG (baseline, EXIF)
- Dimensions: 3846 x 2552
- Aspect ratio: ~3:2 (1.51), horizontal
- Subject: Abstract grayscale water droplet hitting a water surface, generic stock style.
- Duplicate: No (but see redundancy note above vs. qimono-238681)
- Resolution suitability: High enough for hero-scale use.
- Caution: Generic stock "water drop" imagery reads as filler if overused. Best used sparingly, e.g. as a subtle background texture, not as a primary section photo.

### 5. pexels-qimono-238681.jpg
- File type: JPEG (baseline, EXIF)
- Dimensions: 4000 x 2667
- Aspect ratio: 3:2 (1.50), horizontal
- Subject: Abstract blue-toned water droplet and ripples, generic stock style.
- Duplicate: No (see redundancy note above vs. pixabay-34228)
- Resolution suitability: High enough for hero-scale use.
- Caution: Same generic-stock caution as pixabay-34228. Recommend picking one of the two, not both.

### 6. pexels-ranjit-2152375414-32200999.jpg
- File type: JPEG (baseline, EXIF)
- Dimensions: 3072 x 3840
- Aspect ratio: 4:5 (0.8), vertical
- Subject: Water actively pouring from a metal pipe outlet against a dark background. Dramatic, real, literal plumbing subject.
- Duplicate: No
- Resolution suitability: High enough for a hero, section image, or tall card.
- Likely use: Strongest "urgency/leak" photo in the set.

### 7. stevepb-plumbing-840835_1920.jpg
- File type: JPEG (baseline)
- Dimensions: 1920 x 1280
- Aspect ratio: 3:2 (1.5), horizontal
- Subject: Plumber's hand tools on a tile floor: two pipe wrenches, a tube cutter, hose fittings, and pipe with Teflon tape.
- Duplicate: No
- Resolution suitability: Web-adequate for a hero or section image at normal display sizes, but this is the lowest-resolution file in the set (1920px wide) and has the least headroom for large or cropped hero use compared to the others.
- Likely use: Strongest "real trade/craftsmanship" photo in the set.

## Sections With No Strong Photographic Match

None of the 7 files show a technician performing work, a water heater, a faucet/fixture, or a drain-cleaning task. Per instructions, no image is being forced into these sections. Recommended sections below are left unfilled or filled only with a defensible conceptual match, and gaps are called out explicitly.

## Logo

No logo file exists in `src/assets/logos/`. A real logo file needs to be supplied before header/footer branding can be built.

## Recommended Placement

| Section | Recommended file | Rationale |
|---|---|---|
| Homepage hero | `stevepb-plumbing-840835_1920.jpg` | Only image that reads as genuine trade craftsmanship rather than abstract or industrial-infrastructure stock; horizontal framing fits a hero. |
| Emergency plumbing | `pexels-ranjit-2152375414-32200999.jpg` | Dramatic water actively pouring from a pipe communicates urgency without being staged. |
| Drain cleaning | None | No file depicts drains or drain-cleaning equipment. Do not force a match; source a dedicated photo. |
| Water heaters | None | No file depicts a water heater. Do not force a match; source a dedicated photo. |
| Faucet or fixture repair | None | No file depicts a faucet or fixture. Do not force a match; source a dedicated photo. |
| General plumbing repair | `stevepb-plumbing-840835_1920.jpg` (secondary use) or `pexels-ian-panelo-4494653.jpg` | Tools image doubles as a general-repair visual; water-meter/valve close-up is a reasonable secondary conceptual fit. |
| About or owner section | None | No file shows a person, the owner, or a team. Do not force a match; a real owner/team photo is required. |
| Service-area section | `pexels-ian-panelo-4494653.jpg` | Outdoor water meters/valves reasonably represent neighborhood infrastructure across a service area. |
| Contact page | `pexels-qimono-238681.jpg` (background texture only, not literal) | Abstract water ripple works as a quiet, non-literal background behind a contact form; use only one of the two abstract water images sitewide. |

## Not Yet Recommended For Any Section

- `pexels-pixabay-34228.jpg` — redundant with `pexels-qimono-238681.jpg`; held in reserve, unused sitewide.

## Final Site-Wide Usage (as built)

| File | Used on | Notes |
|---|---|---|
| `stevepb-plumbing-840835_1920.jpg` | Home hero, Home plumbing-repair row, Services hub featured card, Plumbing Repairs detail hero | Repeat use is intentional: it is the only real "trade craftsmanship" photo in the set, and its reuse on the Plumbing Repairs page matches the exact service it depicts. |
| `pexels-ranjit-2152375414-32200999.jpg` | Home emergency callout, Emergency Plumbing hero | Both are the same subject (urgent leak); not used elsewhere. |
| `pexels-ian-panelo-4494653.jpg` | Home service-area teaser, Services hub hero, Service Areas hero/grid photo | Infrastructure imagery, reused only within service-area contexts. |
| `pexels-brett-sayles-12778827.jpg` | About page (Locally Operated / story band) | Atmospheric, non-literal, appropriate for a "local presence" section since no real team/owner photo exists. |
| `compagnons-4CNNH2KEjhc-unsplash.jpg` | About page (work photograph) | Used with a forced 16:9 aspect ratio and bottom-anchored object-position (`aspectRatio="16 / 9"`, `objectPosition="center bottom"` on `ResponsiveImage`) so the top ~25% of the frame, where the French-language safety signage sits, is cropped out of view. Captioned "illustrative photo," never presented as the owner or an actual jobsite. |
| `pexels-qimono-238681.jpg` | Contact page (decorative background only) | Not used as a literal photo; framed like every other image for visual consistency. |
| `pexels-pixabay-34228.jpg` | Unused | Redundant with the blue water-drop image; kept in `src/assets/images/` in case a future page needs it, per instructions not to force every supplied image onto the site. |

No image is used more times than is justified by matching its actual subject to the section it appears in. No competitor or external images exist anywhere in the codebase — every `<img>` source resolves to a local import from `src/assets/images/`.
