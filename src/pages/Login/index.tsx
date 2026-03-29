import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { loginSchema, LoginFormData } from "./schema";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";   

export function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    
    login(data.email);
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-slate-50">
      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-bold text-center text-slate-900">Onda Finance</h1>
        
        <div>
          <Input {...register("email")} placeholder="Seu e-mail" />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div>
          <Input {...register("password")} type="password" placeholder="Sua senha" />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>

        <Button type="submit" className="w-full">Entrar</Button>
      </form>
    </div>
  );
}

