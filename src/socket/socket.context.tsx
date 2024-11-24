'use client'

import { revalidateCacheByPath } from '@/actions/dashboard/actions'
import { socket } from '@/lib/socket/client'
import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

interface SocketContextProps {
	socket: Socket | null
}

export const SocketContext = createContext<SocketContextProps | undefined>(undefined)

export const useSocket = (): SocketContextProps => {
	const context = useContext(SocketContext)
	if (!context) {
		throw new Error('useSocket must be used within a SocketProvider')
	}
	return context
}

interface SocketProviderProps {
	children: ReactNode
}

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
	const [_socket, _setSocket] = useState<Socket | null>(null)

	useEffect(() => {
		if (!socket.connected) {
			socket.connect()
		}

		socket.on('connect', () => {
			console.log('Socket connected')
			_setSocket(socket)
		})

		socket.on('disconnect', () => {
			console.log('Socket disconnected')
			_setSocket(null)
		})

		socket.on('new_reel', () => {
			console.log('Listen new_reel socket event')
			revalidateCacheByPath(['/reels', '/agnostic/reels'])
		})

		return () => {
			socket.disconnect()
		}
	}, [])

	return <SocketContext.Provider value={{ socket: _socket }}>{children}</SocketContext.Provider>
}
