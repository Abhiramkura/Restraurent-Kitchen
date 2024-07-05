import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import KitchenHeader from "../KitchenHeader";
import "./index.css";

const KitchenHomePage = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = useCallback(async () => {
    try {
      const token = Cookies.get("jwt_token");
      const response = await fetch("http://localhost:3008/admin/orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch orders");
      }

      const ordersData = await response.json();

      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <>
      <KitchenHeader />
      <div className="admin-homepage-container">
        <h2>Kitchen Dashboard - Orders</h2>
        {orders.map((order, index) => (
          <div key={index} className="order-details">
            <div className="order-header">
              <h3> Ordered By: {order.customer_name}</h3>
              <p>Table Number: {Math.floor(Math.random() * 20) + 1}</p>
            </div>
            <ul className="order-items-list">
              {order.items.map((item, idx) => (
                <li key={idx} className="order-item">
                  <span className="item-name">{item.food_name}</span> -
                  <span className="item-quantity">
                    {" "}
                    {item.total_items} items
                  </span>{" "}
                  (Total Quantity:{" "}
                  <span className="total-quantity">{item.total_quantity}</span>)
                  <br />
                  Chef: <span className="chef-name">{item.chef}</span>
                </li>
              ))}
            </ul>
            <p className="total-cost">Total Cost: ₹{order.total_cost}/-</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default KitchenHomePage;
