import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
//@ts-ignore next-line
import * as yup from 'yup';
import MyButton from "../../ui/MyButton/MyButton";
import styles from './form.module.scss'
import { createUser } from "../../../api";

export interface IFormInputs {
  firstName: string,
  phone: number | null,
  email: string,
}

const schema = yup.object({
  firstName: yup.string().required(),
  phone: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
}).required();

const Form = () => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState, 
    formState: { errors } 
    } = useForm<IFormInputs>({ 
      resolver: yupResolver(schema), 
      defaultValues: { firstName: "", phone: null, email: '' } });

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    const response = createUser(data).then((res) => console.log(res))
    reset({ firstName: "", phone: null, email: '' });
  }

  return (
    <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
      <input 
        placeholder="Name" 
        className={styles.myInput} 
        {...register("firstName")} />
      <p>{errors.firstName?.message}</p>
        
      <input 
        placeholder="Phone" 
        className={styles.myInput} 
        type="number" 
        {...register("phone")} />
      <p>{errors.phone?.message}</p>

      <input 
        placeholder="E-mail"
        className={styles.myInput} 
        type="email" 
        {...register("email")} />
      <p>{errors.email?.message}</p>
      
      <MyButton type="submit" children="Send" />
    </form>
  )
}

export default Form