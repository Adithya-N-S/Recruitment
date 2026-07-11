# MyToDo - Modern Glassmorphic Task Manager

A premium, interactive, and responsive Todo list web application built entirely using standard HTML5, CSS3 (Vanilla), and JavaScript. Featuring a modern Glassmorphism theme, smooth animations, progress tracking, category tagging, prioritization, and real-time search/filtering.

## 🚀 Features

### 1. Full CRUD Operations (JavaScript Array)
*   **Create**: Add tasks with custom descriptions, category tags, priority levels, and due dates.
*   **Read**: Render tasks dynamically based on state filtering and search parameters.
*   **Update**: Rename task descriptions via double-click or edit buttons, and toggle task completion states.
*   **Delete**: Remove individual tasks with smooth slide-out transitions, or clear all completed tasks at once.

### 2. Modern Design & Visual Polish
*   **Glassmorphic UI**: Frosted-glass container effects created with `backdrop-filter: blur()`, subtle borders, and soft shadows.
*   **Ambient Gradients**: Fluid background radial gradients with floating ambient blobs that drift softly in the background.
*   **Interactive Metrics**: Real-time progress bar indicating the percentage and count of completed tasks.
*   **Status Badges**: Translucent color-coded tags for Category (Personal, Work, Shopping, Health, Learning) and Priority (Low, Medium, High).
*   **Smart Due Dates**: Highlights dates relative to today (e.g. "Today", "Tomorrow") and marks expired tasks with a high-visibility overdue warning.

### 3. Filters & Search Controls
*   **Quick Search**: Instant, case-insensitive text search to locate specific tasks in real-time.
*   **Status Filter Tabs**: Seamlessly toggle between viewing **All**, **Pending**, or **Completed** tasks.

### 4. Responsiveness
*   Adapts dynamically from compact mobile viewports (~360px width) up to large desktop monitors, using CSS grid/flexbox and media queries.

---

## 📁 File Structure

The project consists of three core files:
*   `index.html`: Holds the semantic layout of the application card, input forms, and search controls.
*   `style.css`: Contains CSS variables, typography adjustments, glassmorphism filters, keyframes, and layout breakpoints.
*   `script.js`: Manages the in-memory `tasks` array, event delegation listeners, search queries, and DOM update routines.

---

## 🛠️ How to Run

No servers, compilers, or package managers are required to run this application:

1.  Download or clone the files (`index.html`, `style.css`, and `script.js`) into a single folder.
2.  Double-click the **`index.html`** file to launch the application directly in any modern web browser (e.g., Chrome, Edge, Firefox, Safari).
