"use client";

import React from "react";

import { SignUpSchema } from "@/lib/validations";
import AuthForm from "@/components/forms/auth-form";
import { signInWithCredentials } from "@/lib/actions/auth.action";

const SignUp = () => {
    return (
        <AuthForm
            formType="SIGN_UP"
            schema={SignUpSchema}
            defaultValues={{ email: "", password: "", name: "", username: "" }}
            onSubmit={signInWithCredentials}
        />
    );
};

export default SignUp;
