# AuthFlow – Système d’authentification complet

Une interface web responsive avec un processus d’inscription multi-étapes (Inscription, Vérification OTP, Finalisation, Bienvenue), connectée à un backend sécurisé avec gestion des utilisateurs, vérification par email, OAuth Google/GitHub et validation dynamique.

---

## 🧠 Fonctionnalités

### Frontend (React + TypeScript)
- ✅ Inscription avec email, mot de passe, et nom
- ✅ Vérification de l'adresse email par code OTP
- ✅ Interface multi-étapes avec barre de progression dynamique
- ✅ Responsive (mobile & desktop)
- ✅ Connexion avec Google et GitHub (OAuth)
- ✅ Gestion d'erreurs claires pour chaque étape
- ✅ Design personnalisé avec composants réutilisables

### Backend (Express.js + Prisma + MongoDB)
- ✅ Enregistrement d'utilisateur avec validation (Joi)
- ✅ Génération et envoi d’un code OTP par email
- ✅ Vérification OTP (expiration, validité, unicité)
- ✅ Authentification via email/password ou OAuth
- ✅ Stockage sécurisé (bcrypt, JWT, cookies httpOnly)
- ✅ Routes RESTful (`/auth/register`, `/auth/verify`, `/auth/login`, `/auth/oauth`)

---

## 📁 Structure du projet

### Frontend
│
├── src/
│ ├── pages/
│ │ ├── Inscription.tsx
│ │ ├── Verification.tsx
│ │ ├── Finalisation.tsx
│ │ └── Bienvenue.tsx
│ ├── components/
│ │ ├── Input/, Button/, OTP/, Entete/, Police/, Form/
│ │ ├── ProgressionFooter.tsx, ProgressBar.tsx
│ └── services/
│ └── authService.ts
│
├── App.tsx
└── main.tsx

### Backend
│
├── controllers/
│ └── authController.ts
├── routes/
│ └── authRoutes.ts
├── utils/
│ └── otp.ts, sendMail.ts
├── prisma/
│ └── schema.prisma
├── index.ts
└── .env

---

## 🔧 Installation et Lancement

### 1. Cloner le projet

git@github.com:Nehemie-Jacques/Aws-Labs.git
cd Aws-Labs

### 2. Lancer le backend

cd backend
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev

### .env backend :

PORT=5000
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_password
CLIENT_URL=http://localhost:5173

### 2. Lancer le frontend

cd frontend
npm install
npm run dev

### .env backend :

VITE_API_URL=http://localhost:5000/api

### 📬 Exemple de flux utilisateur

✍️ Inscription → saisie email + mot de passe

✉️ Réception OTP → email avec code

🔐 Vérification → saisie OTP

✅ Finalisation → ajout numéros WhatsApp (optionnel)

🎉 Bienvenue !

### 🧪 Stack technique

Frontend : React, TypeScript, TailwindCSS, React Router

Backend : Express.js, Prisma, MongoDB, Joi, bcrypt, JWT

Email : Nodemailer

OAuth : Passport.js (Google + GitHub)

### ✨ Auteurs

Développé par Sighe Néhémie dans le cadre d’un projet full-stack pour apprendre à gérer un processus d’authentification complet et sécurisé codé en react.js pour le frontend.