import axios from "@/utils/axios";
import useRequestService from "@/services/requestService";

export function fetchUsers(options = {}) {
    let requestService = new useRequestService();
    let newOptions = {
        skip: options.offset,
        limit: options.limit,
    }
    let queryset = requestService.createQuerySet(newOptions);
    return axios
        .get("/users" + queryset)
        .then((response) => {
            let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
            response.data.total += createdUsers.length
            if(options.offset >= 100){
                response.data.users = response.data.users.concat(createdUsers.slice(100- options.offset, 100- options.offset + options.limit))
            }
            return response
        })
        .catch((error) => {
            console.log(error)
            throw error;
        });
}

export function searchUsers(options = {}) {
        let requestService = new useRequestService();
        let queryset = requestService.createQuerySet(options);
        return axios
            .get("/users/search" + queryset)
            .then((response) => {

                let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
                if(options.q){
                    response.data.users = response.data.users.concat(createdUsers.filter(v => v.firstName.toLowerCase().search(options.q.toLowerCase()) > -1 || v.lastName.toLowerCase().search(options.q.toLowerCase()) > -1))
                }
                return response
            })
            .catch((error) => {
                console.log(error)
                throw error;
            })
}

export function getUser(id = null) {
    if(!id) return

    let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
    let currentUser = createdUsers.find(v => parseInt(v.id) === parseInt(id))
    if(currentUser) return Promise.resolve({data: currentUser})

    return axios
        .get(`/users/${id}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}

export function createUser(payload = {}) {
    return axios
        .post(`/users/add`, payload)
        .then((response) => {
            let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
            payload["id"] = createdUsers.length + 1001
            payload["image"] = "https://robohash.org/consequunturautconsequatur.png"
            createdUsers.push(payload)
            localStorage.setItem("createdUsers", JSON.stringify(createdUsers))
            return response
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}

export function updateUser(payload = {}) {
    let {id, ...data} = payload


    let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
    let correctIndex = createdUsers.findIndex(v => parseInt(v.id) === parseInt(id))

    if(correctIndex > -1){
        Object.entries(data).forEach(([prop, value])=>{
            createdUsers[correctIndex][prop] = value
        })
        localStorage.setItem("createdUsers", JSON.stringify(createdUsers))
        return Promise.resolve({data: payload})
    }


    return axios
        .put(`/users/${id}`, data)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}

export function deleteUser(id = null) {
    if(!id) return


    let createdUsers = JSON.parse(localStorage.getItem("createdUsers")) || []
    let correctIndex = createdUsers.findIndex(v => parseInt(v.id) === parseInt(id))

    if(correctIndex > -1){
        createdUsers.splice(correctIndex, 1)
        localStorage.setItem("createdUsers", JSON.stringify(createdUsers))
        return Promise.resolve({data: id})
    }


    return axios
        .delete(`/users/${id}`)
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.log(error)
            throw error;
        })
}