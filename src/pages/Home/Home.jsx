// import React, { useState, useRef, useEffect } from "react";
// import srm from "../../assets/srm.jpeg";
// import {
//   Grid,
//   Typography,
//   Avatar,
//   Card,
//   Stack,
//   Tooltip,
//   IconButton,
//   Modal,
//   Button,
//   Box,
// } from "@mui/material";
// import { ThreeDots, Audio } from "react-loader-spinner";
// import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
// import VideoCallIcon from "@mui/icons-material/VideoCall";
// import ClosedCaptionIcon from "@mui/icons-material/ClosedCaption";
// import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
// import PresentToAllIcon from "@mui/icons-material/PresentToAll";
// import BackHandIcon from "@mui/icons-material/BackHand";
// import CallEndIcon from "@mui/icons-material/CallEnd";
// import InfoIcon from "@mui/icons-material/Info";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import ChatIcon from "@mui/icons-material/Chat";
// import LockPersonIcon from "@mui/icons-material/LockPerson";
// import InterestsIcon from "@mui/icons-material/Interests";
// import Webcam from "react-webcam";
// import CloseIcon from "@mui/icons-material/Close";
// import ContentCopyIcon from "@mui/icons-material/ContentCopy";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import lock from "../../assets/lock.png";
// import io from "socket.io-client";
// import Peer from "simple-peer";

// const style = {
//   position: "absolute",
//   top: "60%",
//   left: "15%",
//   transform: "translate(-50%, -50%)",
//   width: 300,
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 2,
//   color: "#3f3f3f",
// };

// const Home = () => {
//   const [loading, setLoading] = useState(false);
//   const [startMeeting, setStartMeeting] = useState(true);
//   const [open, setOpen] = useState(false);
//   const [me, setMe] = useState("");
//   const [stream, setStream] = useState();
//   // const [receivingCall, setReceivingCall] = useState(false);
//   // const [caller, setCaller] = useState("");
//   // const [callerSignal, setCallerSignal] = useState();
//   // const [callAccepted, setCallAccepted] = useState(false);
//   // // const [idToCall, setIdToCall] = useState("");
//   // const [callEnded, setCallEnded] = useState(false);
//   // const [name, setName] = useState("");

//   // const userVideo = useRef();
//   // const connectionRef = useRef();

//   const socket = io.connect("http://localhost:5000");

//   useEffect(() => {
//     setOpen(true);
//     setTimeout(() => {
//       navigator.mediaDevices
//       .getUserMedia({ video: true, audio: true })
//       .then((stream) => {
//         setStream(stream);
//         myVideo.current.srcObject = stream;
//         console.log(myVideo.current.srcObject);
//       });
//     }, [1000]);
//      console.log(me);

//     socket.on("me", (id) => {
//       setMe(id);
//     });

//     socket.on("callUser", (data) => {
//       setReceivingCall(true);
//       setCaller(data.from);
//       setName(data.name);
//       setCallerSignal(data.signal);
//     });
//   }, []);

//   // const callUser = (id) => {
//   //   const peer = new Peer({
//   //     initiator: true,
//   //     trickle: false,
//   //     stream: stream,
//   //   });
//   //   peer.on("signal", (data) => {
//   //     socket.emit("callUser", {
//   //       userToCall: id,
//   //       signalData: data,
//   //       from: me,
//   //       name: name,
//   //     });
//   //   });
//   //   peer.on("stream", (stream) => {
//   //     userVideo.current.srcObject = stream;
//   //   });
//   //   socket.on("callAccepted", (signal) => {
//   //     setCallAccepted(true);
//   //     peer.signal(signal);
//   //   });

//   //   connectionRef.current = peer;
//   // };

//   // const answerCall = () => {
//   //   setCallAccepted(true);
//   //   const peer = new Peer({
//   //     initiator: false,
//   //     trickle: false,
//   //     stream: stream,
//   //   });
//   //   peer.on("signal", (data) => {
//   //     socket.emit("answerCall", { signal: data, to: caller });
//   //   });
//   //   peer.on("stream", (stream) => {
//   //     userVideo.current.srcObject = stream;
//   //   });

