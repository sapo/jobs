<template>

  <main>
    <h1>Project Information</h1>

    <div class="block">
      <p>This is a simple interview project application made in Vue 3 composition API with a PHP Backend API integration used to retrieve information. </p>

      <p>
        This project covers many of the fundamental concepts of Vue.js development, including component-based architecture, state management, routing, form handling, and API integration. It's a simple project, but it requires a good understanding of Vue.js and modern frontend development practices.
      </p>

      <p>
        It also covers many of the fundamental concepts of PHP development, including API development, database interaction, and basic security practices.
      </p>

      <h4>Requirements</h4>

      <p>Please make sure you have the following requirements installed in your local environment before running the project:</p>
      <div class="code">
        <p>Npm 8+</p>
        <p>NodeJS 18+</p>
        <p>Docker</p>
        <p>Docker Compose</p>
        <p>PHP 8.1+</p>
        <p>Composer</p>
      </div>
    </div>

    <h3>Project Setup</h3>

    <div class="block">
      <p>
        Clone the repository into your local machine.<br>
        Docker files can be found in the Docker directory.<br>
        The vue project can be found in the frontend directory.<br>
        And the PHP Bakend API can be found in the backend directory.<br>
      </p>
      <h4>Frontend Setup</h4>

      <p>Install all the node components and run the following commands:</p>

      <div class="code">
        <p>cd frontend</p>
        <p>npm install</p>
        <p>npm run serve</p>
      </div>

      <p>
        The frontend will be running on the server given by the develop tool.
      </p>
    </div>

    <h3>Backend Setup</h3>

    <div class="block">
      <p>Install all the PHP and Docker components and run the following commands in the correct folders:</p>

      <div class="code">
        <p>composer install</p>
        <p>docker-compose up -d</p>
      </div>

      <p>
        Test Backend API: <a target="_blank" href="http://localhost:9901/test-api.php">http://localhost:9901/test-api.php</a> <br>
        An Hello World message should be displayed.
      </p>
    </div>

  </main>

</template>

<script setup>

</script>

