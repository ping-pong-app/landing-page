export interface ContactFormState {
    valid: boolean;
    name: {
        error: string | null;
        value: string;
    },
    email: {
        error: string | null;
        value: string;
    },
    message: {
        error: string | null;
        value: string;
    }
}
