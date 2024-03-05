<template>
    <h1>PHP Simple GET</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    In this exercise, we will send a simple HTTP request to the server and test the response for valid params.
                </p>
                <p>
                    The server is expected to return the action sent by the http request in json format.
                </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/UsersController.php</code></li>
                    <li>Return the params action sent by the http request below.</li>
                    <li>Click on Call API button to validate the results.</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p> When the user clicks on the button below, the following HTTP URL will be called.</p>

                <div class="quote">
                    <p>
                        http://localhost:9980/users.php?action=simple
                    </p>

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
        <CustomBlock v-if="validation.success === true"
                title='Valid Params'
                class="success-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.valid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="validation.success === false"
                title='Invalid Params'
                class="error-block"
            >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.invalid" :key="name">{{name}} {{value}} </li>
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
    const params     = {
        action: 'simple',
    }

    const onCallAPI = async () => {
        response.value = await HTTPService.get(
            'http://localhost:9980/users.php?action=simple',
        );

        validation.value = ValidateData.requiredValues(response.value.results, params);
    }
</script>