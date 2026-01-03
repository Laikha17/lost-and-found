function MatchResult() {
  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "sans-serif" }}>

      {/* HEADER */}
      <div style={{
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        color: "white",
        padding: "40px"
      }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Possible Match Found
        </h1>
        <p style={{ marginTop: "8px", opacity: 0.9 }}>
          Gemini AI has identified a potential match based on item details.
        </p>
      </div>

      {/* MATCH CARD */}
      <div style={{
        maxWidth: "800px",
        margin: "40px auto",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
      }}>

        {/* SCORE */}
        <div style={{
          textAlign: "center",
          marginBottom: "30px"
        }}>
          <h2 style={{ fontSize: "22px", marginBottom: "8px" }}>
            Similarity Score
          </h2>
          <div style={{
            fontSize: "42px",
            fontWeight: "bold",
            color: "#2563eb"
          }}>
            87%
          </div>
        </div>

        {/* COMPARISON */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginBottom: "30px"
        }}>

          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Lost Item
            </h3>
            <ul style={{ fontSize: "14px", color: "#475569" }}>
              <li>Item: Black Wallet</li>
              <li>Location: Library Block</li>
              <li>Description: Leather wallet with college ID</li>
            </ul>
          </div>

          <div>
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              Found Item
            </h3>
            <ul style={{ fontSize: "14px", color: "#475569" }}>
              <li>Item: Black Wallet</li>
              <li>Location: Library Entrance</li>
              <li>Description: Wallet found near library gate</li>
            </ul>
          </div>

        </div>

        {/* AI REASONING */}
        <div style={{
          background: "#f1f5f9",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px"
        }}>
          <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
            Gemini AI Reasoning
          </h3>
          <p style={{ fontSize: "14px", color: "#334155" }}>
            Both items are described as black wallets and were reported near the
            same campus location. The found item description matches the lost
            item’s unique detail of containing a college ID, indicating a high
            probability of being the same object.
          </p>
        </div>

        {/* ACTION */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px"
        }}>
          <button style={primaryBtn}>
            This Might Be Mine
          </button>
          <button style={secondaryBtn}>
            Not My Item
          </button>
        </div>

      </div>

    </div>
  )
}

const primaryBtn = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
}

const secondaryBtn = {
  padding: "12px 20px",
  background: "#e2e8f0",
  color: "#1e293b",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
}

export default MatchResult
