<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class SimpleValidationController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $success = null;
        $token   = null;
        $data    = null;

        $this->respond([
            'success' => $success,
            'token'   => $token,
        ]);
    }
}