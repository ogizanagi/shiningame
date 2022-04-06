<?php

declare(strict_types=1);

namespace App\Bridge\BlurHash;

use Symfony\Contracts\Cache\CacheInterface;
use Symfony\UX\LazyImage\BlurHash\BlurHashInterface;

class CachedBlurHash implements BlurHashInterface
{
    public function __construct(private BlurHashInterface $decorated, private CacheInterface $cache)
    {
    }

    public function createDataUriThumbnail(
        string $filename,
        int $width,
        int $height,
        int $encodingWidth = 75,
        int $encodingHeight = 75
    ): string {
        $key = 'data-uri=' . md5_file($filename) . md5("w:$width, h:$height, ew:$encodingWidth, eh:$encodingHeight");

        return $this->cache->get($key, fn () => $this->decorated->createDataUriThumbnail(
            $filename,
            $width,
            $height,
            $encodingWidth,
            $encodingHeight
        ));
    }

    public function encode(string $filename, int $encodingWidth = 75, int $encodingHeight = 75): string
    {
        $key = 'encode=' . md5_file($filename) . md5("ew:$encodingWidth, eh:$encodingHeight");

        return $this->cache->get($key, fn () => $this->encode($filename, $encodingWidth, $encodingWidth));
    }
}
