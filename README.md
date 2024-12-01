# DPS Backend Coding Challenge

This project provides a RESTful API for managing **projects** and **reports**. It allows users to perform CRUD operations on projects and associated reports, and includes special functionality to retrieve reports based on a specific word appearing multiple times in the content. This was built as part of the backend coding challenge for the [DPS](https://www.digitalproductschool.io) recruitment process.

## Table of Contents

-   [DPS Backend Coding Challenge](#dps-backend-coding-challenge)
    -   [Table of Contents](#table-of-contents)
    -   [Technologies Used](#technologies-used)
    -   [Installation](#installation)
        -   [Prerequisites](#prerequisites)
        -   [Step 1: Clone the repository](#step-1-clone-the-repository)
        -   [Step 2: Install dependencies](#step-2-install-dependencies)
        -   [Step 3: Run the development server](#step-3-run-the-development-server)
    -   [API Endpoints](#api-endpoints)
        -   [Project Endpoints](#project-endpoints)
        -   [Report Endpoints](#report-endpoints)
    -   [Authentication](#authentication)
    -   [Swagger Documentation](#swagger-documentation)
    -   [License](#license)

## Technologies Used

-   **Node.js**: JavaScript runtime for building the backend.
-   **Express.js**: Web framework for creating the API.
-   **SQLite**: Database for storing project and report data.
-   **Swagger UI**: For API documentation and testing.
-   **TypeScript**: For type safety and enhanced development experience.

## Installation

Follow the steps below to install and run the application locally.

### Prerequisites

Ensure that you have **Node.js** (v14.x or later) and **npm** (v6.x or later) installed on your machine.

### Step 1: Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Run the development server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## API Endpoints

### Project Endpoints

-   **GET /api/projects**: Get all projects
-   **GET /api/projects/:id**: Get project by ID
-   **POST /api/projects**: Create a new project
-   **PUT /api/projects/:id**: Update an existing project
-   **DELETE /api/projects/:id**: Delete a project

### Report Endpoints

-   **GET /api/reports/project/:projectId**: Get all reports for a specific project
-   **GET /api/reports/:id**: Get a report by ID
-   **POST /api/reports**: Create a new report
-   **PUT /api/reports/:id**: Update an existing report
-   **DELETE /api/reports/:id**: Delete a report
-   **GET /api/reports/word/:word**: Get reports where a specific word appears at least 3 times in the content

## Authentication

This API uses a simple **password-based authentication**. To interact with the API, you must include an `Authorization` header with the following format:

```
Authorization: Bearer Password123
```

You can test the endpoints using Swagger UI, which provides an easy way to pass the token.

## Swagger Documentation

API documentation is available via Swagger UI. To view and interact with the API documentation:

1. Start the server by running `npm run dev`.
2. Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.
3. Use the **Authorize** button to enter `Bearer Password123` as the authentication token.
4. Explore and test the API endpoints directly from the documentation.

## License

This project is licensed under the MIT License.
