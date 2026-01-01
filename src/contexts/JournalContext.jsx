import { createContext, useContext, useState, useEffect } from 'react';

const JournalContext = createContext();

export function JournalProvider({ children }) {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem('theraspace_journal');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('theraspace_journal', JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries((prev) => [
      {
        id: Date.now(),
        ...entry,
        createdAt: new Date().toISOString(),
      },
      ...prev,
    ]);
  };

  const getEntriesByType = (type) => {
    return entries.filter((entry) => entry.type === type);
  };

  const getRecentEntries = (limit = 10) => {
    return entries.slice(0, limit);
  };

  return (
    <JournalContext.Provider value={{ entries, addEntry, getEntriesByType, getRecentEntries }}>
      {children}
    </JournalContext.Provider>
  );
}

export function useJournal() {
  const context = useContext(JournalContext);
  if (!context) {
    throw new Error('useJournal must be used within JournalProvider');
  }
  return context;
}
