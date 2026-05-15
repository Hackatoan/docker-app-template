[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/hackatoa)

# Docker App Template

Next.js app pre-wired for auto-deployment via GitHub Actions + Watchtower.

**Flow:** push to main → GitHub builds Docker image → pushes to GHCR → Watchtower pulls it → live in ~60s

## New app checklist

- [ ] Use this template to create a new repo
- [ ] Create `/opt/apps/APPNAME/docker-compose.yml` on the server
- [ ] Replace `APPNAME` and `PORT` in the compose file
- [ ] `docker compose up -d` on the server (first time only)
- [ ] Add NPM proxy host pointing to `localhost:PORT`
- [ ] Push to main — auto-deploys from here on

## Usage

```bash
# First deploy (on server):
mkdir -p /opt/apps/my-app
cd /opt/apps/my-app
# Edit docker-compose.yml with correct image and port
docker compose up -d

# Subsequent deploys: just push to main
git push origin main
```

---

[hackatoa.com](https://hackatoa.com) · [GitHub](https://github.com/Hackatoan) · [Buy Me A Coffee](https://buymeacoffee.com/hackatoa)
