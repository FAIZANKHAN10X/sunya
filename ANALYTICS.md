# Analytics — Phase 1

## IDs

| System | ID | Where it lives |
| ------ | -- | -------------- |
| **GTM container** | `GTM-M9S5TG62` | App: `NEXT_PUBLIC_GTM_ID` → loads `gtm.js` |
| **GA4 property** | `G-6WRFGZP7LN` | **GTM only** (GA4 Configuration tag). Not in app gtag. |

## Environment variables

```bash
# .env.local
NEXT_PUBLIC_GTM_ID=GTM-M9S5TG62
NEXT_PUBLIC_GA4_MEASUREMENT_ID=G-6WRFGZP7LN
```

Restart the dev server after changing env vars.

---

## App installation (verified in code)

| Piece | Location | Status |
| ----- | -------- | ------ |
| GTM head script | `layout.tsx` → `<head>` → `GoogleTagManager` | Official IIFE loads `gtm.js?id=GTM-M9S5TG62` |
| GTM noscript | First node in `<body>` | `ns.html?id=GTM-M9S5TG62` |
| dataLayer events | `src/analytics/track.ts` | Pushes even if GTM fails |
| Direct `gtag.js` / `G-` config in app | — | **None** (by design) |

### How to confirm in the browser

1. Run site with env set; open homepage.
2. DevTools → **Network** → filter `gtm.js` → should load `…/gtm.js?id=GTM-M9S5TG62`.
3. Console:

```js
window.dataLayer
```

You should see objects including `gtm.js` / `gtm.start` and later `page_view`, `section_view`, etc.

4. Click **Enter the path** → look for `{ event: "cta_click", cta_id: "hero_enter_path", … }`.
5. Submit newsletter → `{ event: "generate_lead", lead_type: "newsletter", … }`.
6. Open `/contact`, submit form → `{ event: "generate_lead", lead_type: "contact", … }`.
7. Scroll homepage → multiple `{ event: "section_view", section_id: "…", … }` (once per section).

---

## Implemented events (dataLayer)

### `page_view`
| Parameter | Example |
| --------- | ------- |
| `page_path` | `/` or `/contact` |
| `page_title` | document title |
| `page_location` | full URL |

**When:** App Router navigation (including first load).  
**Dedupe:** One fire per path until the path changes (React tracker).

### `cta_click`
| Parameter | Values |
| --------- | ------ |
| `cta_id` | `hero_enter_path`, `hero_framework`, `begin_join_list`, `begin_contact` |
| `cta_text` | Button label |
| `cta_location` | `hero` \| `begin` |
| `link_url` | href |

### `generate_lead`
| Parameter | Newsletter | Contact |
| --------- | ---------- | ------- |
| `lead_type` | `newsletter` | `contact` |
| `form_id` | `newsletter_homepage` | `contact_page` |
| `form_name` | `Newsletter` | `Contact` |
| `page_path` | current path | `/contact` |

**When:** Success UI only (not raw button spam).  
**Dedupe:** Once per lead type + path until next route change.

### `section_view`
| Parameter | Description |
| --------- | ----------- |
| `section_id` | DOM id |
| `section_name` | Label |
| `section_index` | Order |
| `page_path` | Path |

**When:** ~45%+ of section visible (works with Lenis).  
**Dedupe:** Once per section per path.

Home: `hero`, `introduction`, `presence`, `beliefs`, `framework`, `notes`, `community`, `experiences`, `stories`, `begin`, `newsletter`  
Contact: `contact`

---

## Duplicate `page_view` risk — how we avoid it

| Source | Risk if misconfigured | Correct setup |
| ------ | --------------------- | ------------- |
| App dataLayer `page_view` | Intended single SPA signal | Keep |
| GA4 Config tag default **Send a page view** = true | **Second page_view** on every load | Set **Send a page view** = **false** |
| Enhanced Measurement “Page changes” | Extra SPA page views | Prefer off if using our `page_view` |
| Second GA4 Config / gtag in HTML | Doubles everything | Do not add gtag in app |

