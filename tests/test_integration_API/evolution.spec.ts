import { test, expect } from '@playwright/test';
import { PokeApiService } from '../../src/services/pokeApi.service';
import { mergeSort } from '../../src/utils/mergeSort ';

test('Obtener evolución del Pokemon y ordenarla alfabéticamente', async ({}, testInfo) => {

  const api = new PokeApiService();

  var pokemon = 'squirtle';

  const evolutionData = await api.getPokemonEvolutionChain(pokemon);

  const evolutionNames: string[] = [];

  let chain = evolutionData.chain;

  while (chain) {
    evolutionNames.push(chain.species.name);
    chain = chain.evolves_to[0];
  }

  const result: { name: string; weight: number }[] = [];

  for (const name of evolutionNames) {
    const weight = await api.getPokemonWeight(name);
    result.push({ name, weight });
  }

  const sortedResult = mergeSort(result);

  const browser = testInfo.project.name;
  console.log(`\n \n=========  Navegador: ${browser} =========`);

  console.log('\n Evoluciones ordenadas:\n');

  sortedResult.forEach(p =>
    console.log(`Pokemon: ${p.name} | Weight: ${p.weight}`)
  );

  expect(sortedResult.length).toBeGreaterThan(0);
});
