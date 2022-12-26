import { Injectable } from '@nestjs/common';
import { Board } from 'src/models/game/board';

@Injectable()
export class GameService {
  showBoard(): Board {
    return { fields: [...'Bogdan'] };
  }
}
