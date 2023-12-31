import React from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './components/Layout/Layout'
import './globals.css'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(<Layout />)
