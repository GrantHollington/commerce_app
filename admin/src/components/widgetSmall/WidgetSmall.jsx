import "./widgetSmall.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">New Join Members</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="widgetSmallImage" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUsername">Hellen Keller</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
