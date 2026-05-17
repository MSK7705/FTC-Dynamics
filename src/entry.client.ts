import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

const router = getRouter()

ReactDOM.hydrateRoot(
  document.getElementById('app')!,
  <RouterProvider router={router} />,
)
