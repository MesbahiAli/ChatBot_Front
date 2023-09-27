const FormAuthStyle = {
  paper: {
    padding: "20px",
    height: "auto",
    width: "300px",
    margin: "20px auto",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    lineHeight: "36px",
    fontFamily: "Circular Pro",
    color: "black",
    marginBottom: "20px",
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: "10px",
  },
  button: {
    marginTop: "10px",
    width: "100%",
    color: "white",
    backgroundColor: "rgb(53, 71, 115)",
    "&:hover": {
      backgroundColor: "rgb(33, 51, 95)",
    },
  },
  snackbar: {
    error: {
      color: "red",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    success: {
      color: "green",
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
};

export default FormAuthStyle;
