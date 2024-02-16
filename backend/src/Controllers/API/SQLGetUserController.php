<?php

namespace SAPO\Jobs\Controllers\API;

use SAPO\Jobs\Application\BaseJSONAPIController;
use SAPO\Jobs\MySQL\MySQLDatabase;

class SQLGetUserController extends BaseJSONAPIController
{
    public function execute(): void
    {
        $mysql  = new MySQLDatabase();
        $result = $mysql->pdo->query("SELECT * FROM users where id = {$_POST['id']}");
        $users  = $result->fetchAll(\PDO::FETCH_ASSOC);

        $this->respond($users);
    }
}