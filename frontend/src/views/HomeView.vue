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
    </div>

    <h3>Requirements</h3>

    <div class="block">
      <p>Please make sure you have the following requirements installed in your local environment before running the project:</p>
      <div class="code">
        <p>Docker Compose</p>
        <p>Composer</p>
      </div>

    </div>

    <h3>Project Setup</h3>


    <div class="block">
        <h5>Testing the API</h5>
        <p> If everything is setup correctly a message "Hello World" should be displayed when calling the following endpoint:</p>

        <div class="quote">
            <a target="_blank" href="http://localhost:9980/hello-world.php">http://localhost:9980/hello-world.php</a>
        </div>

        <h5>Public Endpoints</h5>
        <p>
            All the files in public folder are exposed as public HTTP endpoints. <br>
            For example, the file test-api.php is exposed as an endpoint at the following URL:
        </p>
        <div class="quote">
            <a target="_blank" href="http://localhost:9980/hello-world.php">http://localhost:9980/hello-world.php</a>
        </div>

        <p>
            The endpoint execution is then relayed to the HelloWorldController.php api class to process the request.
        </p>

        <div class="quote">
            backend/src/Controllers/API/HelloWorldController.php
        </div>

        <h5>Testing the CLI Terminal</h5>
        <p>
            To access the docker container terminal, open up a console terminal and run the command displayed below. <br>
            All project files are mounted inside the docker container at the /project folder.
        </p>

        <div class="code">
            <p>docker exec -it sapo_interview_php bash </p>
            <p>cd /project</p>
        </div>

        <p>
            All the runnable CLI Applications are located in the /project/bin folder. <br>
            To execute the Hello World CLI Application, run the following command inside the docker container terminal:
        </p>

        <div class="code">
            <p>cd /project/bin </p>
            <p>php hello-world.php </p>
        </div>

        <p>
            You can also run the command outside the container by typing the following command in the host terminal:
        </p>

        <div class="code">
            <p>docker exec dsapo_interview_php php /project/bin/hello-world.php</p>
        </div>

        <p>
            The cli terminal execution is then relayed to the HelloWorldController.php terminal class to process the request.
        </p>

        <div class="quote">
            backend/src/Controllers/Terminal/HelloWorldController.php
        </div>
    </div>

  </main>

</template>

<script setup>

</script>