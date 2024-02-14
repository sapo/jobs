<?php

use SAPO\Jobs\Controllers\Terminal\HelloWorldController;

require_once '/project/src/defines.php';

$controller = new HelloWorldController();
$controller->execute();