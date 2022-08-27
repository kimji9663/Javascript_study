/**
 * 문제88, 89 : 지식이의 게임 개발
 * 
 * 지식이는 지도의 크기와 장애물의 위치, 캐릭터의 위치만 입력하면 게임 지형을 완성해 주는 프로그램을 만들고 싶습니다.  
 * 지식이를 위해 게임 지형을 만드는 프로그램을 작성해 주세요.
 * 
    - 가로(n), 세로(m)의 크기가 주어집니다.
    - 지형의 테두리는 벽으로 이루어져 있습니다.
    - 캐릭터가 있는 좌표가 배열 형태로 주어집니다.
    - 장애물이 있는 좌표가 2차원 배열 형태로 주어집니다.

 * 지도는 n x m 크기의 배열이며 배열 안의 값은
   -움직일 수 있는 공간(0)
   -캐릭터(1)
   -벽(2)
   3개로 구분되어 있습니다.
 */

// 입력
// 가로 = 4
// 세로 = 5
// 캐릭터위치 = [0,0]
// 장애물 = [[0,1],[1,1],[2,3],[1,3]]

// make_map(가로, 세로, 캐릭터위치, 장애물)

// 출력
function make_map(가로, 세로, 캐릭터, 장애물, 움직임){
    let world_map = [];
    for(let i = 0; i < 세로 + 2; i++){
      world_map.push(Array(가로 + 2).fill(0));
      //console.log(Array(가로 + 2).fill(0));
    }
    for(let i in world_map){
      for(let j in world_map[0]){
        if(i == 0 || j == 0 || j == world_map[0].length - 1 || i == world_map.length - 1){
          world_map[i][j] = 2;
        }
      }
    }
    
    world_map[캐릭터[0] + 1][캐릭터[1] + 1] = 1;
    //console.log(world_map);
    
    for (let i of 장애물){
      if(world_map[i[0] + 1][i[1] + 1] == 1){
        world_map[i[0] + 1][i[1] + 1] = 1;
      } else {
        world_map[i[0] + 1][i[1] + 1] = 2;
      }
    }
    
    for (let i of world_map){
      console.log(i);
    }
    
    //console.log(움직임);
    let 캐릭터의위치 = [캐릭터[0] + 1, 캐릭터[1] + 1];
    //console.log(캐릭터의위치);
    
    let x = 캐릭터의위치[1];
    let y = 캐릭터의위치[0];
    
    world_map[y][x] = 0;
    
    for(let i of 움직임){ // 상: 1, 하: 2, 좌: 3, 우: 4
      //console.log(i);
      if(i == 1 && world_map[y-1][x] != 2){
        y -= 1;
      } else if(i == 2 && world_map[y+1][x] != 2){
        y += 1;
      } else if(i == 3 && world_map[y][x-1] != 2){
        x -= 1;
      } else if(i == 4 && world_map[y][x+1] != 2){
        x += 1;
      }
    }
    
    world_map[y][x] = 1
      
    console.log(world_map);
    console.log([x, y]);
  }
  
  make_map(5, 4, [0, 0], [[0, 1], [1, 1], [2, 3], [1, 3]], [2,2,2,4,4,4]);
  
  
  