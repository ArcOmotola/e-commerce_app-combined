import React from 'react';
import "./widgetLg.css";

export const WidgetLg = () => {
    
    const Button = ({type}) => {
        return<button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nathan Foster</span>
                    </td>
                    <td className="widgetLgDate">2 Nov. 2021</td>
                    <td className="widgetLgAmount">$300</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nathan Foster</span>
                    </td>
                    <td className="widgetLgDate">2 Nov. 2021</td>
                    <td className="widgetLgAmount">$300</td>
                    <td className="widgetLgStatus"><Button type="Declined"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nathan Foster</span>
                    </td>
                    <td className="widgetLgDate">2 Nov. 2021</td>
                    <td className="widgetLgAmount">$300</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw1NlRWcVU4NkJpUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Nathan Foster</span>
                    </td>
                    <td className="widgetLgDate">2 Nov. 2021</td>
                    <td className="widgetLgAmount">$300</td>
                    <td className="widgetLgStatus"><Button type="Approved"/></td>
                </tr>
            </table>
        </div>
    )
}
