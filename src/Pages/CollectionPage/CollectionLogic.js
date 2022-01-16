import React, {useState, useEffect} from 'react'

import CollectionPage from './CollectionPage'
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

function CollectionLogic() {

    const[dataMyPokemon,setDataMyPokemon] = useState([])

    const releasePokemon = (nick) => {
        let tempData = dataMyPokemon
        for(let x = 0; x < tempData.length; x++){
            if(nick === tempData[x].NickPokemon){
                tempData.splice(x, 1)
                setDataMyPokemon(tempData)
                bake_cookie('store_pokemon', tempData)
            }
        }
        fetchDataCookie()
    }

    const fetchDataCookie = async() => {
        let data = await read_cookie('store_pokemon')
        setDataMyPokemon(data)
     }

    useEffect(() => {
        fetchDataCookie()
    },[])

    return (
        <>
            <CollectionPage dataMyPokemon={dataMyPokemon} releasePokemon={releasePokemon}/>
        </>
    )
}

export default CollectionLogic
