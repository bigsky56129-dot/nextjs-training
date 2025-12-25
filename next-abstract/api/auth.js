export async function login(username, password) {
  const res = await fetch("https://dummyjson.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  const user = (data.users || []).find(
    (u) => (u.username === username || u.email === username) && u.password === password
  );
  if (!user) throw new Error("Invalid username or password");
  return user;
}
