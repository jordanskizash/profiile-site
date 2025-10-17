# Dash0 Observability Setup

This application is instrumented with Dash0 for comprehensive observability including:
- **Server-side OpenTelemetry**: Backend tracing and metrics
- **Website Monitoring**: Client-side browser telemetry

## Prerequisites

Before running the application, you need to configure the following:

### 1. Server-Side OpenTelemetry (Backend)

Already configured with:
- ✅ Auth token: `DASH0_AUTHORIZATION_TOKEN`
- ✅ Endpoint: `DASH0_OTLP_ENDPOINT`

### 2. Website Monitoring (Browser)

**You need to create a website monitoring auth token:**

1. Go to [https://app.dash0.com](https://app.dash0.com)
2. Navigate to **Organization Settings > Auth Tokens**
3. Click **Create Auth Token**
4. Name it: "Website Monitoring" (or similar)
5. **Important**: Set permissions to **Ingesting only** (for security)
6. Copy the generated token
7. Add it to `.env.local`:
   ```bash
   NEXT_PUBLIC_DASH0_WEB_TOKEN="your_token_here"
   ```

> **Security Note**: The website monitoring token will be publicly visible in the browser, so it should have limited permissions (ingesting only) and be used exclusively for client-side monitoring.

## Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
# Server-side (already configured)
DASH0_AUTHORIZATION_TOKEN="auth_..."
DASH0_OTLP_ENDPOINT="https://ingress.us-west-2.aws.dash0.com"

# Client-side (needs configuration)
NEXT_PUBLIC_DASH0_ENDPOINT="https://ingress.us-west-2.aws.dash0.com"
NEXT_PUBLIC_DASH0_WEB_TOKEN="YOUR_WEBSITE_MONITORING_TOKEN_HERE"
```

## What's Monitored

### Server-Side (Node.js)
- HTTP requests/responses
- Database queries
- External API calls
- Custom traces and metrics
- Automatic instrumentation of Node.js libraries

### Client-Side (Browser)
- Page loads and route changes
- Web Vitals (LCP, FID, CLS, etc.)
- Navigation timing
- HTTP requests from browser
- JavaScript errors
- User sessions (anonymous by default)

## Implementation Files

- **[instrumentation.ts](instrumentation.ts)**: Server-side OpenTelemetry setup
- **[components/dash0-provider.tsx](components/dash0-provider.tsx)**: Client-side SDK initialization
- **[app/layout.tsx](app/layout.tsx)**: Root layout with Dash0Provider

## Viewing Data

1. Go to [https://app.dash0.com](https://app.dash0.com)
2. Navigate to your organization
3. View traces, metrics, and browser sessions

## Session Configuration

Default session timeouts:
- **Inactivity timeout**: 3 hours
- **Maximum session duration**: 6 hours

These can be adjusted in [dash0-provider.tsx](components/dash0-provider.tsx).

## Troubleshooting

### No data appearing in Dash0

1. Check browser console for initialization message:
   ```
   Dash0 website monitoring initialized
   ```

2. Verify environment variables are set correctly

3. Ensure the website monitoring token has correct permissions

4. Check Dash0 dashboard for any ingestion errors

### Server telemetry not working

1. Check server logs for:
   ```
   OpenTelemetry instrumentation started for Dash0
   ```

2. Verify `DASH0_AUTHORIZATION_TOKEN` and `DASH0_OTLP_ENDPOINT` are set

3. Test endpoint connectivity

## Documentation

- [Dash0 Website Monitoring Docs](https://www.dash0.com/documentation/dash0/website-monitoring)
- [Dash0 Node.js Integration](https://www.dash0.com/hub/integrations/int_nodejs/overview)
- [OpenTelemetry Next.js Guide](https://nextjs.org/docs/app/guides/open-telemetry)
