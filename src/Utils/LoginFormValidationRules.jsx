export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Enter your mail id here, It cannot be blank";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Enter your password here, it cannot be blank";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (!/\d/.test(values.password)) {
    errors.password = "Password must contain atleast 1 number";
  } else if (!/[!@#$%&?]/g.test(values.password)) {
    errors.password = "Password must contain atleast 1 special character";
  } else if (!/[A-Z]/g.test(values.password)) {
    errors.password = "Password must contain atleast 1 capitol letter";
  }
  return errors;
}
