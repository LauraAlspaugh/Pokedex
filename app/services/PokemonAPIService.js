import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js"

class PokemonAPIService {

    async getAPIPokemons() {
        const res = await pokeApi.get('api/v2/pokemon')
        console.log('got pokemons', res.data);
        AppState.pokemon = res.data.results
    }

}
export const pokemonAPIService = new PokemonAPIService()