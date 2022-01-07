import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";
import { useState, useEffect } from "react";
import { userRequest } from "../../redux/requestMethods";

export default function WidgetSmall() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const res = await userRequest.get("users/?new=true")
            setUsers(res.data)
        }
        getUsers();
    }, [])
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                {users.map(user => (
                    <li className="widgetSmallListItem" key={user._id}>
                    <img src={user.img || "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">{user.username}</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}
