# 🌱 TheraSpace

> Ton espace pour grandir

Application de bien-être mental pour adolescents, construite avec React, Vite et Tailwind CSS.

---

## 📋 Description

TheraSpace est une application web progressive dédiée au bien-être mental des adolescents. Elle propose un espace sécurisé et bienveillant avec des outils d'auto-soin, de suivi émotionnel, et d'accompagnement par intelligence artificielle.

## ✨ Fonctionnalités

### 🏠 Page d'Accueil
- **Météo émotionnelle** : Un variateur à 8 niveaux pour exprimer ton humeur
- **Recommandations personnalisées** : Des suggestions d'exercices basées sur ton état
- **Suivi de progression** : Voyage Phare et jardin de forces
- **Bouton SOS** : Accès rapide aux ressources d'urgence

### 🧭 Explorer
- **9 modules organisés** par catégories :
  - **Se calmer** : Respiration, Ancrage
  - **Se comprendre** : Écho, Identité
  - **Grandir** : Phare, Jardin
  - **Apprendre & s'inspirer** : Lumière, Oracle
  - **Suivre** : Humeur

### 📖 Journal
- **Historique météo** : Visualisation de ta semaine émotionnelle
- **Statistiques** : Notes, enregistrements, conversations
- **Tendances** : Analyse de l'évolution de ton humeur

### 💬 PsIA
- **Compagnon IA bienveillant** : Disponible 24/7 pour t'écouter
- **Suggestions rapides** : Expressions émotionnelles prédéfinies
- **Conversations sauvegardées** : Historique dans ton journal

### 👤 Profil
- **Statistiques personnelles** : Jours de connexion, exercices complétés
- **Paramètres** : Notifications, confidentialité
- **Gestion du compte**

### 🛟 SOS
- **Exercice de respiration** : Calme-toi immédiatement
- **Numéros d'urgence** : 15, 3114, 119, Fil Santé Jeunes
- **Accès rapide à PsIA**

---

## 🎨 Design System "Safe Space"

### Palette de Couleurs

#### Fonds
- **Cream** : `#FAF7F2` - Fond principal
- **White** : `#FFFFFF` - Cartes
- **Soft Gray** : `#F5F3EF` - Inputs

#### Modules
- **Sage Green** : `#8B9F82` - Ancrage, Jardin
- **Lavender Blue** : `#A8B4D4` - Respiration
- **Muted Yellow** : `#E8D5A3` - Oracle
- **Soft Coral** : `#E8B4A8` - Écho
- **Dusty Rose** : `#D4A5A5` - Identité
- **Warm Terracotta** : `#C4967A` - Phare
- **Soft Teal** : `#7FB3B3` - PsIA
- **Peach** : `#EABB7A` - Humeur
- **Muted Purple** : `#B8A5C7` - Lumière
- **Coral Red** : `#E07A5F` - SOS

### Typographie
- **Font** : Plus Jakarta Sans (Google Fonts)
- **H1** : 32px, Bold (700)
- **H2** : 24px, Semibold (600)
- **H3** : 18px, Semibold (600)
- **Body** : 16px, Regular (400)
- **Caption** : 14px, Medium (500)

---

## 🛠️ Stack Technique

- **Framework** : React 18.3.1
- **Build Tool** : Vite 7.3.0
- **Styling** : Tailwind CSS
- **Routing** : React Router DOM 7.1.1
- **Icons** : Lucide React 0.469.0
- **State** : Context API + localStorage

---

## 🚀 Installation

### Prérequis
- Node.js 18+ et npm

### Installation des dépendances
```bash
npm install
```

### Développement
```bash
npm run dev
```
Ouvre [http://localhost:5173](http://localhost:5173)

### Build Production
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

---

## 📁 Structure du Projet

```
src/
├── components/
│   ├── ui/                    # Composants UI réutilisables
│   │   ├── SoftCard.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── WeatherSlider.jsx
│   │   ├── SOSButton.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── LoadingSpinner.jsx
│   │   └── ShareModal.jsx
│   ├── layout/                # Layouts de l'application
│   │   ├── AppLayout.jsx
│   │   ├── ModuleLayout.jsx
│   │   ├── BottomNav.jsx
│   │   └── Header.jsx
│   ├── home/                  # Page d'accueil
│   ├── explorer/              # Page explorer
│   ├── journal/               # Page journal
│   ├── psia/                  # Page PsIA
│   ├── profil/                # Page profil
│   ├── sos/                   # Page SOS
│   └── modules/               # 9 modules
├── contexts/                  # Context API providers
│   ├── AuthContext.jsx
│   ├── JournalContext.jsx
│   ├── ProgressContext.jsx
│   └── WeatherContext.jsx
├── hooks/                     # Custom hooks
│   ├── useLocalStorage.js
│   └── useShare.js
├── utils/                     # Utilitaires
│   ├── constants.js
│   └── helpers.js
├── api/                       # API calls
│   └── chat.js
├── App.jsx                    # Router principal
├── main.jsx                   # Point d'entrée
└── index.css                  # Styles globaux + Tailwind
```

---

## 🔐 Données et Stockage

Toutes les données sont stockées localement dans le navigateur via `localStorage` :
- **theraspace_user** : Informations utilisateur
- **theraspace_journal** : Entrées du journal
- **theraspace_progress** : Progression et statistiques
- **theraspace_weather** : Historique météo émotionnelle

---

## 🎯 Roadmap

### Phase actuelle : Fondation ✅
- [x] Structure complète de l'application
- [x] Design system implémenté
- [x] Navigation fonctionnelle
- [x] Stockage local
- [x] 9 modules créés (placeholders)

### Prochaines étapes
- [ ] Implémenter le contenu des modules
- [ ] Intégration IA pour PsIA
- [ ] Système d'authentification
- [ ] Fonctionnalité de partage
- [ ] Notifications push
- [ ] Tests automatisés
- [ ] Progressive Web App (PWA)
- [ ] Mode sombre

---

## 🤝 Contribution

Ce projet est en développement actif. Les contributions sont les bienvenues!

---

## 📄 Licence

Tous droits réservés - TheraSpace 2026

---

## 🆘 Support

Pour toute question ou problème :
- Ouvre une issue sur GitHub
- En cas d'urgence : Compose le 3114 (Prévention Suicide) ou le 15 (SAMU)

---

**Développé avec 💚 pour le bien-être des adolescents**
