import { useMutation, useQueryClient } from "@tanstack/react-query";
import API from "../axios/axios";

export default function useUpdateTask(){
    const queryClient = useQueryClient();
    return useMutation({
        mutationKey: ['tasks'],
        mutationFn: ({id, updatedTask}) =>
            API.put(`/tasks/${id}`, updatedTask).then((res)=>res.data),
            onSuccess: () => {
                queryClient.invalidateQueries(['tasks']);
            },
    });
}