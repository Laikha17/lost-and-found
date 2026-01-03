import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase";

function Leaderboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const q = query(
          collection(db, "leaderboard"),
          orderBy("points", "desc")
        );
        const snap = await getDocs(q);
        setUsers(snap.docs.map(d => d.data()));
      } catch (e) {
        console.error(e);
      }
    };

    fetchLeaderboard();
  }, []);

  const page = {
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Segoe UI, Arial",
    background: "linear-gradient(120deg, #fef3c7, #e0e7ff)",
  };

  const container = {
    maxWidth: "900px",
    margin: "0 auto",
  };

  const card = (rank) => ({
    background: "white",
    padding: "18px 22px",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
    borderLeft:
      rank === 1
        ? "6px solid #facc15"
        : rank === 2
        ? "6px solid #94a3b8"
        : rank === 3
        ? "6px solid #d97706"
        : "6px solid #6366f1",
    transition: "transform 0.25s, box-shadow 0.25s",
  });

  const medal = (rank) =>
    rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`;

  return (
    <div style={page}>
      <div style={container}>
        <h1
          style={{
            fontSize: "36px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          🏆 Leaderboard
        </h1>

        {users.length === 0 && (
          <p style={{ textAlign: "center", color: "#555" }}>
            No leaderboard data available yet.
          </p>
        )}

        {users.map((user, index) => {
          const rank = index + 1;
          return (
            <div
              key={index}
              style={card(rank)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 18px 35px rgba(0,0,0,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.12)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <span style={{ fontSize: "22px" }}>{medal(rank)}</span>
                <div>
                  <p style={{ fontWeight: "600" }}>
                    {user.email || "Anonymous User"}
                  </p>
                  <p style={{ fontSize: "13px", color: "#555" }}>
                    Helpful contributions
                  </p>
                </div>
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#4338ca",
                }}
              >
                {user.points || 0} pts
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Leaderboard;
