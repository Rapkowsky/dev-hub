import { ReactNode } from "react";

import LeftSidebar from "@/components/navigation/left-sidebar";
import Navbar from "@/components/navigation/navbar";
import RightSidebar from "@/components/navigation/right-sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="background-light850_dark100 realtive">
            <Navbar />

            <div className="flex">
                <LeftSidebar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pt-36 pb-6 max-md:pb-14 sm:px-14">
                    <div className="mx-auto w-full max-w-5xl">{children}</div>
                </section>
                <RightSidebar />
            </div>
        </main>
    );
};

export default RootLayout;
