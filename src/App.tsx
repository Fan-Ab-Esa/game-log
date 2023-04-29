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
  background_image:string,
  rating:string
}
function App() {
  const [backImg,setBackImg]=useState<GameResponse[]>([])
useEffect(()=>{
  GameServices
  .getAllGames()
  .then((res)=>{
             // console.log(res.data.results);
              const tempArr=res.data.results;
              console.log(tempArr)
              const arrTwo=tempArr.map((i:GameResponse)=>{
                return ({id:i.id,name:i.name,background_image:i.background_image,rating:i.rating})
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
        <div  className='border border-danger  d-sm-block'>
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
     
            <div className='row    row-cols-1 row-cols-sm-2 row-cols-md-3 
                              row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 border-dark p-1'>
              {
                backImg.map(i=><div className=' p-1'
                                    key={i.id}>< GameCard  name={i.name} img={i.background_image} rating={i.rating}/>
                              </div>)  
              }
            </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default App
