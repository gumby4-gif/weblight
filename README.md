# Wu Detroit Tai Chi Academy — Website Content Update Guide
*For non-technical users — no coding experience needed*

There are 5 areas of the website you can update yourself. Each section below tells you which file to open, what to change, and what **not** to touch.

All changes are made using **Notepad** (Windows) or **TextEdit** (Mac) — simple text editors you already have.

---

## 1. Announcement Banner → `Announcement.json`

The announcement banner is a highlighted message bar that appears at the very top of every page — above the navigation menu. It displays with a dark background and gold text, and visitors can dismiss it by clicking the **X** button.

- **To show a message:** Type your announcement text between the quote marks.
- **To hide the banner:** Delete the text inside the quote marks (keep the quotes themselves). If the field is empty, no banner will appear.

**Good uses for this banner:**
- School closed due to snow
- Festival dinner is February 17th
- New beginner class starting next Monday

---

## 2. Class Schedule → `Schedule.json`

This controls the weekly class schedule displayed on the website. Each class entry has a time and a name.

**Example of one class entry:**
```json
{ "time": "6:00 – 7:00 PM", "name": "Beginner" }
```

**What you can safely change:**
- The time shown between the `" "` marks — e.g. change `"6:00 – 7:00 PM"` to `"6:30 – 7:30 PM"`
- The class name shown between the `" "` marks — e.g. change `"Beginner"` to `"Beginner / Intro"`

**Important rules:**
- ✓ Do NOT delete or add any quote marks (`"`)
- ✓ Do NOT delete any commas between entries
- ✓ Save the file as plain text — do not save it as a Word document
- ✓ Save back to the same file (do not rename it)

---

## 3. Class Fees → `Fees.json`

This controls the tuition and fee information displayed on the website. Each entry has a class level or type and a price.

**What you can safely change:**
- The class or level name between the `" "` marks
- The dollar amount or fee description between the `" "` marks

**Important rules:**
- ✓ Do NOT delete or add any quote marks (`"`)
- ✓ Do NOT delete any commas between entries
- ✓ Save the file as plain text — do not save it as a Word document
- ✓ Save back to the same file (do not rename it)

---

## 4. Events → `Events.json`

This controls both upcoming and past events displayed on the website. Events are shown in the order they appear in the file.

**To add a new event:**
1. Copy an existing event block (everything between and including the `{ }` curly braces)
2. Paste it into the list and update the details inside the `" "` marks

**To remove an event:**
- Delete the entire event block, from the opening `{` to the closing `}`

**Important rules:**
- ✓ Do NOT delete or add any quote marks (`"`)
- ✓ Do NOT delete any commas between entries
- ✓ Save the file as plain text — do not save it as a Word document
- ✓ Save back to the same file (do not rename it)
- ✓ The page displays events in the order they are listed — put newest at the top if preferred

---

## 5. Sifu's Corner → `Sifu's_Corner.html`

Sifu's Corner is a personal message area where you can speak directly to students — from beginners to advanced disciples.

> ⚠️ **Heads up:** This file currently requires working around some basic code tags. It's manageable — just follow the steps below carefully. A simpler plain-text version is planned (see the Developer Note at the bottom of this file).

---

### How paragraphs work in this file

This file uses a simple pair of tags to mark each paragraph. Think of them like **opening and closing a container:**

| Tag | What it means |
|---|---|
| `<p>` | *Start* of a paragraph |
| `</p>` | *End* of a paragraph |

Everything you type **between** those two tags becomes one paragraph on the website — just like pressing Enter in a Word document starts a new paragraph.

---

### How to edit it

1. Open `Sifu's_Corner.html` in **Notepad** (Windows) or **TextEdit** (Mac)
2. You'll see your existing message looking something like this:
   ```
   <p>Welcome to this month's message.</p>
   <p>Keep up the great practice, everyone.</p>
   ```
3. **Change only the words** — leave the `<p>` and `</p>` tags exactly as they are:
   ```
   <p>This is my updated message to all students.</p>
   <p>See you on the mat!</p>
   ```
4. **To add a new paragraph**, copy an existing line and paste it below, then change the words:
   ```
   <p>First paragraph here.</p>
   <p>Second paragraph here.</p>
   <p>Third paragraph here.</p>
   ```
5. **To remove a paragraph**, delete the entire line — from `<p>` to `</p>`
6. Save using **File > Save** (not "Save As") — this keeps the filename and extension intact

---

**Important rules:**
- ✓ Every paragraph must start with `<p>` and end with `</p>` — never delete these
- ✓ Keep each paragraph on its own line — don't press Enter in the middle of one
- ✓ Only change the words *between* the tags, nothing else
- ✓ Save using **File > Save** (not Save As)

---

## Quick Reference

| Section | File to Edit | What to Change |
|---|---|---|
| Announcement | `Announcement.json` | The message text (delete text to hide the banner) |
| Schedule | `Schedule.json` | Class times and names |
| Fees | `Fees.json` | Class levels and prices |
| Events | `Events.json` | Add or remove event entries |
| Sifu's Corner | `Sifu's_Corner.html` | Text between `<p>` and `</p>` tags |

---

> 💡 **Before editing any file**, make a backup copy first. Duplicate the file and rename it (e.g. `Schedule_backup.json`) so you can always restore it if something goes wrong.

---

## 🛠 Developer Note — Recommended Improvement for Sifu's Corner

**The problem:** Right now, updating Sifu's Corner requires editing an `.html` file and manually managing `<p>` tags. This is workable but not ideal for a non-technical user — one wrong edit can break the layout.

**The fix:** Replace `Sifu's_Corner.html` with a plain `Sifu's_Corner.txt` file.

The user could then type their message freely — just like writing an email. They'd press Enter between paragraphs as normal, with no tags or special formatting needed whatsoever.

The website code would read the `.txt` file and automatically wrap each paragraph in `<p>` tags when displaying it on the page. This is a small change on the developer side but makes a big difference for the person maintaining the content.

Once implemented, the Quick Reference table above can be updated to show `Sifu's_Corner.txt` and the instructions simplified to: *"Just type your message. Press Enter between paragraphs. Save the file."*
