# Cohortly — Content Library & Documentation Guide

> **Purpose**: This file is the single source of truth for landing page copy, product feature descriptions, and step-by-step how-to guides. It is designed to be used directly as content for the landing page and as the foundation for a future "Documentation" or "Help Center" page.

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Core Features](#2-core-features)
   - 2.1 [Home Dashboard (KPIs & Activity Feed)](#21-home-dashboard-kpis--activity-feed)
   - 2.2 [Program Builder — 4-Step Wizard](#22-program-builder--4-step-wizard)
   - 2.3 [Application Review Dashboard](#23-application-review-dashboard)
   - 2.4 [Scoring Engine](#24-scoring-engine)
   - 2.5 [Unified Inbox](#25-unified-inbox)
   - 2.6 [Public Application Form](#26-public-application-form)
   - 2.7 [Settings & Account Management](#27-settings--account-management)
   - 2.8 [Data Portability — Export & Import](#28-data-portability--export--import)
3. [Documentation (How-To Guides)](#3-documentation-how-to-guides)
   - 3.1 [Getting Started](#31-getting-started)
   - 3.2 [Creating Your First Program](#32-creating-your-first-program)
   - 3.3 [Building the Application Form](#33-building-the-application-form)
   - 3.4 [Setting Up the Scoring Rubric](#34-setting-up-the-scoring-rubric)
   - 3.5 [Launching & Sharing Your Program](#35-launching--sharing-your-program)
   - 3.6 [Reviewing Applications](#36-reviewing-applications)
   - 3.7 [Using the Scorer](#37-using-the-scorer)
   - 3.8 [Managing Your Inbox](#38-managing-your-inbox)
   - 3.9 [Collaborating with Reviewers](#39-collaborating-with-reviewers)
   - 3.10 [Managing Settings](#310-managing-settings)
   - 3.11 [Exporting Applicant Data](#311-exporting-applicant-data)
4. [Glossary](#4-glossary)

---

## 1. Product Overview

**Cohortly** is a program management tool for accelerators, grant programs, fellowship programs, and venture capital funds that run structured applicant cohorts.

It handles the end-to-end process: building a public application form, collecting submissions, reviewing and scoring applicants, coordinating a review team, and managing final decisions — all in one place.

### Landing Page Hero Copy

**Headline:**
> The Operating System for Modern Accelerators

**Subheadline:**
> From application form to final decision. Cohortly handles the infrastructure so your team can focus on the work.

**CTA:** `Get Started`

### Value Propositions (for Features section or How it Works)

| # | Pillar | One-liner |
|---|--------|-----------|
| 1 | Scoring Engine | Rank applicants against a custom rubric. Scores are explainable and editable. |
| 2 | Program Builder | Build and publish an application form in minutes with no-code tools. |
| 3 | Unified Inbox | Every submission and reviewer comment in one place. |
| 4 | Real-time Updates | KPIs and activity feeds update as applications come in. |
| 5 | Team Collaboration | Assign reviewers, set roles, and leave comments on any application. |
| 6 | Data Portability | Export applicant data as CSV at any time. Full JSON cohort snapshots coming in Beta 2. |

---

## 2. Core Features

### 2.1 Home Dashboard (KPIs & Activity Feed)

The **Home** page is the starting point for any program manager. On login, you see a real-time snapshot of your operation.

#### Key Performance Indicators (KPIs)

The Home page renders four live KPI cards fetched in real-time from the database:

| KPI Card | What it Measures |
|----------|-----------------|
| **Total Applications** | Cumulative submissions across all active (published) programs. |
| **Average Score** | System-wide average of all scored applications. Displays `--` if none have been scored. |
| **Pending Reviews** | Applications with a status of `new` or `reviewing` that still need attention. |
| **Active Programs** | Programs currently in `published` state — i.e., accepting applications. |

#### Recent Activity Feed

Below the KPIs is a live activity feed split into two sections:

- **Recent Applications**: The 5 most recently submitted applications, sorted descending. Each row shows the applicant's name, the program they applied to, when they applied (relative time, e.g. "2 hours ago"), and a status badge. Clicking a row navigates directly to that program's Dashboard.
- **Recent Comments**: The 5 most recent reviewer comments, showing the commenter's name, the program the comment was in, the comment text (truncated), and relative time.

#### Insights Panel

A sidebar card displays the **Insights** panel. Once applications arrive, this panel surfaces summaries and highlights — including top performers and applications that closely match the program's criteria. In its initial state, it displays a placeholder explaining its purpose.

#### Quick Actions

Below the insights panel, two quick action buttons allow users to:
1. **Draft a Program** — Navigate to the program creation wizard (`/cohorts/new`).
2. **Configure Account** — Open the profile settings panel directly.

---

### 2.2 Program Builder — 4-Step Wizard

The **Cohort Builder** (accessible at `/cohorts/new`) is a multi-step, animated wizard that guides program managers through every aspect of setting up an application program. The wizard is fully autosaving — progress is saved to the database as a `draft` on every "Next" click.

#### Step 1: Cohort Basics

This step collects the core metadata for the program:

- **Program Name** *(required)*: The public-facing name for the cohort (e.g., "Spring 2025 Accelerator Batch").
- **Description**: A rich description of what the cohort is about, the criteria, and what applicants can expect.
- **Program Type**: A selection of common cohort types (e.g., Startup Accelerator, VC Fund, Grant Program, Fellowship).
- **Opening Date & Time**: When the application form will go live to the public. Uses a granular date-time picker for precise scheduling.
- **Deadline Date & Time**: The final date and time by which applications will be accepted.
- **Application Gating**: The system automatically manages the form's visibility. Applicants visiting the URL before the opening date or after the deadline will see a custom "Not Yet Open" or "Applications Closed" state.
- **Cover Image**: An optional hero image shown at the top of the public-facing application form.
- **Logo**: The program's logo, displayed prominently on the form and in the review dashboard.
- **Expected Applications**: An optional estimate of how many applications the organizer expects to receive.

#### Step 2: Form Builder

The drag-and-drop **Form Builder** is Cohortly's most powerful no-code tool. It allows organizers to construct multi-section application forms with a wide variety of question types.

**Key concepts:**

- **Sections**: The form is organized into logical sections (e.g., "About Your Company", "Team Details", "Financials"). Each section becomes its own "page" in the public-facing form.
- **Questions**: Each section contains an ordered list of questions.
- **Conditional Logic**: Questions can be shown or hidden based on the applicant's answers to previous questions. Logic can be set to `any` (OR) or `all` (AND) conditions.

**Supported Question Types:**

| Type | Description |
|------|-------------|
| `short-text` / `text` | Single-line text input. |
| `long-text` / `statement` | Multi-line textarea for detailed answers. |
| `email` | Email input with built-in validation. |
| `phone` | International phone number input with country dial code picker. |
| `date` | Date picker. |
| `multiple-choice` | Single-select from a list of options. |
| `checkboxes` | Multi-select from a list of options. |
| `dropdown` | Dropdown (select) with custom options. |
| `file-upload` / `file` | Any file type, up to a configurable max size. |
| `image-upload` | Images only. |
| `video-pitch` / `video` | Video file uploads (e.g., for pitch videos). |
| `location` | Text input with a location/map icon. |
| `funding-raised` | Currency input field for funding amounts. |
| `revenue` | Currency input for current revenue figures. |
| `diversity` | Structured DEI data collection input. |
| `references` | Multi-line field for listing references and their contact info. |
| `team-invites` | Multi-line field for listing collaborator email addresses. |
| `traction` | Long-text field specifically for traction metrics. |

**Conditional Logic Operators:**

| Operator | Description |
|----------|-------------|
| `is` | Answer exactly equals value. |
| `is not` | Answer does not equal value. |
| `contains` | Answer contains a substring. |
| `does not contain` | Answer does not contain a substring. |
| `greater than` | Numeric comparison. |
| `less than` | Numeric comparison. |

#### Step 3: Rubric & AI Scoring

This step configures the AI scoring engine. The rubric defines how Cohortly's AI will evaluate every incoming application.

- **Criteria**: Add one or more scoring criteria (e.g., "Team Quality", "Market Opportunity", "Traction"). Each criterion has:
  - **Name**: A short label for the criterion.
  - **Weight (%)**: The relative importance of this criterion to the overall score (all weights must sum to 100%).
  - **Description**: A detailed prompt description that the AI uses to understand what a high score looks like.
- **Threshold Rules** (Automations):
  - **Shortlist Threshold**: Applications whose overall AI score is `>=` this value (default: 85) are automatically flagged for shortlisting.
  - **Reject Threshold**: Applications whose overall AI score is `<` this value (default: 55) are automatically flagged for rejection.
  - **Note**: Auto-accept is intentionally disabled. The system will flag for shortlisting, but a human reviewer must make the final acceptance decision.

#### Step 4: Settings & Launch

The final wizard step manages access controls, support information, and publishing.

- **Support & Contact**: Define a dedicated support email address for the program. This email is displayed on the public application form and submission success pages so applicants can reach out with questions.
- **Reviewer Management**: Invite team members by email address.
    - **Invitations**: Instead of being added immediately, reviewers receive an invitation in their in-app Inbox. 
    - **Requirement**: Reviewers must have an existing Cohortly account to receive an invitation.
    - **Roles**: Assign one of three roles:
  - **Admin**: Full read/write access to the program, applications, and settings.
  - **Reviewer**: Can view all applications and leave comments, but cannot modify program settings.
  - **Viewer**: Read-only access. Can see applications and scores.
- **Save as Draft**: Saves all progress to the database without publishing the form to the public.
- **Launch Cohort**: Publishes the program and form to the unique public application URL. The form becomes immediately accessible via its slug-based URL (subject to the opening date/deadline).

---

### 2.3 Application Review Dashboard

The **Dashboard** (`/dashboard?id=[program_id]`) is the primary workspace for reviewing and managing incoming applications. It is a real-time, data-dense table that updates automatically as new submissions arrive.

#### Data Table

The central table lists all applications for the selected program. Each row represents one applicant and typically displays:

- **Applicant Name** / **Company Name**
- **Overall AI Score** (0–100)
- **Status** (`New`, `Reviewing`, `Shortlisted`, `Accepted`, `Rejected`)
- **Submission Date**
- **Per-criterion scores** (as defined in the rubric)

#### Filtering & Sorting

The table supports advanced filtering via the toolbar:

- **Status Filter**: Filter by one or multiple statuses (e.g., show only `New` and `Reviewing`).
- **Score Range Filter**: Set a numeric range to filter applications by their overall score.
- **Reviewer Filter**: Filter applications by which reviewer has been assigned or commented.
- **Tag Filter**: Filter applications by custom tags.
- **Search**: Global text search across applicant names and company names.
- **Saved Views**: Create and save named filter configurations (e.g., "Top 20 candidates", "Needs follow-up") for one-click access in future sessions.

#### Applicant Detail Panel

Clicking on any row opens a slide-over detail panel that displays:

- The applicant's full form submission (all answers, organized by section).
- The AI score breakdown per criterion, including the AI's written reasoning for each score.
- A **Comments thread** where reviewers can leave timestamped notes. Comments are scoped per column/criterion for contextual discussion.
- Manual score override controls — any reviewer can manually adjust the AI score for a given criterion.
- Status update controls — change the application status directly from the panel.

#### Real-time Updates

The dashboard uses Supabase's real-time PostgreSQL change subscriptions. This means:
- When a new application is submitted on the public form, it appears in the dashboard instantly — no manual refresh needed.
- When a reviewer leaves a comment or changes a status, all connected sessions update in real-time.

---

### 2.4 Scoring Engine

Cohortly's scoring engine runs as a Supabase Edge Function using Google Gemini.

#### How it Works

1. The program manager triggers scoring from the Dashboard header.
2. The system fetches all unscored applications for the selected program.
3. For each application, the model is prompted with the **rubric criteria + descriptions** and the **applicant's full set of answers**.
4. The model returns a structured response containing:
   - A score (0–100) for each criterion.
   - A written `reason` sentence explaining each score.
   - A computed `overall_score` (the weighted average of all criteria scores).
5. These scores and reasons are stored in the `applications.scores` column.
6. **Threshold rules** are then evaluated. Applications meeting the shortlist threshold are flagged; those below the reject threshold are flagged for rejection.
7. The process runs sequentially — the UI shows progress and allows scoring to be cancelled at any point.

#### Score Display

In the review table and detail panel, scores are shown as:
- **Color-coded badges**: Green (≥ 80), Amber (55–79), Red (< 55).
- **Criterion breakdown**: Each rubric criterion shows its individual score and the model's written rationale.

---

### 2.5 Unified Inbox

The **Inbox** (`/inbox`) is a centralized activity feed that consolidates all program activity into a single, email-client-style view.

#### What appears in the Inbox

The inbox surfaces two types of activity:
- **New Applications**: Whenever an applicant submits a form for any of your programs.
- **New Comments**: Whenever a reviewer posts a comment on any application in any of your programs.
- **Reviewer Invitations**: When you are invited to join a cohort as a reviewer. These cards include interactive **Accept** and **Decline** buttons.

All items are sorted in reverse-chronological order (newest first).

#### Filtering & Search

The inbox includes a powerful toolbar:

| Filter | Description |
|--------|-------------|
| **All** | Shows all non-deleted, non-archived items. |
| **Unread** | Shows only items that haven't been marked as read. |
| **Read** | Shows only items that have been marked as read. |
| **Starred** | Shows only items you've starred. |
| **Archived** | Shows only archived items. |
| **Applications** | Scopes to application events only. |
| **Comments** | Scopes to comment events only. |
| **Invitations** | Scopes to pending reviewer invitations. |

The search bar performs a real-time text search across applicant names, commenter names, comment text, and program names.

#### Per-Row Actions (Hover)

Hovering over any inbox row reveals three action icons aligned to the right margin:

- 🗑️ **Delete**: Permanently removes the item from the inbox view (stored in localStorage).
- 📁 **Archive / Unarchive**: Moves the item to the Archived view. Archived items are hidden from all other filters.
- ✉️ **Mark as Read / Unread**: Toggles the read/unread status of the item.
- ⭐ **Star / Unstar**: Toggles the starred status of the item.

#### Bulk Selection & Batch Actions

- A checkbox at the start of each row allows individual selection.
- A "Select All" checkbox in the header selects all visible items.
- With items selected, a batch action toolbar becomes available to archive, delete, mark read/unread, or star multiple items at once.

#### State Persistence

All inbox state (read, archived, deleted, starred) is persisted to **localStorage** keyed by user ID. This means your inbox state is restored across page refreshes and sessions without requiring any backend writes.

---

### 2.6 Public Application Form

The applicant-facing form is served at `/apply/[slug]` and is fully public — no login required. It is fetched dynamically from the database based on the program's unique slug.

#### Form Structure

The form is divided into sequential **sections** (as defined in the Form Builder). Each section is displayed one at a time, with navigation dots at the top for quick jumping.

- **Progress Bar**: A fixed top bar shows the percentage completion (e.g., "40%") and the current section title.
- **Section Dots**: Interactive clickable dots allow jumping to any completed or in-progress section, but prevent skipping ahead past unvalidated sections.
- **Save Draft**: Applicants can save their progress at any time. Drafts are stored in `localStorage` and auto-loaded on return to the same URL.
- **Auto-Save**: As the applicant types, their responses are automatically saved to localStorage every time any answer changes. A brief "Saved" indicator confirms the save.

#### Validation

Each section is validated before the applicant can proceed to the next:
- **Required Fields**: Required questions show an asterisk (`*`). If left blank, an error message appears and progression is blocked.
- **Email Validation**: `email` questions check for a valid email format.
- **Phone Validation**: `phone` questions check that the number contains at least 10 digits.
- **Conditional Logic Evaluation**: Hidden questions (filtered by conditional logic) are excluded from validation.

#### Success State (Post-Submission)

After the final section is submitted:
- The page transitions to a full-screen **Confetti Success** state.
- A card displays:
  - A large checkmark icon.
  - The program's custom **Thank You Message** (or a default if none is set).
  - A **Next Steps** grid (3 steps: Initial Review → Shortlisting → Final Decision).
  - The program's contact email.
  - Social sharing buttons (Twitter/X, LinkedIn).
  - A "Done" button to reset, and an optional "Submit another response" link.

---

### 2.7 Settings & Account Management

The **Settings** section (`/settings`) provides a sidebar-navigated panel for all account-level configurations.

#### Settings Pages

| Page | Description |
|------|-------------|
| **Profile** | Edit your display name, avatar, and contact information. |
| **Billing & Plans** | View your current subscription tier, manage billing, upgrade, or cancel. Displays usage metrics against plan limits. |
| **Notifications** | Configure which events trigger in-app and/or email notifications. |
| **Integrations** | Connect and manage third-party integrations (e.g., Zapier, Slack, Webhooks). |
| **Team & Reviewers** | View and manage all active reviewer invitations across all programs. Set default reviewer roles. |
| **Appearance** | Toggle the application's visual theme (Light / Dark mode), adjust density settings, and configure font size preferences. |
| **Danger Zone** | Irreversible destructive actions: delete your account or permanently delete a specific program and all its data. Requires confirmation input to proceed. |

---

### 2.8 Data Portability — Export & Import

Cohortly gives you full access to your data. Applicant records are never locked in.

#### Export as CSV (Available now)

From any program's Dashboard, click the **Download** icon in the toolbar (or open the toolbar settings menu and choose **Export as CSV**) to download all currently visible applicant data as a `.csv` file.

The export includes:

| Column | Description |
|--------|-------------|
| ID | Cohortly's internal applicant ID. |
| Name | Applicant's full name. |
| Company | Company or organisation name. |
| Status | Current review status (New, Reviewing, Shortlist, etc.). |
| Score | Overall weighted score (0–100). |
| Submitted Date | Date the application was submitted. |
| Notes | Written scoring notes, if available. |
| *[Rubric criteria]* | One column per scoring criterion, showing that criterion's individual score. |

The file is UTF-8 encoded with a BOM prefix so it opens correctly in Microsoft Excel, Numbers, and Google Sheets.

> **Tip**: Active filters are reflected in the export. If you have filtered to "Shortlisted" applicants only, the CSV will contain only those rows.

#### Import applicants from CSV

Bulk-import applicants from an external source (Typeform, Airtable, Google Forms, or a manually prepared spreadsheet). 

1. From the Dashboard, click the **Settings** menu and choose **Import from CSV**.
2. Upload your file. Cohortly automatically maps common headers (Name, Email, etc.).
3. Review the summary of valid rows vs. errors.
4. Choose a deduplication strategy:
   - **Skip**: Ignore rows whose email already exists in the program.
   - **Overwrite**: Update existing records with the new data.
5. Click **Start Import**.

> **Note**: You can download a template CSV from the import modal to see the expected format.

#### Full cohort migration

To transfer an entire program—including all forms, rubrics, rules, and applicant data—use the JSON snapshot feature.

**To export:**
1. Open the **Cohort Settings** from the dashboard.
2. Scroll down to **Data & Migration**.
3. Click **Export JSON**. A `.json` snapshot of your current program state will download.

**To import:**
1. Open the global **Settings** from the main sidebar.
2. Navigate to the **Import** tab.
3. In the **Migrate Cohort** section, upload your `.json` file.
4. Cohortly will automatically rebuild the program, forms, rubrics, and map the applicants accurately in a new cohort instance.

---

## 3. Documentation (How-To Guides)

### 3.1 Getting Started

#### Creating an Account

1. Navigate to `cohortly.app` and click **Start Free Trial**.
2. Sign up using your Google account or an email/password combination.
3. Upon first login, you will be taken directly to your **Home** page. You will see an empty state with zero KPIs and a prompt to create your first program.

#### Navigating the App

The app uses a fixed **left sidebar** as the primary navigation:

| Sidebar Icon | Destination |
|---|---|
| 🏠 Home | Dashboard overview with KPIs and activity. |
| 🔍 Search | Universal search across all programs, applicants, and comments. |
| 📊 Dashboard | The application review table (select a program from the dropdown). |
| 📬 Inbox | Unified notification and activity feed. |
| ⚙️ Settings | Account and team settings. |

---

### 3.2 Creating Your First Program

**Prerequisite**: You must be logged in.

1. From the **Home** page, click the **Start New Cohort** button, or from the sidebar, navigate to **Dashboard** and click the **+** button.
2. You will enter the **4-Step Program Wizard**.

#### Step 1: Cohort Basics

1. Enter a descriptive **Program Name** (e.g., "YC-Style Accelerator Spring 2025").
2. Write a compelling **Description** — this will be shown to applicants on the public application form.
3. Select a **Program Type** from the dropdown.
4. Set an **Opening Date** (when applications open) and a **Deadline** (when applications close).
5. *(Optional)* Upload a **Cover Image** (recommended: 1200x400px) and a **Logo** (recommended: 400x400px square). These appear on the public application form.
6. Click **Save as Draft** to save your progress, or click **Next** to auto-save and proceed.

> **Tip**: Your program is saved as a draft at every step. You can safely close the browser and return later — your draft will be waiting for you in the dashboard.

---

### 3.3 Building the Application Form

**Prerequisite**: Completed Step 1 (Cohort Basics).

From **Step 2** of the wizard, you are in the **Form Builder**.

#### Adding a New Section

1. On the left panel, click **+ Add Section**.
2. Give the section a **Title** (e.g., "About Your Startup") and an optional **Description** (shown as a subtitle to applicants).
3. Sections appear as separate pages in the public form, so group related questions together.

#### Adding Questions to a Section

1. With a section selected, click **+ Add Question** in the right panel.
2. Choose the **Question Type** from the type picker.
3. Enter the **Question Text** (shown as the question label on the form).
4. *(Optional)* Add a **Description/Hint** — this appears as a sub-label below the question.
5. *(Optional)* Add a **Placeholder** — the light grey helper text shown inside text inputs.
6. Toggle **Required** on if the question must be answered before proceeding.
7. For `multiple-choice`, `checkboxes`, and `dropdown` types, add your **Options** by clicking **+ Add Option**.

#### Configuring Conditional Logic

Conditional logic allows a question to only appear if specific conditions are met.

1. Select a question and click the **Logic** tab in the question editor.
2. Toggle **Enable Conditional Logic**.
3. Add one or more **Conditions**:
   - **Question**: Select a previous question in the form.
   - **Operator**: Choose how to evaluate (`is`, `is not`, `contains`, etc.).
   - **Value**: Enter the specific value to match.
4. Set the **Logic Operator**:
   - **Any**: Show if ANY of the conditions are met.
   - **All**: Show only if ALL conditions are met.

**Example**: You have a question "Is your startup incorporated?" (multiple-choice: Yes/No). You can add another question "Please provide your legal entity name" and configure it to only appear if the first question `is` "Yes".

#### Reordering Questions and Sections

- Drag and drop questions within a section using the drag handle (⋮⋮) on the left of each question.
- Drag and drop sections on the left panel to reorder them.

#### Preview

Click the **Preview** button in the Form Builder header to open the live applicant view in a new tab. This shows exactly what applicants will see.

---

### 3.4 Setting Up the Scoring Rubric

**Prerequisite**: Completed Step 2 (Form Builder).

From **Step 3** of the wizard, you are in the **Rubric & Scoring** setup.

#### The Scoring Philosophy

The scoring engine works by reading each applicant's answers and evaluating them against the criteria you define here. The more specific and detailed your criterion descriptions, the more consistent the scores will be.

#### Adding a Criterion

1. Click **+ Add Criterion**.
2. Enter a **Name** for the criterion (e.g., "Market Size", "Team Completeness", "Product-Market Fit").
3. Set the **Weight (%)**: This is how important this criterion is relative to others. All weights must sum to exactly 100%.
4. Write a detailed **Scoring Description**: Explain to the AI what a 90-100 score looks like vs. a 50 score vs. a 20 score. Be explicit.

**Example Criterion Description for "Team Quality":**
> "A score of 90+ means the team has 2+ founders with direct domain expertise, a track record of successful exits or relevant experience, and clearly defined roles. A score of 60-80 means the team has relevant skills but may lack one co-founder or have limited industry experience. A score below 50 means a solo founder without relevant industry background, or a team with significant skill gaps."

#### Setting Threshold Rules

Threshold rules allow the AI to automatically flag applications once they are scored:

1. Toggle **Enable Threshold Rules** to on.
2. Set the **Shortlist Threshold** (e.g., 80): Applications scoring `>=` this value will be automatically flagged as shortlisted.
3. Set the **Reject Threshold** (e.g., 50): Applications scoring `<` this value will be automatically flagged for rejection.

> **Important**: Auto-accept is intentionally disabled. Flagging an application as "shortlisted" does NOT automatically accept them. A human reviewer must manually change the status to "Accepted". This design ensures no irreversible decisions are made without human oversight.

---

### 3.5 Launching & Sharing Your Program

**Prerequisite**: Completed Steps 1–3.

From **Step 4** of the wizard, you can add reviewers and launch.

#### Inviting Reviewers

1. In the **Team & Reviewers** section, enter the email address of the person you want to invite.
2. Select their **role**:
   - **Admin**: Full access — can modify program settings, invite others, and change statuses.
   - **Reviewer**: Can view all applications and leave comments but cannot modify program settings.
   - **View-only**: Read-only access. Can see applications and scores but cannot leave comments.
3. Click **+ Add Reviewer**. The invitee must have an existing Cohortly account for the invitation to link correctly.

#### Launching the Program

1. Review your configuration summary.
2. Click **Launch Cohort**.
3. The form is published and a unique **Public URL** is generated in the format:
   `https://cohortly.app/apply/[your-program-slug]`
4. Share this URL on your website, social media, or via email to start receiving applications.
5. You will be redirected to the Dashboard for your new program.

#### Sharing & Embedding

- The public URL can be shared directly.
- For embedding on an external website, you can wrap the URL in an `<iframe>` tag.
- The form is fully responsive and works on mobile devices.

---

### 3.6 Reviewing Applications

**Prerequisite**: At least one application submitted to your program.

From the **Dashboard** (`/dashboard?id=[program_id]`), you have full control over reviewing applications.

#### Reading an Application

1. Click on any applicant row in the table to open the **Detail Panel**.
2. The panel shows all of the applicant's answers, organized by form section.
3. Scroll down to see the AI scores (if scoring has been run) and the reviewer comments thread.

#### Changing Application Status

In the Detail Panel, use the **Status** dropdown to change an application's status:

| Status | Meaning |
|--------|---------|
| **New** | Just arrived; no reviewer has looked at it yet. |
| **Reviewing** | Under active review. |
| **Shortlisted** | Passed the initial review; advancing to the next round. |
| **Accepted** | Final decision: accepted into the program. |
| **Rejected** | Final decision: not moving forward. |

#### Leaving Comments

1. In the Detail Panel, scroll to the **Comments** section.
2. Type your note in the input field.
3. Press Enter or click **Send**.
4. **Real-time Sync**: Comments are visible to all reviewers on the same program in real-time. The portal uses optimistic UI updates for instant feedback.
5. **Activity Log**: Every comment is automatically logged in the applicant's activity feed, creating a permanent audit trail of the review process.
6. You can delete your own comments by clicking the trash icon next to them.

#### Reviewer Experience Enhancements

- **Auto-save Indicator**: A subtle indicator confirms that your comments and score overrides are being saved in real-time.
- **Next.js 15 Performance**: The portal is optimized for the latest web standards, ensuring fast navigation and reliable data fetching.

#### Overriding AI Scores

1. In the Detail Panel, find the **Scores** section.
2. Each criterion has an editable score input.
3. Click the score value and type a new number (0–100).
4. The change is saved automatically and the overall score is recalculated.

#### Filtering and Saved Views

1. Use the **Filter Bar** above the table to filter by status, score range, reviewer, and tags.
2. Once you have a useful filter combination (e.g., all "Reviewing" applications scored above 70), click **Save View**.
3. Give the view a name (e.g., "Round 2 Candidates").
4. The saved view appears in a dropdown at the top for quick one-click access in future sessions.

---

### 3.7 Using the Scorer

**Prerequisite**: You have configured a scoring rubric (Step 3 of the wizard) and have at least one submitted application.

1. Navigate to your program's **Dashboard**.
2. In the **Dashboard Header**, click the **Score** button.
3. A progress indicator appears, showing which application is being scored.
4. Scoring runs sequentially. Click **Cancel** to stop at any point — already-scored applications retain their scores.
5. Once complete, all rows in the table will show the updated scores.
6. Applications that have met threshold criteria will automatically have their status updated.

> **Note**: Re-running the scorer on an already-scored application overwrites the previous scores. Manual score overrides are not affected.

> **Tip**: For consistent results, write criterion descriptions that explain what a high score looks like versus a low score. Specific descriptions (e.g., "team with domain expertise and a prior exit") produce more reliable scoring than vague ones (e.g., "good team").

---

### 3.8 Managing Your Inbox

The **Inbox** consolidates all activity across all your programs.

#### Reading an Item

- Click on any inbox item to navigate to the relevant program dashboard, where you can see the full application or comment in context.
- Items are initially shown as **Unread** (bold text). Once you click them, mark them as read manually, or use the bulk action.

#### Archiving Items

- Hover over an item to see the action icons on the right.
- Click the **Archive** icon (📁) to move the item to your Archived view.
- To view archived items, switch the filter tab to **Archived**.
- To unarchive an item, switch to the Archived tab, hover over the item, and click the **Unarchive** icon.

#### Deleting Items

- Hover over an item and click the **Delete** icon (🗑️).
- Deleted items are permanently hidden from all views. This action cannot be undone.

#### Bulk Actions

1. Check the checkboxes on the left side of the rows you want to act on.
2. A batch action toolbar will appear with options to: **Archive**, **Delete**, **Mark Read**, **Mark Unread**, and **Star**.
3. Check the header checkbox to select all currently visible items.
4. Perform the desired action.

> **Note**: Inbox state (read, archived, starred, deleted) is stored locally in your browser. Clearing browser storage will reset your inbox state.

---

### 3.9 Collaborating with Reviewers

#### Understanding Roles

| Role | View Applications | Leave Comments | Edit Status | Modify Program Settings | Invite Reviewers |
|------|:-----------------:|:--------------:|:-----------:|:------------------------:|:---------------:|
| **Admin** | ✅ | ✅ | ✅ | ✅ | ✅ |
| **Reviewer** | ✅ | ✅ | ✅ | ❌ | ❌ |
| **View-only** | ✅ | ❌ | ❌ | ❌ | ❌ |

#### Adding a Reviewer to an Existing Program
1. Navigate to the program's **Dashboard**.
2. Click the **Settings** button in the dashboard header (the ⚙️ icon).
3. Under the **Reviewers** section, enter the email address of the team member you want to invite.
   - **Note**: The user must already be signed into Cohortly.
4. Select their role and click **Add**.
5. When you're done adding reviewers, click **Save Changes**.
6. The invitee will receive a notification in their **Inbox**. Once they click **Accept**, they will be added to the team.

#### Managing Team-Wide Reviewers

For account-level team management, navigate to **Settings → Team & Reviewers**.

---

### 3.10 Managing Settings

#### Changing Your Profile

1. Navigate to **Settings → Profile**.
2. Edit your **Display Name**, upload a new **Avatar**, and update your **Email** (note: email changes may require re-verification).
3. Click **Save Changes**.

#### Managing Your Subscription (Billing)

1. Navigate to **Settings → Billing & Plans**.
2. View your current plan tier and usage metrics (e.g., number of applications scored this month vs. your plan limit).
3. Click **Upgrade Plan** to be taken to the Lemon Squeezy checkout page.
4. Click **Manage Subscription** to cancel, pause, or change your billing details via the Lemon Squeezy customer portal.

#### Configuring Notifications

1. Navigate to **Settings → Notifications**.
2. Toggle on/off notifications for specific events:
   - New application received.
   - Application status changed.
   - New comment on an application.
   - AI scoring complete.
3. Configure whether to receive **in-app** notifications, **email** notifications, or both for each event type.

#### Danger Zone

1. Navigate to **Settings → Danger Zone**.
2. **Delete a Program**: Permanently delete a program and all its applications, form data, rubrics, and reviewer records. This cannot be undone.
3. **Delete Account**: Permanently delete your entire Cohortly account. This cannot be undone.

> **Warning**: Both danger zone actions require you to type a confirmation phrase before proceeding. There is no recovery option.

---

### 3.11 Exporting Applicant Data

**Prerequisite**: At least one application submitted to your program.

1. Navigate to your program's **Dashboard** (`/dashboard?id=[program_id]`).
2. *(Optional)* Apply any filters or sorts to scope the export — only the currently visible rows will be included.
3. Click the **Download** icon button in the toolbar, or open the **Settings dropdown** (the sliders icon) and choose **Export as CSV**.
4. A `.csv` file is downloaded immediately — no confirmation dialog.
5. The filename follows the format `[program-name]-applicants-[date].csv`.

#### Opening the file

- **Microsoft Excel**: Open normally. The BOM prefix ensures UTF-8 characters display correctly.
- **Google Sheets**: Use *File → Import* and select UTF-8 encoding.
- **Numbers (macOS)**: Open directly — UTF-8 is handled automatically.

---

## 4. Glossary

| Term | Definition |
|------|-----------|
| **Program** | A named cohort application cycle with a form, rubric, reviewers, and a public URL. Also referred to as a "Cohort". |
| **Rubric** | The set of scoring criteria (with weights and descriptions) used to evaluate applications. |
| **Criterion** | A single dimension of the rubric (e.g., "Team Quality", "Market Size"). |
| **Threshold Rule** | An automatic rule that flags applications for shortlisting or rejection based on their score. |
| **Slug** | The human-readable URL identifier for a program (e.g., `spring-2025-accelerator-abcde`). |
| **Overall Score** | The weighted average of all criterion scores for a given application. Ranges from 0 to 100. |
| **Status** | The review state of an application: New, Reviewing, Shortlisted, Accepted, or Rejected. |
| **Saved View** | A named filter preset in the dashboard that can be recalled with a single click. |
| **KPI** | Key Performance Indicator — the top-line metrics on the Home dashboard. |
| **Conditional Logic** | Rules that control the visibility of a form question based on responses to earlier questions. |
| **Draft** | An unsaved/unpublished program or form that is stored in the database but not yet visible to the public. |
| **Reviewer** | A team member invited to review applications. Can be Admin, Reviewer, or View-only. |
| **CSV Export** | A comma-separated values file containing all currently visible applicant data from the dashboard. |
| **Data Portability** | The ability to move your data in or out of Cohortly using standard file formats (CSV, JSON). |
