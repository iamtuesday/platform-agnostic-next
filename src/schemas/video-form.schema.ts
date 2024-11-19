import * as z from 'zod'

export const VideoFormSchema = z.object({
	url: z.string().url().min(6),
	id: z.string().optional()
})

export type VideoFormType = z.infer<typeof VideoFormSchema>
