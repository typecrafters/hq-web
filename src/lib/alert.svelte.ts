export type AlertType = "info" | "success" | "warning" | "error";

let current: Alert | null = $state(null);

export class Alert {
    private _message: string = $state("");
    private _type: AlertType = $state("info");
    private _visible: boolean = $state(false);

    public get message(): string {
        return this._message;
    }

    public get type(): AlertType {
        return this._type;
    }

    public get visible(): boolean {
        return this._visible;
    }

    private constructor(message: string, type: AlertType, visible: boolean) {
        this._message = message;
        this._type = type;
        this._visible = visible;
    }

    private static show(message: string, type: AlertType): Alert {
        const alert = new Alert(message, type, true);
        current = alert;
        return alert;
    }

    public static info(message: string): Alert {
        return Alert.show(message, "info");
    }

    public static success(message: string): Alert {
        return Alert.show(message, "success");
    }

    public static warning(message: string): Alert {
        return Alert.show(message, "warning");
    }

    public static error(message: string): Alert {
        return Alert.show(message, "error");
    }

    public hide(): void {
        this._visible = false;
    }
}

export const alertStore = {
    get current(): Alert | null {
        return current;
    }
};
