import Topbar from "@/components/layout/Topbar";
import Link from "next/link";
import { HomeIcon, BanknotesIcon, ShieldCheckIcon, UserIcon } from "@heroicons/react/24/outline";

export default function DashboardLayout({ children, }: { children: React.ReactNode; }) {
    return (
        <div className="flex h-screen bg-background text-white">
            {/* Sidebar Izquierdo */}
            <aside className="w-64 bg-surface border-r border-gray-800 flex flex-col">
                <div className="h-16 flex items-center justify-center border-b border-gray-800">
                    <h2 className="text-xl font-bold text-primary">Chile City RP</h2>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <Link href="/dashboard" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition">
                        <HomeIcon className="w-5 h-5 mr-3" /> Inicio
                    </Link>
                    <Link href="/dashboard/banco" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition">
                        <BanknotesIcon className="w-5 h-5 mr-3" /> Banco Central
                    </Link>
                    <Link href="/dashboard/policial" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition">
                        <ShieldCheckIcon className="w-5 h-5 mr-3" /> Portal Policial
                    </Link>
                    <Link href="/dashboard/perfil" className="flex items-center p-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition">
                        <UserIcon className="w-5 h-5 mr-3" /> Mi Cédula
                    </Link>
                </nav>
                {/* Panel Administrativo (Solo se mostrará si tiene permisos, lo haremos después) */}
                <div className="p-4 border-t border-gray-800">
                    <Link href="/admin-login" className="flex items-center p-3 text-red-400 hover:bg-gray-800 rounded-lg transition text-sm">
                        Acceso Administrativo
                    </Link>
                </div>
            </aside>
            {/* Contenido Principal */}
            <div className="flex-1 flex flex-col">
                <Topbar />
                {/* La campanita de anuncios que te pasé antes va aquí */}
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}