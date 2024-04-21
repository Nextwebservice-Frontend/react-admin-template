import { useNavigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    if(!token) {
        return navigate('/login')
    }
    return children
};

export default PrivetRoute;