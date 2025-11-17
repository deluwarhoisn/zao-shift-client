import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContexs/AuthContexs';

const UseAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
};

export default UseAuth;