/* 
- 조건1 : 모든 선수 = 1 < 100000
- 조건2 : 완주하지 못한 선수 = 모든선수 - 1 
- 조건3 : 이름 = 1 < 20, lowercase
*/

function solution(participant, completion) {
    
    participant.sort();
    completion.sort();
    
    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}