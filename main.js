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

let pokemonTrainer = new Trainer("superDavid")
let img = 1; // Global Variable 

let showImg = function (pokemonid){
    axios.get(`https://pokeapi-nycda.firebaseio.com/pokemon/${pokemonid}.json`).then((response) => {
        

        let data = response.data;
        console.log(data);

        let pokemon = new Pokemon(data.stats[5].base_stat,data.stats[4].base_stat,data.stats[3].base_stat,data.abilities,data.sprites.front_default,data.id,data.name)

       
        // Adding the image calling from the API
        let squareImg = document.getElementById(`SquareImg${img}`)
        let pokemonImg = document.createElement("img")
        pokemonImg.setAttribute("id",`${pokemon.name}Img`)
        pokemonImg.setAttribute("class","pokemonImg" )
        pokemonImg.src = pokemon.photo;
        // take the square and creating the image
        squareImg.appendChild(pokemonImg)
        let title = document.getElementById(`Title${img}`)
        title.textContent = pokemon.name.toUpperCase();

    
        let text1 = document.getElementById(`Text${img++}`)
        
        text1.innerText = `Hp: ${pokemon.hp} 
        Attack: ${pokemon.attack}
        Defense: ${pokemon.defense}
        Abilities: ${pokemon.abilities[0].ability.name}`;



        pokemonTrainer.add(pokemon)
       
         
        

    }
)}

showImg(4)
showImg(17)
showImg(69)


