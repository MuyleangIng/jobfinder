// ResetPasswordModal.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'flowbite-react';
import { requestPasswordResetThunk } from '../../redux/features/user/userSlice';
import InputField from '../../common/InputField';
import useFontClass from '../../common/useFontClass';

const ResetPasswordModal = ({ isOpen, onClose }) => {
  const { fontClass } = useFontClass();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, isPasswordResetRequested } = useSelector((state) => state.user);

  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('resetPasswordForm.validation.email'))
      .required(t('resetPasswordForm.validation.emailRequired')),
  });

  const handleSubmit = (values) => {
    dispatch(requestPasswordResetThunk(values.email));
  };

  useEffect(() => {
    if (isPasswordResetRequested) {
      navigate('/verifyCode');
    }
  }, [isPasswordResetRequested, navigate]);

  return (
    <Modal
      show={isOpen}
      onClose={onClose}
      className="transition-opacity duration-300 ease-in-out"
      size="lg" // Ensures a larger modal size for better form fit
      data-aos="zoom-up"
    >
      <Modal.Header>
        <h2 className={`${fontClass} text-2xl text-primary-700 sm:text-3xl font-semibold text-left`}>{t('resetPasswordForm.title')}</h2>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className={`${fontClass} flex flex-col space-y-4 sm:space-y-6`}>
              <InputField
                label={t('resetPasswordForm.labels.email')}
                name="email"
                type="email"
                placeholder={t('resetPasswordForm.placeholders.email')}
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <button
                type="submit"
                disabled={isLoading || !formik.isValid}
                className="w-full bg-primary-700 text-white font-medium rounded-lg py-3 hover:bg-primary-750 disabled:opacity-50 transition duration-300"
              >
                {isLoading ? t('resetPasswordForm.sending') : t('resetPasswordForm.submit')}
              </button>
              <p className={`${fontClass} mt-6 text-base text-center text-gray-600`}>
                {t('resetPasswordForm.labels.rememberPassword')}{' '}
                <NavLink to="/register" className="text-blue-600 hover:underline font-medium">
                  {t('resetPasswordForm.labels.login')}
                </NavLink>
              </p>
            </Form>
          )}
        </Formik>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button color="gray" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ResetPasswordModal;
