import React, { useState, useEffect } from 'react';
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons';
import { userRequest } from '../../requestMethods';

export const WidgetSm = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true");
                setUsers(res.data);
            } catch {}
        };
        getUsers();
    }, []);


    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                {users.map((user) => (
                    <li className="widgetSmListItem" key={user.id}>
                        <img className="widgetSmImg" src={user.img || "http://www.guvitgowl.com/images/admin/no-avatar.png"} alt="" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">{user.username}</span>
                        </div>
                        <button className="widgetSmButton">
                            <Visibility className="widgetSmIcon"/> Display
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
