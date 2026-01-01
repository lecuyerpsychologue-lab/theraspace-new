import { Sparkles } from 'lucide-react';
import ModuleLayout from '../../layout/ModuleLayout';
import SoftCard from '../../ui/SoftCard';

export default function OracleModule() {
  return (
    <ModuleLayout title="Oracle" icon={Sparkles} color="#E8D5A3">
      <div className="space-y-4 mt-4">
        <SoftCard>
          <h2 className="text-xl font-semibold mb-2">Inspiration quotidienne</h2>
          <p className="text-text-secondary">
            Module en développement. Bientôt disponible pour ton inspiration quotidienne.
          </p>
        </SoftCard>
      </div>
    </ModuleLayout>
  );
}
