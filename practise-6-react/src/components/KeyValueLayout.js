import styled from 'styled-components';

export const KeyValueLayout = ({Key, Value, valueColor}) => {
    return (
        <Wrapper>
            <KeyComponent>{Key}</KeyComponent>
            <ValueComponent valueColor={valueColor}>{Value}</ValueComponent>
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 20px
`

const KeyComponent = styled.p`
    text-align: center;
    margin: 0
`;

const ValueComponent = styled.p`
    text-align: center;
    margin: 0;
    color: ${(({valueColor}) => valueColor ?? 'grey')};
`;