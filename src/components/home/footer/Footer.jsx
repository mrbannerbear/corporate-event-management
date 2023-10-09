const Footer = () => {
  return (
    <>
      <footer className="footer p-10 text-neutral-content bg-neutral-500">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Conferences and Seminars</a>
          <a className="link link-hover">Trade Shows and Expos</a>
          <a className="link link-hover">Team Building Workshops</a>
          <a className="link link-hover">Corporate Meetings</a>
          <a className="link link-hover">Award Ceremonies</a>
          <a className="link link-hover">Product Launches</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
