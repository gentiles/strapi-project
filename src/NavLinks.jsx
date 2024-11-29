import { useGlobalContext } from "./ContextGlobal";
import sublinks from "./data";
import Submenu from "./Submenu";

sublinks;
const NavLinks = () => {
  const { setPageId } = useGlobalContext();

  return (
    <div className="navlinks-container">
      {sublinks.map((item) => {
        const { pageId, page } = item;
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
