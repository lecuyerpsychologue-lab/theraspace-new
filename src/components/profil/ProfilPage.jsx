import { useAuth } from '../../contexts/AuthContext';
import { useProgress } from '../../contexts/ProgressContext';
import { ChevronRight, LogOut } from 'lucide-react';
import Header from '../layout/Header';
import SoftCard from '../ui/SoftCard';

export default function ProfilPage() {
  const { user, logout } = useAuth();
  const { progress } = useProgress();

  const memberSince = user?.createdAt 
    ? new Date(user.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })
    : 'janvier 2026';

  const settingsItems = [
    { label: 'Notifications', action: () => alert('Paramètres de notifications') },
    { label: 'À propos', action: () => alert('À propos de TheraSpace') },
    { label: 'CGU & Confidentialité', action: () => alert('Conditions générales') },
  ];

  return (
    <div className="min-h-screen">
      <Header title="Mon espace" />

      <div className="px-6 space-y-6">
        {/* User Info */}
        <SoftCard>
          <div className="text-center py-4">
            <div className="w-20 h-20 bg-sage-green rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-3xl text-white font-bold">
                {user?.pseudo?.[0]?.toUpperCase() || '👤'}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-text-primary mb-1">
              {user?.pseudo || 'Utilisateur'}
            </h2>
            <p className="text-sm text-text-secondary">
              Membre depuis {memberSince}
            </p>
          </div>
        </SoftCard>

        {/* Stats */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
            📊 MES STATS
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <SoftCard className="text-center py-6">
              <div className="text-3xl mb-2">🔥</div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {progress.daysStreak}
              </div>
              <div className="text-sm text-text-secondary">jours</div>
            </SoftCard>

            <SoftCard className="text-center py-6">
              <div className="text-3xl mb-2">🌸</div>
              <div className="text-2xl font-bold text-text-primary mb-1">
                {progress.exercisesCompleted}
              </div>
              <div className="text-sm text-text-secondary">exercices</div>
            </SoftCard>
          </div>
        </div>

        {/* Settings */}
        <div>
          <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
            ⚙️ PARAMÈTRES
          </h3>
          <SoftCard className="divide-y divide-gray-100">
            {settingsItems.map((item, idx) => (
              <button
                key={idx}
                onClick={item.action}
                className="w-full flex items-center justify-between py-4 hover:bg-soft-gray transition-colors first:pt-0 last:pb-0"
              >
                <span className="text-text-primary font-medium">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-text-muted" />
              </button>
            ))}
          </SoftCard>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-center gap-2 bg-soft-gray hover:bg-gray-200 text-error font-semibold py-4 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Se déconnecter</span>
        </button>
      </div>
    </div>
  );
}
