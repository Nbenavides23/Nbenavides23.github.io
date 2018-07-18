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

    all(){
        return this.pokemonchildren  
    }

    get(name){
        return this.pokemonchildren(name)
     
    }  
    
}


