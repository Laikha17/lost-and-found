import { useState } from "react"
import { saveLostItem } from "../mockBackend"

function LostItem() {
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [itemName, setItemName] = useState("")
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  return (
    <>
      {/* NAVBAR */}

      {/* PAGE CONTENT */}
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "sans-serif" }}>

        {/* HEADER */}
        <div
          style={{
            background: "linear-gradient(135deg, #1e40af, #1e3a8a)",
            color: "white",
            padding: "40px"
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
            Report Lost Item
          </h1>
          <p style={{ marginTop: "8px", opacity: 0.9 }}>
            Provide accurate details to help us find a possible match.
          </p>
        </div>

        {/* FORM CARD */}
        <div
          style={{
            maxWidth: "600px",
            margin: "40px auto",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
          }}
        >
          <h2 style={{ fontSize: "20px", marginBottom: "20px" }}>
            Item Details
          </h2>

          {/* ITEM NAME */}
          <input
            placeholder="Item Name (e.g., Black Wallet)"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={inputStyle}
          />

          {/* CATEGORY */}
          <input
            placeholder="Category (Phone, ID Card, Bag, etc.)"
            style={inputStyle}
          />

          {/* LOCATION */}
          <input
            placeholder="Last Seen Location (e.g., Library Block)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={inputStyle}
          />

          {/* DATE & TIME */}
          <input type="datetime-local" style={inputStyle} />

          {/* DESCRIPTION */}
          <textarea
            placeholder="Describe the item (color, brand, unique marks)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={inputStyle}
          />

          {/* IMAGE UPLOAD (UI ONLY) */}
          <div
            style={{
              border: "2px dashed #cbd5f5",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: "20px",
              color: "#475569"
            }}
          >
            Upload Photo (Optional)
          </div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={() => {
              if (!itemName || !location || !description) {
                setError("Please fill all required fields before submitting.")
                setSubmitted(false)
                return
              }

              // ✅ SAVE TO MOCK DATABASE
              saveLostItem({
                itemName,
                location,
                description
              })

              setError("")
              setSubmitted(true)

              // OPTIONAL: clear form
              setItemName("")
              setLocation("")
              setDescription("")
            }}
            style={{
              width: "100%",
              padding: "12px",
              background: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Submit Lost Item
          </button>

          {/* ERROR MESSAGE */}
          {error && (
            <p
              style={{
                marginTop: "12px",
                color: "#b91c1c",
                fontSize: "14px",
                textAlign: "center"
              }}
            >
              {error}
            </p>
          )}

          {/* SUCCESS MESSAGE */}
          {submitted && (
            <p
              style={{
                marginTop: "15px",
                background: "#eff6ff",
                padding: "10px",
                borderRadius: "6px",
                color: "#1e3a8a",
                fontSize: "14px",
                textAlign: "center"
              }}
            >
              ✔ Item submitted successfully. AI matching in progress…
            </p>
          )}

          <p
            style={{
              marginTop: "12px",
              fontSize: "13px",
              color: "#64748b",
              textAlign: "center"
            }}
          >
            You will be notified if a possible match is found.
          </p>
        </div>
      </div>
    </>
  )
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "1px solid #cbd5f5",
  fontSize: "14px"
}

export default LostItem
