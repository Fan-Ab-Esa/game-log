interface GameCardProp{
  name:string,
  img:string
}
const GameCard = ({name,img}:GameCardProp) => {
  return (
    <div className="card border rounded-3 m-1 p-1">
      <img style={{maxWidth:'150px', maxHeight:'150px'}} src={img} alt="" />
      <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="card-subtitle">12344</div>
      </div>
    </div>
  )
}

export default GameCard
