import { request } from '@playwright/test';

export class PokeApiService {

  async getPokemonEvolutionChain(pokemon: string) {
    const context = await request.newContext();

    const pokemonResponse = await context.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (pokemonResponse.status() !== 200) throw new Error('Pokemon API failed');

    const pokemonData = await pokemonResponse.json();
    const speciesUrl = pokemonData.species.url;

    const speciesResponse = await context.get(speciesUrl);
    if (speciesResponse.status() !== 200) throw new Error('Species API failed');

    const speciesData = await speciesResponse.json();
    const evolutionUrl = speciesData.evolution_chain.url;

    const evolutionResponse = await context.get(evolutionUrl);
    if (evolutionResponse.status() !== 200) throw new Error('Evolution API failed');

    return evolutionResponse.json();
  }

  async getPokemonWeight(name: string) {
    const context = await request.newContext();
    const response = await context.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (response.status() !== 200) throw new Error(`Weight API failed for ${name}`);

    const data = await response.json();
    return data.weight;
  }
}
