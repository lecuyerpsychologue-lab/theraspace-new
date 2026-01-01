import { Smile } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function HumeurModule() {
  return (
    <ModuleLayout title="Humeur" icon={Smile} color="#EABB7A">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Suivi d'humeur</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour suivre ton humeur.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
