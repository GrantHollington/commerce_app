import "../featuredInfo/featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import { useState, useEffect } from "react"
import { userRequest } from "../../redux/requestMethods"

export default function FeaturedInfo() {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get("orders/income")
                setIncome(res.data);
                setPerc((res.data[1].total*100) / res.data[0].total - 100);
            } catch (error) {
                console.log(error);
            }
        }
        getIncome()
    }, [])

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income[1]?.total}</span>
                    <span className="featuredMoney">{Math.floor(perc)}%{""}{perc < 0 ?(

                        <ArrowDownward className="featuredIcon negative"/>
                    ) : (
                        <ArrowUpward className="featuredIcon"/>
                    )}
                </span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
             <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $4,415</span>
                    <span className="featuredMoney">
                        -1.4<ArrowDownward /></span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
             <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,225</span>
                    <span className="featuredMoney">-11.4<ArrowUpward /></span>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
        </div>
    )
}
