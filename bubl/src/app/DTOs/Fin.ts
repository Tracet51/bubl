import { BublComment } from "./BublComment";

export interface Fin {
    id: number,
    firstName: string,
    lastName: string,
    officeName: string,
    comments: Array<BublComment>
}