<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class UsersController extends BaseJSONAPIController
{

    public function execute(): void
    {}

    public function get(): void
    {
        $action = null;

        $this->respond([
            'action' => $action,
        ]);
    }

    public function post(): void
    {
        $this->respond([
        ]);
    }

    public function put(): void
    {
        $name  = null;
        $token = null;

        $this->respond([
            'name'  => $name,
            'token' => $token,
        ]);
    }

    public function delete(): void
    {
        $this->respond([
        ]);
    }
}