//   //   peer.signal(callerSignal);
//   //   connectionRef.current = peer;
//   // };

//   // const leaveCall = () => {
//   //   setCallEnded(true);
//   //   connectionRef.current.destroy();
//   // };


//   // const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);



//   const myVideo = useRef();
//   console.log(myVideo);

//   setTimeout(() => {
//     setLoading(true);
//   }, [5000]);

//   return (
//     <>
//       <div style={{ overflowX: "hidden", overflowY: "auto" }}>
//         {loading ? (
//           <>
//             {startMeeting ? (
//               <>
//                 <Grid container justifyContent="center" spacing={2}>
//                   <Grid item lg={3}></Grid>

//                   <Grid item lg={6}>
//                     <Card
//                       style={{
//                         minHeight: "70dvh",
//                         marginTop: "10px",
//                         backgroundColor: "#202124",
//                         color: "#fff",
//                       }}
//                     >
//                       <IconButton style={{ float: "right", color: "#fff" }}>
//                         <Avatar
//                           sx={{
//                             height: 30,
//                             width: 30,
//                             backgroundColor: "#474747",
//                           }}
//                         >
//                           <KeyboardVoiceIcon fontSize="small" />
//                         </Avatar>
//                       </IconButton>
//                       <div className="video">
//                         {stream && (
//                           <video
//                             playsInline
//                             muted
//                             ref={myVideo}
//                             autoPlay
//                             style={{ width: "300px" }}
//                           />
//                         )}
//                       </div>
                     
//                     </Card>
//                   </Grid>
//                   <Grid item lg={3}>
//                     <Card sx={{ mt: 5 }}>
//                       <div className="video">
//                         {callAccepted && !callEnded ? (
//                           <video
//                             playsInline
//                             ref={userVideo}
//                             autoPlay
//                             style={{ width: "300px" }}
//                           />
//                         ) : null}
//                       </div>
//                     </Card>
//                   </Grid>
//                 </Grid>
//                 <Modal
//                   open={open}
//                   onClose={handleClose}
//                   aria-labelledby="modal-modal-title"
//                   aria-describedby="modal-modal-description"
//                 >
//                   <Box sx={style}>
//                     <Grid container justifyContent="center" spacing={1}>
//                       <Grid item lg={8}>
//                         <Typography
//                           id="modal-modal-title"
//                           variant="body2"
//                           sx={{ color: "#525151", fontWeight: "bold" }}
//                           component="h2"
//                         >
//                         Your meeting is ready now.
//                         </Typography>
//                       </Grid>
//                       <Grid item lg={2}></Grid>

//                       <Grid item lg={2}>
//                         <CloseIcon
//                           fontSize="medium"
//                           cursor="pointer"
//                           onClick={handleClose}
//                         />
//                       </Grid>
//                     </Grid>

//                     <Typography
//                       id="modal-modal-description"
//                       variant="body2"
//                       sx={{ mt: 2 }}
//                     >
//                       Share this meeting link with others you want to join in
//                       meeting.
//                     </Typography>
//                     <br />
//                     <Card sx={{ p: 1 }}>
//                       <Stack direction="row" spacing={10}>
//                         <Typography variant="body2" sx={{ mt: 0 }}>
//                          {me}
//                         </Typography>

//                         <CopyToClipboard text={me}>
//                           <ContentCopyIcon
//                             fontSize="small"
//                             sx={{ cursor: "pointer" }}
//                           />
//                         </CopyToClipboard>
//                       </Stack>
//                     </Card>
//                     <br />

