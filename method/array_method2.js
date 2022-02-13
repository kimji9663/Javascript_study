// 2. 요소의 갯수 구하기
/*
 - alphabets에서 a만 걸러서 갯수를 반환
 - alphabets에서 b만 걸러서 갯수를 반환
 - alphabets에서 c만 걸러서 갯수를 반환
 - alphabets에서 d만 걸러서 갯수를 반환
*/
const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
const alphabets2 = ["a", "a", "a", "a", "b", "c", "c", "c", "c", "d", "e"];
const alphabets3 = ["a", "a", "a", "b", "c", "c", "d", "e", "e", "e", "e"];

const result2_a = alphabets.filter(item => item == "a" ).length;
const result2_b = alphabets.filter(item => item == "b" ).length;
const result2_c = alphabets.filter(item => item == "c" ).length;
const result2_d = alphabets.filter(item => item == "d" ).length;
console.log("a = " + result2_a, "b = " + result2_b, "c = " + result2_c, "d = " + result2_d);



// 3. 평균값 구하기
/*
 - numbers를 모두 합산해서 numbers의 총 갯수로 나눈다.
*/
const numbers = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result3 = numbers.reduce((acc, cur) => acc + cur / numbers.length );
console.log(result3); //3.8




// 4. 10보다 큰 요소가 몇개 인지 구하기
const arr = [1, 2, 3, 5, 10, 20, 30, 40, 50, 60];


