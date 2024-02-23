<template>
    <h1>PHP Simple Input</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    In this exercise, we will send a simple HTTP request to the server and test the response for valid params and cookies.
                </p>
                <p>
                    The server is expected to return the params name, action and X-Token sent by the http request in json format.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/SimpleRequestController.php</code></li>
                    <li>Return the params name, action and X-Token sent by the http request below.</li>
                    <li>Set a cookie with the name session_id and the value 12345</li>
                    <li>Click on Call API button to validate the results.</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p> When the user clicks on the button below, the following HTTP request is sent to the server:</p>

                <div class="quote">
                    <p>POST /simple-request.php?action=simple HTTP/1.1</p>
                    <p>Accept: */*</p>
                    <p>Connection: keep-alive</p>
                    <p>Content-Length: 9</p>
                    <p>Content-Type: application/json</p>
                    <p>Host: localhost:9980</p>
                    <p>X-Token: token_id_01</p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p> </p>
                    <p>{"name":"John"}</p>
                </div>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>The expected response from the server after the params are retrevied is:</p>

                <div class="quote">
                    <p> {{ JSON.stringify(params) }}</p>
                </div>
            </template>
        </CustomBlock>
    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock v-if="validation.valid"
                title='Valid Params'
                class="success-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.valid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="validation.invalid"
                title='Invalid Params'
                class="error-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.invalid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="cookie.valid === true"
                title='Valid Cookie'
                class="success-block"
            >
            <template #content>
                <ul>
                    <p>Cookie: {{ cookie.cookie }} </p>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="cookie.valid === false"
                title='Invalid Cookie'
                class="error-block"
            >
            <template #content>
                <ul>
                    <p>Cookie: {{ cookie.cookie }} </p>
                </ul>
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
    import { ref }      from 'vue';
    import HTTPService  from '@/services/HTTP/HTTPService';
    import ValidateData from '@/services/Validation/ValidateData';
    import CustomBlock  from '@/templates/blocks/CustomBlock.vue';

    const response   = ref(null);
    const validation = ref({})
    const cookie     = ref({});
    const params     = {
        name : 'John',
        action: 'simple',
        token: 'token_id_01',
    }

    const onCallAPI = async () => {
        response.value = await HTTPService.post(
            'http://localhost:9980/simple-request.php?action=simple',
            {'name': params.name},
            {'X-Token': params.token}
        );

        validation.value = ValidateData.requiredValues(response.value.results, params);
        cookie.value     = ValidateData.requiredCookie('session_id=12345');
    }
</script>