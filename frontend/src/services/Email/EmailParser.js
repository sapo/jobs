export default class EmailParser {
    invalid_headers = [
        "Subject: Email de Testes",
        "From: Sapo Support",
        "Invalid Header 3:",
        "Reply-To: no-reply@sapo.pt",
        "Invalid Header 2: invalid@sapo.pt",
        "Date: Thu, 9 Jun 2022 11:56:57 +0000",
        "Message-ID: 0a9d3cf50789b9c6b1cff1011.b617e4f01a",
        "--END--",
        "Invalid Header-3: Not valid",
    ];

    valid_headers = {
        'Subject'   : 'Test Email',
        'From'      : 'Sapo Support',
        'Reply-To'  : 'no-reply@sapo.pt',
        'Date'      : 'Thu, 9 Jun 2022 11:56:57 +0000',
        'Message-ID': '0a9d3cf50789b9c6b1cff1011.b617e4f01a',
    }

    headers_count = 5;

    validateHeaders(headers) {
        let count   = 0;
        let invalid = {};
        let valid   = {};

        for (let header in this.valid_headers) {
            if (this.valid_headers[header] !== headers[header]) {
                invalid[header] = headers[header];
                continue;
            }

            valid[header] = headers[header];
            count++;
        }

        return {
            success : count === this.headers_count,
            valid   : valid,
            invalid : invalid,
        }
    }
}