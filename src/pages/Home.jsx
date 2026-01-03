import { Link } from "react-router-dom";
function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f7fb" }}>

      {/* HERO */}
      <div
        style={{
          background: "linear-gradient(90deg, #1e3a8a, #312e81)",
          color: "white",
          padding: "60px 40px",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          ACCIO – Campus Lost & Found Portal
        </h1>
        <p style={{ fontSize: "18px", maxWidth: "700px" }}>
          A secure, college-exclusive platform to report, match, and recover
          lost and found items using intelligent matching.
        </p>
      </div>

      {/* ACTION CARDS */}
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          padding: "60px 20px",
          flexWrap: "wrap",
        }}
      >
        {/* LOST */}
        <div
          style={{
            background: "white",
            width: "350px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
            I Lost Something
          </h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            Lost an item on campus? Submit details and let the system help you
            find possible matches.
          </p>
          <a
            href="/report-lost"
            style={{
              display: "inline-block",
              background: "#2563eb",
              color: "white",
              padding: "10px 18px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Report Lost Item
          </a>
        </div>

        {/* FOUND */}
        <div
          style={{
            background: "white",
            width: "350px",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
            I Found Something
          </h2>
          <p style={{ color: "#555", marginBottom: "20px" }}>
            Found an item on campus? Upload details and help return it safely to
            its owner.
          </p>
          <a
            href="/report-found"
            style={{
              display: "inline-block",
              background: "#16a34a",
              color: "white",
              padding: "10px 18px",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Report Found Item
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          textAlign: "center",
          color: "#666",
          padding: "20px",
          fontSize: "14px",
        }}
      >
        Secure · College-only Access · Powered by Firebase
      </div>

    </div>
  );
}

export default Home;
