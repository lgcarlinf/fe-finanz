import { PropsWithChildren, useState } from "react";
import { Navbar } from "../components/Navbar"
import { IconType, Sidebar } from "../components/Sidebar"
import { Graphics } from "../components/Graphics";

export const DashboardLayout = ({ children }: PropsWithChildren) => {

    const [activePage, setActivePage] = useState<IconType>("home" as IconType);
    const renderContent = () => {
        switch (activePage) {
            case "home":
                return <Graphics />;
            case "graphics":
                return <div>Finance</div>;
            default:
                return
        }
    };

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar activePage={activePage} setActivePage={setActivePage} />
                <main className="flex-1 pl-4 pr-4 bg-white">{renderContent()}</main>
            </div>
        </div>
    )
}
