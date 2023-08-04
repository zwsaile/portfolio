export const apiVersion =
  process.env.SANITY_STUDIO_API_VERSION || '2023-07-28'

export const dataset = assertValue(
  'production',
  'Missing environment variable: SANITY_STUDIO_API_DATASET'
)

export const projectId = assertValue(
  'pmi7lwu3',
  'Missing environment variable: SANITY_STUDIO_API_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
