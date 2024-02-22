<?php

use SAPO\Jobs\Controllers\API\AnimalDogOwnerController;

require_once '/project/src/defines.php';

$controller = new AnimalDogOwnerController();
$controller->execute();