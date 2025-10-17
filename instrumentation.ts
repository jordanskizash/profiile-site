import { registerOTel } from '@vercel/otel';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';

export function register() {
  // Only register if environment variables are set
  if (process.env.DASH0_OTLP_ENDPOINT && process.env.DASH0_AUTHORIZATION_TOKEN) {
    registerOTel({
      serviceName: 'my-nextjs-app-local',
      traceExporter: new OTLPTraceExporter({
        url: `${process.env.DASH0_OTLP_ENDPOINT}/v1/traces`,
        headers: {
          'Authorization': `Bearer ${process.env.DASH0_AUTHORIZATION_TOKEN}`,
        },
      }),
    });
  }
}