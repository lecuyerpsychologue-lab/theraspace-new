import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ModuleLayout({ children, title, icon: Icon, color }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div 
          className="sticky top-0 z-30 px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: color || 'var(--cream)' }}
        >
          <div className="flex items-center gap-3">
            {Icon && <Icon className="w-6 h-6 text-text-primary" />}
            <h1 className="text-xl font-semibold text-text-primary">{title}</h1>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-text-primary" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pb-8">
          {children}
        </div>
      </div>
    </div>
  );
}
