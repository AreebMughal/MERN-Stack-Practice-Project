export const isAllRequiredFields = (inputFields) => {
    let isFieldComplete = true;
    inputFields.forEach(inputField => {
        if (!inputField.value.trim()) {
            inputField.inputRef.current.classList.add('error-signup-fields')
            isFieldComplete = false;
        } else {
            inputField.inputRef.current.classList.remove('error-signup-fields')
        }
    });
    return isFieldComplete;
}