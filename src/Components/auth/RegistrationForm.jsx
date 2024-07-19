import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import {
  registerUser,
  setIsAuthenticatedFalse,
} from "../../redux/features/user/userSlice";
import InputField from "../../common/InputField";
import useFontClass from "../../common/useFontClass";

const RegistrationForm = () => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required(t("registrationForm.validation.username"))
      .min(3, t("registrationForm.validation.min")),
    email: Yup.string()
      .email(t("registrationForm.email"))
      .required(t("registrationForm.validation.email")),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
        t("registrationForm.validation.password")
      )
      .required(t("registrationForm.validation.password")),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password"), null],
        t("registrationForm.validation.not-match")
      )
      .required(t("registrationForm.validation.confirmPassword")),
  });

  const handleSubmit = (values) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(setIsAuthenticatedFalse());
      navigate("/verifyCode");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form
          className={`${fontClass} flex flex-col space-y-4 sm:space-y-6 bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl`}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-700 text-left mb-4">
            {t("registrationForm.title")}
          </h2>
          <InputField
            label={t("registrationForm.labels.username")}
            name="username"
            placeholder={t("registrationForm.placeholders.username")}
          />
          <InputField
            label={t("registrationForm.labels.email")}
            name="email"
            type="email"
            placeholder={t("registrationForm.placeholders.email")}
          />
          <InputField
            label={t("registrationForm.labels.password")}
            name="password"
            type="password"
            placeholder={t("registrationForm.placeholders.password")}
          />
          <InputField
            label={t("registrationForm.labels.confirmPassword")}
            name="confirmPassword"
            type="password"
            placeholder={t("registrationForm.placeholders.confirmPassword")}
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={isLoading || !formik.isValid}
            className="w-full bg-primary-700 text-white font-medium rounded-lg py-3 hover:bg-primary-750 disabled:opacity-50 transition duration-300"
          >
            {isLoading
              ? t("registrationForm.registering")
              : t("registrationForm.submit")}
          </button>
          <p
            className={`${fontClass} mt-6 text-base text-center text-gray-600`}
          >
            {t("registrationForm.labels.haveAccount")}{" "}
            <NavLink
              to="/login"
              className="text-blue-600 hover:underline font-medium"
            >
              {t("registrationForm.labels.login")}
            </NavLink>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
