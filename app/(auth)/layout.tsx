import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

import SocialAuthForm from "@/components/forms/social-auth-form";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-auth-light dark:bg-auth-dark flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-4 py-10">
            <section className="light-border background-light800_dark200 shadow-light100_dark100 min-w-full rounded-[10px] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8">
                <div className="flex items-center justify-between gap-2">
                    <div className="space-y-2.5">
                        <h1 className="h2-bold text-dark100_light900">
                            Join DevHub
                        </h1>
                        <p className="paragraph-regular text-dark500_light400">
                            To get your questions answered
                        </p>
                    </div>
                    <Link href={"/"} className="click-anim group relative z-10">
                        <Image
                            src="images/site-logo.svg"
                            alt="DevHub Logo"
                            width={50}
                            height={50}
                            className="object-contain"
                        />
                        <div className="from-primary-500 to-primary-100 absolute inset-0 z-[1] bg-gradient-to-r opacity-0 blur-2xl duration-500 group-hover:opacity-30"></div>
                    </Link>
                </div>

                {children}
                <SocialAuthForm />
            </section>
        </main>
    );
};

export default AuthLayout;
