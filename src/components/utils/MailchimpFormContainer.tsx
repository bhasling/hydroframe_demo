import React, { useEffect, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Button from "components/common/Button";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CustomForm = ({ status, message, onValidated }: any) => {
    const [mailStatus, setMailStatus] = useState<string>("");

    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Email is required")
            .matches(
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                "Invalid Email Address"
            ),
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        tags: yup.string(),
    });

    const {
        register,
        handleSubmit,
        trigger,
        reset,
        formState: { errors },
    } = useForm({
        mode: "all",
        resolver: yupResolver(schema),
    });
    const sendEmail = (data: any) => {
        onValidated({
            EMAIL: data.email,
            FNAME: data.firstName,
            LNAME: data.lastName,
            tags: data.tags,
        });
    };
    useEffect(() => {
        if (status === "success") {
            reset();
        }
        setMailStatus(status);
    }, [status]);

    return (
        <>
            <form className="grid w-full" onSubmit={handleSubmit(sendEmail)}>
                <div className="mb-2"> Subscribe to get email updates</div>

                <div className="mb-2">
                    <input
                        className="block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700"
                        type="text"
                        placeholder="First Name"
                        {...register("firstName", {
                            onChange: e => {
                                trigger("firstName");
                            },
                        })}
                    />
                    {errors?.name && (
                        <div className="text-red-600 text-sm">
                            {errors?.name?.message?.toString()}
                        </div>
                    )}
                </div>
                <div className="mb-2">
                    <input
                        className="block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700"
                        type="text"
                        placeholder="Last Name"
                        {...register("lastName", {
                            onChange: e => {
                                trigger("lastName");
                            },
                        })}
                    />
                    {errors?.name && (
                        <div className="text-red-600 text-sm">
                            {errors?.name?.message?.toString()}
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        className="block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700"
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            onChange: e => {
                                trigger("email");
                                setMailStatus("");
                            },
                        })}
                    />
                </div>
                <div hidden>
                    <input
                        className="block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700"
                        type="hidden"
                        value="10674954"
                        {...register("tags", {
                            onChange: e => {
                                trigger("tags");
                            },
                        })}
                    />
                </div>
                <div className="mb-4">
                    {errors?.email && (
                        <div className="text-red-600 text-sm">
                            {errors?.email?.message?.toString()}
                        </div>
                    )}
                </div>
                <Button
                    type={"submit"}
                    class={
                        "bg-transparent !border-black !text-black inline-block shadow-none hover:!text-white hover:!border-white"
                    }
                >
                    Subscribe
                </Button>
                <div className="max-w-xs">
                    {mailStatus === "error" && (
                        <div
                            className="text-red-500"
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                    {mailStatus === "success" && (
                        <div
                            className="text-green-700"
                            dangerouslySetInnerHTML={{ __html: message }}
                        />
                    )}
                </div>
            </form>
        </>
    );
};

const MailchimpFormContainer: React.FC = () => {
    const postUrl =
        "https://princeton.us12.list-manage.com/subscribe/post?u=52c32f0a19ea89eb500c42e58&amp;id=220a02071e&amp;f_id=000d49e0f";
    // const postUrl = "https://hydro-generation.us12.list-manage.com/subscribe/post?u=52c32f0a19ea89eb500c42e58&amp;id=220a02071e&amp;f_id=000d49e0f0"

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }: any) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={(formData: FormData) =>
                            subscribe(formData)
                        }
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;
