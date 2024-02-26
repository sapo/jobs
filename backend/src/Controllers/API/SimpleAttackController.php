<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class SimpleAttackController extends BaseJSONAPIController
{
    const VALID_CODE = '725';

    public function execute(): void
    {
        $success = false;
        $code    = $_GET['code'] ?? null;

        if ($code === self::VALID_CODE) {
            $success = true;
        }

        $this->respond([
            'success' => $success
        ]);
    }
}