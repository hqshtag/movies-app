
import styled from "styled-components"
import IMBdImage from "../assets/IMDb.png"
import RTomatoeImage from "../assets/RTomatoe.png";

type Props = {
    rating: number
    color?: string
  }


interface IRCProps {
  width: string,
  color: string
}

const RatingContainer = styled.div<IRCProps>`
  color: ${props => props.color};
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IMDbrating = ({rating, color = "white"}: Props) => {
  return (
    <RatingContainer width="93px" color={color}>
        <img src={IMBdImage} alt="" />
        {`${rating}/100`}
    </RatingContainer>
  )
}




export const RottenTomatoesRating = ({rating, color = "white"}: Props) => {
  return (
    <RatingContainer width="54px" color={color}>
        <img src={RTomatoeImage} alt="" />
        {`${rating.toFixed(1)}%`}
    </RatingContainer>
  )
}


