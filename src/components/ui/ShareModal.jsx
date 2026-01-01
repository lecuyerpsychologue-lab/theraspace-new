import { Save, Share2, X } from 'lucide-react';
import { useJournal } from '../../contexts/JournalContext';
import Button from './Button';

export default function ShareModal({ isOpen, onClose, content, moduleTitle }) {
  const { addEntry } = useJournal();

  if (!isOpen) return null;

  const handleSave = () => {
    addEntry({
      type: 'module',
      module: moduleTitle,
      content: content,
      date: new Date().toISOString(),
    });
    onClose();
  };

  const handleShare = () => {
    // Placeholder pour fonctionnalité de partage story
    alert('Fonctionnalité de partage à venir!');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Module terminé! 🎉</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary">
            <X className="w-6 h-6" />
          </button>
        </div>

        <p className="text-text-secondary mb-6">
          Que veux-tu faire de cette expérience?
        </p>

        <div className="space-y-3">
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-3 bg-soft-gray hover:bg-gray-200 text-text-primary p-4 rounded-xl transition-colors"
          >
            <Save className="w-5 h-5" />
            <span className="font-medium">Sauvegarder dans mon Journal</span>
          </button>

          <button
            onClick={handleShare}
            className="w-full flex items-center justify-center gap-3 bg-soft-gray hover:bg-gray-200 text-text-primary p-4 rounded-xl transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span className="font-medium">Partager en story</span>
          </button>

          <Button
            variant="secondary"
            onClick={onClose}
            className="w-full"
          >
            Terminer sans sauvegarder
          </Button>
        </div>
      </div>
    </div>
  );
}
