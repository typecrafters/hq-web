import type { ProjectStatus } from "$common/enum/ProjectStatus";

export interface Project {
    id: number;
    project_name: string;
    project_lead: number;
    status: ProjectStatus;
    created_at: Date;
    updated_at: Date | null;
    tags: Array<string>;
    description: string | null;
    summary: string;
    thumbnail_url: string | null;
}
