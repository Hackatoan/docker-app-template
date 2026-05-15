[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/hackatoa)

# Docker App Template

Next.js app pre-wired for auto-deployment via GitHub Actions + Watchtower.

**Flow:** push to main → GitHub Actions builds Docker image → pushes to GHCR → Watchtower pulls and restarts the container automatically (~5 min lag).

## How Watchtower works

Watchtower runs on the Docker host and polls GHCR every 5 minutes. Any container with the label `com.centurylinklabs.watchtower.enable=true` will be automatically updated when a new image is pushed.

## New app checklist

- [ ] Use this template to create a new repo
- [ ] On the server, create `/opt/apps/APPNAME/docker-compose.yml`:
  
- [ ]  on the server (first time only)
- [ ] Add NPM proxy host pointing to 
- [ ] Push to main — Watchtower handles all future deploys automatically

## No secrets needed

The deploy workflow uses  (auto-provided by Actions) to push to GHCR. No additional secrets required.

---

[hackatoa.com](https://hackatoa.com) · [GitHub](https://github.com/Hackatoan) · [Buy Me A Coffee](https://buymeacoffee.com/hackatoa)
