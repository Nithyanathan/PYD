# Print Your Dress

## Overview
Print Your Dress is a full-stack web application that allows users to create and print their own dress designs. The platform features customizable t-shirt designs, a designer studio, product categories, and a seamless checkout process with payment gateway integration.

## Project Structure
The project is organized into two main parts: the backend and the frontend.

### Backend
- **src/app.ts**: Entry point of the backend application, initializes the Express app and sets up middleware.
- **src/controllers/index.ts**: Handles requests related to dress designs.
- **src/models/index.ts**: Defines data models such as User, Design, and Order.
- **src/routes/index.ts**: Defines API endpoints and links them to controller methods.
- **src/services/index.ts**: Contains business logic for processing payments and managing user sessions.
- **package.json**: Lists backend dependencies.
- **tsconfig.json**: TypeScript configuration for the backend.
- **README.md**: Documentation for the backend setup and API usage.

### Frontend
- **public/index.html**: Main HTML file for the React application.
- **src/App.tsx**: Main component setting up routing and layout.
- **src/components/index.tsx**: Exports reusable components like Header and Footer.
- **src/pages/index.tsx**: Exports main page components such as Home and Checkout.
- **src/styles/index.css**: CSS styles for a professional design.
- **package.json**: Lists frontend dependencies.
- **tsconfig.json**: TypeScript configuration for the frontend.
- **README.md**: Documentation for the frontend setup and component usage.

### Deployment
- **azure-pipelines.yml**: CI/CD pipeline configuration for Azure deployment.
- **docker-compose.yml**: Services and configurations for Docker.
- **Dockerfile**: Instructions for building the Docker image.

## Getting Started
1. Clone the repository.
2. Navigate to the backend and frontend directories and install dependencies using `npm install`.
3. Set up your database and environment variables as needed.
4. Run the backend and frontend applications.

## Deployment
Follow the instructions in the respective README files for backend and frontend to deploy the application to Azure.

## License
This project is licensed under the MIT License.