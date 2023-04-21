interface GameCatagProp{
  id:number,
  name:string,
  img:string
}
const MenuGener = ({id,name,img}:GameCatagProp) => {
  return (
    <>
      <div className="d-flex" style={{width:'140px'}}>
        <div className="col-4 m-2"><img style={{width:'55px',maxHeight:'55px'}} src={img} alt="" /></div>
        <div className="col-8 p-1">{name}</div>
      </div>
    </>
  )
}

export default MenuGener
