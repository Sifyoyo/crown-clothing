import {FormSingleContainer, FormInputField, FormInputLabel} from "./form-input.styles.jsx"

const FormInput = ({label, ...otherProps}) => {
    return (
        <FormSingleContainer>
            <FormInputField {...otherProps}/>
            {label && (

            <FormInputLabel shrihnk={otherProps.value.length} /*className={`${otherProps.value.length ? "shrink" : ""}`}*/>{label}</FormInputLabel>)}
                
        </FormSingleContainer>
    )
}

export default FormInput;