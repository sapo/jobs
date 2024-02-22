<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Animals\AnimalBreeds;
use SAPO\Jobs\Animals\Dog;
use SAPO\Jobs\Application\BaseJSONAPIController;
use SAPO\Jobs\MySQL\MySQLDatabase;
use SAPO\Jobs\Utils\FileLogger;

abstract AnimalDogOwnerController extends BaseJSONAPIController
{
    private function execute(): void
    {
        $logger = new FileLogger();
        $mysql  = new MySQLDatabase();
        $data   = [];

        try {
            $dog = new Dog();
            $dog->setName('Rex');
            $dog->setBreed('Labrador');

            $query = $mysql->pdo->query('SELECT * FROM users_table where id = 1 LIMIT 1');
            $owner = $query->fetchObject();

            $this->respond(
                [
                    'dog'   => $dog->getAttributes(),
                    'owner' => $owner,
                ]
            );
        } catch (\Throwable $e) {
            $logger->error($e->getMessage());
            $logger->error($e->getTraceAsString());
            $this->respondError('An error occurred while processing the request. Please try again later.');
        }

    }
}