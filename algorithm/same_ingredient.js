/*
90. 같은 의약 성분을 찾아라!

의약품 성분이 총 8개인 약품들이 있습니다. 예를 들어 다음 데이터는 총 8개의 성분을 갖습니다.

판콜비 = 'ABCDEFGH'
넥타이레놀 = 'EFGHIJKL'

특정 약품 A의 성분이 공개되었을 때, 이와 유사한 성분을 가진 데이터들의 출력을 구하는 문제입니다.

입력 : 'ABCDEFGH' 4
데이터 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 1만 개의 데이터
출력 : 'EFGHIJKL', 'EFGHIJKM', 'EFGHIJKZ' 등 4개의 요소가 같은 약품 전부(4개 이상이 아니며 같은 요소가 4개인 것을 출력해야 합니다.)

* 해당 문제는 시간제한이 있습니다.
* 제약 데이터의 성분은 중복이 될 수 없습니다.
(예를 들어 'AAABBBAB'와 같은 데이터는 없습니다.)
 */

let l = [];

// 아스키코드 알파벳 추출
for (let i = 65; i < 91; i++){
    l.push(String.fromCharCode(i));
}
//console.log(l.length); // 26

// 8자리 알파벳 배열 랜덤으로 생성
function randomItem(a){
    let string = [];

    while(string.length !=8){
        let b = a[Math.floor(Math.random() * a.length)]; // A ~ Z
        //console.log(b);
        
        if(!string.includes(b)){
          string.push(b);
        }
    }
    let medicine = string.join('');
    console.log(string); // [  'T', 'D', 'P', 'J', 'I', 'K',  'R', 'F' ]
    //console.log(medicine); // 'TDPJIKRF'
    return medicine;
}
randomItem(l);

// 100개의 데이터 만들기
let total_medicine = [];
while(total_medicine.length !== 100){
  let m = randomItem(l);
  if (!total_medicine.includes(m)){ // 중복 방지
    total_medicine.push(m);
  }
}

// 교집합 추출
let user_input = 'ABCDEFGH 4'.split(' ');
let result = [];

for (let i of total_medicine){
  let setUserData = new Set(user_input[0]); // Set { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H' }
  let setMedicine = new Set(i); // Set { 'Y', 'T', 'S', 'E', 'H', 'J', 'C', 'A' }
  
  let intersection = new Set([...setUserData].filter(x => setMedicine.has(x))); // has는 Set의 매서드
  
  // 교집합이 4개인 것 골라내기
  if(intersection.size === parseInt(user_input[1], 10)){
    result.push(i)
  }
}

console.log(result); 
// [ 'LHZIVDCB', 'ZHFMRGDY', 'HBEIFZSJ', 'BMAXENDI', 'CBUPREHT', 'EDSCUIBQ', 'ZRFVAJBC', 'EXKRHPGC', 'AKVBHTPF', 'NEHZGFSJ', 'CDSBHNVU' ] 

