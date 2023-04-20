const GameCard = () => {
  return (
    <div className="card border rounded-3 m-1">
      <img style={{maxWidth:'150px', maxHeight:'150px'}} src="https://cdn.pixabay.com/photo/2017/10/25/19/45/arrows-2889040_960_720.jpg" alt="" />
      <div className="card-body">
        <div className="card-title">GTA</div>
        <div className="card-subtitle">12344</div>
      </div>
    </div>
  )
}

export default GameCard
