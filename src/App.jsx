import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { JournalProvider } from './contexts/JournalContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { WeatherProvider } from './contexts/WeatherContext';

import AppLayout from './components/layout/AppLayout';
import HomePage from './components/home/HomePage';
import ExplorerPage from './components/explorer/ExplorerPage';
import JournalPage from './components/journal/JournalPage';
import PsIAPage from './components/psia/PsIAPage';
import ProfilPage from './components/profil/ProfilPage';
import SOSPage from './components/sos/SOSPage';

// Modules
import RespirationModule from './components/modules/respiration/RespirationModule';
import AncrageModule from './components/modules/ancrage/AncrageModule';
import EchoModule from './components/modules/echo/EchoModule';
import IdentiteModule from './components/modules/identite/IdentiteModule';
import PhareModule from './components/modules/phare/PhareModule';
import JardinModule from './components/modules/jardin/JardinModule';
import LumiereModule from './components/modules/lumiere/LumiereModule';
import OracleModule from './components/modules/oracle/OracleModule';
import HumeurModule from './components/modules/humeur/HumeurModule';

function App() {
  return (
    <AuthProvider>
      <JournalProvider>
        <ProgressProvider>
          <WeatherProvider>
            <BrowserRouter>
              <Routes>
                {/* Main App Routes with Bottom Navigation */}
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Navigate to="/home" replace />} />
                  <Route path="home" element={<HomePage />} />
                  <Route path="explorer" element={<ExplorerPage />} />
                  <Route path="journal" element={<JournalPage />} />
                  <Route path="psia" element={<PsIAPage />} />
                  <Route path="profil" element={<ProfilPage />} />
                </Route>

                {/* SOS Page (no bottom nav) */}
                <Route path="sos" element={<SOSPage />} />

                {/* Module Routes (no bottom nav) */}
                <Route path="modules">
                  <Route path="respiration" element={<RespirationModule />} />
                  <Route path="ancrage" element={<AncrageModule />} />
                  <Route path="echo" element={<EchoModule />} />
                  <Route path="identite" element={<IdentiteModule />} />
                  <Route path="phare" element={<PhareModule />} />
                  <Route path="jardin" element={<JardinModule />} />
                  <Route path="lumiere" element={<LumiereModule />} />
                  <Route path="oracle" element={<OracleModule />} />
                  <Route path="humeur" element={<HumeurModule />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </WeatherProvider>
        </ProgressProvider>
      </JournalProvider>
    </AuthProvider>
  );
}

export default App;
