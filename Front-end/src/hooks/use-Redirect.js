import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useRef } from "react"


const useRedirect = (type) => {

    const navigate = useNavigate();
    const location = useLocation().pathname;
    console.log(location);
    useEffect(() => {
        if (localStorage.getItem('isLoggedIn') === '1' && type === 'admin' && location.includes('admin')) {
            navigate('/admin/home');
        } else {
            navigate('/admin/login');
        }
    }, []);

    // return location

}

export default useRedirect;