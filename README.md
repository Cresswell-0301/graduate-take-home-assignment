# Question 1

## Overview

This project is a simple web application that allows users to **register**, **login**, **logout**, and view their **profile** (about me) page. It's built with **Vue.js** for the frontend, **BootstrapVue3** for styling, and **localStorage** to store user details.

### Features:

-   **User Registration**: Users can register with an email and password, which is saved in `localStorage`.
-   **User Login**: Users can log in by verifying their credentials stored in `localStorage`.
-   **Password Visibility Toggle**: Users can toggle password visibility during both registration and login.
-   **Navigation Bar**: The navigation bar updates based on whether the user is logged in:
    -   Shows **Login** and **Register** links when the user is not logged in.
    -   Shows **Profile** and **Logout** links when the user is logged in.

### Technologies Used:

-   **Vue.js** for building the frontend
-   **BootstrapVue3** for UI components and styling
-   **Font Awesome** for the eye icons to toggle password visibility
-   **localStorage** for storing user data

---

# Question 2

## Overview

In this project, I created a **user registration** and **login API** using **Laravel** (PHP framework) with **MySQL** as the database. The backend allows users to register, log in, and log out securely, while the frontend is built with **Vue.js** to handle the UI and interactions.

The solution also includes a **notification system** to show success or error messages after actions like login or registration.

## Backend (Laravel)

### Database:

1. **MySQL Database**: Data is stored in a MySQL database.

    - **Database Name**: `graduate_take_home`
    - **Table**: `users` with `name`, `email`, and `password`.

2. **API Routes**:
    - **POST `/register`**: Handles user registration.
    - **POST `/login`**: Handle the user login.
    - **POST `/logout`**: Hanlde logout.

### Laravel Components:

-   **AuthController**: Handles registration, login, and logout.
-   **User Model**: User structure .

## Frontend (Vue.js)

### User Interface:

1. **User Registration**: A form where users enter their name, email, and password to create an account.
2. **User Login**: A form where users log in with their email and password.
3. **Profile Page**: A protected page that shows user information once logged in.

### Notifications:

-   **Toast Component**: Displays messages based on actions like registration or login.
-   **Alerts**: Alerts show up and disappear after a few seconds.

### Vue.js Features:

-   **Vue Router**: Navigate between (login, registration, profile).
-   **Axios**: Requests to interact with the backend (register, login, logout).
