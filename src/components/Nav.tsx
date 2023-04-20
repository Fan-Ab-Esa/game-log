import {FiSearch} from 'react-icons/fi'
interface ThemeInterface{
    onThemeChange:()=>void
}
const Nav = ({onThemeChange}:ThemeInterface) => {
  return (
    <div className="navbar navbar-expand border border-dark">
        <div className="row  m-1" style={{width:'100%'}}>
            <div className="col-1 navbar-logo ">
                <img style={{width:'50px'}} src='vite.svg' alt="gone" />
            </div>

            <div  className='col-8 hstack'>
                <FiSearch />
                <input className='form-control' type="search" name="" id=""  placeholder='Search'/> 
            </div>

            <div className='col-3 '>
                <input type="checkbox" onChange={onThemeChange} name="" id="" />
                dark
            </div>
        </div>
    

    </div>
  )
}

export default Nav
