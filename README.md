# Incruiter Quiz App

A React-based quiz application built using Vite. This application allows an admin to log in, create quizzes with multiple-choice questions, take the quiz in practice mode, and analyze quiz performance.

## Features
- **Admin Login**
- **Quiz Creation** (Add/Edit/Delete questions)
- **Practice Mode** (Simulate the quiz as a candidate)
- **Analysis Dashboard** (View quiz performance)
- **State Management with Redux**

## Tech Stack
- **Frontend:** React
- **Styling:** Tailwind CSS 
- **State Management:** Redux Toolkit

## Installation & Setup
Follow these steps to set up and run the project locally:

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)

### Clone the Repository
```sh
git clone https://github.com/FurquanAnwer/incruiterquiz.git
cd incruiterquiz
```

### Install Dependencies
```sh
npm install
```

### Run the Development Server
```sh
npm run dev
```
The application should now be running on `http://localhost:5173` (or another available port).

## Admin Login Credentials
- **Username:** `incruiteradmin`
- **Password:** `123456`

## Folder Structure
```
/src
  ├── components    # Reusable components
  ├── pages         # Different pages (Login, Quiz Creation, etc.)
  ├── redux         # Redux store and slices
  ├── assets        # Images, icons, etc.
  ├── App.jsx       # Main app component
  ├── main.jsx      # Entry point for the app
```

## Contributions
Feel free to open an issue or submit a pull request if you want to contribute!

## License
This project is licensed under the MIT License.

---

If any additional setup is required (like environment variables or backend services), let me know so I can update the README accordingly!

