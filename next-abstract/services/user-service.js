// User service for API interactions

export async function fetchUsers() {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  return data.users || [];
}

export async function fetchUserById(id) {
  const res = await fetch(`https://dummyjson.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return await res.json();
}
