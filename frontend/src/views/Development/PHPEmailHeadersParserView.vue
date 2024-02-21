<template>
    <h1>PHP Headers Parser</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    Parse the headers from the file email-headers.txt located at <code>backend/metadata/email-headers.txt</code> and remove all invalid headers.
               </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/EmailHeadersController.php</code></li>
                    <li>Read the file <code>backend/metadata/email-headers.txt</code></li>
                    <li>Passe the file line by line according to the rules list below to remove all invalid headers.</li>
                    <li>Return only the valid headers in a JSON payload indexed by header name => header value.</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Parsing Rules'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>The name and value are always separated by comma ":", everything after the comma is considered a value.</li>
                    <li>The name of the header can not have any spaces.</li>
                    <li>Only one header per line is allowed.</li>
                    <li>Values empty spaces in the begginning or end of the line should be removed.</li>
                    <li>Any '' or "" in values should be removed.</li>
                    <li>The valid headers end at the block --END--</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p> <code>email-headers.text</code> file contents:</p>
                <div class="quote">
                    <p>Subject: Email de Testes</p>
                    <p>From: Sapo Support</p>
                    <p>Invalid Header 3:</p>
                    <p>Reply-To: no-reply@sapo.pt</p>
                    <p>Invalid Header 2: invalid@sapo.pt</p>
                    <p>Date: Thu, 9 Jun 2022 11:56:57 +0000</p>
                    <p>Message-ID: "0a9d3cf50789b9c6b1cff1011.b617e4f01a"</p>
                    <p>--END--</p>
                    <p>Invalid Header-3: Not valid</p>
                </div>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>Expected response payload sent by the server</p>
                <div class="quote">
                    <p> {{ JSON.stringify(valid_headers) }}</p>
                </div>
            </template>
        </CustomBlock>

    </div>


    <h5>Results</h5>

    <div class="block">
        <CustomBlock v-if="validation.valid"
            title='Valid Headers'
            class="success-block"
        >
            <template #content>
                <ul>
                    <li v-for="value, name in validation.valid" :key="name">{{name}} {{value}} </li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock v-if="validation.invalid"
            title='Invalid Headers'
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
    import HTTPService  from '@/services/HTTP/HTTPService.js';
    import CustomBlock  from '@/templates/blocks/CustomBlock.vue';
    import ValidateData from '@/services/Validation/ValidateData';

    const response   = ref({});
    const validation = ref({});
    const valid_headers = {
        'Subject'   : 'Test Email',
        'From'      : 'Sapo Support',
        'Reply-To'  : 'no-reply@sapo.pt',
        'Date'      : 'Thu, 9 Jun 2022 11:56:57 +0000',
        'Message-ID': '0a9d3cf50789b9c6b1cff1011.b617e4f01a',
    }

    const onCallAPI = async () => {
        response.value   = await HTTPService.post('http://localhost:9980/email-headers.php');
        validation.value = ValidateData.requiredValues(response.value.results, valid_headers);
    }

</script>