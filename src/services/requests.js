import axios from "axios";

const baseUrl = 'https://passarinhos.herokuapp.com'

export const getRequest = async (setData, setLoading, org, name, state) => {
    setLoading(true)
    
    try{
        const response = await axios.get(`${baseUrl}/${org}`)
        setData(response.data)
        setLoading(false)
    }
    catch(error){
        console.log(error.response)
    }
}
export const getRequestSearchFilter = async (setData, setLoading, org, name,state) => {
    setLoading(true)
    
    try{
        let response
        if(state){
             response = await axios.get(`${baseUrl}/${org}?state=${state}`)
        }else{
             response = await axios.get(`${baseUrl}/${org}?name=${name}`)
        }
        setData(response.data)
        setLoading(false)
    }
    catch(error){
        console.log(error.response)
    }
}