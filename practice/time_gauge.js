var IS_OPEN = false;
var base_time = 12;
var d = new Date();
var current_time = d.getHours();
var remain_time;

console.log('기준시간 : ' + base_time + '시');
console.log('현재시간 : ' + current_time + '시');

function openTime() {
  if(IS_OPEN === true){
    //기준시간이거나 지났을 때
    //자정까지 남은시간
    var t = 24 - current_time;
    //총 남은시간
    remain_time = t + base_time;
    console.log(remain_time);
  } else {
    if(current_time < base_time){ //기준시간이 안 지났을 때
      //총 남은시간
      remain_time = base_time - current_time; 
      console.log(remain_time);
    } else { //기준시간이거나 지났을 때
      //자정까지 남은시간
      var t = 24 - current_time;
      //총 남은시간
      remain_time = t + base_time;
      console.log(remain_time);
    }
  }
  var gauge = Math.floor(100 - (remain_time / 24 * 100));
  console.log('게이지 : ' + gauge + '%');
}
openTime();
