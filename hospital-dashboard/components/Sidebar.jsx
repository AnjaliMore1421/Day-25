import "../styles/sidebar.css";

export default function Sidebar({ setPage, toggleDark }) {
  return (
    <div className="sidebar">
      <h2>Hospital</h2>

      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("patients")}>Patients</button>

      <button onClick={toggleDark}>🌙 Toggle Mode</button>
    </div>
  );
}
