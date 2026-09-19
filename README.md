# Ivan Buzeta — Portfolio Website

A static, no-build portfolio site (HTML, CSS, JavaScript). There is nothing to install: open `index.html` in a browser to preview it, and upload the whole folder to any static host to publish it.

## Design concept

The site is styled like an estimator's drawing sheet. The hero is a takeoff drawing whose eaves, rakes, and ridge lines draw themselves in the same green, cyan, and yellow used on marked-up plans, with a title block that holds the profile photo. The quantities in the legend come from Sample Estimated Plan 01. Everything else stays quiet: cool paper background, ink-navy type, one blueprint blue, and the Archivo typeface. The Work Samples section switches to a dark blueprint background so the plans stand out.

## Folder structure

```
portfolio/
├── index.html                      All page content (text sections)
├── css/style.css                   All styling. Colors are tokens at the top of the file
├── js/
│   ├── content.js                  EDIT THIS: certifications and work samples (data)
│   └── script.js                   Behavior: menu, filters, active nav link
├── assets/
│   ├── images/
│   │   ├── profile.jpg             PLACEHOLDER: replace with your headshot
│   │   ├── cv-preview.jpg          Preview image shown in the CV section
│   │   ├── favicon.svg
│   │   └── samples/                Thumbnails for the work sample cards
│   └── documents/
│       ├── My_CV.pdf               YOUR CV (already added)
│       ├── estimated-plans/
│       │   ├── Sample_Plan_01.pdf … Sample_Plan_04.pdf
│       │   └── All_Sample_Estimated_Plans.zip
│       └── certificates/           Certificate PDFs
└── README.md
```

## Where your files go

**CV** — `assets/documents/My_CV.pdf`. Both "Download CV" buttons point here. To update your CV, overwrite this file and keep the same name. The preview image in the CV section is `assets/images/cv-preview.jpg`; to refresh it from a new CV on a computer with Poppler installed:

```
pdftoppm -jpeg -r 110 -f 1 -l 1 -singlefile assets/documents/My_CV.pdf assets/images/cv-preview
```

Or take a screenshot of page 1 and save it over `cv-preview.jpg`.

**Sample estimated plans** — `assets/documents/estimated-plans/`. The four plans you provided are already there as `Sample_Plan_01.pdf` to `Sample_Plan_04.pdf`.

**Certificates** — `assets/documents/certificates/`.

## Replacing placeholders

Placeholders are shown with a yellow dashed outline on the page so they are easy to spot. Search `index.html` for `data-placeholder` to find them all.

| Placeholder | Where | What to do |
|---|---|---|
| Profile photo | `assets/images/profile.jpg` | Overwrite with your headshot (portrait, about 4:5, at least 480 × 600 px). Then update the `alt` text on that `<img>` in `index.html` to "Portrait of Ivan Buzeta". |
| `[YOUR EMAIL]` | Contact section | Replace the whole `<span class="placeholder" …>` with `<a href="mailto:you@example.com">you@example.com</a>`. |
| `[YOUR CITY, COUNTRY]` | Contact section | Replace the `<span>` with plain text. |
| `[YOUR OTHER PROFILE URL]` | Contact section | Replace with a link, or delete that whole `<li>`. |
| `[YOUR CAREER INTERESTS…]` | About section | Replace the `<p class="placeholder">` with a normal `<p>`. |
| `[YOUR ACADEMIC ACHIEVEMENTS…]` | Education section | Replace it with honors, thesis, or coursework, or delete the `tl-extra` block. |

## Adding or changing certificates and work samples

Open `js/content.js`. Each certification and each sample is one block; copy a block, change the values, and save. No other file needs to change.

- **Add a certificate file**: put the PDF in `assets/documents/certificates/`, then set `file: "assets/documents/certificates/Your_File.pdf"` on that certification. The "View certificate" button appears automatically.
- **Add your PRC license number**: set `credentialId` on the CELE entry.
- **Add a work sample**: put the PDF in `assets/documents/estimated-plans/`, add a preview image to `assets/images/samples/`, and copy a block in `samples`.
- **Refresh the ZIP** after changing any sample PDF: select the PDFs and create a new `All_Sample_Estimated_Plans.zip` in the same folder (or run `zip -j All_Sample_Estimated_Plans.zip Sample_Plan_0*.pdf` from that folder).

## Content notes

- All experience, education, skills, and certificate details come from your CV and uploaded certificates. Nothing was added beyond them.
- The figures in the "Roofing estimates prepared" table (400 / 300 / 100 / 50, three per day, over 33,814.90 m²) are the ones stated on your CV.
- The two Exam English results are labeled "Self-assessment" because the certificates say they are not official examination results.
- Skill tags say "Basic working knowledge", "Familiar", or "Coursework" where that is the honest level. Roofr is shown as "Basic working knowledge" because your CV's skills list says so, while the CV summary calls you proficient in it. Change the tag in `index.html` if you prefer.
- There is no programming category because the CV lists none. Add one in the Technical skills section if it applies.

## Preview locally

Double-click `index.html`. For the most accurate behavior you can also run a tiny local server from this folder:

```
python3 -m http.server 8000
```

then open http://localhost:8000.

## Deploy (free options)

**Netlify Drop (fastest)**
1. Go to https://app.netlify.com/drop.
2. Drag the whole `portfolio` folder onto the page.
3. You get a live link immediately. Rename it under Site settings, or connect your own domain.

**GitHub Pages**
1. Create a repository on GitHub (for example `portfolio`) and upload all files, keeping the folder structure.
2. Open Settings, then Pages. Under Build and deployment choose "Deploy from a branch", branch `main`, folder `/ (root)`.
3. After a minute your site is at `https://YOUR-USERNAME.github.io/portfolio/`.

**Cloudflare Pages / Vercel** — create a project from the repository, set the framework to "None", and leave the build command empty and the output directory as the repository root.

Every path in the site is relative, so it works from a domain root or a subfolder.

## Accessibility and performance

- Skip link, semantic landmarks, keyboard-operable menu (Escape closes it), visible focus rings, and `aria-current` on the active nav link.
- Text contrast meets WCAG AA. Motion is limited to the hero takeoff drawing and simple hover states, and it is switched off for visitors who set "reduce motion".
- External links open in a new tab with `rel="noopener noreferrer"`.
- Images are small JPEGs, lazy-loaded below the fold. PDFs load only when clicked.
- The only external request is Google Fonts (Archivo). If it is blocked, the site falls back to the system font.
