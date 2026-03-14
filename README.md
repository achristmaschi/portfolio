# Chi's Portfolio — Contributor Guide

Hi! 👋 This is the guide for making changes to the site without breaking anything.
No coding experience needed — just follow the steps and you'll be fine.
If something feels wrong at any point, stop and text Quan before continuing.

---

## Step 1 — Get the latest version of the site

Before you touch anything, always pull the latest changes from `master` (the live version).
This makes sure you're starting from the most up-to-date code.

1. Look at the **bottom-left corner** of VS Code — you'll see a branch name like `master` or your own branch name.
2. Click the **Source Control icon** in the left sidebar (it looks like a branching path, or press `Ctrl+Shift+G`).
3. Click the **three dots menu `···`** at the top of the Source Control panel.
4. Click **Pull, Push → Pull from…**, then select **`origin/master`**.

> ✅ You should see a notification saying the pull was successful. If you see a conflict warning, stop and text Quan.

---

## Step 2 — Preview the site on your computer

Before making any changes, it's a good idea to see what the site looks like locally.

1. Open the **Terminal** in VS Code: press Ctrl + `.
2. Type this exactly and press Enter:

```
npm run dev
```

3. Wait a few seconds. You'll see something like:

```
Local    http://localhost:4321/
```

4. Open that link in your browser — that's the live preview of the site running on your machine.
   It updates automatically whenever you save a file, so you can see your changes instantly.

5. When you're done, come back to the terminal and press **`Ctrl+C`** to stop the preview.

> ⚠️ If you see an error when running `npm run dev`, try running `npm install` first, then try again.

---

## Step 3 — Make your changes

Edit whatever files you need to in VS Code. Save with **`Ctrl+S`** as you go.
The browser preview will refresh automatically so you can see exactly what it looks like.

The files you'll most likely edit are inside the `src/` folder:
- `src/pages/` — the actual pages (about, home, featured project)
- `src/components/` — reusable pieces like the nav and footer

---

## Step 4 — Commit your changes (saving a checkpoint)

Once you're happy with how things look, it's time to save your work as a "commit" — think of it like hitting Save in Google Docs, but with a note about what you changed.

1. Click the **Source Control icon** in the left sidebar (`Ctrl+Shift+G`).
2. You'll see a list of files you've changed under **Changes**.
3. Hover over the word **Changes** and click the **`+` (Stage All Changes)** button that appears.
   The files will move up to a section called **Staged Changes** — this means they're ready to be saved.
4. Click into the text box at the top that says **Message** and type a short description of what you changed.
   For example: `update about page bio` or `fix typo in footer`
5. Click the big blue **Commit** button.

> ✅ Your changes are now saved as a checkpoint on your computer.

---

## Step 5 — Push your changes (sending them to GitHub)

Committing saves your work locally. Pushing sends it to GitHub so Quan can see it.

1. Still in the **Source Control panel**, click the **three dots menu `···`**.
2. Click **Push**.

> ✅ Your changes are now on GitHub. You can also just click the **Sync Changes** button if it appears — that does pull + push in one go.

---

## Step 6 — Create a Pull Request (asking Quan to review)

A Pull Request (PR) is how you say "here are my changes, please take a look."
**Do not merge it yourself** — wait for Quan to review and approve it first.

1. Go to the repository on GitHub: [github.com/achristmaschi/portfolio](https://github.com/achristmaschi/portfolio)
2. You should see a yellow banner at the top saying your branch had recent pushes, with a green **"Compare & pull request"** button. Click it.
3. Give your PR a clear title (e.g. `Update about page`) and optionally add a short description of what you changed and why.
4. Click **Create pull request**.
5. 🛑 **Stop here.** Text Quan that the PR is up. Do not click the **Merge** button — that's Quan's job.

---

## Quick reference

| What you want to do | How |
| :--- | :--- |
| Get the latest code | Source Control → `···` → Pull from → `origin/master` |
| Preview the site locally | Terminal → `npm run dev` → open `localhost:4321` |
| Save your changes | Source Control → Stage All → write message → Commit |
| Send to GitHub | Source Control → `···` → Push |
| Ask for a review | GitHub → Compare & pull request → Create pull request |
