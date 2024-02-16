<?php

use SAPO\Jobs\Controllers\API\SimpleRequestController;

require_once '/project/src/defines.php';

$controller = new SimpleRequestController();
$controller->execute();