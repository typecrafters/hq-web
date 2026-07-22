import { API_URL } from "$env/static/private";
import { fail } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
    const data: Record<string, unknown> = {};
    try {
        const projectResponse = await fetch(`${API_URL}/projects/`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        });

        if (!projectResponse.ok) {
            throw new Error("Failed to load projects: " + projectResponse.statusText);
        }

        data["projects"] = (await projectResponse.json()).items ?? [];

    } catch (error) {
        console.error("Error loading projects:", error);
        data["projects"] = [];
    }
    return data;
}

export const actions: Actions = {
    sendMessage: async (event) => {
        const { request, fetch } = event;
        const form = await request.formData();

        const fullName = form.get("fullName") as string;
        const email = form.get("email") as string;
        const message = form.get("message") as string;

        if (!fullName.trim() || !email.trim() || !message.trim()) {
            return fail(400, { error: "Please fill in all fields." });
        }

        const payload = {
            fullName,
            email,
            message
        };

        let response: Response;
        try {
            response = await fetch(`${API_URL}/messages/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
        } catch {
            return fail(500, { error: "Something went wrong. Please try again." });
        }

        if (!response.ok) {
            return fail(response.status, { error: "Something went wrong. Please try again." });
        }

        return { success: true };
    }
};

/*
export const load: PageServerLoad = async ({ fetch, cookies, url }) => {
    const offset = Math.max(0, Number(url.searchParams.get("offset")) || 0);

    try {
        const response = await fetch(`${API_URL}/projects?limit=${LIMIT}&offset=${offset}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                cookie: cookies.getAll().map(c => `${c.name}=${c.value}`).join("; ")
            }
        });

        if (!response.ok) {
            return { projects: [], meta: { total: 0, limit: LIMIT, offset }, error: "Failed to load projects" };
        }

        const { items, meta } = await response.json();
        return { projects: items ?? [], meta: meta ?? { total: 0, limit: LIMIT, offset }, error: null };
    } catch (err) {
        console.error("Error loading users:", err);
        return { projects: [], meta: { total: 0, limit: LIMIT, offset }, error: "Could not connect to backend" };
    }
}
*/