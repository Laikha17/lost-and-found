import { useEffect, useState } from "react";

function Admin() {
  const [foundItems, setFoundItems] = useState([]);
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    console.log("Admin portal loaded");

    const storedFound =
      JSON.parse(localStorage.getItem("found_items")) || [];
    const storedLost =
      JSON.parse(localStorage.getItem("lost_items")) || [];

    setFoundItems(storedFound);
    setLostItems(storedLost);
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">
        🔐 Admin Dashboard
      </h2>

      {/* FOUND ITEMS */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">
          Found Items (Confidential)
        </h3>

        {foundItems.length === 0 && (
          <p className="text-gray-500">No found items reported</p>
        )}

        {foundItems.map((f, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 mb-3"
          >
            <p><b>Item:</b> {f.itemName}</p>
            <p><b>Category:</b> {f.category}</p>
            <p><b>Location:</b> {f.location}</p>
            <p className="text-red-600">
              <b>Secret (Admin Only):</b> {f.secret}
            </p>
          </div>
        ))}
      </div>

      {/* LOST ITEMS */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          Lost Items
        </h3>

        {lostItems.length === 0 && (
          <p className="text-gray-500">No lost items reported</p>
        )}

        {lostItems.map((l, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-lg p-4 mb-3"
          >
            <p><b>Item:</b> {l.itemName}</p>
            <p><b>Category:</b> {l.category}</p>
            <p><b>Location:</b> {l.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
