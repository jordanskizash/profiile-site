import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { resourceFromAttributes } from '@opentelemetry/resources';
import { NodeSDK } from '@opentelemetry/sdk-node';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';

export function register() {
  // Only register if environment variables are set
  if (process.env.DASH0_OTLP_ENDPOINT && process.env.DASH0_AUTHORIZATION_TOKEN) {
    const authHeaders = {
      'Authorization': `Bearer ${process.env.DASH0_AUTHORIZATION_TOKEN}`,
    };

    // Configure trace exporter
    const traceExporter = new OTLPTraceExporter({
      url: `${process.env.DASH0_OTLP_ENDPOINT}/v1/traces`,
      headers: authHeaders,
    });

    // Configure metrics exporter
    const metricExporter = new OTLPMetricExporter({
      url: `${process.env.DASH0_OTLP_ENDPOINT}/v1/metrics`,
      headers: authHeaders,
    });

    // Initialize OpenTelemetry SDK
    const sdk = new NodeSDK({
      resource: resourceFromAttributes({
        [ATTR_SERVICE_NAME]: 'profilesite',
        [ATTR_SERVICE_VERSION]: '0.1.0',
      }),
      traceExporter,
      metricReader: new PeriodicExportingMetricReader({
        exporter: metricExporter,
        exportIntervalMillis: 60000, // Export metrics every 60 seconds
      }),
      instrumentations: [getNodeAutoInstrumentations()],
    });

    sdk.start();
    console.log('OpenTelemetry instrumentation started for Dash0');

    // Gracefully shut down SDK on process termination (Node.js runtime only)
    if (typeof process !== 'undefined' && process.on) {
      process.on('SIGTERM', () => {
        sdk.shutdown()
          .then(() => console.log('OpenTelemetry SDK shut down successfully'))
          .catch((error) => console.error('Error shutting down OpenTelemetry SDK', error))
          .finally(() => process.exit && process.exit(0));
      });
    }
  } else {
    console.warn('Dash0 environment variables not set. Skipping OpenTelemetry instrumentation.');
  }
}