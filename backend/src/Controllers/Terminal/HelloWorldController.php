<?php

namespace SAPO\Jobs\Controllers\Terminal;

use SAPO\Jobs\Application\BaseTerminalController;

class HelloWorldController extends BaseTerminalController
{
    public function execute()
    {
        $this->respond("Hello, World!");
    }
}