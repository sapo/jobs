<?php

namespace SAPO\Jobs\Application;

class BaseTerminalController
{
    public function respond(string $message)
    {
        echo $message . "\n";
    }
}