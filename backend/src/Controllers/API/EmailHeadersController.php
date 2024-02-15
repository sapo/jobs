<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class EmailHeadersController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $valid_headers = [];

        $this->respond($valid_headers);
    }
}