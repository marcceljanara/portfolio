// Project data with full detail for modal view
export const projectsData = [
  {
    id: 'wallet-ledger',
    title: 'Wallet Ladger Service',
    description:
      'Backend API for a digital wallet and financial transaction system. Supports wallet management, fund transfers, double-entry ledger tracking, audit logging, and asynchronous event processing via RabbitMQ.',
    longDescription:
      'Wallet Ledger Service is a robust, production-ready backend API built with Golang and the Gin framework. It is designed to power a digital wallet platform where financial integrity is the top priority. The system implements double-entry bookkeeping, ensuring every transaction is balanced and fully auditable. Admin endpoints allow monitoring of all transactions and reviewing of audit logs, making it suitable for fintech applications that require strict compliance and traceability.',
    technologies: ['Golang', 'Gin', 'Wallet Service', 'Docker', 'Redis', 'RabbitMQ', 'PostgreSQL', 'Mock'],
    github: 'https://github.com/marcceljanara/Wallet-Ledger-Service',
    external: '#',
    features: [
      'Wallet creation and balance management for multiple users',
      'Peer-to-peer fund transfers with atomic transaction handling',
      'Double-entry ledger system ensuring financial consistency',
      'Comprehensive audit logging for every financial operation',
      'Asynchronous event processing via RabbitMQ message broker',
      'Redis caching for high-performance wallet state reads',
      'Admin endpoints for transaction monitoring and audit review',
      'Dockerized deployment for easy environment portability',
      'Unit and integration tests with Mock dependencies',
    ],
    architecture: {
      description:
        'The service follows a Clean Architecture pattern with separated layers: HTTP handlers (Gin), service/business logic, and repository (PostgreSQL). RabbitMQ handles async event publishing (e.g., notifications, audit trails), while Redis caches frequently accessed wallet states to reduce DB load.',
      diagram: [
        { layer: 'Client', detail: 'REST API consumers (Mobile, Web, Admin Dashboard)' },
        { layer: 'API Gateway', detail: 'Gin HTTP Router — request validation, JWT auth middleware' },
        { layer: 'Service Layer', detail: 'Business logic — transfer rules, balance checks, double-entry posting' },
        { layer: 'Repository Layer', detail: 'PostgreSQL for persistent storage, Redis for caching' },
        { layer: 'Event Bus', detail: 'RabbitMQ — async audit log publishing, notification events' },
      ],
    },
    screenshots: [
      { src: '', caption: 'API Overview & Swagger Docs' },
      { src: '', caption: 'Wallet Management Endpoints' },
      { src: '', caption: 'Transaction & Ledger Flow' },
      { src: '', caption: 'Audit Log Dashboard' },
    ],
  },
  {
    id: 'tenaga-rakyat',
    title: 'Tenaga Rakyat APP',
    description:
      'RESTful-based fullstack service supporting user registration, authentication, job management, application processing, and a payment escrow system with user-to-user messaging, two-way reviews, notifications, and administrative functions.',
    longDescription:
      'Tenaga Rakyat APP is a comprehensive fullstack platform connecting workers and employers. Built with NestJS on the backend and React.js on the frontend, the system handles the complete lifecycle of a job — from posting and application to payment escrow and mutual reviews. The platform uses Prisma ORM for type-safe database access, JWT for secure authentication, and follows RESTful best practices across all endpoints.',
    technologies: ['Typescript', 'Nest.js', 'React.js', 'Prisma', 'PostgreSQL', 'Jest'],
    github: 'https://github.com/marcceljanara/tenaga-rakyat-api',
    external: 'https://www.tenagarakyat.site/',
    features: [
      'User registration and JWT-based authentication',
      'Job posting, editing, and management by employers',
      'Job application and status tracking for workers',
      'Payment escrow system — secure fund holding during job execution',
      'User-to-user real-time messaging',
      'Two-way review system after job completion',
      'Push notification system for key events',
      'Role-based access control (Admin, Employer, Worker)',
      'Comprehensive Admin panel for platform management',
      'Fully tested with Jest unit and e2e tests',
    ],
    architecture: {
      description:
        'The backend uses NestJS modular architecture with dedicated modules for Auth, Jobs, Applications, Payments, Messaging, Reviews, and Notifications. The frontend is a React.js SPA consuming the REST API. Prisma ORM handles all DB interactions with full type safety.',
      diagram: [
        { layer: 'Frontend', detail: 'React.js SPA — pages for workers, employers, and admin' },
        { layer: 'REST API', detail: 'NestJS — modular controllers, guards, and DTOs' },
        { layer: 'Business Logic', detail: 'NestJS Services — auth, job lifecycle, escrow, messaging' },
        { layer: 'ORM', detail: 'Prisma — type-safe queries and migrations' },
        { layer: 'Database', detail: 'PostgreSQL — users, jobs, applications, transactions, messages' },
      ],
    },
    screenshots: [
      { src: '', caption: 'Landing Page' },
      { src: '', caption: 'Job Listing & Search' },
      { src: '', caption: 'Job Detail & Application Form' },
      { src: '', caption: 'Employer Dashboard' },
      { src: '', caption: 'Worker Dashboard' },
      { src: '', caption: 'Messaging Interface' },
      { src: '', caption: 'Payment & Escrow Flow' },
      { src: '', caption: 'Review System' },
    ],
  },
  {
    id: 'rover-drone-api',
    title: 'Rover Drone API',
    description:
      'Backend system powering an IoT-based rover-drone rental and management platform. Supports subscription-based device rentals, real-time MQTT control, logistics integration, and automated reporting for smart agriculture applications.',
    longDescription:
      'Rover Drone API is the core backend powering a smart agriculture platform for oil palm plantation monitoring. It provides a complete rental management system where users can subscribe to IoT rover/drone devices and control them in real time via MQTT. The system integrates with logistics providers for device delivery tracking, generates automated monitoring reports, and provides a Swagger-documented REST API for the frontend and IoT clients.',
    technologies: ['PostgreSQL', 'Express.js', 'Node.js', 'Redis', 'RabbitMQ', 'MQTT', 'Docker', 'Jest'],
    github: 'https://github.com/marcceljanara/rover-drone-api-v2',
    external: 'https://api.xsmartagrichain.site/v1/api-docs',
    features: [
      'Subscription-based device rental system with plan tiers',
      'Real-time device control via MQTT protocol',
      'Device telemetry data ingestion and storage',
      'Logistics integration for device delivery tracking',
      'Automated monitoring reports generated on schedule',
      'RabbitMQ for async event handling and worker tasks',
      'Redis for session caching and rate limiting',
      'Swagger/OpenAPI documentation for all endpoints',
      'Dockerized multi-service deployment',
      'Jest test suite for unit and integration coverage',
    ],
    architecture: {
      description:
        'The API uses a layered Express.js architecture. MQTT broker handles real-time bi-directional device communication. RabbitMQ manages async tasks like report generation. Redis provides caching. All services run in Docker containers with a shared PostgreSQL database.',
      diagram: [
        { layer: 'IoT Devices', detail: 'ESP32 Rover & Drone sending telemetry via MQTT' },
        { layer: 'MQTT Broker', detail: 'Real-time command dispatch and telemetry ingestion' },
        { layer: 'REST API', detail: 'Express.js — rental management, auth, reporting endpoints' },
        { layer: 'Message Queue', detail: 'RabbitMQ — async report generation, notification workers' },
        { layer: 'Cache & DB', detail: 'Redis (session/rate limit) + PostgreSQL (persistent data)' },
      ],
    },
    screenshots: [
      { src: '', caption: 'Swagger API Documentation' },
      { src: '', caption: 'Device Management Endpoints' },
      { src: '', caption: 'Rental Subscription Flow' },
      { src: '', caption: 'MQTT Telemetry Schema' },
      { src: '', caption: 'Report Generation Output' },
    ],
  },
  {
    id: 'rover-drone-webapp',
    title: 'Rover Drone Web App',
    description:
      'React 18 frontend with MUI and Bootstrap for responsive UI. Features smooth animations with Framer Motion, real-time data visualization with ApexCharts, secure JWT auth, and dashboards for rental, payment, and device management.',
    longDescription:
      'Rover Drone Web App is the user-facing frontend for the XSmartAgriChain platform. Built with React 18, it provides an intuitive interface for users to manage their device subscriptions, view live telemetry from IoT devices, and interact with the rental and payment systems. The app uses ApexCharts for rich real-time data visualizations and Framer Motion for smooth page and component transitions.',
    technologies: ['React.js', 'Javascript', 'HTML', 'CSS', 'MUI', 'Bootstrap', 'Framer Motion', 'ApexCharts', 'JWT'],
    github: 'https://github.com/marcceljanara/rover-drone-webapp-v2',
    external: 'https://www.xsmartagrichain.site/',
    features: [
      'Secure user authentication with JWT token management',
      'Real-time device telemetry dashboard with live chart updates',
      'ApexCharts visualizations for sensor data (temperature, humidity, GPS)',
      'Subscription and rental management interface',
      'Payment flow with status tracking',
      'Admin panel for device fleet management',
      'Framer Motion page transitions and micro-animations',
      'Fully responsive design with MUI and Bootstrap grid',
      'Protected route system with role-based rendering',
    ],
    architecture: {
      description:
        'The SPA uses React Router for navigation, Context API for global auth state, and Axios for API communication. Real-time telemetry is fetched via polling or WebSocket. Component library: MUI for complex UI components, Bootstrap for layout, custom CSS for branding.',
      diagram: [
        { layer: 'Routing', detail: 'React Router v6 — protected routes with role guards' },
        { layer: 'State Management', detail: 'Context API — auth state, user info, device selections' },
        { layer: 'Data Fetching', detail: 'Axios — REST API calls to Rover Drone API backend' },
        { layer: 'Visualization', detail: 'ApexCharts — live telemetry charts and analytics' },
        { layer: 'UI Layer', detail: 'MUI + Bootstrap + custom CSS + Framer Motion animations' },
      ],
    },
    screenshots: [
      { src: '', caption: 'Landing Page' },
      { src: '', caption: 'Login & Authentication' },
      { src: '', caption: 'User Dashboard' },
      { src: '', caption: 'Real-time Telemetry Charts' },
      { src: '', caption: 'Device Control Panel' },
      { src: '', caption: 'Rental & Subscription Page' },
      { src: '', caption: 'Payment Flow' },
      { src: '', caption: 'Admin Device Management' },
    ],
  },
  {
    id: 'rover-drone-iot',
    title: 'Rover Drone IoT',
    description:
      'ESP32-based IoT system for rover and drone control, featuring real-time telemetry via MQTT. Designed for smart agriculture, enabling remote operation and monitoring through a web app interface.',
    longDescription:
      'Rover Drone IoT is the firmware layer of the XSmartAgriChain platform. Running on ESP32 microcontrollers, the firmware enables real-time bidirectional communication between physical rover/drone devices and the backend API via MQTT. Sensor data — GPS position, soil moisture, temperature, and humidity — is published at regular intervals. The device also subscribes to control commands from the cloud for remote operation.',
    technologies: ['C', 'ESP32', 'Arduino', 'MQTT'],
    github: 'https://github.com/marcceljanara/rover-drone-IoT',
    external: '#',
    features: [
      'ESP32 firmware for rover and drone control units',
      'Real-time telemetry publishing via MQTT broker',
      'Sensor integration: GPS, temperature, humidity, soil moisture',
      'Bi-directional MQTT communication — publish telemetry, subscribe commands',
      'Wi-Fi connectivity with auto-reconnect on network drop',
      'Command parsing for remote control instructions from web app',
      'Low-latency control loop for responsive device operation',
      'OTA (Over-The-Air) firmware update capability',
    ],
    architecture: {
      description:
        'Each ESP32 device connects to Wi-Fi and establishes an MQTT connection to the broker. It publishes sensor readings to dedicated topics and subscribes to control command topics. The Arduino framework is used for peripheral management (UART, I2C, GPIO).',
      diagram: [
        { layer: 'Hardware', detail: 'ESP32 MCU + GPS/temperature/humidity/soil sensors' },
        { layer: 'Firmware', detail: 'Arduino C — sensor read loops, command parsers, MQTT client' },
        { layer: 'Connectivity', detail: 'Wi-Fi (IEEE 802.11) → MQTT broker (TLS)' },
        { layer: 'Protocol', detail: 'MQTT pub/sub — telemetry topics and command topics' },
        { layer: 'Cloud', detail: 'Rover Drone API — receives telemetry, dispatches commands' },
      ],
    },
    screenshots: [
      { src: '', caption: 'Rover Hardware Assembly' },
      { src: '', caption: 'Drone Module Setup' },
      { src: '', caption: 'MQTT Topic Structure' },
      { src: '', caption: 'Sensor Data Flow Diagram' },
    ],
  },
  {
    id: 'healthcare-knowledge',
    title: 'Healthcare Knowledge API',
    description:
      'Comprehensive backend API for a healthcare knowledge platform. Features RESTful endpoints for managing articles, user authentication, and role-based access control for secure and efficient data handling.',
    longDescription:
      'Healthcare Knowledge API is a backend service designed for a healthcare information platform. Built with Node.js and Express, it provides a structured content management system for healthcare articles, complete with user authentication and role-based access control. Authors can create and manage content, while administrators oversee the platform. The API is designed with security and data integrity as core requirements.',
    technologies: ['Express.js', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/marcceljanara/Healthcare-Knowledge-API',
    external: '#',
    features: [
      'RESTful endpoints for healthcare article CRUD operations',
      'User registration and JWT-based authentication',
      'Role-based access control (Admin, Author, Reader)',
      'Article categorization and tagging system',
      'Pagination and search for article listing',
      'Secure password hashing with bcrypt',
      'Input validation and sanitization for all endpoints',
      'Structured error handling and response formatting',
    ],
    architecture: {
      description:
        'Standard layered Express.js architecture: routes → middleware (auth, validation) → controllers → services → PostgreSQL repository. JWT tokens are used for stateless auth. Role guards on each route ensure only authorized roles can access protected resources.',
      diagram: [
        { layer: 'HTTP Layer', detail: 'Express.js Router — endpoint definitions and middleware chains' },
        { layer: 'Auth Middleware', detail: 'JWT verification + role-based access guard' },
        { layer: 'Controllers', detail: 'Request/response handling and data transformation' },
        { layer: 'Services', detail: 'Business logic — article management, user auth, search' },
        { layer: 'Database', detail: 'PostgreSQL — users, articles, categories, tags tables' },
      ],
    },
    screenshots: [
      { src: '', caption: 'API Endpoint Overview' },
      { src: '', caption: 'Article Management Flow' },
      { src: '', caption: 'Auth & Role Control' },
      { src: '', caption: 'Database Schema' },
    ],
  },
  {
    id: 'microclimate',
    title: 'Microclimate Firmware',
    description:
      'Firmware for ESP32-based microclimate monitoring devices using various sensors to collect environmental data. Supports real-time MQTT data transmission for integration with IoT platforms for mangrove monitoring.',
    longDescription:
      'Microclimate Firmware powers an environmental monitoring system designed for mangrove ecosystem research. Running on ESP32 and Raspberry Pi, the system continuously collects microclimate data — temperature, humidity, water salinity, and solar radiation — and transmits it in real time via MQTT. A Python layer on Raspberry Pi handles data aggregation and forwarding to the cloud IoT platform.',
    technologies: ['Raspberry Pi', 'ESP32', 'C', 'Arduino', 'MQTT', 'Python'],
    github: 'https://github.com/marcceljanara/Microclimate',
    external: '#',
    features: [
      'Multi-sensor environmental data collection (temperature, humidity, salinity, solar radiation)',
      'ESP32 firmware for local sensor interfacing and data acquisition',
      'Real-time data transmission via MQTT protocol',
      'Raspberry Pi as edge gateway for data aggregation',
      'Python scripts for data preprocessing and cloud forwarding',
      'Configurable sampling intervals and transmission rates',
      'Local data buffering during network interruptions',
      'Designed for long-term outdoor deployment in mangrove environments',
    ],
    architecture: {
      description:
        'ESP32 nodes collect sensor data and publish to a local MQTT broker running on Raspberry Pi. The Pi aggregates multi-node data, applies preprocessing (unit conversion, outlier filtering), and forwards to a cloud IoT platform for visualization and storage.',
      diagram: [
        { layer: 'Sensor Nodes', detail: 'ESP32 + sensors (DHT, salinity probe, pyranometer)' },
        { layer: 'Local Broker', detail: 'MQTT broker on Raspberry Pi — aggregates node data' },
        { layer: 'Edge Processing', detail: 'Python scripts — data parsing, filtering, formatting' },
        { layer: 'Cloud Gateway', detail: 'MQTT bridge → Cloud IoT platform' },
        { layer: 'Visualization', detail: 'Cloud dashboard for real-time and historical data' },
      ],
    },
    screenshots: [
      { src: '', caption: 'Hardware Setup in Field' },
      { src: '', caption: 'Sensor Node Assembly' },
      { src: '', caption: 'Data Flow Diagram' },
      { src: '', caption: 'Monitoring Dashboard Output' },
    ],
  },
];
