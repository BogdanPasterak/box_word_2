import { Injectable } from '@nestjs/common';
import { Board, BoardObj } from 'src/models/game/board';

@Injectable()
export class GameService {
  // test set
  showBoard(): Board {
    return { fields: [...'axxxxbxxxxcxxxd '] };
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
        if (bo.fields[position] == ' ') {
          bo.fields[position] = l;
          ok = true;
        }
      } while (!ok);
    });
    // fill rest position
    bo.fields = bo.fields.map((p) => (p == ' ' ? 'x' : p));
    // last one space
    bo.fields[15] = ' ';
    return bo;
  }
}
