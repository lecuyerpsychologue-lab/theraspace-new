import { useState, useEffect } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SoftCard from '../ui/SoftCard';

const emergencyNumbers = [
  {
    number: '15',
    title: 'SAMU',
    description: 'Urgences médicales 24h/24',
    tel: 'tel:15',
  },
  {
    number: '3114',
    title: 'Prévention Suicide',
    description: 'Gratuit, confidentiel 24h/24',
    tel: 'tel:3114',
  },
  {
    number: '119',
    title: 'Enfance en Danger',
    description: 'Gratuit, confidentiel 24h/24',
    tel: 'tel:119',
  },
  {
    number: '0 800 235 236',
    title: 'Fil Santé Jeunes',
    description: 'Anonyme et gratuit',
    tel: 'tel:0800235236',
  },
];

export default function SOSPage() {
  const navigate = useNavigate();
  const [breathCount, setBreathCount] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  useEffect(() => {
    let interval;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathCount((prev) => (prev + 1) % 2);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  return (
    <div className="min-h-screen bg-coral-red/10">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between bg-cream">
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-2">
            <span className="text-3xl">🛟</span>
            ESPACE SOS
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-text-primary" />
          </button>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Message */}
          <SoftCard>
            <p className="text-xl font-semibold text-center text-text-primary">
              Tu n'es pas seul(e). 💚
            </p>
          </SoftCard>

          {/* Breathing Exercise */}
          <SoftCard>
            <h2 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
              🌬️ CALME-TOI MAINTENANT
            </h2>
            <div className="flex flex-col items-center py-8">
              <button
                onClick={() => setIsBreathing(!isBreathing)}
                className={`w-32 h-32 rounded-full transition-all duration-4000 flex items-center justify-center text-white font-semibold ${
                  isBreathing
                    ? breathCount === 0
                      ? 'bg-lavender-blue scale-125'
                      : 'bg-sage-green scale-100'
                    : 'bg-text-primary'
                }`}
              >
                {!isBreathing && 'Commencer'}
                {isBreathing && (breathCount === 0 ? 'Inspire...' : 'Expire...')}
              </button>
              {isBreathing && (
                <button
                  onClick={() => setIsBreathing(false)}
                  className="mt-4 text-sm text-text-secondary hover:text-text-primary"
                >
                  Arrêter
                </button>
              )}
            </div>
          </SoftCard>

          {/* Emergency Numbers */}
          <div>
            <h2 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
              📞 NUMÉROS D'URGENCE
            </h2>
            <div className="space-y-3">
              {emergencyNumbers.map((contact, idx) => (
                <SoftCard
                  key={idx}
                  onClick={() => window.location.href = contact.tel}
                  className="cursor-pointer hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-xl text-coral-red mb-1">
                        {contact.number} - {contact.title}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {contact.description}
                      </div>
                    </div>
                    <Phone className="w-6 h-6 text-coral-red" />
                  </div>
                </SoftCard>
              ))}
            </div>
          </div>

          {/* PsIA Link */}
          <SoftCard>
            <button
              onClick={() => navigate('/psia')}
              className="w-full flex items-center justify-between py-2"
            >
              <div className="text-left">
                <h3 className="font-semibold text-text-primary mb-1">💬 OU PARLE À PSIA</h3>
                <p className="text-sm text-text-secondary">
                  Je suis là pour t'écouter
                </p>
              </div>
              <MessageCircle className="w-6 h-6 text-soft-teal" />
            </button>
          </SoftCard>
        </div>
      </div>
    </div>
  );
}