//                     <Stack direction="row" spacing={1}>
//                       <Avatar
//                         sx={{
//                           width: 25,
//                           height: 25,
//                           backgroundColor: "#aacdf1",
//                           m: 1,
//                         }}
//                         src={lock}
//                       ></Avatar>
//                       <Typography variant="caption">
//                         People who join this meetings must approved by you
//                         before they can join.
//                       </Typography>
//                     </Stack>
//                     <br />
//                     <Typography variant="caption">
//                       joined as srm26@gmail.com
//                     </Typography>
//                   </Box>
//                 </Modal>
//               </>
//             ) : (
//               <div>
//                 <Avatar
//                   sx={{ height: 30, width: 30, backgroundColor: "#3F51B5" }}
//                 >
//                   <Audio
//                     height="15"
//                     width="25"
//                     color="#ffffff"
//                     ariaLabel="audio-loading"
//                     wrapperStyle={{}}
//                     wrapperClass="wrapper-class"
//                     visible={true}
//                     style={{ float: "right" }}
//                   />
//                 </Avatar>
//                 <Grid container justifyContent="center">
//                   <Avatar
//                     style={{
//                       width: "200px",
//                       height: "200px",
//                       float: "center",
//                       marginTop: "30px",
//                       border: "3px solid #bbc1d6",
//                     }}
//                     src={srm}
//                   />
//                 </Grid>
//                 <Typography
//                   variant="body2"
//                   textAlign="right"
//                   sx={{ mt: 18, fontWeight: "bold", mr: 2 }}
//                 >
//                   Saubhagya Ranjan Mallick
//                 </Typography>
//               </div>
//             )}

//             {/* Footer */}
//             <Grid container justifyContent="center" sx={{ marginTop: "50px" }}>
//               <Grid item lg={4}>
//                 <Typography
//                   variant="body2"
//                   textAlign="left"
//                   sx={{ p: 2 }}
//                   fontWeight="bold"
//                 >
//                   9:52 PM | cgv-mgt-kjui
//                 </Typography>
//               </Grid>

//               <Grid item lg={4}>
//                 <Card
//                   style={{
//                     height: "30px",
//                     borderRadius: "30px",
//                     padding: "10px",
//                     backgroundColor: "#E1F5FE",
//                   }}
//                 >
//                   <Stack
//                     direction="row"
//                     spacing={2}
//                     style={{ justifyContent: "center" }}
//                   >
//                     &nbsp;
//                     <Tooltip title="Microphone">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <KeyboardVoiceIcon fontSize="small" />
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="Video">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <VideoCallIcon fontSize="small" />{" "}
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="Close Caption">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <ClosedCaptionIcon fontSize="small" />
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="Emoji">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <SentimentVerySatisfiedIcon fontSize="small" />{" "}
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="Scrren share">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <PresentToAllIcon fontSize="small" />{" "}
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="Raise hand">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <BackHandIcon fontSize="small" />
//                       </Avatar>
//                     </Tooltip>
//                     <Tooltip title="End call">
//                       <Avatar
//                         sx={{
//                           height: 35,
//                           width: 35,
//                           backgroundColor: "#202124",
//                         }}
//                       >
//                         <CallEndIcon fontSize="small" />
//                       </Avatar>
//                     </Tooltip>
//                     &nbsp;
//                   </Stack>
//                 </Card>
//               </Grid>
//               <Grid item lg={4}>
//                 <Stack direction="row" spacing={2} sx={{ p: 2, ml: 15 }}>
//                   <InfoIcon />
//                   <PeopleAltIcon />
//                   <ChatIcon />
//                   <LockPersonIcon />
//                   <InterestsIcon />
//                 </Stack>
//               </Grid>
//             </Grid>
//           </>
//         ) : (
//           <div
//             style={{
//               display: "flex",
//               color: "#fff",
//               width: "100%",
//               height: "76dvh",
//               textAlign: "center",
//               justifyContent: "center",
//               float: "center",
//               marginTop: "50px",
//             }}
//           >
//             <Grid container justifyContent="center">
//               <Grid container lg={1}>
//                 <Typography
//                   variant="h5"
//                   sx={{ textAlign: "center", justifyContent: "center", mt: 20 }}
//                 >
//                   <ThreeDots
//                     height="80"
//                     width="80"
//                     radius="9"
//                     color="#ffffff"
//                     ariaLabel="three-dots-loading"
//                     wrapperStyle={{}}
//                     wrapperClassName=""
//                     visible={true}
//                   />
//                   Joining...
//                 </Typography>
//               </Grid>
//             </Grid>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Home;
