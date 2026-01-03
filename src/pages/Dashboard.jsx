import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Dashboard() {
  const [lostCount, setLostCount] = useState(0);
  const [foundCount, setFoundCount] = useState(0);
  const [matchCount, setMatchCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const lostSnap = await getDocs(collection(db, "lost_items"));
        const foundSnap = await getDocs(collection(db, "found_items"));
        const matchSnap = await getDocs(collection(db, "matches"));

        setLostCount(lostSnap.size);
        setFoundCount(foundSnap.size);
        setMatchCount(matchSnap.size);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCounts();
  }, []);

  const cardStyle = {
    background: "white",
    padding: "24px",
    borderRadius: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "260px",
    textAlign: "center",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "30px", textAlign: "center" }}>
        Dashboard Overview
      </h1>

      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h2 style={{ fontSize: "22px", color: "#2563eb" }}>{lostCount}</h2>
          <p>Total Lost Items</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: "22px", color: "#16a34a" }}>{foundCount}</h2>
          <p>Total Found Items</p>
        </div>

        <div style={cardStyle}>
          <h2 style={{ fontSize: "22px", color: "#9333ea" }}>{matchCount}</h2>
          <p>Successful Matches</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
