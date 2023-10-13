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
        this.baseExperience = data.base_experience
        this.order = data.order
        this.held_items = data.held_items
    }

    get ActiveTemplate() {
        return `
        <div id="activePokemon" class="col-md-9 p-5 justify-content-center">
        <div>
        <h1>${this.name}</h1>
        <h3>${this.held_items}</h3>
        <h3>Weight: ${this.weight}</h3>
        <h3>${this.nickName}</h3>
        <h3>Height: ${this.height}</h3>
        <h3>Experience: ${this.baseExperience}</h3>
        <button class="btn btn-success m-3">Save Pokemon</button>

        </div>
    </div>
`
    }
}


const PokemonData = {
    "name": "bulbasaur",
    "url": "https://pokeapi.co/api/v2/pokemon/1/"
}
const PokemonDataTemplate = {

    "ability": {
        "name": "blaze",
        "url": "https://pokeapi.co/api/v2/ability/66/"
    },
    "is_hidden": false,
    "slot": 1

}