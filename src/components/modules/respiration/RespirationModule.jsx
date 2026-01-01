import { Wind } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function RespirationModule() {
  return (
    <ModuleLayout title="Respiration" icon={Wind} color="#A8B4D4">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Exercice de respiration</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour t'aider à te calmer.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
