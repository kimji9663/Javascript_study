// 수학 괄호 파싱
/**
 * 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 
 * 괄호는 소괄호밖에 없습니다.
 */

 let user_input = '{{(()}';

 function solution(s){
    const m = {
        ')' : '(',
        '}' : '{'
    }
    let stack = [];
    for(let i in s){
        if(s[i] === '(' || s[i] === '{'){ // ( 또는 { 로 시작하는 경우
            stack.push(s[i]);
            //console.log(stack);
        } else if(m[s[i]]){ // 현재 순회하는 문자가 }, ) 중 하나 일 경우
            //console.log(m[s[i]]);
            if(stack.length === 0){
                return false;
            } else {
                let t = m[s[i]];
                if(t != stack.pop()){ // stack의 가장 끝에 있는 문자를 꺼내고 현재 순회하는 문자가 같은 지 확인
                    return false
                }
            }
        }
    }
    console.log(stack);
    return stack.length === 0;
 }
 
 console.log(solution(user_input)); // true