import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Bristi Jana</p>
    </footer>
  );
}

export default Footer;
