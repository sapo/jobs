<template>
    <main>
        <h1>PHP Security Concepts 1</h1>

        <div class="block">
            <p>
                Open up the file <code>backend/src/Controllers/API/SQLGetUserController.php</code> and write PHP code to:
            </p>

            <div class="code">
                <ul>
                    <li>Fix the SQL Injection that alows to retrieve all users records instead of the requested one.</li>
                </ul>
            </div>

            <p>Example HTTP Request to retrieve a single user</p>

            <div class="quote">
                <p>http://localhost:9980/sql-get-user.php?id=1</p>
            </div>

            <p>Expected payload sent by the server</p>

            <div class="quote">
                <p> [{"id":1,"birth_date":"1980-04-26","first_name":"John","last_name":"Doe"}]</p>
            </div>

            <h5>Results</h5>

            <div class="success" v-if="response.results && response.results.length === 1">
                <p>SQL Injection Fixed</p>
                <p>{{response.results}}</p>
            </div>

            <div class="error" v-if="response.results && response.results.length > 1">
                <p>SQL Injection Detected</p>
                <p>{{response.results}}</p>
            </div>

            <button @click="onCallAPI()">Test for SQL Injection</button>

        </div>
    </main>

</template>

<script setup>
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService';

    const response = ref({});


    const onCallAPI = async () => {
        response.value = await HTTPService.post('http://localhost:9980/sql-get-user.php?id=1 OR 1=1');
    }
</script>