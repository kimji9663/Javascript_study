/*
2. 다음 큰 숫자
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.
조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다. 조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다. 조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다. 예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
제한 사항 n은 1,000,000 이하의 자연수 입니다.
*/

//예시답안1
function solution(n) {
	let nbi = Number(n).toString(2); //2진수로 변환
	let nbiCount = nbi.match(/1/g).length; //1의 갯수 반환
	//match메서드는 ()안의 객체와 일치하는 문자를 배열로 반환
	//g플래그를 사용시 객체가 아닌 하위 문자열을 포함하는 배열을 반환
	//.length을 뒤에 넣어줌으로써 문자열의 갯수를 얻음
	console.log('nbi : ' + nbi);
	console.log('nbiCount : ' + nbiCount);
	console.log('n : ' + n);
	while(true){ //if문이 true일 때까지 반복
		n+=1; //n에 1을 더하고
		console.log('n+=1 : ' + n);
		let nextbi = Number(n).toString(2); //2진수로 변환
		console.log('nextbi : ' + nextbi);
		let nextbiCount = nextbi.match(/1/g).length; //1의 갯수 반환
		console.log('nextbiCount : ' + nextbiCount);
		if(nbiCount == nextbiCount){ //1의 갯수가 일치하면 while문 끝내기
			break;
		}
	}
	console.log('n : ' + n);
	return n;
}
console.log(solution(78));

//자바스크립트에서는 산술 연산 시 모든 수가 10진수로 자동 변환되어 계산된다.
//toString() 메소드는 해당 숫자의 진법을 실제로 바꿔주는 것이 아닌, 전달된 진법으로 변환된 형태의 문자열을 반환해 주는 것이다.




//스스로 풀어보기
function solution2(n) {
	let numTo2 = n.toString(2);
	//console.log('numTo2 : ' + numTo2);
	let numTo2Length = numTo2.match(/1/g).length;
	//console.log('numTo2Length : ' + numTo2Length);
	while(true){
		n += 1;
		//console.log('n : ' + n);
		let nextNumTo2 = n.toString(2);
		//console.log('nextNumTo2 : ' + nextNumTo2);
		let nextNumTo2Length = nextNumTo2.match(/1/g).length;
		//console.log('nextNumTo2Length : ' + nextNumTo2Length);
		if(numTo2Length === nextNumTo2Length){
			break;
		}
	}
	return n;
}
console.log(solution2(78));