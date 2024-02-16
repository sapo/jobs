<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class SimpleRequestController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $action = null;
        $name   = null;
        $token  = null;

        $this->respond([
            'action' => $action,
            'name'   => $name,
            'token'  => $token,
        ]);
    }
}