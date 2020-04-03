import React from "react";
// import Users from "./Users"
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
const Useritem = ({ user: { login, avatar_url } }) => {

    // const { login, avatar_url, html_url } = props.user;
    return (
        <div className="card text-center">
            <div>
                <img src={avatar_url} className="round-img" alt='Mypic' style={{ width: "100px" }}></img>
                <h3>{login}</h3>
                <Link
                    to={`/user/${login}`}
                    className="btn btn-dark btn-sm my-1"
                   >Git Profile
                </Link>
            </div>
        </div>
    )
}

Useritem.propTypes = {
    user: PropTypes.object.isRequired
}






export default Useritem;




