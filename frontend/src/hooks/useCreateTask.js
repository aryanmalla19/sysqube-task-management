import { useMutation, useQueryClient } from '@tanstack/react-query';
import API from '../axios/axios';

export default function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['tasks'],
    mutationFn: (newTask) => API.post('/tasks', newTask).then(res => res.data),
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks']);
    },
  });
}
