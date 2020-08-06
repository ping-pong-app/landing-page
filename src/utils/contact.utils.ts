import { ContactFormState } from "../config/contact.config";

export function validateFormData(formData: ContactFormState): ContactFormState {
    formData.valid = true;
    formData.name.error = null;
    formData.email.error = null;
    formData.message.error = null;
    
    if (!formData.name.value) {
        formData.name.error = "Name must not be empty!";
        formData.valid = false;
    }
    if (!formData.message.value) {
        formData.message.error = "Message must not be empty!";
        formData.valid = false;
    }
    if (formData.message.value.length > 1000) {
        formData.message.error = "Message is too long!";
        formData.valid = false;
    }
    if (!formData.email.value) {
        formData.email.error = "Email must not be empty!";
        formData.valid = false;
    }
    
    const regex = new RegExp(/^(([^<>()[\].,;:\s@"]+(.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i);
    if (!regex.test(formData.email.value)) {
        formData.email.error = "Not a valid email!";
        formData.valid = false;
    }
    
    return formData;
}
