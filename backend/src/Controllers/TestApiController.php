<?php

namespace SAPO\Jobs\Controllers;

use SAPO\Jobs\Application\BaseAPIController;

class TestApiController extends BaseAPIController
{
    public function execute()
    {
        $this->respond("Hello, World!");
    }
}