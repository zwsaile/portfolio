import createImageUrlBuilder from '@sanity/image-url'
import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '../env'

const imageBuilder = imageUrlBuilder({
  projectId: 'pmi7lwu3' || '',
  dataset: 'dataset' || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder.image(source).auto('format').fit('max')
}
