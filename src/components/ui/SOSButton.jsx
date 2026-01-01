import { LifeBuoy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SOSButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/sos')}
      className="bg-coral-red text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 active:scale-95"
      aria-label="SOS - Aide d'urgence"
    >
      <LifeBuoy className="w-6 h-6" />
    </button>
  );
}
