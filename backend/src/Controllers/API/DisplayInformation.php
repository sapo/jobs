<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseAPIController;

class DisplayInformation extends BaseAPIController
{
    public function execute()
    {
        $this->respond(
            json_encode([
                'name' => 'SAPO Jobs',
                'email' => 'interview@sapo.pt',
            ])
        );
    }
}