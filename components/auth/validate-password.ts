export default function validatePassword(password: string) {
    const passwordRegex =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"'<>,.?/~]).{8,}$/;

    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one symbol.";
    }

    return null;
}
