<template>
    <main>
        <h1>PHP HTTP Request</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Open the file bin/http-request.php and write code to call the API endpoint 
                <a target="blank" href="http://localhost:9980/display-information.php">http://localhost:9980/display-information.php</a>
                and display the data in the terminal.
            </p>

            <p>
                Execute the script by entering the following command in the terminal to access the docker container terminal.
            </p>
            <div class="code">
                <p>docker exec -it docker_sapo_php_1 bash </p>
                <p>cd /procect/bin </p>
                <p>php http-request.php</p>
            </div>
        </div>
    </main>
</template>

<script setup>

</script>