import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "../home/home.css"

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart />
        </div>
    )
}
