# **NestJS Microservices Application**

Welcome to the **NestJS Microservices Application**, a scalable, modular, and efficient solution built with modern technologies to handle complex business requirements. This project demonstrates the use of cutting-edge tools and best practices for creating robust microservices architecture.

## **Overview**
This application is designed with the following goals in mind:
- Scalability: Efficient communication between services using gRPC and Kafka.
- Maintainability: Modular architecture using NestJS with TypeScript.
- Observability: Integrated monitoring with Prometheus, Grafana, and OpenTelemetry.
- Security: Comprehensive authentication and authorization mechanisms with OAuth2 and JWT.

## **Technologies**
- Backend Framework: **NestJS** (with TypeScript)
- Communication: **gRPC**, **Kafka**
- Database: **PostgreSQL**, **Redis**
- Containerization: **Docker**, **Kubernetes**
- Monitoring: **Prometheus**, **Grafana**, **ELK Stack**
- Documentation: **Swagger**, **GraphQL Playground**

## **Project Structure**
The project follows a **monorepo architecture** with separate services for different domains, shared libraries for reusable components, and centralized configuration for ease of management.

Key directories include:
- `/apps`: Contains all microservices (e.g., auth-service, product-service, etc.)
- `/libs`: Shared libraries (e.g., logger, database utilities, etc.)
- `/infra`: Infrastructure configurations (e.g., Kubernetes manifests, Docker Compose files)
- `/docs`: Comprehensive documentation, including API specs and architecture details.

## **Getting Started**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/nestjs-microservices-app.git
   cd nestjs-microservices-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development (requires Docker and Docker Compose):
   ```bash
   docker-compose up --build
   ```
4. Access the API Gateway:
   - **REST APIs:** `http://localhost:3000`
   - **GraphQL Playground:** `http://localhost:3000/graphql`

## **Documentation**
For a detailed guide on project setup, architecture, and API references, visit the [`/docs`](./docs) directory.

---

## **Contributing**
We welcome contributions! Please follow the guidelines in the [CONTRIBUTING.md](./docs/CONTRIBUTING.md) file.

---

## **License**
This project is licensed under the [MIT License](./LICENSE).

Happy coding! 🚀