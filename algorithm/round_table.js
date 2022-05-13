// 원형 테이블
/* 
원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.
* 단 첫번째 먹는 음식은 1번

음식 개수 N : 6
주어진 숫자 K : 3
*/

const n = 8;
const k = 3;
function sol(n, k){
  let index = 0;
	let food = []; //[1, 2, 3, 4, 5, 6]를 for문을 통해 받는다.
  for(let i = 0; i < n; i++){
    food.push(i+1);
    //console.log(food);
  }
  while(food.length > 2){ // 6, 5, 4, 3, 2끝 (2는 남길 음식 수)
    if(index > food.length-1){ // (0 < 6-1), (2 < 5-1), (4 > 4-1) / (2 = 3-1)
      console.log(index, food.length);
      index -= food.length; // 4 - 4
    } 
  	food.splice(index, 1); // (0, 1), (2, 1), (4, 1) / (0, 1), (2, 1),
    // food = [1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6], [2, 3, 5, 6], [3, 5, 6], [3, 5],
    index += k; // 0 + 3, 2 + 3 / 0 + 3, 2 + 3,
  	index --; // 3 - 1, 5 - 1 / 3 - 1, 5 - 1
  }
  return food; // [3, 5]
}

console.log(sol(n, k));