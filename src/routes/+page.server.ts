import { fail } from "@sveltejs/kit";
import type { ActionData, Actions } from "./$types"
import { AlertType } from "$common/enum/AlertType";
import type { AlertData } from "$common/interface/AlertData";

export const actions: Actions = {
    default: async (event) => {
        const data = await event.request.formData();

        const firstName = data.get("firstName")?.valueOf();
        const lastName = data.get("lastName")?.valueOf();
        const email = data.get("email")?.valueOf();
        const subject = data.get("subject")?.valueOf();
        const message = data.get("message")?.valueOf();

        const isstr = (v: unknown) => typeof v === "string" && v.trim().length > 0;
        const isoptstr = (v: unknown) => v == null || isstr(v);

        if (!isstr(firstName)) return fail(400, { type: AlertType.Error, message: "First name is required!" });
        if (!isoptstr(lastName)) return fail(400, { type: AlertType.Error, message: "Email is required!" });
        if (!isstr(email)) return fail(400, { type: AlertType.Error, message: "Email is required!" });
        if (!isstr(subject)) return fail(400, { type: AlertType.Error, message: "Subject is required!" });
        if (!isstr(message)) return fail(400, { type: AlertType.Error, message: "Message content is required!" });

        const url = new URL("messages", import.meta.env.VITE_API_URL);

        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                subject,
                message
            })
        });

        const text = await response.text();

        return {
            type: response.ok ? AlertType.Success : AlertType.Error,
            message: text
        } satisfies AlertData;
    }
}