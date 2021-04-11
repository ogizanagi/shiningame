<?php

declare(strict_types=1);

namespace App\Model;

class Screenshot
{
    public string $path;

    public bool $spoiler = false;

    public function isGif(): bool
    {
        return pathinfo($this->path, PATHINFO_EXTENSION) === 'gif';
    }

    public function getWebm(): string
    {
        return pathinfo($this->path, PATHINFO_DIRNAME) . '/' . pathinfo($this->path, PATHINFO_FILENAME) . '.webm';
    }
}
