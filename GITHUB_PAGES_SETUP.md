# GitHub Pages Setup Required

Your portfolio has been built and all assets are ready for deployment, but **GitHub Pages is not yet enabled** in your repository settings.

## What Has Been Completed ✅

- ✅ Social thumbnail created: `public/assets/og-image.jpg` (1200×630 JPEG, 47.6 KB)
- ✅ Open Graph & Twitter Card metadata added to all pages
- ✅ `.nojekyll` file added to enable static serving
- ✅ All pages built and ready in `dist/` directory
- ✅ GitHub Actions workflow configured and operational

## What You Need to Do

1. Go to your repository: https://github.com/achristmaschi/portfolio
2. Click **Settings** (tab at top)
3. Scroll down and click **Pages** (in left sidebar)
4. Under "Build and deployment":
   - Ensure **Source** is set to **"GitHub Actions"**
   - If it shows "None" or a branch name, click the dropdown and select "GitHub Actions"
5. Click **Save**

## What Will Happen After

- GitHub Actions will automatically deploy your site
- Your homepage will be live at: https://achristmaschi.github.io/
- Your OG image will be accessible at: https://achristmaschi.github.io/assets/og-image.jpg
- Social media previews will show when you share the link

## Verification

After enabling GitHub Pages and waiting ~2 minutes for deployment:

```bash
curl -I https://achristmaschi.github.io/
curl -I https://achristmaschi.github.io/assets/og-image.jpg
```

Both should return `HTTP 200` (not 404).
