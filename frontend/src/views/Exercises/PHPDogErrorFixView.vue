<template>
    <main>
        <h1>PHP Dog Error Fix</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Open up the file <code>backend/public/animal-dog.php</code> and fix any errors encountered allong the way so that the API returns a propper JSON response.
            </p>


            <div class="code">
                <ul>
                    <li>Click on the button below to make an HTTP Request to the API endpoint <code><a href="http://localhost:9980/animal-dog.php" target="_blank">http://localhost:9980/animal-dog.php</a></code>.</li>
                    <li>The attributes of the dog should be displayed in div below.</li>
                </ul>
            </div>

            <h5>Results</h5>

            <div class="quote" v-if="response.success === true">
               <p>Name:  {{ response.results.name }}</p>
               <p>Breed: {{ response.results.breed }}</p>
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