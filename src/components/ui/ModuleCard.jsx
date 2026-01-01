import { ArrowRight } from 'lucide-react';

export default function ModuleCard({ title, subtitle, icon: Icon, color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="rounded-2xl p-5 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg relative min-h-[140px] flex flex-col justify-between"
    >
      <div className="flex items-start justify-between">
        {Icon && <Icon className="w-6 h-6 text-text-primary/80" />}
      </div>
      <div className="mt-auto">
        <h3 className="text-lg font-semibold text-text-primary mb-1">{title}</h3>
        {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
        <div className="absolute bottom-5 right-5">
          <ArrowRight className="w-5 h-5 text-text-primary/60" />
        </div>
      </div>
    </div>
  );
}
