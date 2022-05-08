// 가장 긴 공통 문자열
/**
 * 두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램을 만들어 주세요.
 */

function sol(string){
    let result = [];
    for (let i=1; i<string.length+1; i++){
        for (let j=0; j<i; j++){
            result.push(string.slice(j, j+string.length-i+1));
        }  
    }
    return result;
}
    
const inputOne = 'THISISSTRINGS';
const inputTwo = 'THISIS';
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

let intersection = arrayOne.filter(x => arrayTwo.includes(x));

intersection.sort((a,b)=>{
    return b.length-a.length;
});

console.log(intersection[0].length);   