"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { contactSchema } from "@/schemas/contactSchema";

const defaultValues = {
  name: "",
  email: "",
  mobile: "",
  service: "",
  message: "",
};

export default function ContactForm() {
//   const [captchaToken, setCaptchaToken] = useState("");
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: {
      errors,
      touchedFields,
      isSubmitting,
    },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onChange",
  });

  const message = watch("message", "");

  /**
   * reCAPTCHA callback
   */
//   useEffect(() => {
//     window.enableSubmitBtn = (token) => {
//       setCaptchaToken(token);
//     };

//     return () => {
//       delete window.enableSubmitBtn;
//     };
//   }, []);

  /**
   * Bootstrap validation class
   */
  const inputClass = (field) => {
    if (!touchedFields[field]) {
      return "form-control";
    }

    return errors[field]
      ? "form-control is-invalid"
      : "form-control is-valid";
  };

  /**
   * Submit
   */
  const onSubmit = async (data) => {
    setStatus({
      type: "",
      message: "",
    });

    /**
     * Check reCAPTCHA
     */
    // if (!captchaToken) {
    //   setStatus({
    //     type: "error",
    //     message: "Please verify that you are not a robot.",
    //   });

    //   return;
    // }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        //   captchaToken,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "Unable to send your enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent successfully.",
      });

      reset();

      /**
       * Reset Google reCAPTCHA
       */
    //   if (window.grecaptcha) {
    //     window.grecaptcha.reset();
    //   }

    //   setCaptchaToken("");
    } catch (error) {
      console.error(error);

      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <form
      className="home-form"
      id="frm-home-cnt"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="row g-3">

        {/* Name */}
        <div className="col-sm-6">
          <div className="form-floating">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              autoComplete="name"
              className={inputClass("name")}
              aria-invalid={!!errors.name}
              {...register("name")}
            />

            <label htmlFor="name">
              Your Name
            </label>

            {errors.name && (
              <span className="text-danger">
                {errors.name.message}
              </span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="col-sm-6">
          <div className="form-floating">
            <input
              type="email"
              id="mail"
              placeholder="Your Email"
              autoComplete="email"
              className={inputClass("email")}
              aria-invalid={!!errors.email}
              {...register("email")}
            />

            <label htmlFor="mail">
              Your Email
            </label>

            {errors.email && (
              <span className="text-danger">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        {/* Mobile */}
        <div className="col-sm-6">
          <div className="form-floating">
            <input
              type="tel"
              id="mobile"
              placeholder="Your Mobile"
              autoComplete="tel"
              inputMode="tel"
              className={inputClass("mobile")}
              aria-invalid={!!errors.mobile}
              {...register("mobile")}
            />

            <label htmlFor="mobile">
              Your Mobile
            </label>

            {errors.mobile && (
              <span className="text-danger">
                {errors.mobile.message}
              </span>
            )}
          </div>
        </div>

        {/* Service */}
        <div className="col-sm-6">
          <div className="form-floating">
            <select
              id="service"
              className={`form-select ${
                touchedFields.service
                  ? errors.service
                    ? "is-invalid"
                    : "is-valid"
                  : ""
              }`}
              {...register("service")}
            >
              <option value="">
                Please Select
              </option>

              <option value="SEO">
                SEO
              </option>

              <option value="Web Design">
                Web Design
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Social Media">
                Social Media
              </option>

              <option value="ORM">
                ORM
              </option>

              <option value="Logo Design">
                Logo Design
              </option>

              <option value="Video Marketing">
                Video Marketing
              </option>

              <option value="App Development">
                App Development
              </option>
            </select>

            <label htmlFor="service">
              Choose A Service
            </label>

            {errors.service && (
              <span className="text-danger">
                {errors.service.message}
              </span>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="col-12">
          <div className="form-floating">
            <textarea
              id="message"
              className={inputClass("message")}
              placeholder="Leave a message here"
              rows={5}
              maxLength={1000}
              {...register("message")}
            />

            <label htmlFor="message">
              Message
            </label>

            {errors.message && (
              <span className="text-danger">
                {errors.message.message}
              </span>
            )}

            <small className="text-muted d-block text-end">
              {message.length}/1000
            </small>
          </div>
        </div>

        {/* Google reCAPTCHA */}
        

        {/* Submit */}
        <div className="col-12 text-center">
          <button
            className="btn w-100 py-3"
            id="submitBtn"
            type="submit"
            disabled={isSubmitting }
          >
            {isSubmitting
              ? "Sending..."
              : "Submit Now"}
          </button>
        </div>

        {/* Status */}
        {status.message && (
          <div className="col-12">
            <div
              className={`alert ${
                status.type === "success"
                  ? "alert-success"
                  : "alert-danger"
              }`}
              role="alert"
            >
              {status.message}
            </div>
          </div>
        )}

      </div>
    </form>
  );
}