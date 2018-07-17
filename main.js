class Pokemon {
    constructor(hp,attack,defense,abilities,photo,id,name){
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.photo = photo;
        this.id = id;
        this.name = name;
    }
}

class Trainer {
    constructor(name){
        this.name = name;
        this.pokemonchildren = {} 
    }
    
    add(pokemonObject){
        this.pokemonchildren[pokemonObject.name] = (pokemonObject)
    }

    all() { 
        return this.pokemonchildren  
    }

    get(name) {
        return this.pokemonchildren.find(name => {
            return element.name == name
        }
        
    )}    
    
}

let PokemonTrainer = new Trainer("superDavid")

let showImg = function (pokemonid){
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`).then((response) => {
        let data = response.data
        console.log(data)
       
        let showImg = new Pokemon(data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities,data.sprites.front_default,data.id,data.name)
        
        PokemonTrainer.add(showImg)

    }
)}

showImg(4)
showImg(69)
showImg(17)
 
// let div = document.createElement('div1')
// div.setAttribute('id','div1')
// document.body.appendChild(div);