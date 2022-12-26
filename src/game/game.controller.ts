import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { Board, BoardView } from 'src/models/game/board';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  showBoard(): BoardView {
    return new BoardView(this.gameService.showBoard());
  }

  @Get('generate')
  generate(): BoardView {
    return new BoardView(this.gameService.generate());
  }
}
