<?php

namespace SAPO\Jobs\Utils;

class FileLogger
{
    const FILE_PATH = '/project/logs/application.log';

    private $stream;

    public function __construct()
    {
        $this->stream = fopen(self::FILE_PATH, 'a');
    }

    public function __destruct()
    {
        fclose($this->stream);
    }

    public function error($message)
    {
        fwrite($this->stream, sprintf('[%s] %s', date('Y-m-d H:i:s'), '|ERROR|' . $message) . PHP_EOL);
    }
}