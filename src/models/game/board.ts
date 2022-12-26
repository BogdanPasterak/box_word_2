export interface Board {
  fields: string[];
}

export class BoardView {
  board: string[];
  constructor(board: Board) {
    let f = board.fields;
    this.board = new Array();
    this.board.push([f[0], f[1], f[2], f[3]].join(' '));
    this.board.push([f[4], f[5], f[6], f[7]].join(' '));
    this.board.push([f[8], f[9], f[10], f[11]].join(' '));
    this.board.push([f[12], f[13], f[14], f[15]].join(' '));
  }
}
