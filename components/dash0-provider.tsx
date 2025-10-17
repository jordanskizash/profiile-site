'use client'

import { useEffect } from 'react'
import { init } from '@dash0hq/sdk-web'

export function Dash0Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Only initialize in browser environment
    if (typeof window !== 'undefined') {
      const endpoint = process.env.NEXT_PUBLIC_DASH0_ENDPOINT
      const authToken = process.env.NEXT_PUBLIC_DASH0_WEB_TOKEN

      if (endpoint && authToken) {
        try {
          init({
            serviceName: 'profilesite',
            endpoint: {
              url: endpoint,
              authToken: authToken,
            },
            // Session timeout configuration
            sessionInactivityTimeoutMillis: 3 * 60 * 60 * 1000, // 3 hours
            sessionTerminationTimeoutMillis: 6 * 60 * 60 * 1000, // 6 hours
          })
          console.log('Dash0 website monitoring initialized')
        } catch (error) {
          console.error('Failed to initialize Dash0 website monitoring:', error)
        }
      } else {
        console.warn(
          'Dash0 website monitoring not initialized: Missing NEXT_PUBLIC_DASH0_ENDPOINT or NEXT_PUBLIC_DASH0_WEB_TOKEN'
        )
      }
    }
  }, [])

  return <>{children}</>
}
