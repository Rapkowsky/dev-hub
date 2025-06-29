import { LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";
import NavLinks from "./navbar/nav-links";

const LeftSidebar = async () => {
    const session = await auth();
    const userId = session?.user?.id;

    return (
        <section className="custom-scrollbar background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none">
            <div className="flex flex-1 flex-col gap-6">
                <NavLinks userId={userId} />
            </div>

            <div className="flex flex-col gap-3">
                {userId ? (
                    <form
                        action={async () => {
                            "use server";

                            await signOut();
                        }}
                    >
                        <Button
                            type="submit"
                            className="group base-medium click-anim w-fit !bg-transparent px-4 py-3"
                        >
                            <LogOut className="size-5 text-black dark:text-white" />
                            <span className="text-dark300_light900 group-hover:text-primary-500! duration-300 max-lg:hidden">
                                Logout
                            </span>
                        </Button>
                    </form>
                ) : (
                    <>
                        <Button
                            className="small-medium btn-secondary hover-text click-anim min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                            asChild
                        >
                            <Link href={ROUTES.SIGN_IN}>
                                <Image
                                    src="/icons/account.svg"
                                    alt="Account"
                                    width={20}
                                    height={20}
                                    className="invert-colors lg:hidden"
                                />
                                <span className="primary-text-gradient max-lg:hidden">
                                    Log In
                                </span>
                            </Link>
                        </Button>

                        <Button
                            className="small-medium light-border-2 btn-tertiary text-dark400_light900 hover-text click-anim min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none"
                            asChild
                        >
                            <Link href={ROUTES.SIGN_UP}>
                                <Image
                                    src="/icons/sign-up.svg"
                                    alt="Account"
                                    width={20}
                                    height={20}
                                    className="invert-colors lg:hidden"
                                />
                                <span className="max-lg:hidden">Sign Up</span>
                            </Link>
                        </Button>
                    </>
                )}
            </div>
        </section>
    );
};

export default LeftSidebar;
