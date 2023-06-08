import { FilmCard } from "./FilmCard"

import styled from 'styled-components';

export const FilmCardsList = ({ films }) => {
    return <CardList>
        {films.map(film => <FilmCard key={film.titles} film={film} />)}
    </CardList>
}



const CardList = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`