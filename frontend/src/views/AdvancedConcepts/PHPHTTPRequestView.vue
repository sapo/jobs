<template>
    <main>
        <h1>PHP HTTP Request</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Open the file <code>bin/http-request.php</code> and write code:
            </p>

            <div class="code">
                <ul>
                    <li>Make an HTTP request to the API endpoint  <code> <a target="blank" href="http://localhost:9980/display-information.php">http://localhost:9980/display-information.php</a></code>.</li>
                    <li>Display the data in the terminal.</li>
                </ul>
            </div>

            <p>
                Execute the script by entering the following command in the terminal to access the docker container terminal.
            </p>
            <div class="code">
                <p>docker exec -it sapo_interview_php bash </p>
                <p>cd /procect/bin </p>
                <p>php http-request.php</p>
            </div>


        </div>
    </main>
</template>

<script setup>

</script>