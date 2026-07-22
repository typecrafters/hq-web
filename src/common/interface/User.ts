export interface User {
    id: number;
    role_id: number;
    first_name: string;
    last_name: string;
    title: string | null;
    email: string;
    password_set: boolean;
    profile_picture_url: string | null;
    show_on_page: boolean;
    created_at: Date;
}