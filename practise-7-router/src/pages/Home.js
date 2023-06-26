
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";


export const Home = () => {

    const navigate = useNavigate();


    return (
       <div>
        <h2>Home</h2>
        <button onClick={() => navigate('/films')}>Go to films</button>
        </div>
    )
}

const Container = styled.div`
    padding: 10px 20px;
`

const Error = styled.p`
    font-weight: bold;
    color: red;
`;