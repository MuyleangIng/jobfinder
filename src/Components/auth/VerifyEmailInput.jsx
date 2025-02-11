import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Alert } from "flowbite-react";
import { verifyOtp } from "../../redux/features/user/userSlice";
import useFontClass from "../../common/useFontClass";
import { useTranslation } from "react-i18next";
import { resendOtp } from "../../redux/api/userApi";

const EmailVerificationInput = ({
  email,
  verifyAction,
  resendAction,
  successRedirect = "/",
  title,
  description,
}) => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.user);
  const [timer, setTimer] = useState(30);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successCountdown, setSuccessCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showSuccess) {
      const countdownInterval = setInterval(() => {
        setSuccessCountdown((prevCountdown) => {
          if (prevCountdown > 0) {
            return prevCountdown - 1;
          } else {
            clearInterval(countdownInterval);
            navigate(successRedirect);
            return 0;
          }
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [showSuccess, navigate, successRedirect]);

  const initialValues = {
    otp_code: ["", "", "", "", "", ""],
  };

  const validationSchema = Yup.object({
    otp_code: Yup.array()
      .of(Yup.string().required("").length(1, "Must be 1 digit"))
      .length(6, "OTP must be 6 digits"),
  });

  // const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
  //   try {
  //     const otp = values.otp_code.join("");
  //     await dispatch(
  //       verifyOtp({ email: localStorage.getItem("email"), otp_code: otp })
  //     ).unwrap();
  //     setShowSuccess(true);
  //     setSuccessCountdown(5);
  //   } catch (error) {
  //     setFieldError("otp_code", t("verification.otp_code.failed"));
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      const otp = values.otp_code.join("");
      await dispatch(verifyAction({ email, otp_code: otp })).unwrap();
      setShowSuccess(true);
      setSuccessCountdown(5);
    } catch (error) {
      setFieldError("otp_code", "Verification failed"); // Adjust error handling as necessary
    } finally {
      setSubmitting(false);
    }
  };

  // const handleResendCode = () => {
  //   setTimer(30);
  //   dispatch(resendOtp(localStorage.getItem('email')));
  // };
  const handleResendCode = () => {
    setTimer(30);
    dispatch(resendAction(email));
  };

  const handlePaste = (e, setFieldValue) => {
    const pasteData = e.clipboardData.getData("text").replace(/\s+/g, "");
    if (/^\d{6}$/.test(pasteData)) {
      pasteData.split("").forEach((char, index) => {
        setFieldValue(`otp_code[${index}]`, char);
      });
    }
  };

  return (
    <div
      className={`max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl w-full mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 ${fontClass}`}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-primary-700">
        {title || t("verification.title")}
      </h2>
      <p className="text-center text-gray-600 mb-6">{ description || t("verification.desc")}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue, errors, touched }) => (
          <Form onPaste={(e) => handlePaste(e, setFieldValue)}>
            <div className="mb-6">
              <div className="flex gap-2 sm:gap-4 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <Field
                    key={index}
                    name={`otp_code[${index}]`}
                    type="text"
                    maxLength="1"
                    className={`text-center rounded-lg border ${
                      values.otp_code[index]
                        ? "border-blue-500"
                        : errors.otp_code && touched.otp_code
                        ? "border-red-500"
                        : "border-gray-300"
                    } h-12 w-10 sm:h-16 sm:w-12 text-lg sm:text-2xl focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    aria-label={`Verification code digit ${index + 1}`}
                    onChange={(e) => {
                      const { value } = e.target;
                      setFieldValue(`otp_code[${index}]`, value);
                      if (value && index < 5) {
                        document
                          .getElementsByName(`otp_code[${index + 1}]`)[0]
                          .focus();
                      }
                    }}
                    onKeyDown={(e) => {
                      if (
                        e.key === "Backspace" &&
                        !values.otp_code[index] &&
                        index > 0
                      ) {
                        document
                          .getElementsByName(`otp_code[${index - 1}]`)[0]
                          .focus();
                      }
                    }}
                  />
                ))}
              </div>
              <ErrorMessage
                name="otp_code"
                component="div"
                className="text-red-500 text-sm mt-2 text-center"
              />
            </div>
            {error && (
              <Alert color="failure" className="mb-6">
                {error}
              </Alert>
            )}
            {showSuccess && (
              <Alert color="success" className="mb-6">
                {t("verification.otp_code.success")} ({successCountdown})
              </Alert>
            )}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className={`w-full h-12 sm:h-14 text-lg sm:text-xl bg-primary-700 hover:bg-primary-750 rounded-lg text-white ${fontClass}`}
            >
              {isLoading
                ? t("verification.verifying")
                : t("verification.verify")}
            </button>
          </Form>
        )}
      </Formik>
      <p className="text-center mt-6 text-sm sm:text-lg leading-6 text-gray-500">
        {t("verification.time")} {Math.floor(timer / 60)}:
        {timer % 60 < 10 ? "0" : ""}
        {timer % 60}
      </p>
      <div className="flex justify-center gap-1 sm:gap-2 mt-4 text-sm sm:text-lg leading-6">
        <p className="text-gray-500">{t("verification.unreceived")}</p>
        <button
          className={`text-blue-600 hover:text-blue-800 ${
            timer > 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleResendCode}
          disabled={timer > 0}
        >
          {t("verification.resend")}
        </button>
      </div>
    </div>
  );
};

export default EmailVerificationInput;
