import { useState } from "react";

function ReportFound() {
  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [secret, setSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitFoundItem = () => {
    console.log("Submit Found clicked");

    if (!itemName || !category || !location || !secret) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    setError("");

    // ✅ DEMO SAVE (localStorage)
    const foundItem = {
      itemName,
      category,
      location,
      secret,
      createdAt: new Date().toISOString(),
    };

    console.log("Found item saved (demo):", foundItem);

    const existing = JSON.parse(localStorage.getItem("found_items") || "[]");
    localStorage.setItem(
      "found_items",
      JSON.stringify([...existing, foundItem])
    );

    alert("Found item submitted successfully!");

    setItemName("");
    setCategory("");
    setLocation("");
    setSecret("");
    setLoading(false);
  };

  const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "8px",
    border: "1px solid #bbf7d0",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#ecfdf5", padding: "40px" }}>
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
          🧾 Report Found Item
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#065f46",
            marginBottom: "25px",
          }}
        >
          Verification helps ensure the item goes to the right owner
        </p>

        <input
          style={input}
          placeholder="Item Name *"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <input
          style={input}
          placeholder="Category *"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <input
          style={input}
          placeholder="Found Location *"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          style={input}
          placeholder="Secret detail only the owner knows *"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />

        <button
          type="button"
          onClick={submitFoundItem}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            background: loading ? "#999" : "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontSize: "16px",
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Submitting..." : "Submit Found Item"}
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

export default ReportFound;
