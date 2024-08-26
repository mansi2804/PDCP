import React from 'react'
import { Header } from '../components/Header';
import { Slider } from '../components/slider';
import { Footer } from '../components/footer';


const Home = () => {
    return (
        <>
          <div>
            <Header />
            <Slider />
            <Footer />
          </div>
        </>
      );
}

export default Home


