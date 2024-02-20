import axios from 'axios';
import { getSession } from 'next-auth/react';

const fetcher = async (url: string) => {
    const session = await getSession();

    if(!session || !session.user || !session.user.email) return null;

    const email = session.user.email;

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
    };

    const res = await axios.post(url, requestOptions);
    const data = await res.data;

    return data;
}

export default fetcher;