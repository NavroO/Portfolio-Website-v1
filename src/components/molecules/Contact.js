import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { SectionTitle } from '../atoms/SectionTitle';
import { MessageInput } from '../atoms/MessageInput';
import { Button } from '../atoms/Button';
import separatorBlack from '../../assets/img/separatorBlack.svg';


const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TextArea = styled(MessageInput)`
    width: 240px;
    height: 165px;
    font-size: 12px;
    resize: none;
    font-weight: bold;
    margin: 15px;
    border: none;
    outline: none;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
    padding-left: 8px;
    color: #8B8B8B;
    background: transparent;

    @media (min-width: 1024px) {
        height: 184px;
        width: 609px;
    }
`;


export const Contact = () => {

    return (
        <StyledContact id="contact">
            <SectionTitle>CONTACT</SectionTitle>
            <img src={separatorBlack} alt="" />
            <Formik
                initialValues={{ name: '', email: '', phoneNumber: '', message: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.phoneNumber) {
                        errors.phoneNumber = 'Required';
                    }
                    if (!values.message) {
                        errors.message = 'Required';
                    }
                    if (!values.email) {
                        errors.email = 'Required';

                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MessageInput
                            placeholder="ENTER YOUR NAME*"
                            type="name"
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {errors.name && touched.name && errors.name}
                        <MessageInput
                            placeholder="ENTER YOUR EMAIL*"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {errors.email && touched.email && errors.email}
                        <MessageInput
                            placeholder="PHONE NUMBER"
                            type="phoneNumber"
                            name="phoneNumber"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phoneNumber}
                        />
                        {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                        <TextArea
                            placeholder="YOUR MESSAGE*"
                            type="message"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        {errors.message && touched.message && errors.message}
                        <Button type="submit" disabled={isSubmitting}>
                            Submit
                        </Button>
                    </form>
                )}
            </Formik>
        </StyledContact>
    )
}