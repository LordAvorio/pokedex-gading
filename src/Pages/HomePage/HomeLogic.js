import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";


import HomePage from './HomePage'

import {getDataPokemon} from "../../Actions/PokemonAction"

export default function HomeLogic(){

    const dispatch = useDispatch()

    const {dataPokemon, generalDataPokemon} = useSelector((state) => {
        return {
            dataPokemon: state.pokemonReducer.dataPokemon,
            generalDataPokemon: state.pokemonReducer.generalDataPokemon
        }
    })

    React.useEffect(() => {
        dispatch(getDataPokemon())
    }, [])
    
    return (
        <>
            <HomePage/>
        </>
    )
}
