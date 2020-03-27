import React, { FC, ReactNode } from 'react';
import './style.less';

export const Loader: FC<ReactNode> = () => {
    return (
        <div className={'loader'}>
            <div className="multi-spinner-container">
                <div className="multi-spinner">
                    <div className="multi-spinner">
                        <div className="multi-spinner">
                            <div className="multi-spinner">
                                <div className="multi-spinner">
                                    <div className="multi-spinner" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
