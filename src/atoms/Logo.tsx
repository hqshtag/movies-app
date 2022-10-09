import styled from "styled-components"
import LogoPng from "../assets/Logo.png"



const LogoImage = styled.img`
  width: 280px;
  height: 60px;
`


const Logo = () => {
    return (
      <LogoImage src={LogoPng} />
    )
  }
  
  export default Logo