import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/context';
export default function Home(){
    const {totalpat,addcart,data}=useContext(AuthContext)
    console.log(totalpat);
    console.log(addcart);
    console.log(data);
    return(
        <>
        {
            data.map(d=>(
                <h1>{d.productname}</h1>
            ))
        }
        </>
    )
}