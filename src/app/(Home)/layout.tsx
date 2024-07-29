import SideBar from "@/components/organisms/SideBar";
import { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-row w-full h-full">
            <SideBar />
            {children}
        </div>
    )
}