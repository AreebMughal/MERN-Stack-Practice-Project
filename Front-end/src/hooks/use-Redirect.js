import { useLocation, useNavigate } from "react-router-dom"
import { useCallback, useEffect, useRef } from "react"


const useRedirect = (type) => {

    const navigate = useNavigate();
    const location = useLocation().pathname;
    console.log(location);

    const redirect = useCallback(() => {
        if (type === 'admin') {

        }
    }, [type])

    useEffect(() => {
        if (localStorage.getItem('isAdmin') === '1' && location.includes('admin')) {
            navigate('/admin/home');
        } else {
            navigate('/admin/login');
        }
    }, []);

    // return location

}

export default useRedirect;