# Sapo Interview Projects

## VUE - PHP - MySQL

This is a simple interview project application made in Vue 3 composition API with a PHP Backend API integration used to retrieve information.

This project covers many of the fundamental concepts of Vue.js development, including component-based architecture, state management, routing, form handling, and API integration. It's a simple project, but it requires a good understanding of Vue.js and modern frontend development practices.

It also covers many of the fundamental concepts of PHP development, including API development, database interaction, and basic security practices.

#### Requirements
```
Docker
Docker Compose
```

## Project Setup
Clone the repository into your local machine. \
Run the following command in the docker folder to start all the containers
```
docker-compose up -d
```

Run the following commands in order after all containers have started

```
docker exec sapo_interview_php composer update
docker exec sapo_interview_node npm install
docker exec sapo_interview_node npm run dev
```

Open up a http://localhost:8000 to access the project

