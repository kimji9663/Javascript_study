// 지뢰찾기

/**
 * 깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램을 만드세요.
 * (깃발이 붙어 있을 경우는 고려하지 않습니다.)
 * 
입력
0 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 0 0 0
 */
let value = "0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"
let sp = value.split("\n");
console.log(sp);

let count = 0;


// 1을 f로 바꿈
for(let i of sp){
  sp[count] = i.replace('1', 'f').split(' ');
  count += 1;
}

count = 0; //다시 사용하기 위해 초기화
let search = 0;

for(let s of sp){
  console.log(s);
  for(let i of s){
    if(i === 'f'){
      //양 옆에 별을 찍겠다.
      if(search > 0){
        s[search-1] = '*';
        //sp[count-1][search] = '*';
      }
      if(search < 4){
        s[search+1] = '*';
        //sp[count+1][search] = '*'; 
      }

      //위 아래 별을 찍겠다.
      if(count > 0){
        sp[count-1][search] = '*';
      }
      if(count < 4){
        sp[count+1][search] = '*';
      }
    }
    search += 1;
  }
  count += 1;
  search = 0;
}