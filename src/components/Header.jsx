import React from 'react';

function Header() {
  return (
    <header>
      <div className="header_container">
        <div className="title">Awesome Prototypes in Shop</div>
        <div className="subtitle">
          Check out what other designers have created using ProtoPie-download
          these examples to learn exactly how they made their interactions.
        </div>
        <div className="btn_area" style={{ margin: '20px 0' }}>
          <a href="https://www.protopie.io/" target="_blank" rel="noreferrer">
            <button>Try ProtoPie Yourself</button>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
