# Project Name: SysQube Task management system with Drag and Drop
This is a full-stack task management application with a modern UI. The project is divided into two main parts:

* `frontend/`: A React-based interface for managing tasks
* `backend/`: A Laravel 12 API-only backend using an SQLite database

---

## Features

* Create, update, and manage tasks
* Drag-and-drop task cards between columns using `@dnd-kit`
* Prioritize tasks with three levels (low, medium, high)
* Search, sort, and filter tasks by priority, status, and deadline
* Beautifully styled with Tailwind CSS
* Toast notifications for quick feedback

---

## Project Structure

```
project-root/
│
├── backend/       # Laravel backend (API only, SQLite based)
│
├── frontend/      # React frontend using Tailwind CSS
│
└── README.md
```

---

## Backend Setup (Laravel)

### Requirements

* PHP >= 8.1
* Composer
* SQLite (comes bundled with PHP)

### Getting Started

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install PHP dependencies:

   ```bash
   composer install
   ```

3. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

4. Generate application key:

   ```bash
   php artisan key:generate
   ```

5. Set the database connection in `.env`:

   ```env
   DB_CONNECTION=sqlite
   DB_DATABASE=task-management.sqlite
   ```

6. Create the SQLite database file:

   ```bash
   touch database/database.sqlite
   ```

7. Run migrations:

   ```bash
   php artisan migrate
   ```

8. Start the backend server:

   ```bash
   php artisan serve
   ```

---

## Frontend Setup (React + Tailwind CSS)

### Requirements

* Node.js (version >= 16 recommended)

### Getting Started

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install JavaScript dependencies:

   ```bash
   npm install
   ```

### Key Packages Used

* `react-icons` — for icons
* `axios` — for API requests
* `@dnd-kit/core` — for drag-and-drop functionality
* `react-hot-toast` — for toast notifications
* `tailwindcss` — for utility-first CSS styling

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

Make sure your backend (Laravel) server is running so the frontend can connect to the API.

---

## Additional Notes

* The frontend uses environment variables (`.env`) to define the backend API URL. Example:

  ```env
  REACT_APP_API_BASE_URL=http://127.0.0.1:8000/api
  ```
