import MenuGener from "./MenuGener"
import gameCatagoryTypes from '../servises/array'
const MenuBar = () => {
  //This is the menu on the left side of the page, Action, indi, RPG, Adventure...
  return (
    <div className="">
    {
        gameCatagoryTypes.map(i=><span key={i.id}>< MenuGener id={i.id} name={i.name} img={i.img}/></span>)
    }
    </div>
  )
}

export default MenuBar
