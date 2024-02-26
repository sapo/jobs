<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class EmailController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $response_data = [];
        $this->respond($response_data);
    }
}