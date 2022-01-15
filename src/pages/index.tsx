import { getOptionsForVote } from '@/utils/getRandomPokemon';
import { trpc } from '@/utils/trpc';

const Home = () => {

	const [first, second] = getOptionsForVote();

	return (
		<div className='h-screen w-screen flex flex-col justify-center items-center'>
			<div className='text-2xl text center'>
				Which Pokémon is rounder?
			</div>
			<div className='p-2' />
			<div className='border rounded p-8 flex justify-between items-center max-w-2xl'>
				<div className='pkm-container'>{first}</div>
				<div className='p-8'>Vs</div>
				<div className='pkm-container'>{second}</div>
			</div>
		</div>
	);
};

export default Home;
