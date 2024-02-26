<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class ReflectPayloadController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $this->respond(
            json_decode($_POST['data'], true),
        );
    }
}