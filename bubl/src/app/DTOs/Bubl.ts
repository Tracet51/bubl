import { BublComment } from './BublComment';

export interface Bubl {
    id: number,
    yes: number,
    no: number,
    total: number,
    daysRemaining: number,
    summary: string,
    description: string,
    comments: Array<BublComment>
}