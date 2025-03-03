Full-Stack Project (Vite + Spring Boot)

Project Overview

This is a full-stack web application built using Vite for the frontend and Spring Boot for the backend. The application follows a client-server architecture, where the frontend communicates with the backend via REST APIs. The backend interacts with a database, using H2 for local development and PostgreSQL for production deployment. The frontend is deployed on Netlify, while the backend is hosted on Railway.

Features

Fast and optimized frontend with Vite and React.

RESTful API developed using Spring Boot.

Database integration using JPA and PostgreSQL.

Secure and scalable deployment strategy.

Fully responsive design using Tailwind CSS.

Tech Stack

Frontend

Framework: React (Vite)

Styling: Tailwind CSS

HTTP Client: Axios

State Management: React Context API (or Redux if applicable)

Backend

Framework: Spring Boot

Dependencies:

Spring Web (for handling HTTP requests)

Spring Data JPA (for database access)

Lombok (for reducing boilerplate code)

PostgreSQL Driver (for production database connection)

Database

Development: H2 (in-memory database for local testing)

Production: PostgreSQL (deployed on Railway)

Deployment

Frontend: Netlify

Backend: Railway

Setup Instructions

Prerequisites

Before you begin, make sure you have the following installed:

Node.js (for frontend development)

Java 17+ (for backend development)

Maven (for dependency management in the backend)

Git (for version control)

Clone the Repository

To get started, clone the project repository and navigate into the project folder:

git clone <repository-url>
cd <project-folder>

Frontend Setup

Navigate to the frontend directory:

cd frontend

Install project dependencies:

npm install

Start the development server:

npm run dev

Open the application in the browser at http://localhost:5173 (default Vite port).

Backend Setup

Navigate to the backend directory:

cd backend

Configure the database by updating src/main/resources/application.properties:

spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

Build and run the backend:

mvn spring-boot:run

The backend should be accessible at http://localhost:8080.

Deployment Guide

Deploying Frontend to Netlify

Push your frontend code to a GitHub repository.

Log in to Netlify and create a new site.

Connect your repository and configure the build settings:

Build command: npm run build

Publish directory: dist

Deploy the site and get the live URL.

Deploying Backend to Railway

Push your backend code to a GitHub repository.

Log in to Railway and create a new project.

Connect your GitHub repository and set up environment variables:

spring.datasource.url=jdbc:postgresql://<railway-db-url>
spring.datasource.username=<your-username>
spring.datasource.password=<your-password>

Deploy the backend and obtain the API URL.

API Documentation

Example API Endpoint

GET /api/example

Response:

{
  "message": "Hello, World!"
}

Available Endpoints

Method

Endpoint

Description

GET

/api/example

Sample endpoint

POST

/api/data

Create new data entry

GET

/api/data

Retrieve all data

DELETE

/api/data/{id}

Delete an entry by ID

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new feature branch: git checkout -b feature-branch.

Commit changes: git commit -m "Add new feature".

Push to your branch: git push origin feature-branch.

Open a pull request.

License

This project is licensed under the MIT License.
