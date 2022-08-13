/**
 * 천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.

입력 : 손오공 야모챠 메지터 비콜로
      70 10 55 40
출력 : {'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}
 */

let names = "손오공 야모챠 메지터 비콜로";
let dishes = "70 10 55 40";

names = names.split(' ');
dishes = dishes.split(' ');


function solution(name, number) {
  let item_list = [];
  for(let i = 0; i < name.length; i++){
    let obj = {name: name[i], number: number[i]};
    item_list.push(obj);
  }
  item_list.sort((a, b) => b.number - a.number);
  let count = 1;
  let result = item_list.map(function(obj){
    //robj[obj.name] = 1;
    let robj = {};
    robj[obj.name] = count;
    count++;
    console.log(robj);
    return robj;
  })
  return result;
}

console.log(solution(names, dishes));