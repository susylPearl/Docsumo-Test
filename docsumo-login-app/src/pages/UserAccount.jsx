import React from 'react';
import { useLocation } from 'react-router-dom';

const UserAccount = () => {
    const { state } = useLocation();
    const { full_name } = state && state.user;
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                <label>Hello {full_name}</label>
            </div>
        </>
    )
}

export default UserAccount;