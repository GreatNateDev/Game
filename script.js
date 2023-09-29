function Add(Type,Name,num) {
    if (Type == "HP") {
        if (Name == "Sam") {
            SamsHP += num
            SamsHPdisp.innerText = "Phoenixs HP: "+SamsHP
            if (SamsHP <= 0 ) {
                SamsHPdisp.innerText = "Phoenix died"
            }
        }
        else if (Name == "Zack") {
            ZacksHP += num 
            ZacksHPdisp.innerText = "Links HP: "+ZacksHP
            if (ZacksHP <= 0) {
                ZacksHPdisp.innerText = "Link died"
            }
        }
    else if (Type == "MP") {
        if (Name == "Sam") {
            SamsMP += num
            SamsMPdisp.innerText = "Phoenixs MP: "+SamsMP
        }
        else if (Name == "Zack") {
            ZacksMP += num
            ZacksMPdisp.innerText = "Links MP: "+ZacksMP
        }
    else if (Type == "Money") {
        if (Name == "All") {
            Money += num
            Moneydisp.innerText = "Team Money: "+Money
        }
    }
    else {
        console.log("error")
    }
    }
    }
    }
function hide(Name,Val) {
    if (Name == "Sam") {
        if (Val == 1) {
            SamsHPdisp.style.display = "block"
            SamsMPdisp.style.display = "block"
            SamDamdisp.style.display = "block"
        }
        else if (Val == 0) {
            SamsHPdisp.style.display = "none"
            SamsMPdisp.style.display = "none"
            SamDamdisp.style.display = "none"
        }
        else {
            console.log("error")
        }
    }
    else if (Name == "Zack") {
        if (Val == 1) {
            ZacksHPdisp.style.display = "block"
            ZacksMPdisp.style.display = "block"
            ZackDamdisp.style.display = "block"
        }
        else if (Val == 0) {
            ZacksHPdisp.style.display = "none"
            ZacksMPdisp.style.display = "none"
            ZackDamdisp.style.display = "none"
        }
        else {
            console.log("error")
        }
    
}
else if (Name == "loot") {
        if (Val == 1) {
            lootdisp.style.display = "block"
            bankdisp.style.display = "block"
            banktextdisp.style.display = "block"
        }
        else if (Val == 0) {
            lootdisp.style.display = "none"
            bankdisp.style.display = "none"
            banktextdisp.style.display = "none"
        }
        else {
            console.log("error")
        }
}
else if (Name == "enemy") {
    if (Val == 1) {
        Enemydisp.style.display = "block"
    }
    else if (Val == 0) {
        Enemydisp.style.display = "none"
    }
    else {
        console.log("error")
    }

}
else if (Name == "Money") {
    if (Val == 1) {
        Moneydisp.style.display = "block"
    }
    else if (Val == 0) {
        Moneydisp.style.display = "none"
    }
    else {
        console.log("error")
    }
}
    else {
        console.log("error")
    }
}
function spawn(Type,HP,Mon,damage) {
    if (Type == "enemy") {
        
        Enemydisp.innerText = "Enemy:\nEnemy HP: "+HP+"\nEnemy Ruppees: "+Mon+"\nEnemy Damage: "+damage
        enemy_damage = damage
        enemy_HP = HP
        enemy_MON = Mon
        if (enemy_HP <= 0) {
            Money += Mon
            SamDam = default_Dam
            ZackDam = default_Dam
            ZackDamdisp.innerText = "Links Damage: " + ZackDam
            SamDamdisp.innerText = "Phoenixs Damage: " + SamDam
            Moneydisp.innerText = "Team Ruppees: " + Money
            kill("enemy")
            console.log("You Droped your current loot!")
            lootdisp.innerText = loot[Math.floor(Math.random() * loot.length)]
        }
    }
    else {
        console.log("error")
    }
}
function kill(Type) {
    if (Type == "enemy") {
        Enemydisp.innerText = "Enemy: None"
    }
}
function damage(Name,Val) {
    if (Name == "Sam") {
        SamsHP -= Val
        SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP
        if (SamsHP <= 0) {
            SamsHPdisp.innerText = "Phoenix died"
        }
    }
    else if (Name == "Zack") {
        ZacksHP -= Val
        ZacksHPdisp.innerText = "Links HP: " + ZacksHP
        if (ZacksHP <= 0) {
            ZacksHPdisp.innerText = "Link died"
        }
    }
    else {
        console.log("error")
    }
}
function edit(Type,text) {
    if (Type == "bank") {
        bankdisp.innerText = text
    }
    else if (Type == "loot") {
        lootdisp.innerText = text
    }
    else {
        console.log("error")
    }
}
function hurt(Name,who) {
    if (Name == "Sam") {
        SamsHP -= enemy_damage
        SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP
    }
    else if (Name == "Zack") {
        ZacksHP -= enemy_damage
        ZacksHPdisp.innerText = "Links HP: " + ZacksHP
    }
    else if (Name == "Enemy") {
        if (who == "Zack") {
            enemy_HP -= ZackDam
            spawn("enemy",enemy_HP,enemy_MON,enemy_damage)
        }
        else if (who == "Sam") {
            enemy_HP -= SamDam
            spawn("enemy",enemy_HP,enemy_MON,enemy_damage)
        }
    }
}
const Moneydisp = document.getElementById("Money")
const SamsHPdisp = document.getElementById("Sams_hp")
const ZacksHPdisp = document.getElementById("Zacks_hp")
const SamsMPdisp = document.getElementById("Sams_mp")
const ZacksMPdisp = document.getElementById("Zacks_mp")
const Enemydisp = document.getElementById("Enemy")
const lootdisp = document.getElementById("loot")
const bankdisp = document.getElementById("bank_div")
const banktextdisp = document.getElementById("Bank_text")
const SamDamdisp = document.getElementById("SamDam")
const ZackDamdisp = document.getElementById("ZackDam")
let ZacksHP = 100
let default_Dam = 10
let ZackDam = 10
let SamDam = 10
let SamsHP = 100
let SamsMP = 100
let ZacksMP = 100
let Money = 50
let enemy_damage = 0
let enemy_HP = 0
let enemy_MON = 0
const loot = [
    "Green tunic,",
    "Guts,",
    "Guts, ",
    "Guts,",
    "Horn,",
    "Horn,",
    "Horn,",
    "Horn,",
    "Guts,",
    "Red tunic",
    "Blue tunic",
]

SamsHPdisp.innerText = "Phoenixs HP: " + SamsHP
ZacksHPdisp.innerText = "Links HP: " + ZacksHP
SamsMPdisp.innerText = "Phoenixs MP: " + SamsMP
ZacksMPdisp.innerText = "Links MP: " + ZacksMP
ZackDamdisp.innerText = "Links Damage: " + ZackDam
SamDamdisp.innerText = "Phoenixs Damage: " + SamDam
Moneydisp.innerText = "Team Ruppees: " + Money
Enemydisp.innerText = "Enemy: None"
lootdisp.innerText = "Loot: None"
bankdisp.innerHTML = "Nothing in the bank"