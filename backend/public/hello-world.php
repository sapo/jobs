<?php

use SAPO\Jobs\Controllers\API\HelloWorldController;

require_once '/project/src/defines.php';

$controller = new HelloWorldController();
$controller->execute();