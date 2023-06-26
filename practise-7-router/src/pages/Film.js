import {useState, useEffect} from 'react'
import { useParams, useSearchParams } from "react-router-dom";
import { payload, mapFilms } from "../config.js"
import asyncSimulate from "../hooks/useAsyncSimulate.js"
import {FilmCard} from '../components/FilmCard.js'

export const Film = () => {

    const  params = useParams();



    const [film, setFilm] = useState(null); 
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const loadFilms = async () => {

            setIsLoading(true);
            try{
                const responseFilms = await asyncSimulate(payload);
    
                console.log('Films from BE -> ',mapFilms(responseFilms), params.filmId);
                setFilm(mapFilms(responseFilms)[params.filmId]);
    
            }catch(error){
                console.log('error', error)
              
            }finally{
                setIsLoading(false)
            }
        };

        loadFilms()
    }, [])




    return <div>
        <h2>Film with id {params.filmId}</h2>

        {isLoading ? 
            <div>Loading...</div> : 
            (film !== null && <FilmCard film={film} id={params.filmId}/>)
        }
    </div>
}