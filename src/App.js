import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { LoginPage } from './pages/Login/index';
import { Dashboard } from './pages/Dashboard/index';
import { useAuthStore } from './store/useAuthStore';

const queryClient = new QueryClient();
export default function App() {
    const user = useAuthStore((state) => state.user);
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: !user ? _jsx(LoginPage, {}) : _jsx(Navigate, { to: "/dashboard" }) }), _jsx(Route, { path: "/dashboard", element: user ? _jsx(Dashboard, {}) : _jsx(Navigate, { to: "/login" }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { to: "/login" }) })] }) }) }));
}
