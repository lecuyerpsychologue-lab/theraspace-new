import { Sprout } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function JardinModule() {
  return (
    <ModuleLayout title="Jardin" icon={Sprout} color="#8B9F82">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Cultive tes forces</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour cultiver ton jardin intérieur.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
