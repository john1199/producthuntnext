/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

const useValidation = (stateinicial, validar, fn) => {
    const [valor, setValor] = useState(stateinicial);
    const [error, setError] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const err = Object.keys(error).length === 0;
            if (err) {
                fn();
            }
            setSubmitForm(false);
        }
    }, [error]);

    const handleChange = (e) => {
        setValor({
            ...valor,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validar(valor));
        setSubmitForm(true);
    };
    return {
        valor,
        error,
        submitForm,
        handleChange,
        handleSubmit,
    };
};

export default useValidation;
