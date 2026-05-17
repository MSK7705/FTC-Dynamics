import {
  StartServer,
  transformStreamWithErrorHandling,
} from '@tanstack/react-start/server'
import { getRouter } from './router'

export default transformStreamWithErrorHandling(
  StartServer({
    router: getRouter(),
  })
)

