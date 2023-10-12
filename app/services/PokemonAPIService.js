import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js"


class PokemonAPIService {
    async getPokemonByIndex(pokemonUrl) {
        const res = await pokeApi.get(`${pokemonUrl}`)
        console.log('Got Pokemon', res.data);
        const newPokemon = new Pokemon(res.data)
        AppState.activePokemon = newPokemon
    }

    async getAPIPokemon() {
        const res = await pokeApi.get('api/v2/pokemon')
        console.log('got pokemon', res.data);
        AppState.pokemon = res.data.results
    }

}
export const pokemonAPIService = new PokemonAPIService()