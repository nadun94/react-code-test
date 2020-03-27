import React, { FC, ReactNode, useEffect, useState } from 'react';
import UserList from './Users/UserList';
import './assets/Utils.less';
import { AppContext } from './AppContext';
import { Loader } from './Loader/Loader';
import { UseUserFetch } from './Users/UseUserFetch';

const App: FC = () => {
    const [page, setPage] = useState<number>(0);
    const { loading, users, hasMore, error } = UseUserFetch(page);
    const [initialLoad, setInitialLoad] = useState<boolean>(true);

    useEffect(() => {
        window.setTimeout(() => setInitialLoad(false), 3000, 'That was really slow!');
    }, []);
    const renderLoader = (): ReactNode => {
        if (initialLoad) {
            return <Loader />;
        }
        return <UserList />;
    };
    return (
        <AppContext.Provider
            value={{
                current: {
                    error,
                    page,
                    users,
                    loading,
                    setPage,
                    hasMore,
                },
            }}
        >
            {renderLoader()}
        </AppContext.Provider>
    );
};

export default App;
