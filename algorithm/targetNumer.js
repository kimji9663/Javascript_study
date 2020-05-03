/* 
사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
*/

function solution(numbers, target) { //나열된 수, 타겟값
    var answer = 0; //임시값(타겟값이 몇번나오는지 카운트)
  
    function dfs(target, numbers, k) { // 하단 dfs(target, numbers, 0);
      if (k == numbers.length) { //k가 나열된 수의 갯수와 일치할 때
        let sum = 0; //sum은 0부터 시작
        for (var i = 0; i < numbers.length; i++) {
          sum += numbers[i]; //나열된 수의 i번째 수에 sum 더하기, i는 0부터 시작
        }
        if (sum == target) { //sum의 값이 타겟값과 일치할 때
          answer++; //answer값에 1씩 더한다.
        }
        return;
      } else { //k가 나열된 수의 갯수와 일치하지 않을 때
        numbers[k] *= 1; //양수*양수=양수
        dfs(target, numbers, k + 1);
  
        numbers[k] *= -1; //양수*음수=음수
        dfs(target, numbers, k + 1);
      }
    }
    dfs(target, numbers, 0); //function dfs 대입
    return answer;
  }
  
  
  console.log(solution([1,1,1,1,1], 3)); //5 return