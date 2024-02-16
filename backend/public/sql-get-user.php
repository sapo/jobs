<?php

use SAPO\Jobs\Controllers\API\SQLGetUserController;

require_once '/project/src/defines.php';

$controller = new SQLGetUserController();
$controller->execute();