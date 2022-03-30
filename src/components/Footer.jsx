import React from 'react';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>© {year} Jueon Kim. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
