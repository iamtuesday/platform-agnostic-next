import { PrismaClient } from '@prisma/client'

const primsClientSingleton = () => {
	return new PrismaClient()
}

declare const globalThis: {
	prismaGlobal: ReturnType<typeof primsClientSingleton>
} & typeof global

const prisma = globalThis.prismaGlobal ?? primsClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') {
	globalThis.prismaGlobal = prisma
}
