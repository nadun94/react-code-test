import React from 'react';
import { UserProps } from './Users/UserList';

export type AppContextProps = {
    error?: string;
    loading: boolean;
    hasMore: boolean;
    users: UserProps[];
    page: number;
    setPage: (value: (prevPageNumber: number) => number) => void;
};

export const AppContext = React.createContext<{ current?: AppContextProps }>({});
