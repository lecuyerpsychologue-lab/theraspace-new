import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Wind, Anchor, Heart, User as UserIcon, 
  Navigation, Sprout, Lightbulb, Sparkles, Smile 
} from 'lucide-react';
import Header from '../layout/Header';
import ModuleCard from '../ui/ModuleCard';
import Input from '../ui/Input';

const modules = [
  {
    category: 'SE CALMER 🌿',
    items: [
      { 
        title: 'Respiration', 
        subtitle: 'Exercices de souffle', 
        icon: Wind, 
        color: '#A8B4D4',
        path: '/modules/respiration'
      },
      { 
        title: 'Ancrage', 
        subtitle: 'Revenir au présent', 
        icon: Anchor, 
        color: '#8B9F82',
        path: '/modules/ancrage'
      },
    ],
  },
  {
    category: 'SE COMPRENDRE 🪞',
    items: [
      { 
        title: 'Écho', 
        subtitle: 'Écouter tes émotions', 
        icon: Heart, 
        color: '#E8B4A8',
        path: '/modules/echo'
      },
      { 
        title: 'Identité', 
        subtitle: 'Découvre qui tu es', 
        icon: UserIcon, 
        color: '#D4A5A5',
        path: '/modules/identite'
      },
    ],
  },
  {
    category: 'GRANDIR 🌱',
    items: [
      { 
        title: 'Phare', 
        subtitle: 'Ton chemin personnel', 
        icon: Navigation, 
        color: '#C4967A',
        path: '/modules/phare'
      },
      { 
        title: 'Jardin', 
        subtitle: 'Cultive tes forces', 
        icon: Sprout, 
        color: '#8B9F82',
        path: '/modules/jardin'
      },
    ],
  },
  {
    category: 'APPRENDRE & S\'INSPIRER ✨',
    items: [
      { 
        title: 'Lumière', 
        subtitle: 'Conseils et astuces', 
        icon: Lightbulb, 
        color: '#B8A5C7',
        path: '/modules/lumiere'
      },
      { 
        title: 'Oracle', 
        subtitle: 'Inspiration quotidienne', 
        icon: Sparkles, 
        color: '#E8D5A3',
        path: '/modules/oracle'
      },
    ],
  },
  {
    category: 'SUIVRE 📊',
    items: [
      { 
        title: 'Humeur', 
        subtitle: 'Suivi d\'humeur', 
        icon: Smile, 
        color: '#EABB7A',
        path: '/modules/humeur'
      },
    ],
  },
];

export default function ExplorerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const filteredModules = modules.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen">
      <Header title="Explorer" />

      <div className="px-6 space-y-6">
        {/* Search */}
        <Input
          type="text"
          placeholder="🔍 Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Module Categories */}
        {filteredModules.map((category, idx) => (
          <div key={idx}>
            <h2 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
              {category.category}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {category.items.map((module, moduleIdx) => (
                <ModuleCard
                  key={moduleIdx}
                  title={module.title}
                  subtitle={module.subtitle}
                  icon={module.icon}
                  color={module.color}
                  onClick={() => navigate(module.path)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
