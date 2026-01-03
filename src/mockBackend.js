// Save Lost Item
export function saveLostItem(data) {
  const items = JSON.parse(localStorage.getItem("lost_items")) || []
  items.push({
    id: Date.now(),
    ...data,
    createdAt: new Date().toISOString()
  })
  localStorage.setItem("lost_items", JSON.stringify(items))
}

// Save Found Item
export function saveFoundItem(data) {
  const items = JSON.parse(localStorage.getItem("found_items")) || []
  items.push({
    id: Date.now(),
    ...data,
    createdAt: new Date().toISOString()
  })
  localStorage.setItem("found_items", JSON.stringify(items))
}

// Get Lost Items
export function getLostItems() {
  return JSON.parse(localStorage.getItem("lost_items")) || []
}

// Get Found Items
export function getFoundItems() {
  return JSON.parse(localStorage.getItem("found_items")) || []
}
export function deleteLostItem(id) {
  const items = JSON.parse(localStorage.getItem("lost_items")) || []
  const updated = items.filter(item => item.id !== id)
  localStorage.setItem("lost_items", JSON.stringify(updated))
}

export function deleteFoundItem(id) {
  const items = JSON.parse(localStorage.getItem("found_items")) || []
  const updated = items.filter(item => item.id !== id)
  localStorage.setItem("found_items", JSON.stringify(updated))
}
