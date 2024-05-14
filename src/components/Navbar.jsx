import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-300 via-slate-500 to-slate-500 bg-clip-text tracking-tight text-transparent">
          vita.
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://linkedin.com/in/vita-tri-utami"
          target="_black"
          rel="noopener"
        >
          <FaLinkedin className="hover:-translate-y-0.5 transform transition hover:bg-cyan-700" />
        </a>
        <a
          href="https://github.com/vitatriutami"
          target="_black"
          rel="noopener"
        >
          <FaGithub className="hover:-translate-y-0.5 transform transition hover:bg-cyan-700" />
        </a>
        <a href="https://instagram.com/vita__tr" target="_black" rel="noopener">
          <FaInstagram className="hover:-translate-y-0.5 transform transition hover:bg-cyan-700" />
        </a>
        <a href="https://x.com/" target="_black" rel="noopener">
          <FaSquareXTwitter className="hover:-translate-y-0.5 transform transition hover:bg-cyan-700" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
