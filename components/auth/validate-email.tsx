export default function validateEmail(value: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        return "Please enter a valid email address.";
    }

    return null;
}

