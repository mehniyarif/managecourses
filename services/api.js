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
                return response
            })
            .catch((error) => {
                console.log(error)
                throw error;
            })
}

export function getUser(id = null) {
    if(!id) return
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