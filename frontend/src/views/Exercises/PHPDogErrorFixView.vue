<template>
    <main>
        <h1>PHP Dog Error Fix</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Click on the button below to make an HTTP Request to the API endpoint <code>http://localhost:9980/animal-dog.php</code>.<br>
                Open up the file <code>backend/public/animal-dog.php</code> and fix any errors encountered allong the way so that the API returns a propper JSON response
                and the data is displayed in the div below.
            </p>

            <div class="quote" v-if="response.success === true">
               <p>Name:  {{ response.name }}</p>
               <p>Breed: {{ response.breed }}</p>
           </div>

            <p class="error" v-if="response.success === false">
                {{ response.error }}
            </p>

           <button @click="onCallAPI()">Call API</button>
        </div>
    </main>
</template>

<script setup>
    import HTTPService from '@/services/HTTP/HTTPService.js';
    import { ref }     from 'vue';

    const response  = ref({});

    const onCallAPI = () => {
        getDogInfo();
    }

    const getDogInfo = async () => {
        response.value = await HTTPService.post('http://localhost:9980/animal-dog.php');
    }
</script>