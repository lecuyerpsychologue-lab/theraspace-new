import { Anchor } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function AncrageModule() {
  return (
    <ModuleLayout title="Ancrage" icon={Anchor} color="#8B9F82">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Exercice d'ancrage</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour t'ancrer dans le présent.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
