// battle ship
var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// 전함이 가라않지 않은 동안 게이머가 추측한 값 입력
while(isSunk == false){
    guess = prompt("준비, 조준, 발사! (0 ~ 6사이 숫자입력)");

    if (guess < 0 || guess > 6){ //0보다 작거나 6보다 크면,(guess값이 0 ~ 6 사이에 있는지 확인)
        alert("올바른 방 번호를 입력하세요!");
    } else {
        quesses = quesses + 1; //추측한 횟수에 1을 더한다.

        if (guess == location1 || guess == location2 || guess == location3){ //1 또는 2, 3번과 일치하면
            hits = hits + 1; //hit 증가.

            if (hits == 3){
                isSunk = true;
                alert("전함 침몰!");
            }
        }
    }
}