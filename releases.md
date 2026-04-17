# Changelog

## Beta 1.3

### New: Application Gating & Support Integration

Take full control over your application window and provide better support to your applicants.

**Application Window Gating:**
- **Automatic Gating:** Programs now automatically open and close based on `open_date` and `deadline` timestamps.
- **Smart States:** The application form dynamically renders "Not Yet Open" or "Applications Closed" states when accessed outside the allowed window.
- **Precise Control:** Added date-time pickers to both the **Cohort Wizard** and **Cohort Settings** for granular scheduling.

**Support & Contact:**
- **Contact Info:** Define a dedicated support email in the final step of the Cohort Wizard.
- **Applicant Visibility:** Your support email is now prominently displayed on the application form and success pages, ensuring applicants know where to turn for help.

### Optimizations: Review Portal & Performance

Significant improvements to the reviewer experience and platform stability.

**Reviewer Experience:**
- **Next.js 15 Readiness:** Core components updated to handle asynchronous routing patterns, ensuring a smooth experience on the latest framework version.
- **Reliable Commenting:** Fixed synchronization issues with real-time re-fetching and optimistic UI updates for instant feedback.
- **Activity Tracking:** Comments are now automatically logged in the applicant's activity feed for a complete audit trail.
- **Peace of Mind:** Added an "Auto-saved" indicator so reviewers know their work is always captured.

**Admin Dashboard:**
- **Refined Workflow:** Relocated the "Copy Guest Link" action to the Data Table Toolbar for quicker access during reviews.
- **Better Feedback:** Integrated elegant `sonner` toast notifications for clipboard actions.
- **Settings Sync:** The Cohort Settings sheet now allows real-time updates to dates and visibility settings without needing to re-open the wizard.

---

## Beta 1.2

### New: Reviewer Invitations & Team Inbox

Collaborate with team members more effectively with the new invitation system.

**Invite Team Members:**
- Support for invites from the **Cohort Wizard (Step 4)**, **Cohort Settings**, and the global **Team Settings** page.
- **Account Validation:** Real-time check to ensure invitees already have a Cohortly account.
- **Duplicate Prevention:** Automatic block for duplicate pending invites.

**Interactive Inbox:**
- Unified Team Inbox now supports **Invitation Cards**.
- **One-Click Acceptance:** Invitees can accept or decline directly from their inbox.
- **Auto-Join:** Upon acceptance, reviewers are instantly granted correct permissions and redirected to the cohort.

---

## Beta 1.1

### New: CSV Export & Import

Applicant data can now be moved in and out of Cohortly directly from the dashboard.

**Export:**
- Click the **Download** icon in the toolbar, or open the **Settings** menu and choose **Export as CSV**.
- The export respects any active filters.
- Support for dynamic rubric criterion columns.

**Import:**
- Open the **Settings** menu and choose **Import from CSV**.
- Smart header mapping for Name, Email, Company, and Status.
- Dry-run preview showing valid rows vs. errors before you commit.
- Duplicate handling: choose between skipping existing emails or overwriting with new data.
- Template download available from the import modal.

### Changes
- Renamed "AI Review" button in the dashboard toolbar to "Score" for clarity.
- Updated tooltip text across the dashboard toolbar to be more concise.

---

## Beta 1.0

### Program Builder
A 4-step wizard for setting up a cohort program end-to-end.
- **Step 1 — Basics**: Name, description, type, dates, logo, and cover image.
- **Step 2 — Form Builder**: Drag-and-drop form construction with 15+ field types and conditional logic.
- **Step 3 — Rubric**: Define scoring criteria with weights and descriptions. Set threshold rules for automatic flagging.
- **Step 4 — Launch**: Invite reviewers, set roles, and publish the public application form.

All progress is autosaved as a draft at every step.

### Scoring Engine
Applicant answers are evaluated against the rubric you define. Each score comes with a written explanation per criterion. Scores are editable at any time by a reviewer.

- Threshold rules can automatically flag applications for shortlisting or rejection based on their score.
- Scoring can be cancelled mid-batch; completed scores are retained.

### Review Dashboard
A real-time table for managing incoming applications.
- Filter by status, score range, company, and date.
- Sort by any column, including individual rubric criterion scores.
- Open any applicant row to see their full answers, scores, and reviewer comments.
- Bulk actions: update status, send email, run scoring, or delete multiple applicants at once.
- Kanban view available as an alternative to the table layout.

### Unified Inbox
A centralized feed for all application submissions and reviewer comments across all programs.
- Filter by type, read/unread, starred, and archived.
- Bulk mark, archive, or delete items.
- Inbox state (read, starred, archived) is stored locally per user.

### Public Application Form
Each program gets a unique public URL (`/apply/[slug]`). No login required for applicants.
- Section-by-section layout with progress tracking.
- Auto-saves applicant progress to localStorage.
- Post-submission confirmation with custom thank-you message and next steps.

### Settings
- **Profile**: Display name, avatar, email.
- **Billing & Plans**: Subscription management.
- **Notifications**: In-app and email notification preferences.
- **Integrations**: Slack, Zapier, and webhook connections.
- **Team & Reviewers**: Team-wide reviewer management.
- **Appearance**: Light/dark mode, density, and font size.
- **Danger Zone**: Account and program deletion.

### Fixes
- Fixed conditional logic failing on radio button inputs in certain configurations.
- Resolved a TypeScript error in the navbar dropdown item mapping.
- Improved mobile navigation responsiveness.
- Optimised initial page load by deferring non-critical font and asset loading.

---

## What's next — Beta 2

- **Full Cohort Migration**: Export an entire cohort (settings, form, rubric, and all applicants) as a portable JSON file. Import into a different account or environment.
- **Bulk Email**: Send acceptance, rejection, or custom emails to groups of applicants directly from the dashboard.
- **Rich Text Comments**: Markdown support and file attachments in reviewer comment threads.