##  `README.md` (Place this in the root of your project)

```md
#  Habit Tracker

A full-stack habit tracking application built for Summative 1.  
This project includes a backend (Node.js + Express) and a frontend (React + Vite + TypeScript), integrated with a Continuous Integration (CI) pipeline using GitHub Actions.

---

##  Project Structure

```

habit-tracker/
├── backend/   # Node.js + Express API
├── frontend/  # React + Vite frontend
└── .github/workflows/ci.yml  # GitHub Actions CI pipeline

````

---

##  Features

-  Express backend with basic routing
-  React frontend using Vite + TypeScript
-  CI pipeline (GitHub Actions) for testing and linting
-  Project managed with GitHub Projects and Pull Requests
-  Summative 1 compliant: secure branches, PR reviews, and CI setup

---

##  How to Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/Idiane05/habit-tracker.git
cd habit-tracker
````

---

### 2. Start the backend

```bash
cd backend
npm install
npm run dev
```

Runs on: [http://localhost:5000](http://localhost:5000)

---

### 3. Start the frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Runs on: [http://localhost:5173](http://localhost:5173)

---

### 4. Test the Connection

Visit: [http://localhost:5173](http://localhost:5173)
You should see a message from the backend.

---

## 🛠️ CI Pipeline (GitHub Actions)

CI is triggered on all Pull Requests to `main`:

* Runs backend test and lint
* Runs frontend test and lint

---

##  Author

**Diane Ingabire**
Software Engineering Student | Passionate about full-stack development and building impactful tools.

---

##  Status

 **Summative 1 Foundation Complete**
 Next Step: Building Habit & User API functionality

````

---

###  What to Do Next:

1. Save that as a file called `README.md` in your **root `habit-tracker/` folder**
2. Commit and push it:

```bash
git add README.md
git commit -m "Add project README with frontend, backend, and CI details"
git push origin develop
````


