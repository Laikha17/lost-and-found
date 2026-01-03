import { useState } from "react"
import { saveFoundItem } from "../mockBackend"

function FoundItem() {
  const [itemName, setItemName] = useState("")
  const [location, setLocation] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  return (
    <>
      {/* NAVBAR */}

      {/* PAGE CONTENT */}
      <div style={{ minHeight: "100vh", background: "#f8fafc", fontFamily: "sans-serif" }}>

        {/* HEADER */}
        <div
          style={{
            background: "linear-gradient(135deg, #14532d, #166534)",
            color: "white",
            padding: "40px"
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
            Report Found Item
          </h1>
          <p style={{ marginTop: "8px", opacity: 0.9 }}>
            Help return a found item to its rightful owner.
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
            placeholder="Item Name (e.g., Blue Backpack)"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={inputStyle}
          />

          {/* CATEGORY */}
          <input
            placeholder="Category (Phone, Wallet, ID Card, etc.)"
            style={inputStyle}
          />

          {/* LOCATION */}
          <input
            placeholder="Found Location (e.g., Canteen Area)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={inputStyle}
          />

          {/* DATE & TIME */}
          <input type="datetime-local" style={inputStyle} />

          {/* IMAGE UPLOAD (UI ONLY) */}
          <div
            style={{
              border: "2px dashed #bbf7d0",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              marginBottom: "20px",
              color: "#166534"
            }}
          >
            Upload Photo (Required)
          </div>

          {/* ITEM HANDOVER OPTION */}
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              Item currently with:
            </p>

            <label style={{ display: "block", marginBottom: "6px" }}>
              <input type="radio" name="handover" /> Finder (You)
            </label>

            <label style={{ display: "block" }}>
              <input type="radio" name="handover" /> College Security / Office
            </label>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            onClick={() => {
              if (!itemName || !location) {
                setError("Please fill all required fields before submitting.")
                setSubmitted(false)
                return
              }

              // ✅ SAVE TO MOCK DATABASE
              saveFoundItem({
                itemName,
                location
              })

              setError("")
              setSubmitted(true)

              // OPTIONAL: clear form
              setItemName("")
              setLocation("")
            }}
            style={{
              width: "100%",
              padding: "12px",
              background: "#16a34a",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Submit Found Item
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
                marginTop: "12px",
                background: "#ecfdf5",
                padding: "10px",
                borderRadius: "6px",
                color: "#065f46",
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
            Possible matches will be suggested automatically.
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
  border: "1px solid #bbf7d0",
  fontSize: "14px"
}

export default FoundItem
