import * as dotenv from 'dotenv'

dotenv.config()

export const apiVersion =
  process.env.NEXT_PUBLIC_API_VERSION || '2023-07-28'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_API_DATASET,
  'Missing environment variable: NEXT_PUBLIC_API_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_API_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_API_PROJECT_ID'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
