import axios from 'axios';
import { getSession } from 'next-auth/react';

const fetcher = async (url: string) => {
    const session = await getSession();

    const res = await axios.post(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: session?.user?.email })
    });
    const data = await res.data;
    return data;
}

export default fetcher;