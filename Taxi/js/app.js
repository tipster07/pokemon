class musique { 
   
constructor(titre, nb){
        this.titre = titre; 
        this.nb = nb;
         

   }

}
let totalMusique = 0;
let feuxRestant = 30;

let changementTaxi = 0;


let anissa = new musique("Anissa de Wejdene", 0);
let tiAmo = new musique("Ti Amo de Uberto Tozzi", 0);
let papa = new musique("Papaoutai de Stomae", 0);
let emilie = new musique("Dans les yeux d'emilie de Joe Dassin", 0);
let Taki = new musique ("Taki Taki de DJsnake", 0);


let musiqueRandom = [anissa, tiAmo, papa, emilie, Taki];

while(totalMusique < 30 ||anissa.nb <= 10){

    let randomNumber = Math.floor(Math.random() * 5);
    

    if (randomNumber == [0]){
        anissa.nb = anissa.nb + 1;
        changementTaxi = changementTaxi + 1;
        console.log(anissa.titre + " passe a la radio, cette musique est peté Stephan changes de taxi !")
    }

    else if (randomNumber == [1]){
        tiAmo.nb = tiAmo.nb + 1;
        console.log(tiAmo.titre + " passe a la radio.")
    }
    else if (randomNumber == [2]){
        papa.nb = papa.nb + 1;
        console.log(papa.titre + " passe a la radio.")
    }
    else if (randomNumber == [3]){
        emilie.nb = emilie.nb + 1;
        console.log(emilie.titre + " passe a la radio.")
    }
    else if (randomNumber == [4]){
        Taki.nb = Taki.nb + 1;
        console.log(Taki.titre + " passe a la radio.")
    }
    if (anissa.nb >= 10){
        console.log("Stephan n'peux plus de cette chanson de merde !!!!!")
        console.log("IL EST MORT !")
        break
    }
    else if (totalMusique >= 30){
        console.log("Stephan es enfin chez lui")
        console.log("Il a fallut " + changementTaxi + " changement de taxi pour y arriver.")
        break
    }


    totalMusique = totalMusique + 1;
    feuxRestant = feuxRestant - 1;
    console.log ("Il reste encore " + feuxRestant + " feux rouge")

}
