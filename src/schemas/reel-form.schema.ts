import * as z from 'zod'

import { ReelTypeEnum } from '@/app/enums'

export const ReelFormSchema = z.object({
	url: z.string().min(6),
	id: z.string().optional(),
	title: z.string().min(3),
	type: z.nativeEnum(ReelTypeEnum),
	description: z.string().optional()
})

export type ReelFormSchemaType = z.infer<typeof ReelFormSchema>
