import { Heart } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function EchoModule() {
  return (
    <ModuleLayout title="Écho" icon={Heart} color="#E8B4A8">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Écoute tes émotions</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour explorer tes émotions.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
