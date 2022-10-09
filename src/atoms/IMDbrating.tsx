
import IMBdImage from "../assets/IMDb.png"

type Props = {
    rating: number
}

const IMDbrating = ({rating}: Props) => {
  return (
    <div>
        <img src={IMBdImage} alt="" />
        {`${rating}/100`}
    </div>
  )
}

export default IMDbrating