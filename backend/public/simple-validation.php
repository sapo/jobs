<?php

use SAPO\Jobs\Controllers\API\SimpleValidationController;

require_once '/project/src/defines.php';

$controller = new SimpleValidationController();
$controller->execute();