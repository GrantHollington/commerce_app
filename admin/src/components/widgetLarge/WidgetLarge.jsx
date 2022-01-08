import "./widgetLarge.css"
import { useEffect, useState } from "react"
import {format} from "timeago.js"
import { userRequest } from "../../redux/requestMethods"

export default function WidgetLarge() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            const res = await userRequest.get("orders")
            setOrders(res.data)
        }
        getOrders();
    }, [])
    
    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }
    return (
        <div className='widgetLarge'>
            <h3 className="widgetLargeTitle">Latest Transactions</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Customer</th>
                    <th className="widgetLargeTh">Date</th>
                    <th className="widgetLargeTh">Amount</th>
                    <th className="widgetLargeTh">Status</th>
                </tr>
                {orders.map(order => (
                    <tr className="widgetLargeTr" key={order._id}>
                    <td className="widgetLargeUser">
                        <span className="widgetLargeName">{order.userId}</span>
                    </td>
                    <td className="widgetLargeDate">{format(order.createdAt)}</td>
                    <td className="widgetLargeAmount">${order.amount}</td>
                    <td className="widgetLargeStatus"><Button type={order.status}></Button></td>
                </tr>
                ))}
            </table>
        </div>
    )
}
