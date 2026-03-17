================================================================
  Wu's Tai Chi Chuan Academy Detroit — Website Content Guide
================================================================
  This file explains how to update the website content without
  needing a developer. All updates are done by editing the four
  JSON files listed below and uploading them to HostPapa.
================================================================


----------------------------------------------------------------
  HOW TO UPLOAD A FILE (HostPapa File Manager)
----------------------------------------------------------------

  1. Log in to your HostPapa cPanel
  2. Click "File Manager"
  3. Navigate to the "public_html" folder (this is your website)
  4. Find the file you want to replace (e.g. schedule.json)
  5. Right-click it → Delete (or rename it as a backup first)
  6. Click "Upload" at the top → select your updated file
  7. Refresh your website — the change is live immediately

  TIP: Before editing, save a copy of the original file on your
  computer as a backup (e.g. schedule-backup.json) in case you
  need to restore it.


----------------------------------------------------------------
  GOLDEN RULES FOR EDITING JSON FILES
----------------------------------------------------------------

  JSON is picky about formatting. Follow these rules and you
  will not break anything:

  ✓  Keep all the quotation marks exactly as they are
  ✓  Keep all the commas — every item except the LAST one
     in a list needs a comma after it
  ✓  Don't add or remove curly braces  { }  or brackets  [ ]
  ✓  Save the file as plain text (Notepad on Windows,
     TextEdit in plain-text mode on Mac)
  ✗  Do NOT use Microsoft Word or Google Docs to edit JSON

  If the page shows "Could not load data" after an upload,
  the JSON has a formatting error. Restore your backup and
  try again, or contact your developer.


================================================================
  THE FOUR FILES AND WHAT THEY CONTROL
================================================================


----------------------------------------------------------------
  1. announcement.json — the banner at the top of the homepage
----------------------------------------------------------------

  Shows a dismissible banner strip at the top of the home page.
  To hide the banner, delete the message text but keep the
  structure, or set message to an empty string "".

  EXAMPLE:
  {
    "message": "🎉 New rates in effect March 1st, 2026. <a href='Fees.html'>See updated fees →</a>"
  }

  FIELDS:
    message   — the text shown in the banner. You can include
                a simple HTML link using <a href='...'>...</a>
                Leave blank ("") to hide the banner entirely.


----------------------------------------------------------------
  2. schedule.json — the Class Schedule page
----------------------------------------------------------------

  Controls everything on the Schedule page — one block per day,
  each with a list of classes.

  TO ADD A CLASS: copy an existing { } class block, paste it
  after the last class in that day, add a comma after the
  previous block, and fill in the new time and name.

  TO REMOVE A CLASS: delete its { } block. Make sure the class
  above it does NOT have a trailing comma if it becomes the last
  one in the list.

  TO ADD A DAY: copy an entire day block from { "day": ...
  down to its closing }, and add it before the final ]

  FIELDS PER CLASS:
    time   — the time string, e.g. "6:00 – 7:00 PM"
             Use an en-dash (–) between times, not a hyphen (-)
    name   — the class name, e.g. "Beginner"
    note   — optional. Small italic note shown next to the class
             e.g. "Scheduled monthly". Leave out the whole
             "note" line if not needed.

  EXAMPLE DAY BLOCK:
  {
    "day": "Tuesday",
    "classes": [
      { "time": "11:00 AM – 1:00 PM", "name": "Intermediate" },
      { "time": "6:00 – 7:00 PM",     "name": "Beginner" },
      { "time": "7:45 – 8:30 PM",     "name": "Intermediate" }
    ]
  }


----------------------------------------------------------------
  3. fees-data.json — the Class Fees page
----------------------------------------------------------------

  Controls the fees page — a notice at the top, then groups of
  fees each with a label and a list of price rows.

  TO UPDATE A PRICE: find the item by name and change the
  "price" value. e.g. "$145 / mo" → "$155 / mo"

  TO ADD A NEW FEE: copy an existing item line and paste it
  before the closing ] of that group. Add a comma after the
  line above it.

  TO UPDATE THE NOTICE BANNER: change the "notice" text at the
  top. You can use <strong>...</strong> for bold text.

  TO HIDE THE NOTICE: set it to "" (empty string)

  FIELDS:
    heroTitle     — page heading (e.g. "Class Fees")
    heroSubtitle  — smaller text under the heading
    notice        — highlighted notice box at top of page.
                    Supports basic HTML like <strong>
    groups        — list of fee sections, each with:
      label       — section heading (e.g. "Monthly Classes")
      items       — list of fee rows, each with:
        name      — description of the fee
        price     — the price string (e.g. "$145 / mo")

  EXAMPLE FEE GROUP:
  {
    "label": "Monthly Classes",
    "items": [
      { "name": "Beginner & Intermediate", "price": "$145 / mo" },
      { "name": "Members & Disciples",     "price": "$135 / mo" }
    ]
  }


----------------------------------------------------------------
  4. events-data.json — the Events page
----------------------------------------------------------------

  Controls the Events page. Each event has a title, description,
  an optional featured image, and an optional photo grid.

  TO ADD AN EVENT: copy the entire { } event block, paste it
  after the last event (inside the "events": [ ] list), and
  add a comma after the previous event's closing }.

  TO REMOVE AN EVENT: delete its entire { } block and the
  comma before it.

  FIELDS PER EVENT:
    tag           — small label badge, e.g. "☯ Lunar New Year"
    title         — event heading
    description   — paragraph text describing the event
    featuredImage — optional. One large image above the grid.
                    Remove this whole section if not needed.
      src         — path to the image file
                    e.g. "Images/EImages/photo.jpg"
      alt         — short description for accessibility
    photos        — optional grid of smaller images.
                    Remove this whole section if not needed.
                    Each photo has:
      src         — path to the image file
      alt         — short description

  ADDING IMAGES:
    Upload your image files to the Images/EImages/ folder on
    HostPapa first, then reference them in the JSON using the
    path format shown above.

  EXAMPLE EVENT:
  {
    "tag": "☯ Lunar New Year",
    "title": "Happy Chinese New Year — Year of the Horse",
    "description": "We met at the Royal Palace Restaurant in Troy
                    to celebrate the Lunar New Year.",
    "featuredImage": {
      "src": "Images/EImages/photo.jpg",
      "alt": "Chinese New Year celebration"
    },
    "photos": [
      { "src": "Images/EImages/photo2.jpg", "alt": "Gathering" },
      { "src": "Images/EImages/photo3.jpg", "alt": "Gathering" }
    ]
  }


================================================================
  NEED HELP?
================================================================

  If you are unsure about an edit or something looks wrong
  after an upload:

  1. Restore your backup file (see HOW TO UPLOAD above)
  2. Contact your developer with a screenshot of the issue

================================================================
