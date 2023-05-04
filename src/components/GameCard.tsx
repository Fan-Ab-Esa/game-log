import {BsStar} from 'react-icons/bs'
interface GameCardProp{
  name:string,
  img:string,
  rating:string
}
const GameCard = ({name,img,rating}:GameCardProp) => {
  return (
    <div style={{}} className="card border rounded-3  p-1">
      <img style={{width:'auto',height:'150px'}} src={img} alt="" />
      <div className="card-body">
        <div style={{maxWidth:'150px'}} className="card-title">{name}</div>
        <div className="card-subtitle">{rating} <BsStar /></div>
      </div>
    </div>
  )
}

export default GameCard
