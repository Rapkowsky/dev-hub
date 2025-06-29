"use client";

import { ReloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
    const [loadingProvider, setLoadingProvider] = useState<
        "github" | "google" | null
    >(null);

    const buttonClass =
        "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 hover-text click-anim";

    const handleSignIn = async (provider: "github" | "google") => {
        setLoadingProvider(provider);

        try {
            await signIn(provider, {
                callbackUrl: ROUTES.HOME,
            });
        } catch (error) {
            console.log(error);
            setLoadingProvider(null);
            toast.error("Sign in failed", {
                description:
                    error instanceof Error
                        ? error.message
                        : "An error occured during sign-in",
            });
        } finally {
            setLoadingProvider(null);
        }
    };

    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button
                className={buttonClass}
                onClick={() => handleSignIn("github")}
                disabled={loadingProvider !== null}
            >
                {loadingProvider === "github" ? (
                    <>
                        <ReloadIcon className="mr-2.5 size-5 animate-spin" />
                        <span>Signing in...</span>
                    </>
                ) : (
                    <>
                        <Image
                            src="/icons/github.svg"
                            alt="Github Logo"
                            width={20}
                            height={20}
                            className="invert-colors mr-2.5 object-contain"
                        />
                        <span>Log in with GitHub</span>
                    </>
                )}
            </Button>

            <Button
                className={buttonClass}
                onClick={() => handleSignIn("google")}
                disabled={loadingProvider !== null}
            >
                {loadingProvider === "google" ? (
                    <>
                        <ReloadIcon className="mr-2.5 size-5 animate-spin" />
                        <span>Signing in...</span>
                    </>
                ) : (
                    <>
                        <Image
                            src="/icons/google.svg"
                            alt="Google Logo"
                            width={20}
                            height={20}
                            className="mr-2.5 object-contain"
                        />
                        <span>Log in with Google</span>
                    </>
                )}
            </Button>
        </div>
    );
};

export default SocialAuthForm;
