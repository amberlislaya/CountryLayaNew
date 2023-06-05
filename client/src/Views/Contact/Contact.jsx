import React from 'react'
import style from "./Contact.module.css"
import {useForm} from "react-hook-form";
import {ageValidator} from "../Contact/ageValidators"

const Create = () => {

const {register, formState:{errors}, watch, handleSubmit} = useForm({
  defaultValues: {
    // name: 'Amberlis',
    // age: '18',
    // address: 'Av. Libertador',
    // email: 'amber@gmail.com',
    // country: 'Venezuela'


  }
});

const onSubmit = (data) =>{
  console.log(data);
}

const includePhone = watch('includePhone');

          return (

<div className={style.contact}>
   
<div className={style.container}>
       {/* <p>Name: {watch('name')}</p> */}

<form onSubmit={handleSubmit(onSubmit)}>
       <h2 className={style.h2}>Contact</h2>

<div>
       <label className={style.label}>Name</label>
       <input className={style.input} type="text" {...register('name', {
          required: true,
          maxLength: 15
})}></input>
       {errors.name?.type === 'required' && <p className={style.p}>El campo es Obligatorio</p>}
</div>

<div>
        <label className={style.label}>Age</label>
        <input className={style.input} type="text" {...register('age', {
          validate: ageValidator
})}/>
        {errors.age && <p className={style.p}>El campo es Obligatorio</p>}
</div>

<div>
       <label className={style.label}>Address</label>
       <input className={style.input} type="text" {...register('address', {
        required: true,
        maxLength:25
})}/>
       {errors.address?.type === 'required' && <p className={style.p}>El campo es Obligatorio</p>}
</div>

<div>
        <label className={style.label}>Email</label>
        <input className={style.input} type="text" {...register('email', {
          required:true
})}/>
        {errors.email?.type === 'required' && <p className={style.p}>El campo es Obligatorio</p>}
</div>


<div className={style.country}>
        <label className={style.countryl} >Country </label>
<select className={style.pais} {...register('country')}>
          <option value="ar">Argentina</option>
          <option value="br">Brasil</option>
          <option value="co">Colombia</option>
          <option value="es">España</option>
          <option value="fr">Francia</option>
          <option value="gm">Gambia</option>
          <option value="it">Italia</option>
          <option value="ir">Irlanda</option>
          <option value="us">EE.UU</option>
          <option value="ve">Venezuela</option>
</select>
</div>

<div className=''>
       <label className={style.label}>Message</label>
       <input className={style.message} type="text" {...register('message', {
        required: true,
        maxLength: 120
       })}/>

<div>
<label className={style.includeL}>¿Include Phone?</label>
<input className={style.phoneIn} type="checkbox" {...register('includePhone')}/>
</div>

{includePhone && (

<div>
<label className={style.label}>Phone</label>
<input type="text" {...register('phone')} className={style.phone}/>
</div>

)}



</div>
<input type="submit" value="SEND" className={style.submit}/>
     </form>
</div> 
</div>
              

)
}

export default Create;
