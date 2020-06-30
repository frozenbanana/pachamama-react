import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const Contact = () => {
    const { handleSubmit, register, errors } = useForm();
    const onSubmit = (values) => console.log(values);

    return (
        <>
            <h2>Interested in my work?</h2>
            <p>
                Email me on{" "}
                <a href="mailto:maija.papazi@gmail.com">
                    maija.papazi@gmail.com
                </a>{" "}
                or send a message below.
            </p>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Label htmlFor="email">Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address",
                        },
                    })}
                />
                {errors.email && errors.email.message}
                <Form.Label htmlFor="subject">Subject</Form.Label>
                <Form.Control
                    name="subject"
                    type="text"
                    ref={register({
                        validate: (value) => value !== "admin" || "Nice try!",
                    })}
                />
                {errors.username && errors.username.message}

                <Form.Label htmlFor="message">Message</Form.Label>
                <Form.Control
                    type="text"
                    name="message"
                    ref={register({
                        validate: (value) => value !== "admin" || "Nice try!",
                    })}
                />
                {errors.message && errors.message.message}
                <FormGroup>
                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </FormGroup>
            </Form>
        </>
    );
};
