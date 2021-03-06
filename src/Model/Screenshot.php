<?php

declare(strict_types=1);

namespace App\Model;

class Screenshot
{
    public string $path;

    public bool $spoiler = false;

    private ?string $anchor;

    public function isGif(): bool
    {
        return pathinfo($this->path, PATHINFO_EXTENSION) === 'gif';
    }

    public function getWebm(): string
    {
        return pathinfo($this->path, PATHINFO_DIRNAME) . '/' . pathinfo($this->path, PATHINFO_FILENAME) . '.webm';
    }

    public function getAnchor(): string
    {
        return $this->anchor ?? pathinfo($this->path, PATHINFO_FILENAME);
    }

    public function setAnchor(?string $anchor = null): void
    {
        $this->anchor = $anchor;
    }
}
