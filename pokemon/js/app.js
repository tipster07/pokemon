class Pokemon {
    constructor (name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }
    islucky(){
        let x = Math.random();
        if(x < this.luck){
            return true;
        }else{
            return false;
        }
    }
    attackPokemon(defenseEnnemi) {
        let y = this.attack - defenseEnnemi ;
        return y ;

    }
}
let degatLipoutou = 0;
let degatRayquaza = 0;

let Lipoutou = new Pokemon("Lipoutou", 125, 50, 1020, 0.5);
let Rayquaza = new Pokemon("Rayquaza", 170, 70, 550, 0.3);

while (Lipoutou.hp > 0 && Rayquaza.hp > 0) {

    if (Lipoutou.islucky() === true){
        degatLipoutou = Lipoutou.attackPokemon(Rayquaza.defense);
        Rayquaza.hp = Rayquaza.hp - degatLipoutou;
        console.log(Rayquaza.name + " a subit " + degatLipoutou + " degats");
        console.log("il reste " + Rayquaza.hp + " HP "+ "a " + Rayquaza.name );
    }
    
    if (Rayquaza.islucky() === true){
        degatRayquaza = Rayquaza.attackPokemon(Lipoutou.defense);
        Lipoutou.hp = Lipoutou.hp - degatRayquaza;
        console.log(Lipoutou.name + " a subit " + degatRayquaza + " degats");
        console.log("il reste " + Lipoutou.hp + " HP "+ "a " + Lipoutou.name );
    }
    
}
if (Lipoutou.hp <= 0){
    console.log(Lipoutou.name + " est mort " + Rayquaza.name + " a gagné");

}else{
    console.log(Rayquaza.name + " est mort " + Lipoutou.name + " a gagné");
}
