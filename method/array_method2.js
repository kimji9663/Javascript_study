// 1. 아직 완료하지 못한 내용찾기
/* 
 - todos 중에서 done이 false인 항목을 찾는다.
 - filter메소드를 쓰는 것이 적합해보임
 */
const todos = [
    {
      id: 1,
      text: "자바스크립트 입문",
      done: true
    },
    {
      id: 2,
      text: "함수 입문",
      done: false
    },
    {
      id: 3,
      text: "객체 입문",
      done: true
    },
    {
      id: 4,
      text: "배열 입문",
      done: true
    },
    {
      id: 5,
      text: "배열 내장함수 입문",
      done: false
    }
  ];
  
  const result5 = todos.filter(item => item.done !== true);
  console.log(result5);
  
  
  
  
  // 2. 요소의 개수 구하기
  /*
  
   */
  const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
  const alphabets2 = ["a", "a", "a", "a", "b", "c", "c", "c", "c", "d", "e"];
  const alphabets3 = ["a", "a", "a", "b", "c", "c", "d", "e", "e", "e", "e"];
  