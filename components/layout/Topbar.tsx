'use client';
import { useState, useEffect } from 'react';
import { BellIcon } from '@heroicons/react/24/outline'; // Asegúrate de instalar heroicons

export default function Topbar() {
  const [announcements, setAnnouncements] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Cargar anuncios al iniciar
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const res = await fetch('/api/announcements');
      if (res.ok) {
        const data = await res.json();
        setAnnouncements(data);
        setUnreadCount(data.length); // Lógica simple: asume que los nuevos no están leídos
      }
    };
    fetchAnnouncements();
  }, []);

  return (
    <div className="flex justify-end p-4 bg-gray-900 text-white relative">
      {/* Icono de Campanita */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 rounded-full hover:bg-gray-800 transition">
        <BellIcon className="h-6 w-6 text-gray-300" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/4 -translate-y-1/4">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown de Anuncios */}
      {isOpen && (
        <div className="absolute top-16 right-4 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden">
          <div className="p-4 bg-gray-900 border-b border-gray-700 font-bold">Últimos Anuncios</div>
          <div className="max-h-64 overflow-y-auto">
            {announcements.length === 0 ? (
              <p className="p-4 text-sm text-gray-400 text-center">No hay anuncios nuevos</p>
            ) : (
              announcements.map((ann: any) => (
                <div key={ann.id} className="p-4 border-b border-gray-700 hover:bg-gray-750">
                  <h4 className="text-sm font-bold text-blue-400">{ann.title}</h4>
                  <p className="text-xs text-gray-300 mt-1">{ann.content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
