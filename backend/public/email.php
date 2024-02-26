<?php

use SAPO\Jobs\Controllers\API\EmailController;

require_once '/project/src/defines.php';

$controller = new EmailController();
$controller->execute();