<?php

namespace SAPO\Jobs\MySQL;

class MySQLDatabase
{
    /**
     * @var \PDO
     */
    public $pdo;

    /**
     * MySQLDatabase constructor.
     *
     * Set up the PDO connection to the MySQL database.
     *
     * @throws \PDOException
     */
    public function __construct()
    {
        $this->pdo = new \PDO("mysql:host=sapo_mysql;port=3306;dbname=database_1", 'test_user', 'test_password');
    }
}
