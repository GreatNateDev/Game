function Add(Type, Name, num) {
  if (Type == "HP") {
    if (Name == "Sam") {
      SamsHP += num;
      SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
      if (SamsHP <= 0) {
        SamsHPdisp.innerText = "Phoenix died";
      }
    } else if (Name == "Zack") {
      ZacksHP += num;
      ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
      if (ZacksHP <= 0) {
        ZacksHPdisp.innerText = "Link died";
      }
    }
  } else if (Type == "MP") {
    if (Name == "Sam") {
      SamsMP += num;
      SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP;
    } else if (Name == "Zack") {
      ZacksMP += num;
      ZacksMPdisp.innerText = "Links MP: " + ZacksMP;
    }
  } else if (Type == "Money") {
    if (Name == "All") {
      Money += num;
      Moneydisp.innerText = "Team Money: " + Money;
    }
  } else {
    console.log("error");
  }
}
function hide(Name, Val) {
  if (Name == "Sam") {
    if (Val == 1) {
      SamsHPdisp.style.display = "block";
      SamsMPdisp.style.display = "block";
      SamDamdisp.style.display = "block";
    } else if (Val == 0) {
      SamsHPdisp.style.display = "none";
      SamsMPdisp.style.display = "none";
      SamDamdisp.style.display = "none";
    } else {
      console.log("error");
    }
  } else if (Name == "Zack") {
    if (Val == 1) {
      ZacksHPdisp.style.display = "block";
      ZacksMPdisp.style.display = "block";
      ZackDamdisp.style.display = "block";
    } else if (Val == 0) {
      ZacksHPdisp.style.display = "none";
      ZacksMPdisp.style.display = "none";
      ZackDamdisp.style.display = "none";
    } else {
      console.log("error");
    }
  } else if (Name == "Enemy") {
    if (Val == 1) {
      Enemydisp.style.display = "block";
    } else if (Val == 0) {
      Enemydisp.style.display = "none";
    } else {
      console.log("error");
    }
  } else if (Name == "Enemy2") {
    if (Val == 1) {
      Enemydisp2.style.display = "block";
    } else if (Val == 0) {
      Enemydisp2.style.display = "none";
    } else {
      console.log("error");
    }
  } else if (Name == "Money") {
    if (Val == 1) {
      Moneydisp.style.display = "block";
    } else if (Val == 0) {
      Moneydisp.style.display = "none";
    } else {
      console.log("error");
    }
  } else {
    console.log("error");
  }
}
function spawn(Name, HP, Mon, damage) {
  Enemydisp.innerText =
    "Enemy: " +
    Name +
    "\nEnemy HP: " +
    HP +
    "\nEnemy Ruppees: " +
    Mon +
    "\nEnemy Damage: " +
    damage;
  enemy_damage = damage;
  enemy_HP = HP;
  enemy_MON = Mon;
  if (enemy_HP <= 0) {
    Money += Mon;
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
    Moneydisp.innerText = "Team Ruppees: " + Money;
    kill("Enemy");
    //console.log("You Droped your current loot!")
    //lootdisp.innerText = loot[Math.floor(Math.random() * loot.length)]
  }
}
function spawn2(Name, HP, Mon, damage) {
  Enemydisp2.innerText =
    "Enemy: " +
    Name +
    "\nEnemy HP: " +
    HP +
    "\nEnemy Ruppees: " +
    Mon +
    "\nEnemy Damage: " +
    damage;
  enemy2_damage = damage;
  enemy2_HP = HP;
  enemy2_MON = Mon;
  if (enemy2_HP <= 0) {
    Money += Mon;
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
    Moneydisp.innerText = "Team Ruppees: " + Money;
    kill("Enemy2");
    //console.log("You Droped your current loot!")
    //lootdisp.innerText = loot[Math.floor(Math.random() * loot.length)]
  }
}
function kill(Type) {
  if (Type == "Enemy") {
    Enemydisp.innerText = "There is peace.";
  }
  if (Type == "Enemy2") {
    Enemydisp2.innerText = "There is peace.";
  }
}
function damage(Name, Val) {
  if (Name == "Sam") {
    SamsHP -= Val;
    SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
    if (SamsHP <= 0) {
      SamsHPdisp.innerText = "Phoenix died";
    }
  } else if (Name == "Zack") {
    ZacksHP -= Val;
    ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
    if (ZacksHP <= 0) {
      ZacksHPdisp.innerText = "Link died";
    }
  } else if (Name == "Enemy") {
    enemy_HP -= Val;
    spawn(enemy_name, enemy_HP, enemy_MON, enemy_damage);
  } else if (Name == "Enemy2") {
    enemy2_HP -= Val;
    spawn2(enemy2_name, enemy2_HP, enemy2_MON, enemy2_damage);
  } else {
    console.log("error");
  }
}
function hurt(Name, who) {
  if (Name == "Sam") {
    if (Sams_armor > 0) {
      if (who == "Enemy") {
        Sams_armor -= enemy_damage;
        SamArmordisp.innerText = "Phoenix's Armor: " + Sams_armor;
        if (SamsHP <= 0) {
          SamsHPdisp.innerText = "Phoenix died";
        }
      } else if (who == "Enemy2") {
        Sams_armor -= enemy2_damage;
        SamArmordisp.innerText = "Phoenix's Armor: " + Sams_armor;
        if (SamsHP <= 0) {
          SamsHPdisp.innerText = "Phoenix died";
        }
      }
    } else {
      if (who == "Enemy") {
        SamsHP -= enemy_damage;
        SamsHPdisp.innerText = "Phoenix's HP: " + SamsHP;
        if (SamsHP <= 0) {
          SamsHPdisp.innerText = "Phoenix died";
        }
      } else if (who == "Enemy2") {
        SamsHP -= enemy2_damage;
        SamsHPdisp.innerText = "Phoenix's HP: " + SamsHP;
        if (SamsHP <= 0) {
          SamsHPdisp.innerText = "Phoenix died";
        }
      }
    }
  } else if (Name == "Zack") {
    if (Zacks_armor > 0) {
      if (who == "Enemy") {
        Zacks_armor -= enemy_damage;
        ZackArmordisp.innerText = "Link's Armor: " + Zacks_armor;
        if (ZacksHP <= 0) {
          ZacksHPdisp.innerText = "Link died";
        }
      } else if (who == "Enemy2") {
        Zacks_armor -= enemy2_damage;
        ZackArmordisp.innerText = "Link's Armor: " + Zacks_armor;
        if (ZacksHP <= 0) {
          ZacksHPdisp.innerText = "Link died";
        }
      }
    } else {
      if (who == "Enemy") {
        ZacksHP -= enemy_damage;
        ZacksHPdisp.innerText = "Link's HP: " + ZacksHP;
        if (ZacksHP <= 0) {
          ZacksHPdisp.innerText = "Link died";
        }
      } else if (who == "Enemy2") {
        ZacksHP -= enemy2_damage;
        ZacksHPdisp.innerText = "Link's HP: " + ZacksHP;
        if (ZacksHP <= 0) {
          ZacksHPdisp.innerText = "Link died";
        }
      }
    }
  } else if (Name == "Enemy") {
    if (who == "Sam") {
      enemy_HP -= SamDam;
      spawn(enemy_name, enemy_HP, enemy_MON, enemy_damage);
    } else if (who == "Zack") {
      enemy_HP -= ZackDam;
      spawn(enemy_name, enemy_HP, enemy_MON, enemy_damage);
    }
  } else if (Name == "Enemy2") {
    if (who == "Sam") {
      enemy2_HP -= SamDam;
      spawn2(enemy2_name, enemy2_HP, enemy2_MON, enemy2_damage);
    } else if (who == "Zack") {
      enemy2_HP -= ZackDam;
      spawn2(enemy2_name, enemy2_HP, enemy2_MON, enemy2_damage);
    }
  }
}
function power(Name, num) {
  if (Name == "Sam") {
    SamsMP -= 10;
    SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP;
    if (num == 1) {
      damage("Enemy", 20);
    } else {
      damage("Enemy2", 20);
    }
  } else if (Name == "Zack") {
    ZacksMP -= 10;
    ZacksMPdisp.innerText = "Links MP: " + ZacksMP;
    if (num == 1) {
      damage("Enemy", 20);
    } else {
      damage("Enemy2", 20);
    }
  } else if (Name == "Enemy" || Name == "Enemy2") {
    if (num == 1) {
      damage("Sam", 20);
    } else {
      damage("Zack", 20);
    }
  } else {
    console.log("error");
  }
}
function armor(Name, armor) {
  let red = 20;
  let blue = 10;
  let green = 5;
  if (Name == "Sam") {
    if (armor == "red") {
      Sams_armor += red;
      SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
    } else if (armor == "blue") {
      Sams_armor += blue;
      SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
    } else if (armor == "green") {
      Sams_armor += green;
      SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
    }
  } else if (Name == "Zack") {
    if (armor == "red") {
      Zacks_armor += red;
      ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
    } else if (armor == "blue") {
      Zacks_armor += blue;
      ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
    } else if (armor == "green") {
      Zacks_armor += green;
      ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
    }
  }
}
//TODO ADD PRESETS 
function revive(Name) {
  if (Name == "Sam") {
    SamsHP = 100;
    SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
  } else if (Name == "Zack") {
    ZacksHP = 100;
    ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
  }
}
const Moneydisp = document.getElementById("Money");
const SamsHPdisp = document.getElementById("Sams_hp");
const ZacksHPdisp = document.getElementById("Zacks_hp");
const SamsMPdisp = document.getElementById("Sams_mp");
const ZacksMPdisp = document.getElementById("Zacks_mp");
const Enemydisp = document.getElementById("Enemy");
const Enemydisp2 = document.getElementById("Enemy2");
const SamDamdisp = document.getElementById("SamDam");
const ZackDamdisp = document.getElementById("ZackDam");
const ZackArmordisp = document.getElementById("Zacks_armor");
const SamArmordisp = document.getElementById("Sams_armor");
let ZacksHP = 100; //HP is health
let default_Dam = 10; //Dam is damage but this one is the default
let ZackDam = 10; //Dam is damage
let SamDam = 10; //Dam is damage
let SamsHP = 100; //HP is health and is taken every hit
let SamsMP = 100; //MP is mana and is 10 per spell
let ZacksMP = 100; //MP is mana and is 10 per spell
let Sams_armor = 0; //Armor
let Zacks_armor = 0; //Armor
let Money = 50; //Money
let enemy_damage = 0; //Dam is damage
let enemy_HP = 0; //HP is health
let enemy_MON = 0; //Ruppees
let enemy2_MON = 0; //Ruppees
let enemy2_HP = 0; //HP is health
let enemy2_damage = 0; //Dam is damage
let enemy_name = "None";
let enemy2_name = "None";
SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP;
ZacksMPdisp.innerText = "Links MP: " + ZacksMP;
ZackDamdisp.innerText = "Links Damage: " + ZackDam;
SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
Moneydisp.innerText = "Team Ruppees: " + Money;
SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
Enemydisp.innerText = "There is peace.";
Enemydisp2.innerText = "There is peace.";
