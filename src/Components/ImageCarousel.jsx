import React, { useEffect, useState } from 'react';

import iPhone17png from './ImagesCopy/iPhone17.png'
import iPhoneShowcase from './ImagesCopy/iPhoneShowcase.png'
import Airpods from './ImagesCopy/Airpods.png'
import iPadAirLogo from './ImagesCopy/iPadAirLogo.png'
import iPadAir from './ImagesCopy/iPadAir.png'
import AppleWatch from './ImagesCopy/AppleWatch.png'


// images fm around ther website
const images = [
    { id: 1, image: iPhone17png},
    { id: 2, image: AppleWatch},
    { id: 3, image: iPadAir},
    { id: 4, image: Airpods},
    { id: 5, image: iPhoneShowcase},
]

export default function ImageCarousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);


    const handleScroll = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleScroll();
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImageIndex]);

    return (
        <div className="mr-3 ml-3 flex overflow-hidden justify-center items-center h-170 bg-gray-100">
            {images.map((image, index) => (
                <a key={image.id} href="#">
                <img 
                    src={image.image} 
                    alt="images" 
                    className={ currentImageIndex === index ? 'block w-150 overflow-hidden' : 'hidden'}
                    key={image.id} 
                />
                </a>
            ))}

        <button className="absolute text-white bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out no-underline pt-2 pb-2 pr-5 pl-5 rounded-3xl">Stream now</button>

        </div>
    )
}

