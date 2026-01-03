import { useState } from "react";

function ReportLost() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [lostTime, setLostTime] = useState("");
  const [description, setDescription] = useState("");
  const [howLost, setHowLost] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitLostItem = () => {
    console.log("Submit Lost clicked");

    if (!itemName || !category || !location) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    setError("");

    // ✅ DEMO SAVE (INSTANT – NO FIREBASE)
    const lostItem = {
      itemName,
      category,
      location,
      lostTime,
      description,
      howLost,
      createdAt: new Date().toISOString(),
    };

    console.log("Lost item saved (demo):", lostItem);

    // store in localStorage for demo
    const existing = JSON.parse(localStorage.getItem("lost_items") || "[]");
    localStorage.setItem(
      "lost_items",
      JSON.stringify([...existing, lostItem])
    );

    alert("Lost item submitted successfully!");

    // reset form
    setItemName("");
    setCategory("");
    setLocation("");
    setLostTime("");
    setDescription("");
    setHowLost("");

    setLoading(false);
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #c7d2fe",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#eef2ff", padding: "40px" }}>
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          background: "white",
          padding: "32px",
          borderRadius: "18px",
          boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          🔍 Report Lost Item
        </h2>

        <p style={{ textAlign: "center", color: "#555", marginBottom: "25px" }}>
          More details help us find your item faster
        </p>

        <input
          style={input}
          placeholder="Item Name *"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <input
          style={input}
          placeholder="Category * (Wallet, Phone, ID)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          style={input}
          placeholder="Last Seen Location *"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="datetime-local"
          style={input}
          value={lostTime}
          onChange={(e) => setLostTime(e.target.value)}
        />

        <input
          style={input}
          placeholder="How do you think it was lost?"
          value={howLost}
          onChange={(e) => setHowLost(e.target.value)}
        />

        <textarea
          style={{ ...input, height: "80px" }}
          placeholder="Additional description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          type="button"
          onClick={submitLostItem}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "#999" : "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Lost Item"}
        </button>

        {error && (
          <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default ReportLost;
