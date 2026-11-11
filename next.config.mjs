const securityHeaders = [
  // Prevent MIME-sniffing a response away from its declared Content-Type.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Disallow the app from being framed by other sites (clickjacking protection).
  { key: "X-Frame-Options", value: "DENY" },
  // Don't leak full referrer URLs to third parties.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Lock down powerful browser features by default; templates cloned from
  // this repo can loosen individual entries once they actually need them.
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  // Content-Security-Policy: default-src 'self' prevents inline scripts and
  // restricts resources to same-origin, defending against XSS attacks.
  // Loosen or remove entries as your app's legitimate needs require.
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self'",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};
export default nextConfig;
