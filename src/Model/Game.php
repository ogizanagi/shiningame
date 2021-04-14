<?php

declare(strict_types=1);

namespace App\Model;

class Game
{
    use MetaTrait;

    public string $slug;

    // Game info
    public string $title;
    public Developer $developer;
    public ?string $officialCover = null;
    public ?\DateTimeImmutable $parutionDate = null;

    // Play info
    public string $device;
    /** Player's appreciation as % */
    public int $score;
    public bool $sealOfApproval = false;
    public ?\DateTimeImmutable $playedAt;

    // Screens
    /** Main img used on listing */
    public string $cover;
    /** If null, cover is used */
    private ?string $banner = null;
    /** @var Screenshot[] */
    public array $screens = [];

    // Publication
    public ?\DateTimeImmutable $publishDate = null;

    // Flags
    public bool $enabled = true;

    // Social
    public ?string $tweetId = null;

    // Generic
    public \DateTimeImmutable $lastModified;

    public function getBanner(): string
    {
        return $this->banner ?? $this->cover;
    }

    public function setBanner(?string $banner): void
    {
        $this->banner = $banner;
    }
}