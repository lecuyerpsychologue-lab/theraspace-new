import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem('theraspace_progress');
    return saved ? JSON.parse(saved) : {
      phareWeek: 0,
      phareTotal: 8,
      jardinSeeds: [],
      exercisesCompleted: 0,
      daysStreak: 0,
      lastActiveDate: null,
    };
  });

  useEffect(() => {
    localStorage.setItem('theraspace_progress', JSON.stringify(progress));
  }, [progress]);

  const updatePhareProgress = (week) => {
    setProgress((prev) => ({
      ...prev,
      phareWeek: week,
    }));
  };

  const addSeed = (seed) => {
    setProgress((prev) => ({
      ...prev,
      jardinSeeds: [...prev.jardinSeeds, { ...seed, plantedAt: new Date().toISOString() }],
    }));
  };

  const completeExercise = () => {
    const today = new Date().toDateString();
    setProgress((prev) => {
      const lastActive = prev.lastActiveDate ? new Date(prev.lastActiveDate).toDateString() : null;
      const isNewDay = lastActive !== today;

      return {
        ...prev,
        exercisesCompleted: prev.exercisesCompleted + 1,
        daysStreak: isNewDay ? prev.daysStreak + 1 : prev.daysStreak,
        lastActiveDate: new Date().toISOString(),
      };
    });
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        progress, 
        updatePhareProgress, 
        addSeed, 
        completeExercise 
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within ProgressProvider');
  }
  return context;
}
