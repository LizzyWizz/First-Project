import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';

function FormikContainer() {
    const initialValues = {}
    const validationSchema = Yup.object({})
    const onSubmit = values => console.log('Form data', values)

  return (
   <Formik initialValues={initialValues} 
   validationSchema={validationSchema} 
   onSubmit={onsubmit}>
    
    </Formik>
  )
}

export default FormikContainer