import React, { FC } from 'react';
import { UserProps } from './UserList';

type UserListItemProps = {
    user: UserProps;
};
export const UserListItem: FC<UserListItemProps> = (props: UserListItemProps) => {
    // eslint-disable-next-line @typescript-eslint/camelcase
    const { avatar, first_name, last_name, email } = props.user;
    return (
        <div className="list-item">
            <div className="image-container">
                {/* eslint-disable-next-line @typescript-eslint/camelcase */}
                <img src={avatar} alt={first_name} className="avatar" />
            </div>
            <div className="details">
                <h2>
                    {/* eslint-disable-next-line @typescript-eslint/camelcase */}
                    {first_name} {last_name}
                </h2>
                <span>{email}</span>
            </div>
        </div>
    );
};
