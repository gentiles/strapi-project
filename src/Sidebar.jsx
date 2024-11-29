import { useRef } from "react";
import { useGlobalContext } from "./ContextGlobal";
import sublinks from "./data";
import { IoClose } from "react-icons/io5";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  const styles = {
    display: "none",
  };

  return (
    <aside
      className={isSidebarOpen ? "show-sidebar-container" : "sidebar-container"}
    >
      <div className="main-links">
        <div className="btn-container">
          <button className="btn btn-close" onClick={closeSidebar}>
            <IoClose />
          </button>
        </div>

        {sublinks.map((item) => {
          const { pageId, page, links } = item;
          return (
            <div key={pageId}>
              <ul>
                <li className="title-links">{page}</li>
                <li className="sub-links">
                  {links.map((item) => {
                    const { id, label, icon, url } = item;
                    return (
                      <div key={id}>
                        <a href={url}>
                          {icon}
                          {label}
                        </a>
                      </div>
                    );
                  })}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
export default Sidebar;
