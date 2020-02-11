# 화살표 함수

## 화살표 함수의 선언
화살표 함수(Arrow function)는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략한 방법으로 함수를 선언할 수 있다.

```
// 매개변수 지정 방법
    () => { ... } // 매개변수가 없을 경우
     x => { ... } // 매개변수가 한 개인 경우, 소괄호를 생략할 수 있다.
    (x, y) => { ... } // 매개변수가 여러 개인 경우, 소괄호를 생략할 수 없다.
```
```
// 함수 몸체 지정 방법
x => { return x * x }  // single line block
x => x * x             // 함수 몸체가 한줄의 구문이라면 중괄호를 생략할 수 있으며 암묵적으로 return된다. 위 표현과 동일하다.

() => { return { a: 1 }; }
() => ({ a: 1 })  // 위 표현과 동일하다. 객체 반환시 소괄호를 사용한다.

() => {           // multi line block.
  const x = 10;
  return x * x;
};
```

## 화살표 함수의 호출
화살표 함수는 익명 함수로만 사용할 수 있다. 따라서 화살표 함수를 호출하기 위해서는 함수 표현식을 사용한다.
```
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)); // 100
```
```
// ES6
const pow = x => x * x;
console.log(pow(10)); // 100
```
또는 콜백 함수로 사용할 수 있다. 이 경우 일반적인 함수 표현식보다 표현이 간결하다.
```
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]
```
```
// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

## this
function 키워드로 생성한 일반 함수와 화살표 함수의 가장 큰 차이점은 this이다.
화살표 함수의 this 언제나 상위 스코프의 this를 가리킨다. 
```
//일반 함수
const o = {
    name: 'javascript',
    m: function () {
        console.log('m함수 호출==============');
        console.log('this.name은?', this.name);		// javascript 출력
        console.log('this는 객체 o? ', this === o);	// true 출력
        console.log('this는 전역객체? ', this === global)	// false 출력
        function foo() {
            console.log('foo함수 호출==============');
            console.log('this.name은?', this.name);	// undefined 출력
            console.log('this는 객체 o? ', this === o);	// false 출력
            console.log('this는 전역객체? ', this === global)	// true 출력
        }
        foo(); // 함수 형태로 호출
    }
};
o.m();	// 메서드의 형태로 호출
const f = o.m;
f();	// 이런 방식으로 호출된다면?
```
```
//화살표 함수
const o = {
    name: 'javascript',
    m: function () {
        console.log('m함수 호출==============');
        console.log('this.name은?', this.name);			  // javascript 출력
        console.log('this는 객체 o? ', this === o);	  	// true 출력
        console.log('this는 전역객체? ', this === global)	// false 출력
        const foo = () => { // 화살표 함수 사용
            console.log('foo함수 호출==============');
            console.log('this.name은?', this.name);		  // javascript 출력
            console.log('this는 객체 o? ', this === o);  	// true 출력
            console.log('this는 전역객체? ', this === global)	// false 출력
        }
        foo();
    }
};
o.m();
```

## 화살표 함수를 사용해서는 안되는 경우
1. 화살표 함수로 메소드를 정의하지 않아야한다.
2. 생성자 함수로 사용할 수 없다.
3. arguments 변수를 사용할 수 없고, 대신 args를 사용한다.

