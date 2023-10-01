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
    } else if (Name == "Nate") {
      NatesHP += num;
      NatesHPdisp.innerText = "Nate HP: " + NatesHP;
      if (NatesHP <= 0) {
        NatesHPdisp.innerText = "Nate died";
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
    console.log(x);
  }
}
function hide(Name, Val) {
  if (Name == "Sam") {
    if (Val == 1) {
      SamsHPdisp.style.display = "block";
      SamsMPdisp.style.display = "block";
      SamDamdisp.style.display = "block";
      SamArmordisp.style.display = "block";
    } else if (Val == 0) {
      SamsHPdisp.style.display = "none";
      SamsMPdisp.style.display = "none";
      SamDamdisp.style.display = "none";
      SamArmordisp.style.display = "none";
    } else {
      console.log(x);
    }
  } else if (Name == "Zack") {
    if (Val == 1) {
      ZacksHPdisp.style.display = "block";
      ZacksMPdisp.style.display = "block";
      ZackDamdisp.style.display = "block";
      ZackArmordisp.style.display = "block";
    } else if (Val == 0) {
      ZacksHPdisp.style.display = "none";
      ZacksMPdisp.style.display = "none";
      ZackDamdisp.style.display = "none";
      ZackArmordisp.style.display = "none";
    } else {
      console.log(x);
    }
  } else if (Name == "Enemy") {
    if (Val == 1) {
      Enemydisp.style.display = "block";
    } else if (Val == 0) {
      Enemydisp.style.display = "none";
    } else {
      console.log(x);
    }
  } else if (Name == "Enemy2") {
    if (Val == 1) {
      Enemydisp2.style.display = "block";
    } else if (Val == 0) {
      Enemydisp2.style.display = "none";
    } else {
      console.log(x);
    }
  } else if (Name == "Money") {
    if (Val == 1) {
      Moneydisp.style.display = "block";
    } else if (Val == 0) {
      Moneydisp.style.display = "none";
    } else {
      console.log(x);
    }
  } else {
    console.log(x);
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
  enemy_name = Name;
  if (enemy_HP <= 0) {
    Money += Mon;
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
    Moneydisp.innerText = "Team Ruppees: " + Money;
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
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
  enemy2_name = Name;
  if (enemy2_HP <= 0) {
    Money += Mon;
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
    Moneydisp.innerText = "Team Ruppees: " + Money;
    kill("Enemy2");
    SamDam = default_Dam;
    ZackDam = default_Dam;
    ZackDamdisp.innerText = "Links Damage: " + ZackDam;
    SamDamdisp.innerText = "Phoenixs Damage: " + SamDam;
    //console.log("You Droped your current loot!")
    //lootdisp.innerText = loot[Math.floor(Math.random() * loot.length)]
  }
}
function kill(Type) {
  if (
    Enemydisp.innerText == "There is peace." &&
    Enemydisp2.innerText == "There is peace."
  ) {
    SamDam = default_Dam;
    ZackDam = default_Dam;
  }
  if (Type == "Enemy") {
    Enemydisp.innerText = "There is peace.";
    loote = lootr();
    if (loote == "red") {
      armor("Sam", "red");
      armor("Zack", "red");
      console.log("red");
    } else if (loote == "blue") {
      armor("Sam", "blue");
      armor("Zack", "blue");
      console.log("blue");
    } else if (loote == "green") {
      armor("Sam", "green");
      armor("Zack", "green");
      console.log("green");
    } else if (loote == "buff") {
      buff("Sam");
      buff("Zack");
      console.log("buff");
    } else if (loote == "revive") {
      revive("Sam");
      revive("Zack");
      console.log("revive");
    } else if (loote == "refill") {
      Add("HP", "Sam", 10);
      Add("HP", "Zack", 10);
      Add("MP", "Sam", 10);
      Add("MP", "Zack", 10);
      console.log("refilled");
    }
  }
  if (Type == "Enemy2") {
    Enemydisp2.innerText = "There is peace.";
    loote = lootr();
    if (loote == "red") {
      armor("Sam", "red");
      armor("Zack", "red");
      console.log("red");
    } else if (loote == "blue") {
      armor("Sam", "blue");
      armor("Zack", "blue");
      console.log("blue");
    } else if (loote == "green") {
      armor("Sam", "green");
      armor("Zack", "green");
      console.log("green");
    } else if (loote == "buff") {
      buff("Sam");
      buff("Zack");
      console.log("buff");
    } else if (loote == "revive") {
      revive("Sam");
      revive("Zack");
      console.log("revive");
    } else if (loote == "refill") {
      Add("HP", "Sam", 10);
      Add("HP", "Zack", 10);
      Add("MP", "Sam", 10);
      Add("MP", "Zack", 10);
      console.log("refill");
    }
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
    console.log(x);
  }
}
function hurt(Name, who) {
  let blocko = block();
  if (Name == "Sam") {
    if (blocko == 1) {
      console.log("blocked");
      return 1;
    } else if (blocko == 0) {
      if (who == "Enemy") {
        if (Sams_armor > 0) {
          Sams_armor -= enemy_damage;
          SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
          if (Sams_armor <= 0) {
            SamsHP += Sams_armor;
            SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
            Sams_armor = 0;
            SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
            if (SamsHP <= 0) {
              dead("Sam");
            }
          } else {
            return 0;
          }
        } else {
          SamsHP -= enemy_damage;
          SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
          if (SamsHP <= 0) {
            dead("Sam");
          }
        }
      } else if (who == "Enemy2") {
        if (Sams_armor > 0) {
          Sams_armor -= enemy_damage;
          SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
          if (Sams_armor <= 0) {
            SamsHP += Sams_armor;
            SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
            Sams_armor = 0;
            SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
            if (SamsHP <= 0) {
              dead("Sam");
            }
          } else {
            return 0;
          }
        } else {
          SamsHP -= enemy_damage;
          SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
          if (SamsHP <= 0) {
            dead("Sam");
          }
        }
      }
    }
  } else if (Name == "Zack") {
    if (blocko == 1) {
      console.log("blocked");
      return 1;
    } else if (blocko == 0) {
      if (who == "Enemy") {
        if (Zacks_armor > 0) {
          Zacks_armor -= enemy_damage;
          ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
          if (Zacks_armor <= 0) {
            ZacksHP += Zacks_armor;
            ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
            Zacks_armor = 0;
            ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
            if (ZacksHP <= 0) {
              dead("Zack");
            }
          } else {
            return 0;
          }
        } else {
          ZacksHP -= enemy_damage;
          ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
          if (ZacksHP <= 0) {
            dead("Zack");
          }
        }
      } else if (who == "Enemy2") {
        if (Zacks_armor > 0) {
          Zacks_armor -= enemy_damage;
          ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
          if (Zacks_armor <= 0) {
            ZacksHP += Zacks_armor;
            ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
            Zacks_armor = 0;
            ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
            if (ZacksHP <= 0) {
              dead("Zack");
            }
          } else {
            return 0;
          }
        } else {
          ZacksHP -= enemy_damage;
          ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
          if (ZacksHP <= 0) {
            dead("Zack");
          }
        }
      }
    }
  } else if (Name == "Enemy") {
    if (blocko == 1) {
      console.log("blocked");
      return 1;
    } else if (blocko == 0) {
      if (who == "Sam") {
        enemy_HP -= SamDam;
        spawn(enemy_name, enemy_HP, enemy_MON, enemy_damage);
        if (enemy_HP <= 0) {
          kill("Enemy");
        }
      } else if (who == "Zack") {
        enemy_HP -= ZackDam;
        spawn(enemy_name, enemy_HP, enemy_MON, enemy_damage);
        if (Enemy_HP <= 0) {
          kill("Enemy");
        }
      }
    }
  } else if (Name == "Enemy2") {
    if (blocko == 1) {
      console.log("blocked");
      return 1;
    } else if (blocko == 0) {
      if (who == "Sam") {
        enemy2_HP -= SamDam;
        spawn2(enemy2_name, enemy2_HP, enemy2_MON, enemy2_damage);
        if (Enemy2_HP <= 0) {
          kill("Enemy2");
        }
      } else if (who == "Zack") {
        enemy2_HP -= ZackDam;
        spawn2(enemy2_name, enemy2_HP, enemy2_MON, enemy2_damage);
        if (Enemy2_HP <= 0) {
          kill("Enemy2");
        }
      }
    }
  }
}
function dead(Name) {
  if (Name == "Sam") {
    SamsHP = 0;
    SamsHPdisp.innerText = "Phoenix died!";
  } else if (Name == "Zack") {
    ZacksHP = 0;
    ZacksHPdisp.innerText = "Link died!";
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
  } else if (Name == "Enemy") {
    if (num == 1) {
      if (Sams_armor > 0) {
        Sams_armor -= enemy_damage * 1.5;
        SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
      } else {
        SamsHP -= enemy_damage * 1.5;
        SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
      }
    } else if (num == 2) {
      if (Zacks_armor > 0) {
        Zacks_armor -= enemy_damage * 1.5;
        ZackArmordisp.innerText = "Link's Armor: " + Zacks_armor;
      } else {
        ZacksHP -= enemy_damage * 1.5;
        ZacksHPdisp.innerText = "Link's HP: " + ZacksHP;
      }
    }
  } else if (Name == "Enemy2") {
    if (num == 1) {
      if (Sams_armor > 0) {
        Sams_armor -= enemy2_damage * 1.5;
        SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
      } else {
        SamsHP -= enemy2_damage * 1.5;
        SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
      }
    } else if (num == 2) {
      if (Zacks_armor > 0) {
        Zacks_armor -= enemy2_damage * 1.5;
        ZackArmordisp.innerText = "Link's Armor: " + Zacks_armor;
      } else {
        ZacksHP -= enemy2_damage * 1.5;
        ZacksHPdisp.innerText = "Link's HP: " + ZacksHP;
      }
    }
  } else {
    console.log(x);
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
function pre(Number) {
  if (Number == "boko1") {
    spawn("bokoblin", 30, 10, 10);
  } else if (Number == "boko2") {
    spawn2("bokoblin", 30, 10, 10);
  } else if (Number == "like1") {
    spawn("like like", 30, 10, 10);
  } else if (Number == "like2") {
    spawn2("like like", 30, 10, 10);
  } else if (Number == "moblin1") {
    spawn("moblin", 50, 10, 15);
  } else if (Number == "moblin2") {
    spawn2("moblin", 50, 10, 15);
  } else if (Number == "chuchu1") {
    spawn("chuchu", 5, 10, 5);
  } else if (Number == "chuchu2") {
    spawn2("chuchu", 5, 10, 5);
  } else if (Number == "redead1") {
    spawn("redead", 60, 100, 15);
  } else if (Number == "redead2") {
    spawn2("redead", 60, 100, 15);
  } else if (Number == "gibdo1") {
    spawn("gibdo", 65, 100, 15);
  } else if (Number == "gibdo2") {
    spawn2("gibdo", 65, 100, 15);
  } else if (Number == "lizalfo1") {
    spawn("lizalfo", 40, 30, 10);
  } else if (Number == "lizalfo2") {
    spawn2("lizalfo", 40, 30, 10);
  } else if (Number == "firechuchu1") {
    spawn("fire chuchu", 10, 10, 10);
  } else if (Number == "firechuchu2") {
    spawn2("fire chuchu", 10, 10, 10);
  } else if (Number == "elecchuchu1") {
    spawn("electric chuchu", 10, 10, 15);
  } else if (Number == "elecchuchu2") {
    spawn2("electric chuchu", 10, 10, 15);
  } else if (Number == "icechuchu1") {
    spawn("ice chuchu", 10, 10, 15);
  } else if (Number == "icechuchu2") {
    spawn2("ice chuchu", 10, 10, 15);
  } else if (Number == "keese1") {
    spawn("keese", 5, 5, 5);
  } else if (Number == "keese2") {
    spawn2("keese", 5, 5, 5);
  } else if (Number == "dodongo1") {
    spawn("dodongo", 20, 30, 10);
  } else if (Number == "dodongo2") {
    spawn2("dodongo", 20, 30, 10);
  }
}
function revive(Name) {
  if (Name == "Sam") {
    if (SamsHP <= 0) {
      SamsHP = 100;
      SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP;
    }
  } else if (Name == "Zack") {
    if (ZacksHP <= 0) {
      ZacksHP = 100;
      ZacksHPdisp.innerText = "Links HP: " + ZacksHP;
    }
  }
}
function boss(Name) {
  if (Name == "moldorm1") {
    spawn("moldorm", 250, 300, 20);
  } else if (Name == "moldorm2") {
    spawn2("moldorm", 250, 300, 20);
  } else if (Name == "shadow1") {
    spawn("shadow link", 100, 50, 10);
  } else if (Name == "shadow2") {
    spawn2("shadow link", 100, 50, 10);
  } else if (Name == "shadowp1") {
    spawn("shadow phoenix", 100, 50, 10);
  } else if (Name == "shadowp2") {
    spawn2("shadow phoenix", 100, 50, 10);
  } else if (Name == "kingd1") {
    spawn("king dodongo", 300, 500, 30);
  } else if (Name == "kingd2") {
    spawn2("king dodongo", 300, 500, 30);
  } else if (Name == "gohma1") {
    spawn("gohma", 200, 100, 15);
  } else if (Name == "gohma2") {
    spawn2("gohma", 200, 100, 15);
  } else if (Name == "bchu1") {
    spawn("big chu chu", 200, 100, 5);
  } else if (Name == "bchu2") {
    spawn2("big chu chu", 200, 100, 5);
  } else if (Name == "ganon1") {
    spawn("ganon", 500, 1000, 50);
  } else if (Name == "ganon2") {
    spawn2("ganon", 500, 1000, 50);
  }
}
function buff(Name) {
  if (Name == "Sam") {
    if ((SamsHP <= 10 && enemy2_HP <= 1) || enemy_HP <= 1) {
      SamDam += 5;
      SamDam *= 1.5;
      SamDamdisp.innerText = "Phoenixs Dam: " + SamDam;
      return;
    } else if (enemy2_HP <= 1 || enemy_HP <= 1) {
      {
        SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP;
        SamDam += 5;
        SamDamdisp.innerText = "Phoenixs Dam: " + SamDam;
      }
    } else if (Name == "Zack") {
      if ((ZacksHP <= 10 && enemy2_HP <= 1) || enemy_HP <= 1) {
        ZackDam += 5;
        ZackDam *= 1.5;
        ZackDamdisp.innerText = "Links Dam: " + ZackDam;
      } else if (enemy2_HP <= 1 || enemy_HP <= 1) {
        ZacksMPdisp.innerText = "Links MP: " + ZacksMP;
        ZackDam += 5;
        ZackDamdisp.innerText = "Links Dam: " + ZackDam;
      }
    }
  }
}
function lootr() {
  randloot = loot[Math.floor(Math.random() * loot.length)];
  return randloot;
}
function block() {
  blocked = blocke[Math.floor(Math.random() * blocke.length)];
  return blocked;
}
function resetarmor(Name) {
  if (Name == "Sam") {
    Sams_armor = 0;
    SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor;
  } else if (Name == "Zack") {
    Zacks_armor = 0;
    ZackArmordisp.innerText = "Links Armor: " + Zacks_armor;
  } else {
    console.log(x);
  }
}
function shop(Item) {
  if (Item == "red" && Money >= 100) {
    Money -= 100;
    Moneydisp.innerText = "Money: " + Money;
    armor("Sam", "red");
    armor("Zack", "red");
    armor("Nate", "red");
  } else if (Item == "blue" && Money >= 50) {
    Money -= 50;
    Moneydisp.innerText = "Money: " + Money;
    armor("Sam", "blue");
    armor("Zack", "blue");
    armor("Nate", "blue");
  } else if (Item == "green" && Money >= 20) {
    Money -= 20;
    Moneydisp.innerText = "Money: " + Money;
    armor("Sam", "green");
    armor("Zack", "green");
    armor("Nate", "green");
  } else if (Item == "refill" && Money >= 100) {
    Money -= 100;
    Moneydisp.innerText = "Money: " + Money;
    Add("HP", "Sam", 10);
    Add("HP", "Zack", 10);
    Add("MP", "Sam", 10);
    Add("MP", "Zack", 10);
    console.log("refilled");
  } else if (Item == "PERM_DMG_BOOST" && Money >= 1000) {
    Money -= 1000;
    Moneydisp.innerText = "Money: " + Money;
    default_Dam += 5;
  } else if (Item == "list") {
    console.log(
      "red:100,green:20,blue:50,refill:100,PERM_DMG_BOOST:1000,buff:200"
    );
  } else if (Item == "buff" && Money >= 200) {
    Money -= 200;
    Moneydisp.innerText = "Money: " + Money;
    buff("Sam");
    buff("Zack");
    buff("Nate");
  } else {
    console.log(x);
  }
}
//TODO finish adding Nate
//TODO make levels
//TODO make upgrades for the levels
const Moneydisp = document.getElementById("Money"); //Get the Money
const NatesHPdisp = document.getElementById("Nates_hp"); //Get the HP
const SamsHPdisp = document.getElementById("Sams_hp"); //Get the HP
const ZacksHPdisp = document.getElementById("Zacks_hp"); //Get the HP
const NatesMPdisp = document.getElementById("Nates_mp"); //Get the MP
const SamsMPdisp = document.getElementById("Sams_mp"); //Get the MP
const ZacksMPdisp = document.getElementById("Zacks_mp"); //Get the MP
const Enemydisp = document.getElementById("Enemy"); //Get the Enemy
const Enemydisp2 = document.getElementById("Enemy2"); //Get the Enemy
const NateDamdisp = document.getElementById("NateDam"); //Get the Dam
const SamDamdisp = document.getElementById("SamDam"); //Get the Dam
const ZackDamdisp = document.getElementById("ZackDam"); //Get the Dam
const NateArmordisp = document.getElementById("Nates_armor"); //Get the Armor
const ZackArmordisp = document.getElementById("Zacks_armor"); //Get the Armor
const SamArmordisp = document.getElementById("Sams_armor"); //Get the Armor
const loot = ["red", "blue", "green", "buff", "revive", "refill"]; //Get the loot
const blocke = [0, 0, 0, 0, 0, 0, 0, 1, 1, 1];
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
let enemy_name = "None"; //Name
let enemy2_name = "None"; //Name
let NateDam = 10; //Dam is damage
let NatesHP = 100; //HP is health
let NatesMP = 100; //MP is mana
let Nates_armor = 0; //Armor
let x = "❌";
NatesHPdisp.innerText = "Nate HP: " + NatesHP; //HP is health
SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP; //HP is health
ZacksHPdisp.innerText = "Links HP: " + ZacksHP; //HP is health
NatesMPdisp.innerText = "Nate MP: " + NatesMP; //MP is mana
SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP; //MP is mana
ZacksMPdisp.innerText = "Links MP: " + ZacksMP; //MP is mana
NateDamdisp.innerText = "Nate Damage: " + NateDam; //Dam is damage
ZackDamdisp.innerText = "Links Damage: " + ZackDam; //Dam is damage
SamDamdisp.innerText = "Phoenixs Damage: " + SamDam; //Dam is damage
Moneydisp.innerText = "Team Ruppees: " + Money; //Money
NateArmordisp.innerText = "Nates Armor: " + Nates_armor; //Armor
SamArmordisp.innerText = "Phoenixs Armor: " + Sams_armor; //Armor
ZackArmordisp.innerText = "Links Armor: " + Zacks_armor; //Armor
Enemydisp.innerText = "There is peace."; //Enemy
Enemydisp2.innerText = "There is peace."; //Enemy
//Console copy and pasted from some yt vid so that mobile users can use this site
const consoleInput = document.querySelector(".console-input");

function addResult(inputAsString, output) {
  const outputAsString =
    output instanceof Array ? `[${output.join(", ")}]` : output.toString();
  const inputLogElement = document.createElement("div");
  const outputLogElement = document.createElement("div");

  inputLogElement.classList.add("console-input-log");
  outputLogElement.classList.add("console-output-log");

  inputLogElement.textContent = `> ${inputAsString}`;
  outputLogElement.textContent = outputAsString;
}

consoleInput.addEventListener("keyup", (e) => {
  const code = consoleInput.value.trim();

  if (code.length === 0) {
    return;
  }

  if (e.key === "Enter") {
    try {
      addResult(code, eval(code));
    } catch (err) {
      addResult(code, err);
    }

    consoleInput.value = "";
  }
});
//764
