export class Pokemon {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.nickName = data.nickName
        this.imgUrl = data.imgUrl
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
        this.index = data.index
    }

    get ActiveTemplate() {
        return `
        <div id="activePokemon" class="col-md-9 p-5">
        <div>
        <h1>${this.name}</h1>
        </div>
    </div>
`
    }
}


const PokemonData = {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
}