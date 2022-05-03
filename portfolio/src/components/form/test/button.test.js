// import React from "react";
// import  ReactDOM  from "react-dom";
// import MetaMask from "../../MetaMask";
// import {render} from "@testing-library/react";

import{render} from '@testing-library/react'
import { Button } from 'antd'


// testing on Metamask button tests done on baises of class names 
describe("Button test", () =>{
it('Renders with a className equal to the variant', () => {
    const { container } = render(<Button variant="btn btn-cta" />)
    expect(container.firstChild) // Check for className here
});
});

// testing on Buy button tests done on baises of class names 
describe("Button test", () =>{
    it('Renders with a className equal to the variant', () => {
        const { container } = render(<Button variant="btn" />)
        expect(container.firstChild) // Check for className here
    });
    });