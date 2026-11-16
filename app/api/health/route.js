// Lightweight liveness probe for Docker healthchecks, uptime monitors and
// NPMplus/load-balancer checks. Always rendered at request time, never cached.
import pkg from '../../../package.json'

export const dynamic = 'force-dynamic'

// Reports which build is running, so you can confirm a Watchtower/compose
// redeploy actually picked up the new image. Defaults to package.json's
// "version"; set APP_VERSION (e.g. a git SHA or release tag) to override.
const version = process.env.APP_VERSION || pkg.version

export function GET() {
  return Response.json(
    { status: 'ok', version, uptime: Math.round(process.uptime()) },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
