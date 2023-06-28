import axios from "@/utils/axios";
import useRequestService from "@/services/requestService";

export function fetchUsers(options = {}) {
        let requestService = new useRequestService(options);
        let queryset = requestService.createQueryset();
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