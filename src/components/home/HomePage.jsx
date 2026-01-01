import { useAuth } from '../../contexts/AuthContext';
import { useWeather } from '../../contexts/WeatherContext';
import { useProgress } from '../../contexts/ProgressContext';
import Header from '../layout/Header';
import SOSButton from '../ui/SOSButton';
import SoftCard from '../ui/SoftCard';
import WeatherSlider from '../ui/WeatherSlider';
import ProgressBar from '../ui/ProgressBar';

export default function HomePage() {
  const { user } = useAuth();
  const { getTodayWeather, addWeatherEntry } = useWeather();
  const { progress } = useProgress();

  const todayWeather = getTodayWeather();

  const handleWeatherChange = (value) => {
    addWeatherEntry(value);
  };

  const getRecommendation = () => {
    if (!todayWeather) return null;
    
    if (todayWeather <= 3) {
      return {
        title: 'Prends soin de toi',
        description: 'Un exercice de respiration pourrait t\'aider à te calmer.',
        module: 'Respiration',
      };
    } else if (todayWeather <= 5) {
      return {
        title: 'Ancre-toi dans le présent',
        description: 'L\'exercice d\'ancrage peut t\'aider à te sentir plus stable.',
        module: 'Ancrage',
      };
    } else {
      return {
        title: 'Continue sur cette voie',
        description: 'C\'est le moment idéal pour travailler sur ton jardin intérieur!',
        module: 'Jardin',
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="min-h-screen">
      <Header 
        title={`Salut ${user?.pseudo || 'ami(e)'} 🌱`}
        action={<SOSButton />}
      />

      <div className="px-6 space-y-4">
        {/* Weather Check-in */}
        <SoftCard>
          <h3 className="text-lg font-semibold mb-2">Comment tu te sens aujourd'hui?</h3>
          <WeatherSlider value={todayWeather || 6} onChange={handleWeatherChange} />
        </SoftCard>

        {/* Recommendation */}
        {recommendation && (
          <SoftCard>
            <h3 className="text-lg font-semibold mb-2">Pour toi aujourd'hui</h3>
            <p className="text-text-secondary mb-2">{recommendation.description}</p>
            <div className="text-sm font-medium text-sage-green">→ {recommendation.module}</div>
          </SoftCard>
        )}

        {/* Phare Journey */}
        {progress.phareWeek > 0 && (
          <SoftCard>
            <h3 className="text-lg font-semibold mb-2">Ton voyage 🗼</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-text-secondary">
                Semaine {progress.phareWeek}/{progress.phareTotal}
              </span>
              <span className="text-text-secondary font-medium">
                {Math.round((progress.phareWeek / progress.phareTotal) * 100)}%
              </span>
            </div>
            <ProgressBar 
              value={(progress.phareWeek / progress.phareTotal) * 100} 
              color="var(--warm-terracotta)"
            />
          </SoftCard>
        )}

        {/* Garden */}
        {progress.jardinSeeds.length > 0 && (
          <SoftCard>
            <h3 className="text-lg font-semibold mb-2">Ton jardin 🌱</h3>
            <div className="flex items-center gap-2">
              <div className="flex gap-1 text-2xl">
                {progress.jardinSeeds.slice(0, 5).map((seed, idx) => (
                  <span key={idx}>🌿</span>
                ))}
              </div>
              <span className="text-text-secondary">
                {progress.jardinSeeds.length} graine{progress.jardinSeeds.length > 1 ? 's' : ''} en cours
              </span>
            </div>
          </SoftCard>
        )}
      </div>
    </div>
  );
}
