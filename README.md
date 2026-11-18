# trebune.ie

The Trebune website: landing page, Privacy Policy and Terms of Service. It's plain HTML and CSS served by GitHub Pages, with no build step.

| File | Page |
|---|---|
| `index.html` | Landing page |
| `privacy.html` | Privacy Policy (the app and store listings link here) |
| `terms.html` | Terms of Service |
| `404.html` | Not-found page |
| `styles.css` | Landing page styles |

## Screenshots

Each phone frame shows a placeholder until its screenshot exists. Add a PNG (1290 × 2796 or any 9:19.5 phone shot) at:

| File | Shown next to |
|---|---|
| `assets/screens/home.png` | The hero |
| `assets/screens/parks.png` | 01 Every park in the country |
| `assets/screens/session.png` | 02 Plan a session |
| `assets/screens/skating.png` | 03 See who's skating |
| `assets/screens/tricks.png` | 04 Track your tricks |

Use a test account. Screenshots must not show real people's names or photos.

## When the app is in the stores

The App Store and Google Play buttons appear twice in `index.html` (in the hero and in `#get`). Replace each `<a class="store" aria-disabled="true">` with a link to the store listing, using Apple's and Google's official badge artwork:

- App Store: `https://apps.apple.com/app/id<APP_ID>`
- Google Play: `https://play.google.com/store/apps/details?id=com.trebune.app`

Then change "Coming soon" wording in the `#get` section.

## Privacy

The site sets no cookies and loads nothing from other servers. The fonts (Inter and Space Grotesk, SIL Open Font License, see `assets/fonts/`) are self-hosted. Keep it that way, or the privacy policy and a cookie banner need updating.

## Preview locally

```bash
npx serve .
```
