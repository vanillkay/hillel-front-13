import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {

    const navigate = useNavigate()

return <div>
    <h1>Not found</h1>
    <button onClick={() => navigate('/')}>Home</button>
    </div>

}