<template>
    <h1>Vue HTTP Request</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is a simple example of how to make an HTTP request to an API endpoint using Vue.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>frontend/src/views/AdvancedConcepts/VueHTTPRequestView.vue</code></li>
                    <li>Make an HTTP Request to the the API endpoint <a target="blank" href="http://localhost:9980/display-information.php">http://localhost:9980/display-information.php</a> when the button below is clicked.</li>
                    <li>Parse the results and display the data in the div below.</li>
                </ul>
            </template>
        </CustomBlock>

    </div>

    <h5>Results</h5>


    <div class="block">

        <CustomBlock
            title='API Results'
            class="results-block"
        >
            <template #content>
                <div class="quote">
                    <p>Name:  </p>
                    <p>Email: </p>
                </div>
            </template>
        </CustomBlock>


        <CustomBlock
                title='HTTP Request'
                class="results-block"
            >
            <template #content>
                <button @click="onCallAPI()">Call API</button>
            </template>
        </CustomBlock>
    </div>
</template>

<script setup>
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const onCallAPI = () => {
    }
</script>