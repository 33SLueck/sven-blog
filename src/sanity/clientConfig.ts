/**
 * Client-safe Sanity config used by the embedded NextStudio client.
 * Keep this minimal and serializable to avoid pulling server-only
 * Sanity code into the client bundle (which can break Turbopack).
 */
import {apiVersion, dataset, projectId} from './env'

const clientConfig = {
  projectId,
  dataset,
  apiVersion,
  // basePath for the mounted Studio
  basePath: '/studio',
}

export default clientConfig
