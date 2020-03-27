import { useEffect, useState } from 'react';
import { UserProps } from './UserList';
import axios from 'axios';

export const UseUserFetch: (
    page: number,
) => { hasMore: boolean; loading: boolean; error: string | undefined; users: UserProps[] } = (page) => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();

    const fetchUsers = (): void => {
        setLoading(true);
        setError(undefined);
        axios
            .get(`https://reqres.in/api/users?page=${page}`)
            .then((result: any) => {
                if (result.status === 200) {
                    if (result.data.data.length === 0) {
                        setError('This is it...');
                        setHasMore(false);
                    } else {
                        setUsers([...users, ...result.data.data]);
                        setHasMore(true);
                    }
                } else {
                    setError('Something wrong...');
                }
                setLoading(false);
            })
            .catch((e: any) => {
                setLoading(false);
                setError('Something wrong...');
            });
    };
    useEffect(fetchUsers, [page]);
    return { loading, users, hasMore, error };
};
