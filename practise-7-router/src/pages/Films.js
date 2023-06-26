import { useState } from "react"
import { payload, mapFilms } from "../config.js"
import asyncSimulate from "../hooks/useAsyncSimulate.js"
import {FilmCardsList} from '../components/FilmCardsList.js';
import styled from 'styled-components';


export const Films = () => {

    const [error, setError] = useState(null);
    const [films, setFilms] = useState(null);
    const [isLoading, setIsLoading] = useState(false);




    const loadFilms = async () => {
        setError(null);
        setIsLoading(true);
        try{
            const responseFilms = await asyncSimulate(payload);

            console.log('Films from BE -> ',mapFilms(responseFilms));
            setFilms(mapFilms(responseFilms));

        }catch(error){
            console.log('error', error)
            setError('Error while fetching data from BE')
        }finally{
            setIsLoading(false)
        }
    }

    const isValidFilms = films !== null;

    return (
        <Container>
            <h2>Films</h2>

            <button onClick={loadFilms} disabled={isLoading}>Load films</button>
            
            {error && <Error>{error}</Error>}

            {isLoading ? 
            <div>Loading...</div> : 
                <>
                    {isValidFilms && <FilmCardsList films={films} />}
                </>
            }
            
        </Container>
    )
}

const Container = styled.div`
    padding: 10px 20px;
`

const Error = styled.p`
    font-weight: bold;
    color: red;
`;