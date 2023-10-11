export class Pokemon {
    constructor(data) {
        this.name = data.name
        this.nickName = data.nickName
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }
}


const PokemonData = {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
}