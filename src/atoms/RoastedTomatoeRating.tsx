import RTomatoeImage from "../assets/RTomatoe.png";

type Props = {
    rating: number
}

const RoastedTomatoeRating = ({rating}: Props) => {
  return (
    <div>
        <img src={RTomatoeImage} alt="" />
        {`${rating}%`}
    </div>
  )
}

export default RoastedTomatoeRating