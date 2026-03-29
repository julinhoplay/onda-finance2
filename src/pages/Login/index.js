import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "./schema";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button"; // 
import { Input } from "@/components/ui/input"; 
export function LoginPage() {
    const login = useAuthStore((state) => state.login);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit = (data) => {

        login(data.email);
        navigate("/dashboard");
    };
    return (_jsx("div", { className: "flex h-screen items-center justify-center bg-slate-50", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md", children: [_jsx("h1", { className: "text-2xl font-bold text-center text-slate-900", children: "Onda Finance" }), _jsxs("div", { children: [_jsx(Input, { ...register("email"), placeholder: "Seu e-mail" }), errors.email && _jsx("span", { className: "text-red-500 text-sm", children: errors.email.message })] }), _jsxs("div", { children: [_jsx(Input, { ...register("password"), type: "password", placeholder: "Sua senha" }), errors.password && _jsx("span", { className: "text-red-500 text-sm", children: errors.password.message })] }), _jsx(Button, { type: "submit", className: "w-full", children: "Entrar" })] }) }));
}
