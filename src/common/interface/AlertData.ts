import type { AlertType } from "$common/enum/AlertType";

export interface AlertData {
    type: AlertType
    message: string;
}