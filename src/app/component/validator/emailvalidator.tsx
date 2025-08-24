import { useState, ChangeEvent } from 'react';

export const useEmailValidator = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        const atIndex = value.indexOf('@');
        const dotIndex = value.lastIndexOf('.');

        const isValid =
            typeof value === 'string' &&
            value.includes('@') &&
            atIndex > 0 &&
            dotIndex > atIndex + 1 &&
            dotIndex < value.length - 1 &&
            !value.includes(' ');

        setEmail(value);
        setIsEmailValid(isValid);
    };

    return { email, isEmailValid, handleEmailChange };
};
