import React from 'react';
import "./widgetSm.css";
import { Visibility } from '@material-ui/icons';

export const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeyemi John</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeyemi John</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1573497019707-1c04de26e58c?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeyemi John</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1615813967515-e1838c1c5116?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHw1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeyemi John</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img className="widgetSmImg" src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Adeyemi John</span>
                        <span className="widgetUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li> 
            </ul>
        </div>
    )
}
