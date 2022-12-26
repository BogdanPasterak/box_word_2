import { Injectable } from '@nestjs/common';
import { Board, BoardObj } from 'src/models/game/board';

@Injectable()
export class GameService {
  current: Board;
  // test set
  showBoard(): Board {
    if (this.current) return this.current;
    else return this.generate();
  }

  // generate random set
  generate(): Board {
    let bo = new BoardObj();

    // set a,b,c,d on random position
    ['a', 'b', 'c', 'd'].forEach((l) => {
      let ok = false;
      let position: number;
      do {
        position = Math.floor(Math.random() * 15);
        if (bo.fields[position] == 'x') {
          bo.fields[position] = l;
          ok = true;
        }
      } while (!ok);
    });

    this.current = bo;
    return bo;
  }
}
