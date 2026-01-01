import { Lightbulb } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function LumiereModule() {
  return (
    <ModuleLayout title="Lumière" icon={Lightbulb} color="#B8A5C7">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Conseils et astuces</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour illuminer ton chemin.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
