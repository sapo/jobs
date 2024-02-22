<?php

namespace SAPO\Jobs\Application;

abstract class BaseJSONAPIController
{
    abstract public function execute(): void;

    public function respond(array $data)
    {
        echo json_encode($data);
    }

    public function respondError(string $message)
    {
        $this->respond([
            'error' => $message,
        ]);
    }
}