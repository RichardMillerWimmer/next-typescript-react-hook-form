import React, { FC } from 'react'
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';



const input: FC = () => {
    const {control, formState: {errors}} = useFormContext()
    
    return (
        <>
            <Controller name='email' control={control} defaultValue='' render={({field}) => (<TextField {...field} label='email' variant='outlined' error={!!errors.email} helperText={errors.email ? errors.email?.message : ''}/>)} />   
            <br />
            <br />
            <Controller name='password' control={control} defaultValue=''  render={({field}) => (<TextField {...field} label='password' type='password' variant='outlined' error={!!errors.password} helperText={errors.password ? errors.password?.message : ''}/>)} />   
            <br/>
            <br/>
        </>
    )
}

export default input
