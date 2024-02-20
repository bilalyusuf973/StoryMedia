import axios from 'axios';
import { getSession } from 'next-auth/react';

const fetcher = async (url: string) => {
    const session = await getSession();

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session?.user?.email })
    };

    const res = await axios.post(url, requestOptions);
    const data = await res.data;
    return data;
}

export default fetcher;