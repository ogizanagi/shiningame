<?php

declare(strict_types=1);

namespace App\Controller;

use App\Model\Game;
use Stenope\Bundle\ContentManager;
use Stenope\Bundle\Service\ContentUtils;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    private ContentManager $manager;

    public function __construct(ContentManager $manager)
    {
        $this->manager = $manager;
    }

    #[Route(name: 'games')]
    public function index(): Response
    {
        $games = $this->manager->getContents(Game::class, ['publishDate' => false], ['enabled' => true]);

        return $this->render('games/list.html.twig', [
            'games' => $games,
        ])->setLastModified(ContentUtils::max($games, 'lastModified'));
    }

    #[Route('/game/{game<.+>}', name: 'game')]
    public function show(Game $game): Response
    {
        if (!$game->enabled) {
            throw $this->createNotFoundException('This page is disabled');
        }

        return $this->render('games/show.html.twig', [
            'game' => $game,
        ])->setLastModified($game->lastModified);
    }
}
