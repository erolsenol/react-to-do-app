import "./App.css";

import { useFormik } from "formik";

import validationSchema from "./plugins/yup";

function App() {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    isSubmitting,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
      gender: "male",
      hobies: [],
      country: "",
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log("values", values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
    validationSchema,
    // validate: (values) => {
    //   const errors = {};
    //   console.log("values", values);
    //   if (!values.email) {
    //     errors.email = "Required";
    //   } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //   ) {
    //     errors.email = "Invalid email address";
    //   }
    //   if (!values.password) {
    //     errors.password = "Required";
    //   }
    //   console.log("errors", errors);
    //   return errors;
    // },
  });

  console.log("errors", errors);

  return (
    <div>
      <h1>Any place in your app!</h1>
      {
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">firstName</label>
          <input name="firstName" onChange={handleChange} />

          <br />
          <br />

          <label htmlFor="lastName">lastName</label>
          <input name="lastName" onChange={handleChange} />

          <br />
          <br />

          <label htmlFor="password">Password</label>
          <input name="password" onChange={handleChange} onBlur={handleBlur} />
          {/* <ErrorMessage name="password" component="div" /> */}

          <br />
          <br />

          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            name="passwordConfirm"
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input name="email" onChange={handleChange} onBlur={handleBlur} />
          {/* <ErrorMessage name="email" component="div" /> */}

          <br />
          <br />

          <span>Male</span>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={values.gender === "male"}
            onChange={handleChange}
          />

          <span>Famale</span>
          <input
            type="radio"
            name="gender"
            value="famale"
            onChange={handleChange}
          />

          <br />
          <br />

          <div>
            <input
              type="checkbox"
              name="hobies"
              value="football"
              onChange={handleChange}
            />
            Football
          </div>

          <div>
            <input
              type="checkbox"
              name="hobies"
              value="cinema"
              onChange={handleChange}
            />
            Cinema
          </div>

          <div>
            <input
              type="checkbox"
              name="hobies"
              value="photography"
              onChange={handleChange}
            />
            Photography
          </div>

          <br />
          <br />

          <select name="country" onChange={handleChange}>
            <option value="tr">Turkey</option>
            <option value="en">England</option>
            <option value="usa">USA</option>
          </select>

          <br />
          <br />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>

          <br />
          {JSON.stringify(values)}
        </form>
        // <Form>
        //   <Field type="email" name="email" />
        //   <ErrorMessage name="email" component="div" />
        //   <br />
        //   <Field type="password" name="password" />
        //   <ErrorMessage name="password" component="div" />
        //   <br />
        //   <button type="submit" disabled={isSubmitting}>
        //     Submit
        //   </button>
        // </Form>
      }
    </div>
  );
}

export default App;
