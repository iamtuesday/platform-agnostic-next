'use client'

import { io } from 'socket.io-client'

const socketConfig = {
	url: process.env.NEXT_PUBLIC_SOCKET_URL,
	options: {
		transports: ['websocket', 'polling'],
		reconnectionAttempts: 5,
		timeout: 1_0000,
		debug: true
	}
}

export const socket = io(socketConfig.url!, socketConfig.options)
