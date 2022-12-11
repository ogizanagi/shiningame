<?php

declare(strict_types=1);

namespace App\Model;

use Symfony\Component\Filesystem\Path;

class Screenshot
{
    public const BASE_DIR = 'content';

    public readonly string $path;

    public bool $spoiler = false;

    private ?string $anchor;

    public function __construct(
        string $path,
    ) {
        $this->path = Path::join(self::BASE_DIR, $path);
    }

    public static function normalizePath(?string $path): ?string
    {
        if (null === $path) {
            return null;
        }

        return Path::join(self::BASE_DIR, $path);
    }

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
