import {LoginForm} from "@/components/auth/login-form"
import { Suspense } from "react";

const LoginPage = () => {
    return (
        // added Suspense because it could not build (also advised to add "use client" in this file, but I skipped and it still works)
        <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
        </Suspense>
    )
}

export default LoginPage