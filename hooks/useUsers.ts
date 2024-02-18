import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useUsers = () => {
    const { data, error, isLoading } = useSWR('/api/users', fetcher);
    return { data, error, isLoading };
};

export default useUsers;