# Visits

# Node.js Express App with Redis
This is a simple Node.js Express application that demonstrates how to use Redis as a data store to count and display the number of visits to a webpage. The Application is containerized using Docker Compose, making it easy to set up and run.

## Prerequisties

Before you begin, make sure you have the following software installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

1. Clone this repository to your local machine:
    ```git clone https://github.com/nikhilnambi/Visits.git```
2. Go to project directory ```cd Visits```

1. Start the application using Docker Compose:
   ```docker-compose up```
   This command will start the Node.js app, Redis and other services defined in
   ```docker-compose.yml```
2. Access the application in your web browser at
   ```http://www.localhost:3200```. You should see a page displaying the number of visits.
