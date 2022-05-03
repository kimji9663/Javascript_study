// 안전한 땅

/**
 * 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.
 */

let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let iadd = 0;
let jadd = 0;
let value = 0;
let valueArray = [];
// 아래로 한칸씩 이동
for(let iadd = 0; iadd <= 사각형-탐색가능지역; iadd++){
  // 오른쪽으로 한칸씩 이동
  for(let jadd = 0; jadd <= 사각형-탐색가능지역; jadd++){
    // Y 좌표
    for(let i = iadd; i <= 탐색가능지역+iadd-1; i++){
      // X 좌표
      for(let j = jadd; j <= 탐색가능지역+jadd-1; j++){
        //console.log(i, j);
        value += 지뢰밭[i][j];
      }
    }
    valueArray.push(value);
    console.log('value : ' + value);
    console.log('---------------');
    value = 0;
    //console.log('value : ' + value);
  }
  console.log('!!!!!!!!!!!!!!!');
}

console.log(valueArray);