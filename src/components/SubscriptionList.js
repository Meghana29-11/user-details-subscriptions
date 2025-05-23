import React from "react";
import "../styles/SubscriptionList.css";

const data = {
  source: "External ABC",
  subscriptions: [
    { id: "123456789_A", brand: "AD", formula: "AD_P", status: "Active", sync: "In sync" },
    { id: "123456789_A", brand: "HLN", formula: "AD_P", status: "Suspended", sync: "Out of sync" },
    { id: "123456789_A", brand: "VK", formula: "VK_D", status: "Active", sync: "Not found in S2" },
    { id: "123456789_A", brand: "", formula: "", status: "Expired", sync: "Not found in Temptation" },
    { id: "123456789_A", brand: "PAR", formula: "HP_P", status: "Suspended", sync: "In sync" },
    { id: "123456789_A", brand: "PAR", formula: "HP_D", status: "Active", sync: "In sync" }
  ]
};

const SubscriptionList = () => {
  const renderStatus = (status) => (
    <span className={`status-badge ${status.toLowerCase()}`}>{status}</span>
  );

  const renderSync = (sync) => {
  let badgeClass = "";
  let iconSymbol = "";
  let color = "";

  const lowerSync = sync.toLowerCase();

  if (lowerSync === "in sync") {
    badgeClass = "green";
    iconSymbol = "✔";
  } else if (lowerSync === "out of sync") {
    badgeClass = "orange";
    iconSymbol = "⚠";
  } else if (lowerSync.includes("not found")) {
    badgeClass = "red";
    iconSymbol = "❗";
  }

  return (
    <span className={`sync-badge ${badgeClass}`}>
      <span className="sync-icon">{iconSymbol}</span>
      {sync}
    </span>
  );
};


  return (
    <div className="subscription-list">
      <h2>Subscriptions</h2>
      <table className="subscription-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>BRAND</th>
            <th>FORMULA</th>
            <th>STATUS</th>
            <th>SYNC</th>
          </tr>
        </thead>
        <tbody>
          {data.subscriptions.map((sub, index) => (
            <tr key={index}>
              <td>{sub.id}</td>
              <td>{sub.brand}</td>
              <td>{sub.formula}</td>
              <td>{renderStatus(sub.status)}</td>
              <td>{renderSync(sub.sync)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="source">🔲 Source: {data.source}</p>
    </div>
  );
};

export default SubscriptionList;
