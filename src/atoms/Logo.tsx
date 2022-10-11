import styled from "styled-components"
import LogoPng from "../assets/Logo.png"



const LogoImage = styled.img`
  width: 186px;
  height: 50px;
  margin: 15px 0px 15px 100px;
`


const Logo = () => {
    return (
      <LogoImage src={LogoPng} />
    )
  }
  
  export default Logo