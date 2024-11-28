import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="icon">🏠</div>
        <div className="icon">⚙️</div>
        <div className="icon">🔄</div>
      </aside>

      <div className="main-content">
        <header className="header">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-actions">
            <button>1/1 Row</button>
            <button>3/3 Column</button>
            <button>0 Filter</button>
            <button>Sort</button>
          </div>
          <div className="header-right">
            <button className="primary-button">Enrich</button>
            <div className="icons">
              <span>🔗</span>
              <span>🗑️</span>
            </div>
            <div className="profile">
              <label>
                <input type="checkbox" />
                Auto Save
              </label>
              <div className="avatar">👤</div>
            </div>
          </div>
        </header>

        <div className="table">
          <div className="table-header">
            <div className="column">Input Column</div>
            <div className="column">Action Column</div>
            <div className="column">Enrich Company</div>
            <div className="column">+ Add Column</div>
          </div>

          <div className="table-row">
            <div className="cell">Oct 12, 2024 at 14:08 PM</div>
            <div className="cell">Bitscale Evaluation - Account relev...</div>
            <div className="cell">Bitscale Evaluation - Account relev...</div>
            <div className="cell">➕ Add Row</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
