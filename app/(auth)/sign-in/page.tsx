"use client";

import React from "react";

import { SignInSchema } from "@/lib/validations";
import AuthForm from "@/components/forms/auth-form";
import { signInWithCredentials } from "@/lib/actions/auth.action";

const SignIn = () => {
    return (
        <AuthForm
            formType="SIGN_IN"
            schema={SignInSchema}
            defaultValues={{ email: "", password: "" }}
            onSubmit={signInWithCredentials}
        />
    );
};

export default SignIn;
