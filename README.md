# Alarmy Clone MVP 

React Native/Expo alarm application with advanced wake-up features.

## 🚀 Project Overview

Building a feature-rich alarm clock app similar to Alarmy, focusing on reliable wake-up mechanisms and user engagement.

### Tech Stack
- **Frontend**: React Native with Expo
- **Language**: TypeScript  
- **Local Storage**: AsyncStorage + SQLite (primary)
- **Authentication**: Local auth + optional cloud sync
- **Notifications**: expo-notifications
- **Development**: Expo Go for testing

### Backend Options
1. **Local-First** (Recommended for MVP)
   - AsyncStorage for settings
   - SQLite for alarm data
   - No ongoing costs
   

## 📋 MVP Checklist (Phase 1)

### Core Features:
- [ ] **Alarm Functionality**
  - Schedule alarms locally using expo-notifications
  - Persistent storage with SQLite
  - Background task handling
- [ ] **Push Notifications** 
  - Local notifications for alarms
  - Reliable wake-up mechanisms
- [ ] **Local Data Management**
  - AsyncStorage for app settings
  - SQLite for alarm schedules
  - Export/import functionality
- [ ] **Cloud Sync (Optional)**
  - User accounts (if cloud backend chosen)
  - Cross-device synchronization
  - Backup and restore

## 🌿 Git Workflow (KISS Principle)

### Branch Structure
```main → test → dev → feature/*
```

- **main** - Production-ready code
- **test** - Staging/testing branch  
- **dev** - Development integration
- **feature/** - Individual feature branches

### Development Process

#### 1. Feature Development
```bash
# Start new feature
git checkout dev
git pull origin dev
git checkout -b feature/alarm-scheduler

# Work on feature...
# Commit changes
git add .
git commit -m "Add alarm scheduling functionality"
git push origin feature/alarm-scheduler
```

#### 2. Merge to Dev
```bash
# Integrate feature
git checkout dev
git merge feature/alarm-scheduler
git push origin dev

# Clean up feature branch
git branch -d feature/alarm-scheduler
git push origin --delete feature/alarm-scheduler
```

#### 3. Testing Phase
```bash
# Promote to testing
git checkout test
git merge dev
git push origin test

# Run tests, QA, device testing...
```

#### 4. Production Release
```bash
# Deploy to production
git checkout main
git merge test
git push origin main
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

## 🛠️ Development Setup

### Prerequisites
- Node.js (v18+)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on iOS/Android

### Installation
```bash
# Clone repository
git clone <repo-url>
cd alarmy-clone

# Install dependencies
npm install

# Start development server
npm start
# or
npx expo start
```

### Available Scripts
- `npm start` - Start Expo development server
- `npm run ios` - Start with iOS simulator focus
- `npm run android` - Start with Android simulator focus  
- `npm run web` - Start web version

## 📱 Testing with Expo Go

1. Install Expo Go from App Store/Play Store
2. Create Expo account
3. Run `npx expo start` in terminal
4. Scan QR code with Expo Go camera
5. App loads on your device for testing

## 🔄 Current Status

**Active Branch**: `dev`  
**Next Feature**: Alarm Functionality

## 📁 Current Project Structure

```
alarmy-clone/
├── .expo/               # Expo development files
├── .git/                # Git repository  
├── README.md            # Project documentation
├── App.tsx              # Main app component
├── index.ts             # Entry point
├── app.json             # Expo configuration
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── assets/              # Images, fonts, etc.
├── .gitignore           # Git ignore rules
└── LICENSE              # Project license
```