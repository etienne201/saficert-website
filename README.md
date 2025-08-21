# Saficert Website

Un site web moderne développé avec **Next.js 15**, **React 18**, et **TailwindCSS 4**.  
Le projet est conçu pour être rapide, maintenable et extensible, avec une UI basée sur **Radix UI**, **Framer Motion** et des composants réutilisables.

---

## 🚀 Stack technique

- **[Next.js 15](https://nextjs.org/)** – Framework React
- **[React 18](https://react.dev/)** – Librairie UI
- **[TailwindCSS 4](https://tailwindcss.com/)** – Styling utilitaire
- **[Radix UI](https://www.radix-ui.com/)** – Composants accessibles
- **[Framer Motion](https://www.framer.com/motion/)** – Animations fluides
- **[Zod](https://zod.dev/)** – Validation de schémas
- **[React Hook Form](https://react-hook-form.com/)** – Gestion des formulaires
- **Recharts** – Graphiques interactifs
- **Lucide Icons** – Icônes modernes

---

## 📦 Installation

Cloner le dépôt :

```bash
git clone https://github.com/etienne201/saficert-website.git
cd saficert-website
.
```
## Installer les dépendances :
```bash
yarn install
```
## 🛠️ Scripts disponibles
Lancer en mode développement

```bash
yarn dev
```
Le projet sera disponible sur http://localhost:3000
## Construire pour la production
```bash
yarn build
```
## Lancer en mode production
```bash
yarn start
```
## Linter le code
```bash
yarn lint
```
## 📂 Structure du projet

```ruby
saficert-website/
│── components/       # Composants réutilisables (UI, layout, etc.)
│   ├── layout/       # Layout global (header, footer…)
│   ├── ui/           # Composants UI génériques
│
│── public/           # Assets statiques (favicon, manifest, images…)
│
│── pages/            # Pages Next.js (si App Router non utilisé)
│── app/              # App Router (si activé dans Next 15)
│
│── styles/           # Fichiers CSS / Tailwind
│── utils/            # Fonctions utilitaires
│
│── next.config.js    # Configuration Next.js
│── package.json      # Dépendances et scripts
│── tsconfig.json     # Config TypeScript
│── tailwind.config.js # Config TailwindCSS
```
## 🌐 Déploiement

Le projet peut être déployé facilement sur :

Vercel
 (recommandé pour Next.js).....

Netlify

Serveur custom avec Node.js

## 📜 Licence

Ce projet est sous licence MIT.
Vous êtes libre de l’utiliser, le modifier et le distribuer.

## 👨‍💻 Auteur

Développé avec ❤️ par Saficert Website.
Pour toute contribution, n’hésitez pas à ouvrir une issue ou une pull request.