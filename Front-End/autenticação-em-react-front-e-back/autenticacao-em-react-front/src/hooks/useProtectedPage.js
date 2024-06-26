import { useEffect } from "react"
import { irParaLogin } from "../routes/coordinator"
import { useNavigate } from "react-router-dom"


export const useProtectedPage = () => {

    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    useEffect(() => {

        if (!token) {
            irParaLogin(navigate)
        }
        
    }, [])
}