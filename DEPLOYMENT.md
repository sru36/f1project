# Deploying F1 Project to Vercel

## Prerequisites
- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- GitHub account (recommended)

## Quick Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository or upload your project
4. Vercel will automatically detect it's a Vite project
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI
1. Install Vercel CLI: `npm i -g vercel`
2. Run in your project directory: `vercel`
3. Follow the prompts to link your project

## Build Configuration
- **Build Command**: `npm run build:client`
- **Output Directory**: `dist/spa`
- **Install Command**: `npm install`

## Important Notes
- This is a **static site deployment** (client-side only)
- Server-side features from the Express server won't work on Vercel
- For full-stack deployment, consider using Vercel Functions or other serverless solutions

## Post-Deployment
- Your F1 project will be available at `https://your-project-name.vercel.app`
- Custom domain can be configured in Vercel dashboard
- Automatic deployments on every push to your main branch

## Troubleshooting
- If build fails, check that all dependencies are in `package.json`
- Ensure `vercel.json` is in your project root
- Check Vercel build logs for specific error messages
