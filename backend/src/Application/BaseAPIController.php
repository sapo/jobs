<?php

namespace SAPO\Jobs\Application;

class BaseAPIController
{
    public function respond(string $message)
    {
        echo $message;
    }
}