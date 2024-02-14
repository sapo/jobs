<template>
    <main>
        <h1>Project Overview</h1>

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
                <p>docker exec -it docker_sapo_php_1 bash </p>
                <p>cd /project </p>
            </div>

            <p>
                All the runnable CLI Applications are located in the /project/cli folder. <br>
                To execute the Hello World CLI Application, run the following command inside the docker container terminal:
            </p>

            <div class="code">
                <p>cd /procect/bin </p>
                <p>php hello-world.php </p>
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