<template>
    <h1>PHP Security Concepts 1</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    In this exercise, an SQL Injection will be performed to retrieve all users records instead of the requested one.
                </p>

                <p>
                    The server is expected to return the user record requested by the id sent in the HTTP request, and not the entire users table.
                </p>
            </template>
        </CustomBlock>


        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/SQLGetUserController.php</code></li>
                    <li>Fix the SQL Injection that alows to retrieve all users records instead of the requested one.</li>
                </ul>
            </template>
        </CustomBlock>


        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    When the user clicks on the button below, the following HTTP URL will be called with an injected hidden payload.
                </p>

                <div class="quote">
                    <p>http://localhost:9980/sql-get-user.php?id=1</p>
                </div>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    This is the expected response from the server after the user record is retrieved:
                </p>

                <div class="quote">
                    <p> [{"id":1,"birth_date":"1980-04-26","first_name":"John","last_name":"Doe"}]</p>
                </div>
            </template>
        </CustomBlock>

    </div>

    <h3>Results</h3>

    <div class="block">
        <CustomBlock v-if="response.results && response.results.length === 1"
            title='SQL Injection Fixed'
            class="success-block"
        >
            <template #content>
                <ul>
                    <p>{{response.results}}</p>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="response.results && response.results.length > 1"
            title='SQL Injection Detected'
            class="error-block"
        >
            <template #content>
                <ul>
                    <p>{{response.results}}</p>
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
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService';
    import CustomBlock from '@/templates/blocks/CustomBlock.vue';

    const response = ref({});

    const onCallAPI = async () => {
        response.value = await HTTPService.post('http://localhost:9980/sql-get-user.php?id=1 OR 1=1');
    }
</script>