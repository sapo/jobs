<template>
    <h1>PHP Email Body Multipart Parser</h1>

    <div class="block">
        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>
                    The goal of this exercise is to parse the given email file and return the message body part delimited by the MULTIPART-ID header.
               </p>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Exercise'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>Open up the file <code>backend/src/Controllers/API/EmailController.php</code></li>
                    <li>Read the file <code>backend/metadata/email-body.txt</code> line by line to find the MULTIPART-ID header value.</li>
                    <li>Extract the body part contents according to the rules listed below.</li>
                    <li>Return the message body text as a JSON Payload with the format "email_body" => value,</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            title='Parsing Rules'
            class="exercise-block"
        >
            <template #content>
                <ul>
                    <li>The start delimiter for the body part is --{$multipart_id_value}</li>
                    <li>The end delimiter for the body part is --{$multipart_id_value}--</li>
                </ul>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p> <code>email-body.txt</code> file contents:</p>
                <div class="quote">
                    <p>Subject: Test Email!</p>
                    <p>From: Sapo Support</p>
                    <p>Reply-To: no-reply@sapo.pt</p>
                    <p>Date: Thu, 9 Jun 2022 11:56:57 +0000</p>
                    <p>Message-ID: "0a9d3cf50789b9c6b1cff1011.b617e4f01a"</p>
                    <p>MULTIPART-ID: "0ak.part.29934"</p>

                    <p>--0ak.part.29934</p>
                    <p>This is a test email!</p>
                    <p>--0ak.part.29934--</p>
                </div>
            </template>
        </CustomBlock>

        <CustomBlock
            class="clean-block"
        >
            <template #content>
                <p>Expected response payload sent by the server</p>
                <div class="quote">
                    <p> {{ JSON.stringify(valid_payload) }}</p>
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

    const response      = ref({});
    const validation    = ref({});
    const valid_payload = {
        'body': 'This is a test email!',
    }

    const onCallAPI = async () => {
        response.value   = await HTTPService.post('http://localhost:9980/email.php');
        validation.value = ValidateData.requiredValues(response.value.results, valid_payload);
    }

</script>