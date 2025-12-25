"use client";

import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/user-service";
import "../../clients.css";

export default function ClientsPage() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then((users) => {
        setUsers(users);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = users.filter(
    (u) =>
      u.firstName.toLowerCase().includes(search.toLowerCase()) ||
      u.lastName.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.username.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="clients-bg">
      <div className="clients-header">
        <h2>Client list</h2>
        <input
          className="clients-search"
          type="text"
          placeholder="Search by name, email, or username..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="clients-list">
        {loading ? (
          <div className="clients-loading">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="clients-empty">No clients found.</div>
        ) : (
          filtered.map((user) => (
            <div className="client-card" key={user.id}>
              <div className="client-avatar" style={{background: `#${user.id*123456%0xffffff}`}}>
                <span>{user.firstName[0]}{user.lastName[0]}</span>
              </div>
              <div className="client-info">
                <div className="client-name">{user.firstName} {user.lastName}</div>
                <div className="client-email">{user.email}</div>
                <div className="client-meta">
                  <span>@{user.username}</span>
                  <span>{user.gender === "male" ? "♂️ Male" : "♀️ Female"}</span>
                </div>
              </div>
              <div className="client-role">{user.role || (user.id % 2 === 0 ? "admin" : "moderator")}</div>
              <a className="client-profile" href="#">View profile</a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
