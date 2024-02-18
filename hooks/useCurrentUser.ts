import useSWR from 'swr';
import fetcher from '@/libs/fetcher';

const useCurrentUser = () => {
    const { data, error, isLoading } = useSWR('/api/auth/currentuser', fetcher);
    return { data, error, isLoading };
};

export default useCurrentUser;