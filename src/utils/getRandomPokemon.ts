const MAX_DEX_NUMBER = 898;

export const getRandomPokemon: (notThisOne?: number) => number = (
	notThisOne?: number
) => {
	const pokedexNumber = Math.floor(Math.random() * MAX_DEX_NUMBER) + 1;

	if (pokedexNumber !== notThisOne) return pokedexNumber;
	return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
}