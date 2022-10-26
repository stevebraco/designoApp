import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import CardsDesigns from '../components/CardsDesigns/CardsDesigns';
import DescriptionList from '../components/DescriptionList/DescriptionList';
import DisplayMap from '../components/DescriptionList/DescriptionList';
import Hero from '../components/Hero/Hero';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Designo</title>
      </Head>
      <Hero />
      <CardsDesigns />
      <DescriptionList />
    </div>
  );
};

export default Home;
