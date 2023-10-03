import React, { useState } from "react";
import {
  Grid,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Avatar,
  Card,
} from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import zoom2 from "../../assets/zoom2.png";
import SimpleImageSlider from "react-simple-image-slider";
import { useNavigate } from "react-router";

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1661476273266-28fd7423e7eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2066&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1586985564150-11ee04838034?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const Landing = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const isButtonDisabled = inputValue === "";

  const handleChange = () => {
    navigate("/home");
  };

  return (
    <>
      <div style={{ padding: "10px" }}>
        <Grid container>
          <Grid item lg={3}>
            <Stack direction="row" spacing={1}>
              <img
                src={zoom2}
                style={{ height: "45px", width: "45px" }}
                alt="logo"
              />
              {/* <Flip right> */}
              <Typography
                variant="h4"
                fontWeight="bold"
                style={{ textAlign: "left", color: "#fff" }}
              >
                O
                <span style={{ color: "#e4e1e1", fontSize: "24px" }}>
                  ffice
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    T
                  </span>
                  eams
                </span>
              </Typography>
              {/* </Flip> */}
            </Stack>
          </Grid>
          <br />
          <Grid item lg={5}></Grid>
          <Grid item lg={3}>
            <Typography variant="h6" textAlign="right">
              28-sept-2023 , <span>11:50 PM</span>
            </Typography>
          </Grid>
          <Grid item lg={1}>
            <Avatar style={{ float: "right", p: 1 }} sizes="large" />
          </Grid>
        </Grid>

        <div style={{ marginTop: "55px" }}>
          <Grid container justifyContent="center">
            <Grid item lg={7} xs={6}>
              <Typography
                variant="h4"
                textAlign="left"
                sx={{ fontWeight: 700 }}
              >
                Premium video meetings are free now.
              </Typography>
              <Typography
                variant="h4"
                textAlign="left"
                sx={{ fontWeight: 700 }}
              >
                Elevate Your Communication Today.
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{ color: "#e8e8e8" }}
                textAlign="left"
              >
                We are re-engineered the service for secure business meetings,
                <br />
                now we make it free and available for all.
              </Typography>

              <Grid container spacing={2} sx={{ mt: 3, mb: 3 }}>
                <Grid item lg={4} xs={4}>
                  <Button
                    size="large"
                    color="info"
                    variant="contained"
                    style={{
                      padding: "2px",
                      fontSize: "15px",
                    }}
                    fullWidth
                    onClick={handleChange}
                  >
                    <IconButton>
                      <VideoCallIcon fontSize="large" sx={{ color: "#fff" }} />
                    </IconButton>
                    New meeting
                  </Button>
                </Grid>
                <Grid item lg={5} xs={5}>
                  <TextField
                    placeholder="Enter a code or link"
                    fullWidth
                    value={inputValue}
                    onChange={handleInputChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyboardIcon
                            fontSize="large"
                            sx={{ color: "#e0dfdf" }}
                          />
                        </InputAdornment>
                      ),
                    }}
                  ></TextField>
                </Grid>
                <Grid item lg={3} xs={3}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      p: 1,
                      fontWeight: "bold",
                      backgroundColor: "#7626ab",
                      textTransform: "capitalize",
                    }}
                    disabled={isButtonDisabled}
                    onClick={handleChange}
                  >
                    Join
                  </Button>
                </Grid>
              </Grid>
              <br />
              <Typography variant="h6" sx={{ mt: 10 }}>
                <span style={{ color: "#3F51B5" }}>Learn more</span> about video
                meetings
              </Typography>
            </Grid>
            <Grid item lg={5} xs={6}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item lg={12} xs={12}>
                  <Card className="card">
                    <SimpleImageSlider
                      width={500}
                      height={304}
                      images={images}
                      showBullets={true}
                      showNavs={true}
                      loop={true}
                    />
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Landing;
