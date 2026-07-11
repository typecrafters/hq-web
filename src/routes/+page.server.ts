import { API_URL } from "$env/static/private";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

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