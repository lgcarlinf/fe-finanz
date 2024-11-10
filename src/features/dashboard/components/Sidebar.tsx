
import homeIcon from "../../../assets/h-icon.svg";
import grafIcon from "../../../assets/g-icon.svg";
import homeIcon2 from "../../../assets/h-icon2.svg";
import grafIcon2 from "../../../assets/g-icon2.svg";

export enum IconType {
    Home = "home",
    Graphics = "graphics"
}

interface SidebarProps {
    activePage: IconType;
    setActivePage: (page: IconType) => void;
}

const iconMapping = {
    [IconType.Home]: { default: homeIcon, active: homeIcon2 },
    [IconType.Graphics]: { default: grafIcon, active: grafIcon2 }
};

export const Sidebar = ({ activePage, setActivePage }: SidebarProps) => {
    const handleIconClick = (page: IconType) => {
        setActivePage(page);
    };

    return (
        <aside className="left-0 w-1/7 top-0 flex items-center">
            <div className="bg-slate-200 w-300 rounded-r-lg">
                <ul>
                    <li
                        className={`py-8 px-6 items-center justify-center cursor-pointer ${activePage === IconType.Home ? "text-blue-500" : ""}`}
                        onClick={() => handleIconClick(IconType.Home)}
                    >
                        <img
                            src={activePage === IconType.Home ? iconMapping[IconType.Home].active : iconMapping[IconType.Home].default}
                            alt="Home"
                            className="h-7 w-7"
                        />
                    </li>

                    <li
                        className={`py-8 px-6 items-center justify-center cursor-pointer ${activePage === IconType.Graphics ? "text-blue-500" : ""}`}
                        onClick={() => handleIconClick(IconType.Graphics)}
                    >
                        <img
                            src={activePage === IconType.Graphics ? iconMapping[IconType.Graphics].active : iconMapping[IconType.Graphics].default}
                            alt="Graphics"
                            className="h-7 w-7"
                        />
                    </li>
                </ul>
            </div>
        </aside>
    );
};
