// 01. 이름 가리기
/*
토스의 프론트엔드 개발자 김토스는 토스 앱 내에 들어갈 더치페이 기능의 개발을 맡게 되었습니다.
더치페이 기능은 일정 금액을 다른 사람들과 나누어 지불할 수 있는 기능이며, 사용자는 자신 외에 더치페이를 함께 하는 사람들의 이름을 볼 수 있습니다.
이때 더치페이 대상자에 자신의 연락처에 등록되지 않은 사용자가 포함되어있다면, 그 사람의 개인정보를 보호하기 위해 이름을 '*'로 마스킹하여 가려주어야 합니다.
단 이름의 전부를 가려주는 것은 아니고, 앞의 2글자는 원래 이름을 보여주되 그 이후의 글자는 전부 '*'로 마스킹을 해야 합니다.
마스킹 처리를 위한 getMaskedName을 구현하세요. 

** 입력 형식
1. 함수 getMaskedName의 첫 번째 인자로 마스킹할 이름이 주어집니다.
2. 마스킹할 이름은 string 타입으로, 3 이상 50 이하의 길이를 가집니다. 이름은 한글 또는 알파벳, 공백으로만 이루어져 있다고 가정합니다.
*/


function getMaskedName(n) {
  let result = '';
  //let star = '*'.repeat(n.length -2);
  //console.log(n.length -2);
  //console.log(star);
  //let num = n.slice(0, 2);
  //console.log(num);
  result = n.slice(0, 2) + '*'.repeat(n.length -2);
  return result;
}

console.log(getMaskedName('kimjihye')); //ki******


