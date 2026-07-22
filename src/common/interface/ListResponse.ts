export interface ListResponse<T> {
    message: string;
    items: Array<T>;
    meta: Record<string, any> | null;
}