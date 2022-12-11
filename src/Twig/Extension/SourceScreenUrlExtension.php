<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Routing\RequestContext;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class SourceScreenUrlExtension extends AbstractExtension
{
    private UrlGeneratorInterface $urlGenerator;

    public function __construct(
        UrlGeneratorInterface $urlGenerator,
        #[Autowire('%env(SOURCE_IMAGES_USE_LOCAL)%')]
        private readonly bool $localSources = true
    ) {
        $this->urlGenerator = $urlGenerator;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('source_screen_url', [$this, 'getSourceScreenUrl']),
        ];
    }

    public function getSourceScreenUrl(string $path): string
    {
        if ($this->localSources) {
            return $this->urlGenerator->generate('local.source_screen', ['path' => $path], UrlGeneratorInterface::ABSOLUTE_URL);
        }

        $prevContext = $this->urlGenerator->getContext();

        try {
            // use an empty request context since the route must provide everything:
            $this->urlGenerator->setContext(new RequestContext());

            return $this->urlGenerator->generate('github.source_screen', ['path' => $path], UrlGeneratorInterface::ABSOLUTE_URL);
        } finally {
            $this->urlGenerator->setContext($prevContext);
        }
    }
}
