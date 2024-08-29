import React, { useEffect, useState } from 'react'
import styles from "./styles.module.scss";
import { Link, useParams } from 'react-router-dom';
import { fetchPokemonDetail } from '../../services/PokemonService';
import { PokemonType } from '../../types/PokemonType';

interface IProps {
    fetchPokemonDetail: (id: number) => Promise<PokemonType>
}

const index = ({ fetchPokemonDetail }: IProps) => {
    const params = useParams()
    const [error, setError] = useState("")
    const [pokemon, setPokemon] = useState<PokemonType>({
        id: 0,
        image: '',
        name: '',
        type: ''
    })

    useEffect(() => {

        (async () => {
            setError('')
            if(!params.id || params.id === '0'){
                setError("O id nao eh valido!")
                return
            }
            const data = await fetchPokemonDetail(parseInt(params.id))

            setPokemon(data)
        })()

    }, [])

    return (
        <div className={styles.container}>
            <div>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name} />
                <strong>{pokemon.type}</strong>
            </div>
            <Link to="/dashboard">Voltar</Link>
            {error && <strong>{error}</strong>}
        </div>
    )
}

export default index