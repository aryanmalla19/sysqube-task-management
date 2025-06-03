import { useQuery } from '@tanstack/react-query';
import API from '../axios/axios';

export default function useFetchTasks({ priority, status, search, sortBy }) {
  return useQuery({
    queryKey: ['tasks', priority, status, search, sortBy],
    queryFn: () =>
      API.get('/tasks', {
        params: {
          priority: priority !== 'all' ? priority : undefined,
          status: status !== 'all' ? status : undefined,
          search: search || undefined,
          sort: sortBy || undefined,
        },
      }).then((res) => res.data),
  });
}
