import { useState ,useEffect} from 'react'
import './App.css'
import GameCard from './components/GameCard'
import MenuBar from './components/MenuBar'
import Nav from './components/Nav'
import array from './servises/array'
import GameServices from './servises/game-services'

interface GameResponse{
  id:number,
  name:string,
  img:string
}
function App() {
  const [backImg,setBackImg]=useState<GameResponse[]>([])
const arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
useEffect(()=>{
  GameServices
  .getAllGames()
  .then((res)=>{
             // console.log(res.data.results);
              const tempArr=res.data.results;
              console.log(tempArr)
              const arrTwo=tempArr.map((i)=>{
                return ({id:i.id,name:i.name,img:i.background_image})
              })
              console.log(arrTwo)
              setBackImg([...arrTwo])
            })
  .catch((err)=>console.log(err))

},[])



const [lightDark,setLightDark]=useState(false)
function handelTheme(){
  console.log('hello world');
  setLightDark(!lightDark)
}
  return (
    <div className={lightDark?'text-bg-dark':'text-bg-light'}>
      <Nav onThemeChange={handelTheme}/>
      <div className='d-flex  flex-row align-items-start'>
        <div  className='border border-danger d-none d-sm-block'>
        <MenuBar/>
        </div>
        <div className='vstack'>
            <div className='hstack m-2'>
              <select className='m-1' name="" id="">
                <option value="">Xbox</option>
                <option value="">Play Station</option>
                <option value="">Game boy</option>
                <option value="">ios</option>
                <option value="">Android</option>
              </select>
              <select className='m-1' name="" id="">
                <option value="">Preference</option>
                <option value="">Date Added</option>
                <option value="">Name</option>
                <option value="">Released date</option>
                <option value="">Popularity</option>
              </select>
            </div>
            <div className='d-flex flex-wrap border border-dark p-2'>
              {
                backImg.map(i=><span key={i.id}>< GameCard name={i.name} img={i.img}/></span>)
                //array.map(i=><span key={i.id}>< GameCard img={i.img}/></span>)
                
              }
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
