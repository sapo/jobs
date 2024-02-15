<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class EmailHeadersController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $valid_headers = [
            'Subject'   => 'Test Email 2',
        ];

        $this->respond($valid_headers);
    }
}