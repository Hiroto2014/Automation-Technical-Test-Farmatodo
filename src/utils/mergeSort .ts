interface PokemonInfo {
  name: string;
  weight: number;
}

export function mergeSort(data: PokemonInfo[]): PokemonInfo[] {

  if (data.length <= 1) {
    return data;
  }

  const middle = Math.floor(data.length / 2);

  const left = mergeSort(data.slice(0, middle));
  const right = mergeSort(data.slice(middle));

  return merge(left, right);
}

function merge(left: PokemonInfo[], right: PokemonInfo[]): PokemonInfo[] {

  const result: PokemonInfo[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {

    if (left[i].name.toLowerCase() <= right[j].name.toLowerCase()) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result
    .concat(left.slice(i))
    .concat(right.slice(j));
}
