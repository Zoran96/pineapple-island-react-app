import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

function useYupHook() {
  const schema = yup.object().shape({
    firstName: yup.string().matches(/^[A-Za-z ]*$/, 'Please enter valid name').max(30).required(),
    phoneNumber: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Invalid phone number').required(),
    email: yup.string().email('Invalid email').required(),
    message: yup.string().max(150, 'Maximum amount of letters is 150 characters').required()
  })  

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema)
  })

  const submitForm = (data) => {
    console.log(data)
  }

  return {register, handleSubmit, errors, submitForm}
}

export default useYupHook