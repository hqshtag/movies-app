import styled from "styled-components"
import LogoPng from "../assets/Logo.png"


type TLogoProps = {width?: string, height?: string};

const LogoImage = styled.img<TLogoProps>`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: 15px 0px 15px 100px;
`


const Logo = ({width = '186px', height = '50px'}: TLogoProps) => {
    return (
      <LogoImage src={LogoPng} width={width} height={height} />
    )
  }
  
  export default Logo