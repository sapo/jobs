<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseAPIController;

class HelloWorldController extends BaseAPIController
{
    public function execute()
    {
        $this->respond("Hello, World!");
    }
}