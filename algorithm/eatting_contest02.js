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
dishes = dishes.split(' ').map(a => parseInt(a, 10));


function solution(name, number) {
  let item_list = [];
  for(let i of name){
    let obj = {};
    obj['name'] = i;
    obj['value'] = number[name.indexOf(i)];
    console.log(obj);
    item_list.push(obj);
  }
  console.log(item_list);
  
  item_list.sort((a, b) => {
    return a.value < b.value ? 1 : a.value > b.value ? -1 : 0
  });
  
  let result = {};
  for (let i of item_list) {
    result[i['name']] = item_list.indexOf(i);
  }
  
  return result;
}

console.log(solution(names, dishes));