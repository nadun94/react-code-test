import React, { FC, ReactNode, useCallback, useContext, useRef } from 'react';
import { UserListItem } from './UserListItem';
import './style.less';
import { AppContext } from '../AppContext';

export type UserProps = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

const UserList: FC = () => {
    const context = useContext(AppContext).current!;
    const { hasMore, loading, users, setPage } = context;
    const observer = useRef<IntersectionObserver | null>(null);
    const lastUserRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPage((prevPageNumber: number) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, hasMore, setPage],
    );
    const renderUserList = (): ReactNode => {
        return users.map((item: UserProps, key: number) => {
            if (users.length === key + 1) {
                return (
                    <div className={`list-item-container ${!hasMore ? ' last-user' : ''}`} ref={lastUserRef} key={key}>
                        <UserListItem user={item} />
                    </div>
                );
            }
            return (
                <div className={'list-item-container'} key={key}>
                    <UserListItem user={item} />
                </div>
            );
        });
    };

    return <div className={'list-container'}>{users.length > 0 && renderUserList()}</div>;
};

export default UserList;
