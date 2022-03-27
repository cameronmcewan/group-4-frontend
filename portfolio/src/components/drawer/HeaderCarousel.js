// Main React Import
import React, { useState } from 'react';
// antd Design Component Imports
import 'antd/dist/antd.css';
import {Carousel} from "antd";
// Content components Imports


function onCarouselChange(a, b, c) {
    console.log(a, b, c);
}

function HeaderCarousel() {


    return (
        <Carousel autoplay afterChange={onCarouselChange} dotPosition={'top'}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    );
}

export default HeaderCarousel;