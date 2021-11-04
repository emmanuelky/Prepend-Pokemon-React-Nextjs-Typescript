import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { AllPokemons } from "../types";



const Home: NextPage = () => {
  return (
    <div className='bg-green-300'>
      <Head>
        <title>Pokemon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to Pokemon World!
        </h1>


        <div className=''>


        </div>
      </main>

      <footer className=''>
        <span>Built by Emmanuel</span>
      </footer>
    </div>
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  console.log(res)
  const { results }: AllPokemons = await res.json();

  return {
    props: {
      pokemons: results,
    },
  };
};

export default Home
