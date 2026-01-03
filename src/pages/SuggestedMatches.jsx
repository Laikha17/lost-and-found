import { useEffect, useState } from "react";

function SuggestedMatches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    console.log("SuggestedMatches page loaded");

    const lostItems = JSON.parse(localStorage.getItem("lost_items") || "[]");
    const foundItems = JSON.parse(localStorage.getItem("found_items") || "[]");

    console.log("Lost items:", lostItems);
    console.log("Found items:", foundItems);

    const generatedMatches = [];

    lostItems.forEach((lost) => {
      foundItems.forEach((found) => {
        let score = 0;

        // category match
        if (
          lost.category &&
          found.category &&
          lost.category.toLowerCase() === found.category.toLowerCase()
        ) {
          score += 50;
        }

        // location similarity
        if (
          lost.location &&
          found.location &&
          found.location
            .toLowerCase()
            .includes(lost.location.toLowerCase())
        ) {
          score += 30;
        }

        // item name keyword match
        if (
          lost.itemName &&
          found.itemName &&
          found.itemName
            .toLowerCase()
            .includes(lost.itemName.toLowerCase())
        ) {
          score += 20;
        }

        if (score >= 50) {
          generatedMatches.push({
            lost,
            found,
            score,
          });
        }
      });
    });

    setMatches(generatedMatches);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
        }}
      >
        🤖 Suggested Matches
      </h2>

      {matches.length === 0 && (
        <p style={{ textAlign: "center", color: "#555" }}>
          No matches found yet
        </p>
      )}

      {matches.map((match, index) => (
        <div
          key={index}
          style={{
            maxWidth: "800px",
            margin: "0 auto 25px",
            background: "white",
            padding: "24px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Lost */}
            <div>
              <h4>🔴 Lost Item</h4>
              <p><b>{match.lost.itemName}</b></p>
              <p>{match.lost.location}</p>
            </div>

            {/* Score */}
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: "26px",
                  fontWeight: "bold",
                  color: "#16a34a",
                }}
              >
                {match.score}%
              </p>
              <p style={{ color: "#555" }}>Match Confidence</p>
            </div>

            {/* Found */}
            <div>
              <h4>🟢 Found Item</h4>
              <p><b>{match.found.itemName}</b></p>
              <p>{match.found.location}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuggestedMatches;
