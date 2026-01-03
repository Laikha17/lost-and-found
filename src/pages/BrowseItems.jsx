import { useEffect, useState } from "react";
import { listenToLostItems, listenToFoundItems } from "../services/firestoreService";

function BrowseItems() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Real-time listeners for both collections
    const unsubscribeLost = listenToLostItems((items) => {
      setLostItems(items);
      setLoading(false);
    });

    const unsubscribeFound = listenToFoundItems((items) => {
      setFoundItems(items);
      setLoading(false);
    });

    // Cleanup listeners on unmount
    return () => {
      unsubscribeLost();
      unsubscribeFound();
    };
  }, []);


  const page = {
    minHeight: "100vh",
    padding: "40px 20px",
    fontFamily: "Segoe UI, Arial",
    background: "linear-gradient(120deg, #e0e7ff, #fdf2f8)",
  };

  const container = {
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const sectionTitle = (color) => ({
    fontSize: "26px",
    marginBottom: "20px",
    color,
  });

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  };

  const card = (accent) => ({
    background: "white",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
    borderTop: `6px solid ${accent}`,
    transition: "transform 0.25s, box-shadow 0.25s",
  });

  const badge = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "999px",
    background: "#eef2ff",
    color: "#3730a3",
    fontSize: "12px",
    marginBottom: "10px",
  };

  return (
    <div style={page}>
      <div style={container}>

        <h1 style={{ fontSize: "34px", marginBottom: "40px", textAlign: "center" }}>
          🔍 Browse Lost & Found Items
        </h1>

        {loading && (
          <p style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
            Loading items...
          </p>
        )}

        {!loading && (
          <>
            {/* LOST ITEMS */}
            <section style={{ marginBottom: "60px" }}>
              <h2 style={sectionTitle("#1d4ed8")}>Lost Items</h2>

              {lostItems.length === 0 && (
                <p style={{ color: "#555" }}>No lost items reported yet.</p>
              )}

              <div style={grid}>
                {lostItems.map((item) => (
                  <div
                    key={item.id}
                    style={card("#2563eb")}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.18)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
                    }}
                  >
                    <span style={badge}>{item.category || "Category"}</span>
                    <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                      {item.itemName || "Unnamed Item"}
                    </h3>
                    <p><b>Location:</b> {item.location || "N/A"}</p>
                    {item.lostTime && (
                      <p><b>Lost At:</b> {new Date(item.lostTime).toLocaleString()}</p>
                    )}
                    {item.description && (
                      <p><b>Details:</b> {item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* FOUND ITEMS */}
            <section>
              <h2 style={sectionTitle("#047857")}>Found Items</h2>

              {foundItems.length === 0 && (
                <p style={{ color: "#555" }}>No found items reported yet.</p>
              )}

              <div style={grid}>
                {foundItems.map((item) => (
                  <div
                    key={item.id}
                    style={card("#16a34a")}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-6px)";
                      e.currentTarget.style.boxShadow = "0 18px 35px rgba(0,0,0,0.18)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
                    }}
                  >
                    <span style={badge}>{item.category || "Category"}</span>
                    <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                      {item.itemName || "Unnamed Item"}
                    </h3>
                    <p><b>Location:</b> {item.location || "N/A"}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

      </div>
    </div>
  );
}

export default BrowseItems;
