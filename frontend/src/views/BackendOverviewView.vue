<template>
    <main>
        <h1>Backend Overview</h1>

        <div class="block">
            <h5>Testing the API</h5>
            <p> If everything is setup correctly a message "Hello World" should be displayed when calling the following endpoint:</p>

            <div class="quote">
                <a target="_blank" href="http://localhost:9980/test-api.php">http://localhost:9980/test-api.php</a>
            </div>

            <h5>Public Endpoints</h5>
            <p>
                All the files in public folder are exposed as public HTTP endpoints. <br>
                For example, the file test-api.php is exposed as an endpoint at the following URL:
            </p>
            <div class="quote">
                <a target="_blank" href="http://localhost:9980/test-api.php">http://localhost:9980/test-api.php</a>
            </div>

            <p>
                The endpoint execution is then relayed to the TestApiController.php class to process the request.
            </p>

            <div class="quote">
                backend/src/Controllers/TestApiController.php
            </div>

            <h5>Testing the CLI Terminal</h5>
            <p>
                To run a php cli application inside the docker container, open up a console terminal and run the commands displayed below. <br>
                An Hello World message should be displayed in the console terminal.
            </p>

            <div class="code">
                <p>docker exec -it docker_sapo_php_1 bash </p>
                <p>cd /procect/bin </p>
                <p>php test-terminal.php </p>
            </div>

        </div>

    </main>
</template>



<script setup>


</script>