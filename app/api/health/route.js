// Lightweight liveness probe for Docker healthchecks, uptime monitors and
// NPMplus/load-balancer checks. Always rendered at request time, never cached.
export const dynamic = 'force-dynamic'

export function GET() {
  return Response.json(
    { status: 'ok', uptime: Math.round(process.uptime()) },
    { headers: { 'Cache-Control': 'no-store' } }
  )
}
