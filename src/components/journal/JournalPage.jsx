import { useJournal } from '../../contexts/JournalContext';
import { useWeather } from '../../contexts/WeatherContext';
import Header from '../layout/Header';
import SoftCard from '../ui/SoftCard';

const weatherEmojis = ['⛈️', '🌩️', '🌧️', '☁️', '🌥️', '⛅', '🌤️', '☀️'];

export default function JournalPage() {
  const { entries, getEntriesByType } = useJournal();
  const { getWeekWeather } = useWeather();

  const weekWeather = getWeekWeather();
  const notes = getEntriesByType('note');
  const moduleEntries = getEntriesByType('module');
  const psiaConversations = getEntriesByType('psia');

  const getDayLabel = (date) => {
    const days = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
    return days[new Date(date).getDay()];
  };

  const getTrend = () => {
    if (weekWeather.length < 2) return null;
    const first = weekWeather[0].value;
    const last = weekWeather[weekWeather.length - 1].value;
    if (last > first) return { direction: '↗️', text: 'En amélioration' };
    if (last < first) return { direction: '↘️', text: 'En baisse' };
    return { direction: '→', text: 'Stable' };
  };

  const trend = getTrend();

  return (
    <div className="min-h-screen">
      <Header title="Mon Journal" />

      <div className="px-6 space-y-4">
        {/* Weekly Weather */}
        <SoftCard>
          <h3 className="text-lg font-semibold mb-3">Ma météo cette semaine</h3>
          <div className="flex justify-around items-end mb-2">
            {weekWeather.slice(-7).map((entry, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1">
                <div className="text-2xl">{weatherEmojis[entry.value - 1]}</div>
                <div className="text-xs text-text-muted">{getDayLabel(entry.date)}</div>
              </div>
            ))}
            {weekWeather.length < 7 && (
              Array.from({ length: 7 - weekWeather.length }).map((_, idx) => (
                <div key={`empty-${idx}`} className="flex flex-col items-center gap-1">
                  <div className="text-2xl text-text-muted">?</div>
                  <div className="text-xs text-text-muted">-</div>
                </div>
              ))
            )}
          </div>
          {trend && (
            <div className="text-sm text-text-secondary mt-2">
              Tendance: {trend.direction} {trend.text}
            </div>
          )}
        </SoftCard>

        {/* Notes and Records Grid */}
        <div className="grid grid-cols-2 gap-3">
          <SoftCard className="min-h-[120px] flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-2">✏️</div>
              <h3 className="font-semibold text-text-primary">Notes</h3>
            </div>
            <div className="text-2xl font-bold text-text-primary">
              {notes.length}
            </div>
          </SoftCard>

          <SoftCard className="min-h-[120px] flex flex-col justify-between">
            <div>
              <div className="text-3xl mb-2">📋</div>
              <h3 className="font-semibold text-text-primary">Enregistrements</h3>
            </div>
            <div className="text-2xl font-bold text-text-primary">
              {moduleEntries.length}
            </div>
          </SoftCard>
        </div>

        {/* PsIA Conversations */}
        <SoftCard>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-text-primary mb-1">Conversations PsIA</h3>
              <p className="text-sm text-text-secondary">
                {psiaConversations.length} échange{psiaConversations.length > 1 ? 's' : ''} ce mois
              </p>
            </div>
          </div>
        </SoftCard>

        {/* Recent Entries */}
        {entries.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide">
              Récent
            </h3>
            <div className="space-y-2">
              {entries.slice(0, 5).map((entry) => (
                <SoftCard key={entry.id} className="py-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-text-primary">
                        {entry.type === 'module' && `Module: ${entry.module}`}
                        {entry.type === 'note' && 'Note personnelle'}
                        {entry.type === 'psia' && 'Conversation PsIA'}
                      </p>
                      <p className="text-xs text-text-muted mt-1">
                        {new Date(entry.createdAt).toLocaleDateString('fr-FR', {
                          day: 'numeric',
                          month: 'short',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                </SoftCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
