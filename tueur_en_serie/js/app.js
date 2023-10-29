class perso{
    constructor(prenom, chanceMort, chanceDegat, chanceDegatMort){
        this.prenom = prenom;
        this.caracteristique = caracteristique;
        this.chanceMort = chanceMort;
        this.chanceDegat = chanceDegat;
        this.chanceDegatMort = chanceDegatMort;
    }

        islucky(){
            let x = Math.random();
            if(x < this.luck){
                return true;
            }else{
                return false;
            }


    
}
}
class tueur{
    constructor(name, hp){
        this.name = name;
        this.hp = hp;
    }
}

let Jason = new tueur("Jason", 100)

let prenomNerd = ["Sheldon", "Leonard", "Harry", "Dexter", "Egon"];
let prenomSportif = ["Maxime", "Vicor", "Alexis", "Jules", "Ari"];
let prenomBlond = ["Alexender", "Eric", "Bjorn", "Sebastien", "Henri"];
let prenomGrand = ["Thomas", "Pierre", "Martin", "Alex", "David"];
let prenomRelou = ["Toto", "Gaston", "Gerard", "Raymond", "Albert"];



let randomNumber1 = Math.floor(Math.random() * 5);
let randomNumber2 = Math.floor(Math.random() * 5);
let randomNumber3 = Math.floor(Math.random() * 5);
let randomNumber4 = Math.floor(Math.random() * 5);
let randomNumber5 = Math.floor(Math.random() * 5);

let nerd = new perso(prenomNerd[randomNumber1], 0.5, 0.8, 0.3);
let sportif = new perso(prenomSportif[randomNumber2],  0.5, 0.8, 0.3);
let blond = new perso(prenomBlond[randomNumber3], 0.5, 0.8, 0.3);
let grand = new perso(prenomGrand[randomNumber4], 0.5, 0.8, 0.3);
let relou = new perso(prenomRelou[randomNumber5], 0.5, 0.8, 0.3);


console.log("Notre equipe de chop sera composé de : ",nerd.prenom, ",", sportif.prenom, ",", blond.prenom, ",", grand.prenom, "et de", relou.prenom );

while(Jason.hp >= 0 || (nerd.islucky() === false) || (sportif.islucky() === false) || (blond.islucky() === false) || (grand.islucky() === false) || (relou.islucky() === false)){
    if 
}


