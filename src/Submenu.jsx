import { useGlobalContext } from "./ContextGlobal";
import sublinks from "./data";
const Submenu = () => {
  const { isPageId } = useGlobalContext();

  const showSublinks = sublinks.find((item) => item.pageId === isPageId);

  return (
    <div className={showSublinks ? "submenu show-submenu" : "submenu"}>
      <h5>{showSublinks?.page}</h5>
      <div className="submenu-links">
        {showSublinks?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
