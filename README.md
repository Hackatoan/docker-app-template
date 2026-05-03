# Docker App Template
Next.js app pre-wired for auto-deployment via GitHub Actions + Watchtower.

## Flow
Push to main → GitHub builds Docker image → pushes to GHCR → Watchtower pulls it → live in 60s

## New app checklist
- [ ] Use this template to create a new repo
- [ ] Create `/opt/apps/APPNAME/docker-compose.yml` on server
- [ ] Replace APPNAME and PORT in compose file
- [ ] `docker compose up -d` on server
- [ ] Add NPM proxy host pointing to localhost:PORT
- [ ] Push to main — auto-deploys from here on
