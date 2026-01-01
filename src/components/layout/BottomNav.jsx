import { Home, Compass, MessageCircle, BookOpen, User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: Compass, label: 'Explorer', path: '/explorer' },
  { icon: MessageCircle, label: 'PsIA', path: '/psia' },
  { icon: BookOpen, label: 'Journal', path: '/journal' },
  { icon: User, label: 'Profil', path: '/profil' },
];

export default function BottomNav() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-nav border-t border-gray-100 z-40">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 flex-1 transition-colors ${
                isActive ? 'text-text-primary' : 'text-text-muted'
              }`}
            >
              <Icon 
                className="w-6 h-6" 
                fill={isActive ? 'currentColor' : 'none'}
                strokeWidth={isActive ? 0 : 2}
              />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
