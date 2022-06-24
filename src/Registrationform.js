import React from 'react';
import {Formik, Form} from 'formik';
import * as yup from 'yup';
import Formikcontrol from './Formikcontrol';

function Registrationform() {
    const options = [ 
        {key: 'Email', value: 'emailmoc'},
        {key: 'Telephone', vlaue: 'telephonemoc'}
    ]

    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        phone:'',

    }

    const validationSchema = yup.object({
        email: yup.string()
        .email('Invalid email format')
        .required('Required'),
        confirmPassword: yup.string()
        .oneOf([yup.ref('password'), ''], 'Passwords must match')
        .required('required'),
        modeOfContact: yup.string().required('Required'),
        phone: yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: yup.string().required('Required')
        })

    })

    const onSubmit = values => {
        console.log('Form data', values)
    }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {
            formik => {
                return( <Form>
                    <Formikcontrol 
                    control='input'
                    type='email'
                    label='Email'
                    />
                    <Formikcontrol 
                    control='radio'
                    label='Mode of contact'
                    name='modeOfContact'
                    options={options}/>
                    <Formikcontrol 
                    control='input'
                    type='text'
                    label='Phone number'
                    name='phone'/>
                  
               
               </Form>
               )
  
  
            }}
            
        

    </Formik>
    )
        }
  

export default Registrationform;