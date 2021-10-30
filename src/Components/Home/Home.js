import React from 'react';
import FeatureTour from '../FeatureTour/FeatureTour';
import Gallery from '../Gallery/Gallery';
import Hero from '../Hero/Hero';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Packages></Packages>
            <FeatureTour></FeatureTour>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;