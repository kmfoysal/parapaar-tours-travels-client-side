import React from 'react';
import Discount from '../Discount/Discount';
import HeroArea from '../HeroArea/HeroArea';
import Packages from '../Packages/Packages';
import SimpleSection from '../SimpleSection/SimpleSection';

const Home = () => {
    return (
        <div>
            <HeroArea></HeroArea>
            <Packages></Packages>
            <Discount></Discount>
            <SimpleSection></SimpleSection>
        </div>
    );
};

export default Home;