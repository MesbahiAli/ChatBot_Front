import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "@mui/material";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            name="email"
            label="Email"
            as={TextField}
            error={touched.email && !!errors.email}
            helperText={touched.email && errors.email}
          />
          <Field
            name="password"
            type="password"
            label="Password"
            as={TextField}
            error={touched.password && !!errors.password}
            helperText={touched.password && errors.password}
          />
          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
