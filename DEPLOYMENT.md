# GitHub Pages Deployment Guide

This Next.js project is configured for automatic deployment to GitHub Pages with your custom domain `camninh.com`.

## Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every time you push to the `main` branch, the site will automatically build and deploy.

### What happens automatically:
1. GitHub Actions builds the project using `npm run build`
2. Exports static files using `npm run export`  
3. Creates a `.nojekyll` file to prevent Jekyll processing
4. Deploys to GitHub Pages with your custom domain

## Manual Deployment (if needed)

If you need to deploy manually:

```bash
# Build and export the project
npm run deploy

# The static files will be created in the 'out' directory
# You can then manually upload these files to your hosting provider
```

## GitHub Repository Setup

### 1. Enable GitHub Pages
1. Go to your repository settings
2. Scroll down to "Pages" section
3. Set source to "GitHub Actions"

### 2. Custom Domain (Already configured)
- Your `CNAME` file is already configured for `camninh.com`
- The GitHub Actions workflow will automatically handle the domain setup

### 3. Required Permissions
Make sure the repository has the following permissions:
- Actions: enabled
- Pages: enabled
- Workflows have write permissions to deploy

## Project Structure

```
cam-ninh-web/
├── .github/workflows/deploy.yml   # Automatic deployment workflow
├── CNAME                          # Custom domain configuration
├── next.config.js                 # Next.js config for static export
├── package.json                   # Updated with deploy script
└── out/                          # Generated static files (after build)
```

## Troubleshooting

### Build Issues
- Make sure all dependencies are installed: `npm install`
- Test local build: `npm run build`
- Test export: `npm run export`

### Deployment Issues
- Check GitHub Actions logs in the "Actions" tab of your repository
- Ensure your repository has Pages enabled
- Verify your custom domain DNS settings point to GitHub Pages

## DNS Configuration for Custom Domain

Make sure your domain `camninh.com` has these DNS records:
- CNAME record pointing `www` to `yourusername.github.io`
- Or A records pointing to GitHub Pages IPs:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

## Next Steps

1. Push your changes to the `main` branch
2. Check the "Actions" tab in GitHub to see the deployment progress
3. Once deployed, visit `https://camninh.com` to see your site live

The site should be automatically deployed and updated whenever you push changes to the main branch! 


Fix1