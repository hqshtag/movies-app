import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'DM sans'
    },

`

 interface ITextProps {
    size: keyof typeof TextSizes,
    weight: "Regular" | "Medium" | "Bold"
}


//usage: const Text = Typography({size: "3xl", weight: "Bold"}); 
//in your render / return <Text> Hello Typography </Text>
export const  Typography  = ({size = "base", weight = "Regular"}: ITextProps) => {
    const [fontSize, lineHeight] = TextSizes[size];
    const w = weight === "Regular" ? 400 : weight === "Medium" ? 500 : 700 
    return styled.p`
    font-size: ${fontSize}rem;
    line-height: ${lineHeight}rem;
    font-weight: ${w};
    `
}



const TextSizes = {
    "xs": [0.75, 1],
    "sm": [0.875, 1.25],
    "base": [1, 1.5],
    "lg": [1.125, 1.75],
    "xl": [1.25, 1.75],
    "2xl": [1.5, 2],
    "3xl": [1.875, 2.25],
    "4xl": [2.25, 25],
    "5xl": [3, 3],
    "6xl": [3.75, 3.75],
    "7xl": [4.5, 4.5],
    "8xl": [6, 6],
    "9xl": [8, 8]
}
