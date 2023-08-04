import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const config = {
  apiVersion,
  dataset: 'production',
  projectId: 'pmi7lwu3',
  useCdn: false,
}

export const sanityClient = createClient(config);

export const urlFor = (source: any) => {
  return imageUrlBuilder(config).image(source);
}
