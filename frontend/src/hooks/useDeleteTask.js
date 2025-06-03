import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axios/axios";

export default function useDeleteTask(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ["tasks"],
        mutationFn: (id) => API.delete(`/tasks/${id}`).then((res)=>res.data),
        onSuccess: () => {
            queryClient.invalidateQueries(['tasks']);
        }
    })
}