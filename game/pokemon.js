class Pokemon{
    constructor(name, level){
      this.name = name;
      this.level = level;
    }
    speak(){
      console.log(`${this.name}! 나와랏!!`);
    }
  }
  
  const charizard = new Pokemon("리자몽", 45);
  const pikachu = new Pokemon("피카츄", 32);
  
  // 리자몽 소환!!
  //charizard.speak();
  //console.log(charizard.name + ": Lv." + charizard.level);
  
  // 피카츄 소환!!
  pikachu.speak();
  console.log(pikachu.name + ": Lv." + pikachu.level);
  
  const Attack = class Attack{
    constructor(name, health, mana, armor){
      this.name = name;
      this.health = health;
      this.mana = mana;
      this.armor = armor;
    }
  }
  // 리자몽의 기술
  const FireAttack = new Attack('화염방사', 70, 1);
  const WingAttack = new Attack('날개치기', 60, 1);
  
  // 피카츄의 기술
  const ElecAttack = new Attack('10만볼트', 80, 1);
  const Punchttack = new Attack('메가톤펀치', 100, 1);
  
  // console.log(
  // `${charizard.name}의 ${FireAttack.name}!! 
  // 상대방은 ${FireAttack.health}의 피해를 입었다. 
  // ${charizard.name}은 -${FireAttack.mana}의 마나가 소모되었다.`
  // );
  
  console.log(
  `${pikachu.name}의 ${ElecAttack.name}!! 
  상대방은 ${ElecAttack.health}의 피해를 입었다. 
  ${pikachu.name}은 -${ElecAttack.mana}의 마나가 소모되었다.`
  );