<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;

class AnimalDogController extends BaseJSONAPIController
{
    private function execute(): array
    {
        $dog = new Dog();
        $dog->setName('Rex');
        $dog->setBreed('Bulldog');

        $this->respond(
            (string) $dog->getAttributes()
        );
    }
}