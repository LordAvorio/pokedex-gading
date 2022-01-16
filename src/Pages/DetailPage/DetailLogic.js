import React from 'react'
import {useLocation} from 'react-router-dom';

import DetailPage from './DetailPage'


function DetailLogic() {

    const location = useLocation();
    console.log(location.state.dataPokemon)

    return (
        <>
            <DetailPage dataPokemon={location.state.dataPokemon}/>
        </>
    )
}

export default DetailLogic
