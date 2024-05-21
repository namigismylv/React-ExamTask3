import React from 'react'
import { Formik } from 'formik';
import { useContext } from 'react';
import MainContext from '../../../Context/Context';
import axios from 'axios';
const Add = () => {
  const {data,setData } = useContext(MainContext)
  return (
    <div> 
      <Formik
        initialValues={{ image: '', title: '', desc: '' }}

        onSubmit={(values, { setSubmitting }) => {
          axios.post("http://localhost:7000/foods",{...values}).then(res => {
            setData([...data,res.data])
          })

        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="image"
              placeholder='image'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.image}
            />
            {errors.image && touched.image && errors.image}
            <input
              type="text"
              name="title"
              placeholder='title'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
            {errors.title && touched.title && errors.title}
            <input
              type="text"
              name="desc"
              placeholder='description'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.desc}
            />
            {errors.desc && touched.desc && errors.desc}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik></div>
  )
}

export default Add