**Rule:** Only the app pushes `page_view`. GTM only **forwards** it to GA4.

---

# Step-by-step GTM setup (non-technical)

Open [Google Tag Manager](https://tagmanager.google.com) → container **GTM-M9S5TG62** → workspace **Default**.

---

## Part A — Variables (create once)

1. Left menu → **Variables**.
2. Under **User-Defined Variables** → **New**.
3. For each row below: name it exactly, type **Data Layer Variable**, Data Layer Variable Name = the same string, Version **Version 2**, save.

| Variable name in GTM | Data Layer Variable Name |
| -------------------- | ------------------------ |
| `dlv - page_path` | `page_path` |
| `dlv - page_title` | `page_title` |
| `dlv - page_location` | `page_location` |
| `dlv - cta_id` | `cta_id` |
| `dlv - cta_text` | `cta_text` |
| `dlv - cta_location` | `cta_location` |
| `dlv - link_url` | `link_url` |
| `dlv - lead_type` | `lead_type` |
| `dlv - form_id` | `form_id` |
| `dlv - form_name` | `form_name` |
| `dlv - section_id` | `section_id` |
| `dlv - section_name` | `section_name` |
| `dlv - section_index` | `section_index` |

---

## Part B — Triggers (create once)

1. Left menu → **Triggers** → **New**.
2. Trigger type: **Custom Event**.
3. Create four triggers:

| Trigger name | Event name (exact) | This trigger fires on |
| ------------ | ------------------ | --------------------- |
| `CE - page_view` | `page_view` | All Custom Events |
| `CE - cta_click` | `cta_click` | All Custom Events |
| `CE - generate_lead` | `generate_lead` | All Custom Events |
| `CE - section_view` | `section_view` | All Custom Events |

---

## Part C — Tags

### 1) GA4 Configuration (foundation)

1. **Tags** → **New** → name: `GA4 - Config`.
2. Tag type: **Google Analytics: GA4 Configuration**.
3. **Measurement ID:** `G-6WRFGZP7LN`.
4. Open **Configuration settings** (or the checkbox for page view):
   - Set **Send a page view event when this configuration loads** to **OFF / false**.  
     *(Critical — prevents duplicate page views.)*
5. Triggering: **All Pages** (or **Initialization – All Pages** if you use Consent Mode later).
6. **Save**.

### 2) GA4 Event — page_view

1. **Tags** → **New** → `GA4 - Event - page_view`.
2. Type: **Google Analytics: GA4 Event**.
3. Configuration tag: **`GA4 - Config`** (or paste Measurement ID `G-6WRFGZP7LN` if your UI asks for ID instead).
4. **Event Name:** `page_view`
5. Event parameters (Add row for each):

| Parameter Name | Value |
| -------------- | ----- |
| `page_path` | `{{dlv - page_path}}` |
| `page_title` | `{{dlv - page_title}}` |
| `page_location` | `{{dlv - page_location}}` |

6. Trigger: **`CE - page_view`**.
7. **Save**.

### 3) GA4 Event — cta_click

1. Tag name: `GA4 - Event - cta_click`.
2. Type: **GA4 Event**, config **`GA4 - Config`**.
3. Event Name: `cta_click`
4. Parameters:

| Parameter Name | Value |
| -------------- | ----- |
| `cta_id` | `{{dlv - cta_id}}` |
| `cta_text` | `{{dlv - cta_text}}` |
| `cta_location` | `{{dlv - cta_location}}` |
| `link_url` | `{{dlv - link_url}}` |

5. Trigger: **`CE - cta_click`**.
6. **Save**.

### 4) GA4 Event — generate_lead

1. Tag name: `GA4 - Event - generate_lead`.
2. Event Name: `generate_lead`
3. Parameters:

| Parameter Name | Value |
| -------------- | ----- |
| `lead_type` | `{{dlv - lead_type}}` |
| `form_id` | `{{dlv - form_id}}` |
| `form_name` | `{{dlv - form_name}}` |
| `page_path` | `{{dlv - page_path}}` |

4. Trigger: **`CE - generate_lead`**.
5. **Save**.

### 5) GA4 Event — section_view

1. Tag name: `GA4 - Event - section_view`.
2. Event Name: `section_view`
3. Parameters:

| Parameter Name | Value |
| -------------- | ----- |
| `section_id` | `{{dlv - section_id}}` |
| `section_name` | `{{dlv - section_name}}` |
| `section_index` | `{{dlv - section_index}}` |
| `page_path` | `{{dlv - page_path}}` |

4. Trigger: **`CE - section_view`**.
5. **Save**.

---

## Part D — Preview & publish

1. In GTM top right → **Preview**.
2. Enter your site URL (local `http://localhost:3000` or production).
3. Connect Tag Assistant; click around the site.
4. In the left event list you should see `page_view`, `cta_click`, etc., and your GA4 tags **firing**.
5. When happy → GTM **Submit** → **Publish** (name the version e.g. “Phase 1 GA4 events”).

---

## Part E — GA4 Key Events (conversions)

1. Open [Google Analytics](https://analytics.google.com) → property for **`G-6WRFGZP7LN`**.
2. Left: **Admin** (gear) → **Data display** → **Events** (or **Key events**).
3. Find **`generate_lead`** (appears after first real hit, or create event first).
4. Toggle **Mark as key event** / **Mark as conversion** = **ON**.

### Recommended key events (Phase 1)

| Event | Mark as key event? | Why |
| ----- | ------------------ | --- |
| **`generate_lead`** | **Yes — required** | Newsletter + contact successes |
| `cta_click` | Optional (micro) | Funnel interest, not final conversion |
| `page_view` | No | Volume metric, not conversion |
| `section_view` | No | Engagement, not conversion |

Optional later: create a GA4 **audience** or exploration filtered by `lead_type = newsletter` vs `contact`.

### Custom dimensions (recommended in GA4 Admin)

**Admin → Data display → Custom definitions → Create custom dimensions** (Event scope):

| Dimension name | Event parameter |
| -------------- | --------------- |
| Lead type | `lead_type` |
| CTA ID | `cta_id` |
| CTA location | `cta_location` |
| Section ID | `section_id` |
| Form ID | `form_id` |

(Dimensions only fill for hits **after** they are registered.)

---

## Part F — Enhanced Measurement (GA4 data stream)

1. Admin → Data streams → your Web stream.
2. **Enhanced measurement** → gear icon.
3. Recommended for this site:
   - **Page views** from EM: can stay on for hard loads, but with our SPA `page_view` + Config send_page_view false you already cover SPA; watch for doubles in DebugView.
   - **Scrolls:** Off or ignore (we use `section_view`).
   - **Outbound clicks:** On is fine.
   - **Form interactions:** **Off** (we use `generate_lead`).
   - **Video engagement:** Optional; hero is a loop so it can be noisy.

---

## Debug checklist

| Check | Pass looks like |
| ----- | --------------- |
| Network `gtm.js?id=GTM-M9S5TG62` | 200 OK |
| No `gtag/js?id=G-6WRFGZP7LN` from **our** HTML (only via GTM after Config publishes) | GTM loads GA; app does not |
| dataLayer has `page_view` once per navigation | One object per path change |
| GTM Preview: Config fires once per page | Not twice |
| `generate_lead` on success only | Not on failed empty email |
| GA4 **Admin → DebugView** (optional: install GA Debugger / use Preview) | Events arrive with params |

---

## Code map

| File | Role |
| ---- | ---- |
| `src/analytics/GoogleTagManager.tsx` | Head + noscript GTM |
| `src/analytics/track.ts` | dataLayer helper + dedupe |
| `src/analytics/PageViewTracker.tsx` | SPA `page_view` |
| `src/analytics/SectionViewTracker.tsx` | `section_view` IO |
| `src/analytics/TrackedCtaLink.tsx` | `cta_click` |
| `src/app/layout.tsx` | Mounts GTM + AnalyticsRoot |

## Out of scope (later phases)

Consent Mode, nav_click, ads pixels, server-side leads, direct gtag SDK.
