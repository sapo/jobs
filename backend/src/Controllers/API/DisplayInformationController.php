<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class DisplayInformationController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $this->respond([
            'name' => 'SAPO Jobs',
            'email' => 'interview@sapo.pt',
        ]);
    }
}