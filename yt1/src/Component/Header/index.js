import React from "react";

function Header({MemberCount}) {
  const menu = ["Home", "About", "product", "contact"];
  const url1 = '';
  return (
    <nav className="navbar navbar-expand-lg bg-secondary text-white">
      <div className="container-fluid">
        {/* <div class="collapse navbar-collapse" > */}
        {menu.map((m, i) => (
          <ul key={i} className="navbar-nav">
            <a href="url1" className="nav-item">{m}</a>
          </ul>
        ))}
      </div>
      {/* </div> */}
    </nav>
  );
}

export default Header;
