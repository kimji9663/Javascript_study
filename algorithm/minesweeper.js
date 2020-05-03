function placeMines (mLen, row, col, x, y) {
    for (let i = 0; i < row; i++) {
        INIT.board.push([]);
        for (let j = 0; j < col; j++) {
            INIT.board[i].push(0);
        }
    }
    for (let i = 0; i < mLen; i++) {
        let rd1 = Math.floor(Math.random() * row);
        let rd2 = Math.floor(Math.random() * col);
        if (INIT.board[rd1][rd2] || INIT.board[x][y]) {
            i--;
        } else {
            INIT.board[rd1][rd2] = 'm';
        }
    }
    for (let i = 0; i < INIT.board.length; i++) {
        for (let j = 0; j < INIT.board[i].length; j++) {
            if (INIT.board[i][j] !== 'm') {
                INIT.board[i][j] = countMines(i, j, INIT.board);
            }
        }
    }
    function countMines (in1, in2, arr) {
        let cnt = 0;
        let iLen = in1 + 2;
        let jLen = in2 + 2;
        for (let i = in1 - 1; i < iLen; i++) {
            for (let j = in2 - 1; j < jLen; j++) {
                if (i < 0 || j < 0 || i > arr.length - 1 || (i === in1 && j === in2)) {
                    continue;
                }
                if (arr[i][j] === 'm') {
                    cnt++;
                }
            }
        }
        return cnt;
        }
    }
    