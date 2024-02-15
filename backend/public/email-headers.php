<?php

use SAPO\Jobs\Controllers\API\EmailHeadersController;

require_once '/project/src/defines.php';

$controller = new EmailHeadersController();
$controller->execute();