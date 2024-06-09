import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import OrderMenuItem from './OrderMenuItem';

const OrderItem = ({ order }) => {
  const [menuItems, setMenuItems] = useState({});
  
  useEffect(() => {
    setMenuItems(order.orderItems);
  }, []);
  
  const keys = Object.keys(menuItems);

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.col5}>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title style={styles.cardTitle}>{order.hotelID.hotelName}</Card.Title>
              <Card.Text><strong>Total:</strong> ${order.amount}</Card.Text>
              <Card.Text><strong>Order Time:</strong> {new Date(order.orderTime).toLocaleString()}</Card.Text>
              <Card.Text><strong>Delivery Time:</strong> {new Date(order.deliveryTime).toLocaleString()}</Card.Text>
              <Card.Text><strong>Order Status:</strong> {order.orderStatusID}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div style={styles.col7}>
          {keys.map((item) => (
            <OrderMenuItem key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '2px solid #843de6',
    borderRadius: '10px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  col5: {
    flex: '0 0 40%',
    padding: '10px',
  },
  col7: {
    flex: '0 0 60%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  card: {
    border: 'none',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '1.5em',
    color: '#2C3E50',
  },
};

export default OrderItem;
