<template>
    <main>
        <h1>PHP Headers Parser</h1>

        <div class="block">
            <h5>Exercise</h5>
            <p>
                Open up the file <code>backend/src/Controllers/API/EmailHeadersParser.php</code> and write PHP code to:

                <div class="code">
                    <ul>
                        <li>Receive the data sent by the request when clicked in the button below.</li>
                        <li>Parse all the email the headers from the request and remove all invalid headers.</li>
                        <li>Return all valid headers and drop all invalid headers in a JSON payload indexed by header name => header value.</li>
                    </ul>
                </div>
            </p>

            <p>Parse the headers according to this rules</p>
            <div class="code">
                <ul>
                    <li>The name and value are always separated by comma ":", everything above the comma is considered a value</li>
                    <li>The name can not have any spaces</li>
                    <li>Only one header per line is allowed</li>
                    <li>The valid headers end at the block --END--</li>
                </ul>
            </div>

            <p>Headers data beeing sent to the server</p>
            <div class="quote">
                <p v-for="header in parser.invalid_headers" :key="header">{{header}}</p>
            </div>

            <p>Expected payload sent by the server</p>
            <div class="quote">
                <p> {{ JSON.stringify(parser.valid_headers) }}</p>
            </div>

            <h5>Results</h5>

            <div class="success" v-if="validation.valid">
                <p>Valid Headers</p>
                <ul>
                    <li v-for="value, name in validation.valid" :key="name">{{name}} {{value}} </li>
                </ul>
            </div>

                <p class="error" v-if="validation.success === false">
                    <span>Invalid Headers</span>
                    <ul>
                        <li v-for="value, name in validation.invalid" :key="name">{{name}} {{value}} </li>
                    </ul>
                </p>


            <button @click="onCallAPI()">Call API</button>
        </div>
    </main>
</template>

<script setup>
    import { ref }     from 'vue';
    import HTTPService from '@/services/HTTP/HTTPService.js';
    import EmailParser from '@/services/Email/EmailParser.js';

    const parser     = ref(new EmailParser());
    const response   = ref({});
    const validation = ref({});


    const onCallAPI = async () => {
        response.value   = await HTTPService.post('http://localhost:9980/email-headers.php', parser.value.invalid_headers.join("\n\r"));
        validation.value = parser.value.validateHeaders(response.value.results);
    }

</script>