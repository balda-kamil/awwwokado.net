import React from 'react'
import { withFormik, Form, Field, yupToFormErrors, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './ContactForm.css'

function ContactForm({
  errors,
  touched,
  isSubmitting
}){
  return(
    <div className="form__main-wrapper">
     <Form>
       <div>
        <Field type="email" name="email" placeholder="E-mail" />
        { touched.email && errors.email && <p>{errors.email}</p>}
       </div>
       <div>
        <Field type="name" name="name" placeholder="Imię" />
        { touched.name && errors.name && <p>{ errors.name }</p>}
       </div>
       <div>
        <Field component="textarea" name="textarea" placeholder="Treść wiadomości" />
        { touched.textarea && errors.textarea && <p>{ errors.textarea }</p>}
       </div>
       <button disabled={ isSubmitting } type="submit">Wyślij</button>
       { isSubmitting && <div className="lds-dual-ring"></div> }
      </Form>
    </div>
  )
}

const formikContactForm = withFormik({
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
    textarea: Yup.string().required('Im lepiej opiszesz nam swoje potrzeby, tym lepiej będziemy się w stanie dopasować'),
  }),
  handleSubmit(values, { resetForm, setSubmitting }){
    setTimeout(() => {
      resetForm()
      console.log(values)
      setSubmitting(false)
    }, 1000)
  }
})(ContactForm)

export default formikContactForm