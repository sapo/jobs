<?php

use SAPO\Jobs\Controllers\API\UsersController;

require_once '/project/src/defines.php';

$controller = new UsersController();


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $controller->get();
        break;
    case 'POST':
        $controller->post();
        break;
    case 'PUT':
        $controller->put();
        break;
    case 'DELETE':
        $controller->delete();
        break;
    default:
        $controller->execute();
        break;
}