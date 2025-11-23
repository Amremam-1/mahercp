// const BASE_URL = "https://nfass.net/admin/informatinal/api"

// export async function apiClient(endpoint, options = {}) {
//   const res = await fetch(`${BASE_URL}${endpoint}`, {
//     headers: { "Content-Type": "application/json" },
//     ...options,
//   })

//   if (!res.ok) {
//     const errorData = await res.json().catch(() => ({}))
//     throw new Error(errorData.message || "Request failed")
//   }

//   return res.json()
// }
