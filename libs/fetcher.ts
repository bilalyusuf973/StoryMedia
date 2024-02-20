import axios from 'axios';
import { getSession } from 'next-auth/react';

const fetcher = async (url: string) => {
    const session = await getSession();

    if(!session || !session.user || !session.user.email) 
        return null;

    const res = await axios.post(url, { email: session.user.email });
    const data = await res.data;

    return data;
}

export default fetcher;