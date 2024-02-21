<template>
    <h1>PHP Dog API Error Fix</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    The PHP Backend API is returnings an error. Fix all possible errors in the backend API to return a valid json response with the dog's attributes.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Click on the button below to make an HTTP Request to the API endpoint <code><a href="http://localhost:9980/animal-dog.php" target="_blank">http://localhost:9980/animal-dog.php</a></code>.</li>
                    <li>Fix any possible errors in the backend API.</li>
                    <li>The attributes of the dog should be displayed below when the API call is successful.</li>
                </ul>
            </template>
        </CustomBlock>

    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock v-if="response.success === true"
            title='Response is valid! '
            class="success-block"
        >
            <template #content>
                <p>Name:  {{ response.results.name }}</p>
                <p>Breed: {{ response.results.breed }}</p>
            </template>
        </CustomBlock>

        <CustomBlock v-if="response.success === false"
            title='Response is invalid! '
            class="error-block"
        >
            <template #content>
                {{ response.error }}
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
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService.js';
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const response  = ref({});

    const onCallAPI = () => {
        getDogInfo();
    }

    const getDogInfo = async () => {
        response.value = await HTTPService.post('http://localhost:9980/animal-dog.php');
    }
</script>