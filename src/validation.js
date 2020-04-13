export const validatePassword = value => {
    let error;
    const forbiddenPassword = ["password", "abc123", "qwerty", "111111", "1234567"];
    if (forbiddenPassword.includes(value)) {
        error = "Please choose another password";
    }
    return error;
}