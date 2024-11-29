import { FaBars } from "react-icons/fa6";
import { useGlobalContext } from "./ContextGlobal";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const { openSidebar, isSidebarOpen, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav className="navbar-container" onMouseOver={handleSubmenu}>
      <div className="main-navbar">
        <h2>strapi</h2>
        <button className="main-navbar-btn" onClick={openSidebar}>
          <FaBars />
        </button>

        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
