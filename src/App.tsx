import { useState ,useEffect, ChangeEvent, BaseSyntheticEvent} from 'react'
import './App.css'
import GameCard from './components/GameCard'
import MenuBar from './components/MenuBar'
import Nav from './components/Nav'
import GameServices from './servises/game-services'
import { CanceledError } from 'axios'

interface GameResponse{
  id:number;
  name:any;
  background_image:string;
  rating:any;
  platforms:
      {platform:GamePlatform}[]
  
  }
interface GamePlatform{
    id:number,
    name:string,
    slug:string,
  }

function App() {
  const [gameArray,setGameArr]=useState<GameResponse[]>([]);
  var [gameArraycopy,setGameArrCopy]=useState<GameResponse[]>([])
  const[errorMsg,setErrorMsg]=useState('')
  //consst []
useEffect(()=>{
  const {request,cancel}=GameServices.getAllGames();
  request.then((res)=>{
              const tempArr=res.data.results;
             // console.log(tempArr)

              const arrTwo=tempArr.map((i:GameResponse)=>{
                return ({id:i.id,name:i.name,background_image:i.background_image,rating:i.rating})
              } )
              var usefullGameArr:any[]=[]
         
              for(var i=0;i<tempArr.length;i++){
                var pl:GamePlatform[]=[];
              
                for(var j=0;j<tempArr[i].platforms.length;j++){ 
                  pl=[...pl,tempArr[i].platforms[j].platform]
                
                }
              // console.log(pl);
              usefullGameArr=[...usefullGameArr,{
                                  id:tempArr[i].id,
                                  name:tempArr[i].name,
                                  background_image:tempArr[i].background_image,
                                  rating:tempArr[i].rating,
                                  platforms:[...pl]
                               }]
              }
           
            
              setGameArrCopy([...usefullGameArr])
              setGameArr([...usefullGameArr])
              
            })
  .catch((err)=>{
    if(err instanceof CanceledError){
      console.log('canceled error')
      return
    }
    setErrorMsg(err.message)
    console.log(err)
  })
return()=>{
cancel
}
},[])



const [lightDark,setLightDark]=useState(false)
function handelTheme(){
  setLightDark(!lightDark)
}

const handelSelect=(e:BaseSyntheticEvent)=>{
  const selectedPlatform=e.currentTarget.value
  const arryForPlatform:GameResponse[]=[];
             gameArraycopy.forEach(element=>{
              element.platforms.forEach((plat:any)=>{
                if(plat.slug==selectedPlatform){
                  arryForPlatform.push(element)
                  }
              })
             })
  setGameArr(arryForPlatform)           
  //console.log(arryForPlatform)

}
  return (
    <div className={lightDark?'text-bg-dark':'text-bg-light'}>
      <Nav onThemeChange={handelTheme}/>
      <div className='d-flex  flex-row align-items-start'>
        <div  className='border border-danger  d-sm-block'>
        <MenuBar/>
        
        </div>
       
        <div className='vstack'>
          {errorMsg&&<p>{errorMsg}</p>}
            <div className='hstack m-2'>
              <select className='m-1' name="" id="" onChange={(e)=>{handelSelect(e)}}>
                <option value="playstation5">PlayStation 5</option>
                <option value="xbox-series-x">Xbox Series S/X</option>
                <option value="playstation4">PlayStation 4</option>
                <option value="pc">pc</option>
                <option value="xbox360">xbox 360</option>
                <option value="xbox-one">xbox one</option>
                <option value="nintendo-switch">Nintendo Switch </option>
                <option value="playstation5">playstation 5 </option>
                <option value="android">Android </option>
                <option value="macos">macOS </option>
                <option value="linux">Linux </option>

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
                gameArray.map(i=><div className=' p-1'
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
