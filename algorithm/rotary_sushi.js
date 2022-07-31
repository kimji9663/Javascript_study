// 86. 회전 초밥

/*
1. 초밥은 놓여진 위치에서 옮겨지지 않습니다.
2. 지나간 초밥은 나머지 초밥이 지나간 후에 다시 돌아옵니다.
3. 초밥은 1개 이상 존재합니다.
*/

const point = [1, 1, 3, 2, 5];
const dish = 3;

function solution(point, dish){
    let answer = 0;
    dish -= 1;

    let s = point.slice(); // 최소값인지 알기위해 정렬된 배열 생성
    //console.log(s);
    s.sort((a, b) => { // 오름차순으로 정렬
        return a-b;
    })
    //console.log(s);

    while(true){
        let p = point.shift(); // 맨 앞에 있는 접시

        if(s[0] === p){
            if(dish === 0){ // 내가 원하는 접시가 0번째에 와있다면
                break;
            }
            dish -= 1;
            s.shift();
        } else { // 내가 원하는 접시가 아니라면
            point.push(p); // 맨 앞에 있는 접시를 맨 뒤로
            if (dish === 0){ // 내가 원하는 접시가 0번째에 와있다면
                dish = point.length - 1;
            } else {
                dish -= 1;
            }
        }
    }
    return answer;
}