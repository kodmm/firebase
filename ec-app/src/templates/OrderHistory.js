import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/styles";
import {getOrdersHistory} from '../reducks/users/selectors';
import {fetchOrdersHistory} from '../reducks/users/operations';
import { OrderHistoryItem } from '../components/Products/';
const useStyles = makeStyles((theme) => ({
    orderList: {
        backgroundColor: '#f5f5f5',
        margin: '0 auto',
        padding: 32,
        width: '100%',
    }
}));

const OrderHistory = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const orders = getOrdersHistory(selector)

    useEffect(() => {
        dispatch(fetchOrdersHistory())
    }, []);
    console.log(orders);
    return(
        <section className="c-section-wrapin">
            <List className={classes.orderList}>
                {orders.length > 0 &&(
                    orders.map(order => <OrderHistoryItem order={order} key={order.id} />)
                )}
            </List>
        </section>
    )
}

export default OrderHistory 