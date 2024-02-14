<?php

namespace SAPO\Jobs\Controllers;

use SAPO\Jobs\Application\BaseTerminalController;

class TestTerminalController extends BaseTerminalController
{
    public function execute()
    {
        $this->respond("Hello, World!");
    }
}