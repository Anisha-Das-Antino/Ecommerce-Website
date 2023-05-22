import React, { useEffect, useState } from "react";
import "./Notification.css";
const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch("api/notifications");
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <div className="notification-container">
      <h2 className="notification-heading" style={{ padding: "50px", paddingLeft: "550px"}}>Notifications</h2>
      {notifications.length === 0 ? (
        <p className="notification-message" style={{ padding: "50px", paddingLeft: "540px"}}>No notifications found.</p>
      ) : (
        <ul className="notification-list">
          {notifications.map((notification) => (
            <li key={notification.id} className="notification-item">
              <div className="notification-icon">
                <img
                  src={notification.icon}
                  alt="Notification Icon"
                  className="notification-icon-image"
                />
              </div>
              <div className="notification-content">
                <h3 className="notification-title">{notification.title}</h3>
                <p className="notification-text">{notification.message}</p>
                <small className="notification-timestamp">
                  {notification.timestamp}
                </small>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notification;
