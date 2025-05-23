import React from "react";
import "../styles/SubscriptionCard.css";

const statusColors = {
  ACTIVE: "#4caf50",
  SUSPENDED: "#ff5722",
  PENDING: "#ff9800",
};

const syncColors = {
  IN_SYNC: "#2196f3",
  NOT_FOUND_S2: "#f44336",
  NOT_FOUND_TEMPTATION: "#9c27b0",
};

const SubscriptionCard = ({ sub }) => {
  // Generate brand initials for logo circle if no image
  const brandInitials = sub.brand ? sub.brand.slice(0, 2).toUpperCase() : 'UN';

  return (
    <div className="subscription-card">
      <div className="brand-logo">{brandInitials}</div>
      <div className="subscription-info">
        <div className="top-row">
          <h3 className="brand-name">{brandInitials}</h3>
          <span
            className="status-badge"
            style={{ backgroundColor: statusColors[sub.status] || "#777" }}
          >
            {sub.status}
          </span>
        </div>
        <p className="formula">{sub.formula}</p>
        <div className="bottom-row">
          <span
            className="sync-badge"
            style={{ backgroundColor: syncColors[sub.sync] || "#bbb" }}
          >
            {sub.sync.replace(/_/g, " ")}
          </span>
          <span className="subscription-id">{sub.id}</span>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;
