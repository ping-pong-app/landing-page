import React, { ChangeEvent, useRef, useState } from "react";
import "./contact-form.component.scss";
import { ContactFormState } from "../../../config/contact.config";
import { validateFormData } from "../../../utils/contact.utils";


export const ContactForm = () => {
    
    const [formData, setFormData] = useState<ContactFormState>({
        valid: true,
        name: {
            error: null,
            value: ""
        },
        email: {
            error: null,
            value: ""
        },
        message: {
            error: null,
            value: ""
        }
    });
    const formRef = useRef<HTMLFormElement>(null);
    
    const getFormControlClazz = (fieldname: string) => {
        if ((formData as any)[fieldname].error !== null) {
            return "form-control is-invalid"
        }
        return "form-control";
    };
    
    const handleInputChange = ($event: ChangeEvent) => {
        const target = $event.target;
        const value = (target as any).value;
        const name = (target as any).name;
        
        (formData as any)[name].value = value;
        
        let newFormData = validateFormData(formData);
        setFormData(newFormData);
    };
    
    const submitForm = () => {
        let newFormData = validateFormData(formData);
        setFormData(newFormData);
        
        if (formData.valid) {
            if (formRef && formRef.current) {
                formRef.current.submit();
            }
        } else {
            console.log("NOT VALID!");
        }
    };
    
    return (
        <div className="contact-form-component">
            <form name="contact-form" method="POST" action="/about" data-netlify="true" data-netlify-honeypot="itsatrap" ref={formRef}>
                <input type="hidden" name="form-name" value="contact-form"/>
                <input type="hidden" name="itsatrap"/>
                
                <div className="form-group">
                    <label>Name:</label>
                    <input name="name" className={getFormControlClazz("name")}
                        onChange={handleInputChange}/>
                    {formData.name.error !== null && (
                        <div className="invalid-feedback">
                            {formData.name.error}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label>E-mail:</label>
                    <input name="email" className={getFormControlClazz("email")}
                        onChange={handleInputChange}/>
                    {formData.email.error !== null && (
                        <div className="invalid-feedback">
                            {formData.email.error}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <label>Message:</label>
                    <textarea name="message" rows={5} className={getFormControlClazz("message")}
                        onChange={handleInputChange}/>
                    {formData.message.error !== null && (
                        <div className="invalid-feedback">
                            {formData.message.error}
                        </div>
                    )}
                </div>
                <div className="text-right mt-5">
                    <button type="button" onClick={submitForm} disabled={!formData.valid}>Send</button>
                </div>
            </form>
        </div>
    );
};
