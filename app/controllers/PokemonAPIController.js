import { AppState } from "../AppState.js"
import { pokemonAPIService } from "../services/PokemonAPIService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawPokemon() {
    const pokemon = AppState.pokemon
    let content = ''
    pokemon.forEach(pokemon => content += `
    <div class="text-center mb-2">
    <button onclick="app.PokemonAPIController.getPokemonByIndex('${pokemon.index}')" class="btn btn-info w-100">${pokemon.name}</button>
</div>
`)
    setHTML('pokemon', content)
}
function _drawActivePokemon() {
    setHTML('activePokemon', AppState.activePokemon.ActiveTemplate)
}


export class PokemonAPIController {
    constructor() {
        console.log('Pokemon API Controller is loaded!')
        this.getAPIPokemons()
        AppState.on('pokemon', _drawPokemon)
        AppState.on('activePokemon', _drawActivePokemon)
    }

    async getAPIPokemons() {
        try {
            await pokemonAPIService.getAPIPokemons()
        } catch (error) {
            Pop.error(error)
            console.error(error)

        }
    }
    async getPokemonByIndex(pokemonIndex) {
        try {
            await pokemonAPIService.getPokemonByIndex(pokemonIndex)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

}