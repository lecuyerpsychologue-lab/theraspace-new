import { Navigation } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function PhareModule() {
  return (
    <ModuleLayout title="Phare" icon={Navigation} color="#C4967A">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Ton chemin personnel</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour ton voyage de 8 semaines.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
