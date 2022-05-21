import { Component } from 'react';
import { Formik } from 'formik';

class Form extends Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Add a person</h1>
        <Formik
          initialValues={{ firstName: '', lastName: '' }}
          validate={values => {
            // const errors = {firstName: '', lastName: ''};
            // if (!values.firstName) {
            //   errors.firstName = 'Required';
            // } else if (
            //   !/^[A-Z]+$/i.test(values.firstName)
            // ) {
            //   errors.firstName = 'Only letters are accepted';
            // }
            // return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
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
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder="First name"
              />
              {errors.firstName && touched.firstName && errors.firstName}
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Last name"
              />
              {errors.lastName && touched.lastName && errors.lastName}
              <button type="submit" disabled={isSubmitting}>
                Add
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }

}

export default Form;