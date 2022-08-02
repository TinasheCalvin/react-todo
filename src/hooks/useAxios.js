import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/tasks'

function useAxios({ url, method, body = null }) {

    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        axios[method](url, body)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { data, error, loading }

}

export default useAxios