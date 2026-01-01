import { User } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function IdentiteModule() {
  return (
    <ModuleLayout title="Identité" icon={User} color="#D4A5A5">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Découvre qui tu es</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour explorer ton identité.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
