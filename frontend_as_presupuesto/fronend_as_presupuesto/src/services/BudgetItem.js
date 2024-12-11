import axios from "axios";

const baseURL = "http://localhost:8000/api/budget/budgetitems/"

const getAll = () =>{
    const promise = axios.get(baseURL)
    return promise.then(response => response.data)
}

const create = newObject =>{
    const promise = axios.post(baseURL, newObject)
    return promise.then(response => response.data)
}

const deleteObject = id =>{
    const promise = axios.delete(`${baseURL}${id}/`)
    return promise.then(response => response.data)
}

const update = (id, newObject) => {
    const promise = axios.put(`${baseURL}${id}/`, newObject)
    return promise.then(response => response.data)
}


const BudgetItemservices = {
    getAll,
    create,
    deleteObject,
    update
}

export default BudgetItemservices