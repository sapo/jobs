<template>
    <h1>PHP HTTP Request</h1>

    <div class="block">

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is a simple example of how to make an HTTP request to an API endpoint using PHP.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open the file <code>bin/http-request.php</code></li>
                    <li>Make an HTTP request to the API endpoint  <code> <a target="blank" href="http://localhost:9980/display-information.php">http://localhost:9980/display-information.php</a></code>.</li>
                    <li>Display the data in the terminal.</li>
                </ul>
            </template>
        </CustomBlock>

        <p>
            Execute the script by entering the following commands in the terminal to access the docker container and run the php script.
        </p>

        <CustomBlock
            title='Terminal Commands'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>docker exec -it sapo_interview_php bash</li>
                    <li>cd /procect/bin</li>
                    <li>php http-request.php</li>
                </ul>
            </template>
        </CustomBlock>
    </div>
</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';
</script>