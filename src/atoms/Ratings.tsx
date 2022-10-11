
import styled from "styled-components"
import IMBdImage from "../assets/IMDb.png"
import RTomatoeImage from "../assets/RTomatoe.png";

type Props = {
    rating: number
}


interface IRCProps {
  width: string
}

const RatingContainer = styled.div<IRCProps>`
  color: white;
  width: ${props => props.width};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const IMDbrating = ({rating}: Props) => {
  return (
    <RatingContainer width="93px">
        <img src={IMBdImage} alt="" />
        {`${rating}/100`}
    </RatingContainer>
  )
}




export const RottenTomatoesRating = ({rating}: Props) => {
  return (
    <RatingContainer width="54px">
        <img src={RTomatoeImage} alt="" />
        {`${rating}%`}
    </RatingContainer>
  )
}


