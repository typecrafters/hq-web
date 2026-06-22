import type { ProjectStatus } from "$enum/ProjectStatus";

export interface Project {
    id: string;
    name: string;
    status: ProjectStatus
    description: string;
    content: string;
    imageUrl: string;
    tags: string[];
    href: string;
}