import styled from 'styled-components';
import {KeyValueLayout} from './KeyValueLayout';

export const FilmCard = ({ film: {box_office, budget, releases_years, titles} }) => {
    
    const netProfit = box_office - budget;

    const isNetProfitPositive = netProfit > 0;

    const profitToDisplay = `${isNetProfitPositive ? '+' : ''}${Math.abs(netProfit)}$`;

    const dataToRender = [
        {
            key: "Release year",
            value: releases_years
        },
        {
            key: 'Budget',
            value: `${budget}$`
        },
        {
            key: 'Box office',
            value: `${box_office}$`
        },
        {
            key: 'Net profit',
            value: profitToDisplay,
            valueColor: isNetProfitPositive ? "green" : "red"
        },
    ];
    
    return <Card>
        <Title>{titles}</Title>
            {dataToRender.map(({key, value,...props }) => 
                <KeyValueLayout 
                    key={key} 
                    Key={key} 
                    Value={value} 
                    {...props}
                    />)}
        </Card>
}


const Card = styled.div`
padding: 10px;
border: 1px solid grey;
`

const Title = styled.p`
    font-weight: bold;
    border-bottom: 1px solid grey;
`