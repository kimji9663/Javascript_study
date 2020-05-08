# var, let, const의 차이점

## let & var
- let과 var는 모두 변수를 선언하는 키워드이다.
- let은 block scope 안에서 유효하고, var는 function scope 안에서 유효하다.
- let은 지역변수만 선언이 가능하고, var는 지역변수, 전역변수 모두 선언 가능하다.

let과 var가 모두 global영역에서 선언될 때,
```
let letVariable = 'letVariable'; 
var varVariable = 'varVariable';
```
let은 window object라는 전역 객체를 통해 접근할 수 없다.
```
console.log(window.letVariable);  //undifined
console.log(window.varVariable);  //varVariable
```

### block scope
Javascript에서 Block scope는 3가지 경우에 사용한다.

1. for 문
2. while 문
3. if 문

let은 for문 밖에서 유효히지 않는다.
```
for(let i = 0; i < 10; i++>) {
    console.log(i);
}  //0,1,2,,, 9
console.log(i); //not defined
```

var는 for문 밖에서도 유효하다.
```
for(var i = 0; i < 10; i++>) {
    console.log(i);
}  //0,1,2,,, 9
console.log(i); //10
```

const도 let처럼 block scope이다.

## Redeclaration(재선언)

- var는 재선언 가능.
- let은 재선언 불가.
- const는 재선언 불가.

### 변수 생성과정에서 발생하는 차이점

#### 변수의 생성과정
1. 선언 : 실행컨텍스트의 변수객체에 변수를 등록한다.
2. 초기화 : 변수객체에 등록된 변수에 초기값을 할당한다.
3. 할당 : 초기화가 끝난 변수에 새로운 값을 할당한다.

#### var의 변수 생성 과정
- var는 선언과 동시에 초기화된다.
  (초기값을 할당하지 않았을 경우 undifind가 초기값으로 자동 할당됨)
- 재선언이 가능하다. //var a = 3, var a = 4
- 재할당이 가능하다. //var a = 3, a = 4

#### let의 변수 생성 과정
- let은 선언과 초기화가 따로 이루어진다.
선언 후 초기 값을 할당해주지 않으면 값이 없는 상태가 되며 에러가 발생한다.
- 재선언이 불가능하다.
- 재할당이 가능하다. //var a = 3, a = 4

### const의 변수 생성 과정
- const는 선언한 후에 초기 값을 할당해야한다.(안할 경우 에러 발생)
- 재선언이 불가능하다.
- 재할당이 불가능하다.