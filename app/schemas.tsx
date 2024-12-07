import { z } from 'zod';


const createIssueSchema = z.object({
    title: z.string().min(1).max(100),
    description: z.string().min(1).max(1000),
});

export default createIssueSchema;