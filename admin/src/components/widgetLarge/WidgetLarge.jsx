import "./widgetLarge.css"

export default function WidgetLarge() {

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
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="data:image/jpeg;base64,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" alt="" className="widgetLargeImage" />
                        <span className="widgetLargeName">Karen Karen</span>
                    </td>
                    <td className="widgetLargeDate">2 June 2021</td>
                    <td className="widgetLargeAmount">$ 122.00</td>
                    <td className="widgetLargeStatus"><Button type="Approved"></Button></td>
                </tr>
            </table>
        </div>
    )
}
