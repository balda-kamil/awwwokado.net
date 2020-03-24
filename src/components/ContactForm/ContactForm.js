import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import './ContactForm.css'
import * as emailjs from 'emailjs-com'

function ContactForm({
  errors,
  touched,
  isSubmitting,
  status
}){
  return(
    <div className="form__wrapper col-lg-7 col-md-8 col-sm-12">
      <div className="form__backplate">
      <Form>
        <div className="d-flex_my">
          <div>
            <Field type="email" name="email" placeholder="E-mail" />
            <p className="mb-0 light-red">{ touched.email && errors.email && errors.email }</p>
          </div>
          <div>
            <Field type="name" name="name" placeholder="Imię" />
            <p className="mb-0 light-red">{ touched.name && errors.name && errors.name }</p>
          </div>
        </div>
        <div>
          <Field component="textarea" name="textarea" placeholder="Treść wiadomości" />
          <p className="mb-0 light-red">{ touched.textarea && errors.textarea && errors.textarea } </p>
        </div>
        <p className="color-blue mb-0">{ status && status.success && "Dziękujemy za wiadomość, skontaktujemy się!"}</p>
        <button className="btn-big mt-small w-100 mt-0" type="submit">{ isSubmitting ? <div className="lds-dual-ring"></div> : "Wyślij"}</button>
      </Form>
      </div>
    </div>
  )
}

const FormikContactForm = withFormik({
  mapPropsToValues({ email, name, textarea }){
    return {
      email: email || '',
      name: name || '',
      textarea: textarea || '',
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Podaj prawidłowy adres e-mail').required('Twoj email jest wymagany'),
    name: Yup.string().min(3, 'Wpisz minimum 3 znaki').required('Twoje imie też się przyda :)'),
    textarea: Yup.string().required('To pole jest wymagane'),
  }),
  handleSubmit(values, { resetForm, setSubmitting, setStatus }){
    setTimeout(() => {
    const { email, name, textarea } = values
    console.log(email, name, textarea)

    let templateParams = {
      from_name: name,
      to_name: 'kamil@awwwokado.net',
      subject: 'nowa wiadomosc ze strony awwwokado.net',
      email: email,
      message_html: `${textarea} <br/> ${email}`
    }

    emailjs.send(
      'gmail',
      'template_2vkStb2z',
      templateParams,
      'user_q2ja6AgQZm2mYxHX1zDvz'
    ).then(function(response) {
      setStatus({ success: true })
      console.log('SUCCESS!', response.status, response.text);
      setSubmitting(false)
   }, function(error) {
      console.log('FAILED...', error);
   });
   resetForm()
  }, 1000)
  }
})(ContactForm)

export default FormikContactForm