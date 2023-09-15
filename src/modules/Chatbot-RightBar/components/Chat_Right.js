import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import RobotLogo from "../../../assets/images/pngegg.png";
import RobotLogo1 from "../../../assets/images/pngegg (2).png";

function Chat_Right() {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    dispatch({
      type: 'SEND_MESSAGE_SUCCESS',
      payload: {
          sender: 'bot',
          text: 'Hello! How can I assist you today?',
      },
  });
}, []);


  const formik = useFormik({
    initialValues: {
      user_input: '',
    },
    onSubmit: (values) => {
      if (values.user_input.trim()) {
        dispatch({
          type: 'SEND_MESSAGE_SUCCESS',
          payload: {
              sender: 'user',
              text: values.user_input,
              image: '/path-to-user-image.jpg',
          },
      });
    
        dispatch({ type: 'SEND_MESSAGE_REQUEST', payload: { user_input: values.user_input } });

        formik.resetForm();
      }
    },
  });

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  };


  
  return (
    <div className="chat-container" style={containerStyles}>
<Box className="messages" style={{ padding: '20px 0', maxWidth: '390px', overflowY: 'auto' }}>
    {messages.map((msg, index) => (
        <div key={index} className={msg.sender}>
            {msg.sender === 'bot' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <span>{msg.text}</span>
                    <img 
                        src={RobotLogo1} 
                        alt="Robot Logo" 
                        style={{ width: "44px", marginLeft: '10px' }}
                    />
                </div>
            ) : (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <img 
                        src={RobotLogo} 
                        alt="User Logo" 
                        style={{ width: "44px", marginRight: '10px' }}
                    />
                    <span>{msg.text}</span>
                </div>
            )}
            <div style={{ fontSize: '10px', textAlign: msg.sender === 'bot' ? 'right' : 'left', marginTop: '5px' }}>
                {new Date().toLocaleTimeString()}
            </div>
        </div>
    ))}
</Box>      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center">
          <TextField
            fullWidth
            variant="outlined"
            name="user_input"
            value={formik.values.user_input}
            onChange={formik.handleChange}
            placeholder="Type your message..."
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginLeft: '10px' }}>
            Send
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Chat_Right;
