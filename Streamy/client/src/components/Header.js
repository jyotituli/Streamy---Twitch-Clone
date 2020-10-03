import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

//cid 3584645026-1f5121s33i1b458tdtrbhmufo923mud7.apps.googleusercontent.com

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Streamy
        </Link>
            <div className="right menu">
                <Link to="/" className="item">
                    All Streams
            </Link>
            <GoogleAuth/>
            </div>
        </div>
    )
};
export default Header;