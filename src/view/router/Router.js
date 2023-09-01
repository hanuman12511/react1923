import {Routes,Route} from 'react-router-dom'
import Home from '../screen/Home'
export default function Router(){

    return(
       <>
       <div>header</div>
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