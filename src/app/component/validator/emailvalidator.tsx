import { useState, ChangeEvent } from 'react';

export const useEmailValidator = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(true);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(value);
        setIsEmailValid(regex.test(value));
    };

    return { email, isEmailValid, handleEmailChange };
};
