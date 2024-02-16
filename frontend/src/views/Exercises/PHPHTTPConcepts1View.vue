<template>
    <main>
        <h1>PHP HTTP Concepts</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Open up the file <code>backend/src/Controllers/API/SimpleRequestController.php</code> and write PHP code to:
            </p>

            <div class="code">
                <ul>
                    <li>Return the params name, action and X-Token sent by the http request below.</li>
                    <li>Click on Call API button to validate the results.</li>
                </ul>
            </div>

            <p>HTTP Request data beeing sent to the server</p>

            <div class="quote">
                <p>POST /simple-request.php?action=simple HTTP/1.1</p>
                <p>Accept: */*</p>
                <p>Connection: keep-alive</p>
                <p>Content-Length: 9</p>
                <p>Content-Type: application/x-www-form-urlencoded</p>
                <p>Host: localhost:9980</p>
                <p>X-Token: token_id_01</p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p>name=John</p>
            </div>

            <p> Expected payload sent by the server</p>

            <div class="quote">
                <p> {{ JSON.stringify(params) }}</p>
            </div>

            <h5>Results</h5>

            <div class="success" v-if="validation.valid">
                <p>Valid params in response</p>
                <ul>
                    <li v-for="value in validation.valid" :key="value">{{value}}</li>
                </ul>
            </div>

            <div class="error" v-if="validation.missing">
                <p>Invalid params in response</p>
                <ul>
                    <li v-for="value in validation.missing" :key="value">{{value}}</li>
                </ul>
            </div>

            <button @click="onCallAPI()">Call API</button>
        </div>
    </main>
</template>


<script setup>
    import { ref }        from 'vue';
    import HTTPService    from '@/services/HTTP/HTTPService';
    import ValidateData   from '@/services/Validation/ValidateData';

    const response   = ref(null);
    const validation = ref({})
    const params     = {
        name : 'John',
        action: 'simple',
        token: 'token_id_01',
    }

    const onCallAPI = async () => {
        response.value = await HTTPService.postFormData(
            'http://localhost:9980/simple-request.php?action=simple',
            {'name': params.name},
            {'X-Token': params.token}
        );

        validation.value = ValidateData.requiredValues(response.value.results, params);
    }
</script>