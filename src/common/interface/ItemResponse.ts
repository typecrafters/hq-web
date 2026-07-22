export interface ItemResponse<T> {
    message: string;
    item: T;
    meta: Record<string, any> | null;
}