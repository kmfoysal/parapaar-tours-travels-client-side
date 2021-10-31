import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackage.css';

const AddPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://grim-labyrinth-64998.herokuapp.com/packages', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Inserted Successfully');
                reset();
            
            }
        })
    }
    return (
        <div className='add-package container py-5'>

            <form onSubmit={handleSubmit(onSubmit)} className='shadow-lg'>
            <h2 className='text-center mb-4'>Add New Package</h2>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder='Package Name' />
            <textarea {...register("description")} placeholder='Description'/>
            <input type="number" {...register("price")} placeholder='Package Cost'/>
            <input type="text" {...register("imgUrl")} placeholder='Image Url'/>
            <input type="submit" value='ADD PACKAGE'/>
            </form>
        </div>
    );
};

export default AddPackage;