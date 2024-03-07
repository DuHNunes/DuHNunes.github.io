import './Footer.css';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer className="footer">Made with &#x2665; by DuH Nunes &copy; Copyright 2022 - {year}</footer>;
}
