import {Routes,Route} from 'react-router-dom'
import Home from '../screen/Home'
import {title} from '../data/data'
export default function Router(){

    return(
       <>
       <div className='header'>{title}header</div>
        <div>
            <Routes>
                {/* <Route path='/' Component={Home}/> */}
                <Route path='/' element={<Home/>}/>
            </Routes>
        </div>
       <div>footer</div>
       </>
       )
}