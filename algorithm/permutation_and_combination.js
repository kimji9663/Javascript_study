// 문제80 : 순열과 조합

/**
조합이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
순열이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), 
ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), 
ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

입력
ㄱ,ㄴ,ㄷ,ㄹ   //선택할 한글 자음
3            //조합의 수

출력
['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
4
 */

const chars_array = ["ㄱ",  "ㄴ", "ㄷ", "ㄹ"];
const input_number = 3;

function combination(array, number) {
    let combi = [];

    const f = (pre, array) => {
        for(let i = 0; i < array.length; i++){
          //console.log(pre + array[i]);
          combi.push(pre + array[i]);
          f(pre + array[i], array.slice(i + 1));
        }
    }
    //console.log(array);
    //console.log(combi);
    f('', array);
  
  	const result = combi.filter(x => x.length === input_number);
  	return result;
}

console.log(combination(chars_array, input_number));