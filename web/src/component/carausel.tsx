import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider() {
    const slides = [
        'https://i.ibb.co/ncrXc2V/1.png',
        'https://i.ibb.co/B3s7v4h/2.png',
        'https://i.ibb.co/XXR8kzF/3.png',
        'https://i.ibb.co/yg7BSdM/4.png'
    ];

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel responsive={responsive}>
            {
                slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide} className="w-full" />
                    </div>
                ))
            }
        </Carousel>
    );
}
