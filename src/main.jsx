import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import AuthProvider from './providers/AuthProvider'
import RouterJsx from './routes/RouterJsx/RouterJsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<RouterJsx />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
)
