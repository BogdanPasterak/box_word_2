import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { Board } from 'src/models/game/board';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  showBoard(): Board {
    return this.gameService.showBoard();
  }
}
