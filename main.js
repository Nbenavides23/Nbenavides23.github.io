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


    renderPoke(){
        let div1 = document.createElement('div')
        div1 .setAttribute('id','div1')
        let pokeImg = document.createElement('img')
        pokeImg.src = 'Image' + this.photo
        // document.body.appendChild(pokeImg)
        document.body.appendChild(div1)
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
        

        let data = response.data.sprites.front_default
        console.log(data)
       


        let charmanderImg = document.createElement('img')
        charmanderImg.src = data
        document.body.appendChild(charmanderImg)


        // let showImg = new Pokemon(data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities,data.sprites.front_default,data.id,data.name)

        // PokemonTrainer.add(showImg)
         
        

    }
)}

showImg(4)


