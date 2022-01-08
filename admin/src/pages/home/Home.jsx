import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSmall from "../../components/widgetSmall/WidgetSmall";
import WidgetLarge from "../../components/widgetLarge/WidgetLarge";
import { useState, useMemo, useEffect } from "react";
import { userRequest } from "../../redux/requestMethods";

export default function Home() {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

    useEffect(() => {
        const getStats = async () =>{
            try {
               const res = await userRequest.get("/users.stats")
               res.data.map(item => {
                   setUserStats(prev => [
                       ...prev,
                       {name:MONTHS[item._id-1], "Active User": item.total}
                   ])
               }) 
            } catch (error) {
                
            }
        };
        getStats(); 
    },[MONTHS]);

    console.log(userStats)

    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSmall />
                <WidgetLarge />
            </div>
        </div>
    )
}
