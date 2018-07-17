class Pokemon {
    constructor(hp,attack,defense,abilities){
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
    }
}

class Trainer {
    constructor(name){
        this.name = name;
        this.pokemonchildren = []
    }
    
    add(pokemonObject){
        this.pokemonchildren.push(pokemonObject)
    }

    all() { 
        return this.pokemonchildren  
    }

//     get(name) {
//         return this.pokemonchildren.find(name) => {
//             return element.name == name
//         }
//     }    
    get(name){
        return this.pokemonchildren(name)
    
    }  
    
}

// let Pokemon = new Trainer("superDavid") 
// let poke = new Pokemon(2,3,2,Blaze)

