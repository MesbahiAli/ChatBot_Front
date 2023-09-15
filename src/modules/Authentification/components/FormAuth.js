  import React, { useState } from "react";
  import {
    Paper,
    Grid,
    Typography,
    InputAdornment,
    IconButton,
    Snackbar,
    Alert,
  } from "@mui/material";
  import { useFormik, Form, FormikProvider } from "formik";
  import Box from "@mui/material/Box";
  import TextField from "@mui/material/TextField";
  import Button from "@mui/material/Button";
  import { useDispatch } from "react-redux";
  import * as AuthAction from "../state/AuthAction";
  import { Visibility, VisibilityOff } from "@mui/icons-material";
  import * as Yup from "yup";
  import GoogleLogo from "../../../assets/images/icons8-google-48.png";
  import EmailLogo from "../../../assets/images/icons8-email-30.png";
  import { auth, provider } from "./FirebaseConfi";
  import { useHistory} from "react-router-dom";
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

  const FormAuth = () => {
    const [stateSnackBar, setStateSnackBar] = useState({
      openSnackBar: false,
      vertical: "top",
      horizontal: "right",
      severity: "success",
      duration: 3000,
      message: "",
    });

    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }

      setStateSnackBar({ ...stateSnackBar, openSnackBar: false });
    };

    const { openSnackBar, vertical, horizontal, severity, duration, message } =
      stateSnackBar;

    const [showPassword, setShowPassword] = useState(false);
    const [showForgetPasswordForm, setShowForgetPasswordForm] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);

    const handleShowPassword = () => {
      setShowPassword((show) => !show);
    };

    const handleToggleForgetPasswordForm = () => {
      setShowForgetPasswordForm(!showForgetPasswordForm);
    };

    const handleToggleEmailForm = () => {
      setShowEmailForm(!showEmailForm);
    };

    const dispatch = useDispatch();

    const paperStyle = {
      padding: 20,
      display: "flex",
      flexDirection:"column",
      width:"241px",
      margin: "20px auto",
      backgroundColor: "#FFF",
      boxShadow: "0px 4px 18px 0px rgba(0, 0, 0, 0.25)"

    };

    const btnstyle = {
      margin: "8px 0",
      background: "rgb(53, 71, 115)",
      width: "100%",
    };

    const history = useHistory();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().required("Password is required"),
      }),
      onSubmit: async (values) => {
        try {
          const userCredential = await auth.signInWithEmailAndPassword(
            values.email,
            values.password
          );
          const accessToken = await userCredential.user.getIdToken();
          const holder_id = userCredential.user.uid;
          const firebase_providers =
            userCredential.user.providerData[0].providerId;
          const firebase_imgurl =
            userCredential.user.providerData[0].photoURL;
          const holder_mail = userCredential.user.email;
          const holder_displayname = "string";

          const request = {
            payload: {
              accessToken,
              firebase_imgurl,
              firebase_providers,
              holder_displayname,
              holder_id,
              holder_mail,
            },
            successCallBack: (response) => {
              setStateSnackBar({
                ...stateSnackBar,
                severity: "success",
                message: "login avec succès",
                openSnackBar: true,
              });
              localStorage.setItem("token", response.authorization_token);
              localStorage.setItem("firebase_imgurl", response.firebase_imgurl);
              localStorage.setItem("holder_displayname", response.holder_displayname);
              localStorage.setItem("Id", response.holder_id);
              localStorage.setItem("holder_mail", response.holder_mail);
              localStorage.setItem("holder_profile", response.holder_profile);
              localStorage.setItem("response_code", response.response_code);
              localStorage.setItem("response_message", response.response_message);

              window.location.href = "/homeafterlogin";
            },
            failCallBack: (error) => {
              const messageError = error.response.data.message;
              setStateSnackBar({
                ...stateSnackBar,
                severity: "error",
                message: messageError,
                openSnackBar: true,
              });
            },
          };
          dispatch(AuthAction.AUTH_START(request));
        } catch (error) {
          setStateSnackBar({
            ...stateSnackBar,
            severity: "error",
            message: error.message,
            openSnackBar: true,
          });
        }
      },
    });

    const handleResetPassword = async () => {
      try {
        await formik.validateForm();
          const { email } = formik.values;
          await auth.sendPasswordResetEmail(email);
          setStateSnackBar({
            ...stateSnackBar,
            severity: "success",
            message: "Password reset email sent. Please check your inbox.",
            openSnackBar: true,
          });
          formik.resetForm();
        
      } catch (error) {
        setStateSnackBar({
          ...stateSnackBar,
          severity: "error",
          message: error.message,
          openSnackBar: true,
        });
      }
    };

    const buttonStyle = {
      fontWeight: 600,
      fontSize: '15px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '8px 0',
      width: '100%',
      backgroundColor: 'rgb(232, 237, 241)',
      color: '#2d333a',
      textTransform: 'none',
      boxShadow: "none",
    };

    const logoStyle = {
    width: '19px',
    marginRight: '10px',
    };

    const { errors, touched, handleSubmit, handleChange, values } = formik;

    const handleGoogleSignIn = async () => {
      try {
        const userCredential = await auth.signInWithPopup(provider);
        const accessToken = await userCredential.user.getIdToken();
        const holder_id = userCredential.user.uid;
        const firebase_providers =
          userCredential.user.providerData[0].providerId;
        const firebase_imgurl =
          userCredential.user.providerData[0].photoURL;
        const holder_mail = userCredential.user.email;
        const holder_displayname = userCredential.user.displayName;

        const request = {
          payload: {
            accessToken,
            firebase_imgurl,
            firebase_providers,
            holder_mail,
            holder_displayname,
            holder_id,
          },
          successCallBack: (response) => {
            setStateSnackBar({
              ...stateSnackBar,
              severity: "success",
              message: "login avec succès",
              openSnackBar: true,
            });
            localStorage.setItem("token", response.authorization_token);
            window.location.href = "/homeafterlogin";
          },
          failCallBack: (error) => {
            const messageError = error.response.data.message;
            setStateSnackBar({
              ...stateSnackBar,
              severity: "error",
              message: messageError,
              openSnackBar: true,
            });
          },
        };
        dispatch(AuthAction.AUTH_START(request));
      } catch (error) {
        setStateSnackBar({
          ...stateSnackBar,
          severity: "error",
          message: error.message,
          openSnackBar: true,
        });
      }
    };

    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
          <AccountCircleIcon style={{fontSize:"75px"}}/>
            <Typography variant="h6" gutterBottom 
              style={{ 
              width: "auto",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "32px",
              textAlign:"left"
            }}>
            Continuez vers votre compte
        </Typography>
        <Typography variant="body1" gutterBottom
        style={{
          width: "auto",
        fontSize: "16px",
      fontWeight: "400",
      fontFamily:"Circular Pro",
      lineHeight: "24px",
      textAlign:"left"
      }}> 
        
        Gérez facilement vos recharges et suivez votre historique en toute simplicité.
        </Typography>
        {!showEmailForm && !showForgetPasswordForm ? <Typography variant="body1" gutterBottom
        style={{
          width: "auto",
        fontSize: "16px",
      fontWeight: "700",
      fontFamily:"Circular Pro",
      lineHeight: "24px",
      textAlign:"left",
      margin:"0 0 8px",
      color:"rgb(37, 42, 49)"
      }}> 
        
        Connectez-vous avec l'une de ces options :
        </Typography>:null
  }
          </Grid>
          {!showEmailForm && !showForgetPasswordForm ? (
            <Grid align="center">
              <Button
                  type="submit"
                  variant="contained"
                  style={buttonStyle}
                  onClick={handleToggleEmailForm}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}> 
                  <img
                      src={EmailLogo}
                      className="glogo"
                      style={logoStyle}
                      alt="Email"
                      
                    />
                  Adresse e-mail  
                    </span>   
                  <span style={{ display: 'flex', alignItems: 'center' }}><ArrowForwardIosIcon style={{fontSize:"small"}}/>
                  </span>       
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  style={buttonStyle}
                  onClick={handleGoogleSignIn}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}> 
                  <img
                      src={GoogleLogo}
                      className="glogo"
                      style={logoStyle}
                      alt="Email"
                      
                    />
                  Google
                    </span>   
                  <span style={{ display: 'flex', alignItems: 'center' }}><ArrowForwardIosIcon style={{fontSize:"small"}}/>
                  </span>
                </Button>
              </Grid>
          ) : showForgetPasswordForm ? (
            // Forget Password Form
            <Grid align="center">
              <FormikProvider value={formik}>
                <Form >
                  <Box className="divStyle">
                    <Box className="inputStyle">
                      <Box
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "30ch",
                            backgroundColor: "#f2f7fa",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-email-input"
                          label="Email"
                          type="email"
                          autoComplete="email"
                          name="email"
                          onChange={handleChange}
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                          placeholder="par ex. votre@email.com"
                        />
                      </Box>
                    </Box>
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      style={btnstyle}
                      onClick={handleResetPassword}
                    >
                      Reset Password
                    </Button>
                  </Box>
                </Form>
              </FormikProvider>
              <Button
                      variant="text"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#14181F',
                        fontFamily: 'Open Sans, sans-serif', 
                        textTransform: 'none',
                        letterSpacing: '0.5px',
                        padding: '4px 8px',
                        minWidth: 0,                   
                      }}
                      onClick={handleToggleForgetPasswordForm}
                    >
  Back to Login                  </Button>
            </Grid>
          ) : (
            // Login Form
            <Grid align="center">
              <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                  <Box className="divStyle">
                    <Box className="inputStyle">
                      <Box
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "30ch",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          id="outlined-email-input"
                          sx={{
                            mb: 3,
                            maxWidth: "450px",
                            width: "100%",
                            "& > label": {
                              color: "#aca1a1cf !important",
                            },
                          }}
                          label="Email "
                          type="email"
                          autoComplete="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="par ex. votre@email.com"
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Box>
                    </Box>
                    <Box className="inputStyle">
                      <Box
                        sx={{
                          "& .MuiTextField-root": {
                            m: 1,
                            width: "30ch",
                            backgroundColor: "#F3F3F3",
                          },
                        }}
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          autoComplete="current-password"
                          sx={{
                            mb: 3,
                            maxWidth: "450px",
                            width: "100%",
                            "& > label": {
                              color: "#aca1a1cf!important",
                            },
                          }}
                          type={showPassword ? "text" : "password"}
                          label="Password"
                          id="password"
                          onChange={handleChange}
                          value={values.password}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={handleShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <Visibility />
                                  ) : (
                                    <VisibilityOff />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          error={Boolean(touched.password && errors.password)}
                          helperText={touched.password && errors.password}
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    style={btnstyle}
                  >
                    Se connecter
                  </Button>
                    <Button
                      variant="text"
                      style={{
                        fontSize: '13px',
                        fontWeight: 600,
                        color: '#14181F',
                        fontFamily: 'Open Sans, sans-serif', 
                        textTransform: 'none',
                        letterSpacing: '0.5px',
                        padding: '4px 8px',
                        minWidth: 0,                   
                      }}
                      onClick={handleToggleForgetPasswordForm}
                    >
                      Forgot Password?
                    </Button>
                </Form>
              </FormikProvider>
            </Grid>
          )}
        </Paper>
        <Box>
          {openSnackBar && (
            <Snackbar
              open={openSnackBar}
              anchorOrigin={{ vertical, horizontal }}
              autoHideDuration={duration}
              onClose={handleClose}
            >
              <Alert severity={severity} onClose={handleClose}>
                {message}
              </Alert>
            </Snackbar>
          )}
        </Box>
      </Grid>
    );
  };

  export default FormAuth;
