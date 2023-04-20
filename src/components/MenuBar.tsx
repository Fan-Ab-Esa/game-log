import MenuGener from "./MenuGener"

const MenuBar = () => {
    const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  return (
    <div className="vstack">
    {
        arr.map(i=><span key={i}>< MenuGener/></span>)
    }
    </div>
  )
}

export default MenuBar
