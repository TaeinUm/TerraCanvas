// import React, { useState, useEffect } from "react";
// import { getTop5Trending } from "../../api/graphicsAPI";
// import {Box, Typography, Paper, TextField} from "@mui/material";
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Divider from '@mui/material/Divider';
// import { styled, alpha } from '@mui/material/styles';
// import { Link, NavLink } from "react-router-dom";
// import CommunityTwoMapIdeaPostings from "./CommunityTwoMapIdeasPostingsPage";

// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import CommunitySearchBar from "./CommunitySearchBar";

// let newIdeas = ["Fantasy Map", "Deer Pop", "Road Trip"];

// const StyledMenu = styled((props) => (
//     <Menu
//       elevation={0}
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'right',
//       }}
//       transformOrigin={{
//         vertical: 'top',
//         horizontal: 'right',
//       }}
//       {...props}
//     />
//   ))(({ theme }) => ({
//     '& .MuiPaper-root': {
//       borderRadius: 6,
//       marginTop: theme.spacing(1),
//       minWidth: 180,
//       color:
//         theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//       boxShadow:
//         'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//       '& .MuiMenu-list': {
//         padding: '4px 0',
//       },
//       '& .MuiMenuItem-root': {
//         '& .MuiSvgIcon-root': {
//           fontSize: 18,
//           color: theme.palette.text.secondary,
//           marginRight: theme.spacing(1.5),
//         },
//         '&:active': {
//           backgroundColor: alpha(
//             theme.palette.primary.main,
//             theme.palette.action.selectedOpacity,
//           ),
//         },
//       },
//     },
//   }));

// function CommunityTwo(){
//     const [topGraphics, setTopGraphics] = useState([]);
//     const [anchorEl, setAnchorEl] = React.useState(null);

//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//     useEffect(() => {
//         const fetchGraphics = async () => {
//           try {
//             const data = await getTop5Trending();

//             console.log("Hello");
//             console.log(data);
//             setTopGraphics(data);

//           } catch (error) {
//             console.error("Error fetching top graphics:", error);
//           }
//         };

//         fetchGraphics();
//       },[]);

//     return(
//     <div>
//         <Box>

//             <Button
//               id="demo-customized-button"
//               aria-controls={open ? 'demo-customized-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? 'true' : undefined}
//               variant="contained"
//               disableElevation
//               onClick={handleClick}
//               //endIcon={}
//             >
//               Community
//             </Button>
//             <StyledMenu
//               id="demo-customized-menu"
//               MenuListProps={{
//                 'aria-labelledby': 'demo-customized-button',
//               }}
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleClose} component={NavLink} to={"/communityTrendingMaps"} disableRipple>

//                 Trending Map Graphics
//               </MenuItem>
//               <MenuItem onClick={handleClose} component={NavLink} to={"/communityMapIdeas"} disableRipple>

//                 Map Graphics Idea
//               </MenuItem>
//               <Divider sx={{ my: 0.5 }} />
//               <MenuItem onClick={handleClose} component={NavLink} to={"/communityQuestions"} disableRipple>

//                 Questions
//               </MenuItem>
//               <MenuItem onClick={handleClose} component={NavLink} to={"/communityUserName"} disableRipple>

//                 User Name
//               </MenuItem>

//             </StyledMenu>
//           </Box>
//           <Box>
//           <CommunitySearchBar disabled />
//             </Box>
//            <Box>
//                 <Button id="post-map-button" variant="contained" component={NavLink}
//                 to={"/communityPostMapGraphic"}>Post</Button>
//            </Box>
//            <Typography color="white" variant="h4">Trending Map Graphics</Typography>
//         <Box
//           data-cy="new-map-graphics-community-homecontainer"
//           sx={{
//             display: "flex-row",
//             width: "3250px",
//             gap: "10px",
//             ml: 5,
//             transition: "transform 0.5s",
//             //transform: `translateX(${scrollAmount}px)`,
//           }}>

//             {/* <Grid container spacing="2"> */}
//             {topGraphics.slice(0, 3).map((graphic, index) => (
//             <Paper
//               key={index}
//               elevation={4}
//               data-cy="trending-graphic"
//               sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
//             //   component={NavLink}
//             //   to={"/communityGraphicPost/:"+index}
//             >
//               <img
//                 src={graphic.image}
//                 alt={graphic.title}
//                 style={{ objectFit: "cover", width: "100%", height: "100%" }}
//               />
//             </Paper>
//           ))}
//           {/* </Grid> */}

//           </Box>
//           <Typography color="white" variant="h4">Questions</Typography>
//         <Box
//           sx={{
//             display: "flex-column",
//             width: "3250px",
//             gap: "10px",
//             mt: 5,
//             transition: "transform 0.5s",
//             //transform: `translateX(${scrollAmount}px)`,
//           }}
//           >

//             {newQuestions.map((text, index) => (
//               <Typography
//                 variant="h2"

//                 sx={{
//                   fontSize: "20px",
//                   color: "#FAFAFA",
//                   mb: 2,
//                   ml: 5,
//                   display: "flex",
//                   flexGrow: "1",
//                   fontWeight: "bold",
//                 }}
//                 component={NavLink}
//                 to={"/communityQuestionPost/:"+index}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Box>
//           <Typography color="white" variant="h4">Map Ideas</Typography>
//           <Box
//           sx={{
//             display: "flex-column",
//             width: "3250px",
//             gap: "10px",
//             mt: 5,
//             transition: "transform 0.5s",
//             //transform: `translateX(${scrollAmount}px)`,
//           }}
//           >

//             {newIdeas.map((text, index) => (
//               <Typography
//                 variant="h2"

//                 sx={{
//                   fontSize: "20px",
//                   color: "#FAFAFA",
//                   mb: 2,
//                   ml: 5,
//                   display: "flex",
//                   flexGrow: "1",
//                   fontWeight: "bold",
//                 }}
//                 component={NavLink}
//                 to={"/communityMapIdeaPost/:index"}
//               >
//                 {text}
//               </Typography>
//             ))}
//           </Box>

//     </div>);
// }
// export default CommunityTwo;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  Container,
  Paper,
  InputBase,
  Pagination,
  Select,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { alpha } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { getTop5Trending } from "../../api/graphicsAPI";
import { CommunityContext } from "../../contexts/CommunityContextVerTwo";
import { useContext } from "react";
import CommunitySectionAPI from "../../api/CommunitySectionAPI";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
//import { likePost } from '../../../../server/controllers/postController';

let newQuestions = [
  "What should I write in the memo?",
  "Where can I find the map graphics templates that I liked?",
  "what is JSON files?",
];
let questions = [];
let ideas = [];
let graphics = [];
//let userGraphics =[];
// Styled components
const StyledAppBar = styled(AppBar)({
  backgroundColor: "#333", // Customize app bar color
  "& .MuiToolbar-root": {
    justifyContent: "space-between",
  },
});

const StyledCard = styled(Card)({
  width: "100%",
  boxShadow: "0px 8px 24px rgba(0,0,0,0.1)", // Customize card shadow
});

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  // Removed the width: '100%' to prevent stretching, which can misalign the search bar
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto", // Use 'auto' or set a fixed width if necessary
  },
  display: "flex", // Added display flex
  alignItems: "center", // Added alignItems center for the Search component
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: "space-between",
});

export var postInfo;

function CommunityTwo() {
  //const [postInfo, setPostInfo] = useState(null);
  const [userGraphics, setUserGraphics] = useState([]);
  const [authentification, setAuthentification] = useState(true);
  const { getAllPosts } = CommunitySectionAPI;
  const [searchTerm, setSearchTerm] = useState("");
  const [topGraphics, setTopGraphics] = useState([]);
  const [questionBuffer, setQuestionBuffer] = useState([]);
  const [trendingBuffer, setTrendingBuffer] = useState([]);
  const [ideasBuffer, setIdeasBuffer] = useState([]);
  //const [allGraphics, setAllGraphics] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const {
    navigateTo,
    updatePostIdAndNavigate,
    setQuestionTitle,
    setQuestionContent,
    questionTitle,
    updateQuestionTitle,
    updatePostInfo,
  } = useContext(CommunityContext);
  const {
    getMapsByUsername,
    getQuestionsBySearch,
    getIdeasBySearch,
    getMapsBySearch,
    likeMap,
    getPostsByUserId,
    unlikeMap,
    deletePost,
  } = CommunitySectionAPI;
  const [whiteBar, setWhiteBar] = useState("Trending Map Graphics");
  const handleSearchChange = async (event) => {
    console.log("What is the event value " + event.target.value);
    if (category === "category3") {
      let total = [];
      let repeat = [];
      let users = [];
      console.log("Does the random bar " + event.target.value);
      users = await getMapsByUsername(event.target.value);
      console.log("Checking for undefined: "+users);
      if(users){
        
      
        console.log(users);
        //console.log("what is users: "+JSON.stringify(users[0]));
        for (let user in users) {
          //console.log("What is the user id: "+user._id)
          console.log("what is users: " + users[user]._id);
          repeat = await getPostsByUserId(users[user]._id);

          total = total.concat(repeat);
          console.log("what is total: " + total);
          setUserGraphics(total);
        }
      }
    }

    setSearchTerm(event.target.value);
  };
  const handleUserSearch = async (e) => {
    if (e === "Enter") {
      if (category === "category3") {
        let repeat = [];
        let users = [];
        console.log(
          "Does the random bar " + document.getElementById("random-search-bar")
        );
        users = await getMapsByUsername(
          document.getElementById("random-search-bar")
        );

        for (let user in users) {
          repeat = await getPostsByUserId(user);
          userGraphics.concat(repeat);
        }
      }
    }
  };
  function setupQuestionPost(text) {
    updateQuestionTitle(text);
  }
  function setupQuestionLocal(post) {
    // if(localStorage.getItem("questionId")!=post._id){
    // }
    //localStorage.setItem("questionId", post._id);

    // if(localStorage.getItem("questionContent")!=post.content){
    // }
    //localStorage.setItem("questionContent", post.content);

    // if(localStorage.getItem("questionTitle")!=post.title){
    // }
    //localStorage.setItem("questionTitle", post.postName);

    //navigate("/communityQuestionPost/:"+post.title);
    //if (event )
    //window.open("/communityQuestionPost/:"+post.title);
    //setPostInfo(post);
    localStorage.setItem("postItem", post);
    postInfo = post;
    updatePostInfo(post);
  }

  function setupIdeasLocal(post) {
    if (localStorage.getItem("ideaId") != post._id) {
      localStorage.setItem("questionId", post._id);
    }
    if (localStorage.getItem("ideaContent") != post.content) {
      localStorage.setItem("questioncontent", post.content);
    }
    if (localStorage.getItem("ideaTitle") != post.title) {
      localStorage.setItem("questiontitle", post.title);
    }
  }

  function setupGraphicsLocal(post) {
    if (localStorage.getItem("graphicId") != post._id) {
      localStorage.setItem("graphicId", post._id);
    }
    if (localStorage.getItem("graphicContent") != post.content) {
      localStorage.setItem("graphiccontent", post.content);
    }
    if (localStorage.getItem("graphicTitle") != post.title) {
      localStorage.setItem("graphictitle", post.title);
    }
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "category1") {
      setWhiteBar("Questions");
    } else if (event.target.value === "category3") {
      setWhiteBar("User Name");
    } else if (event.target.value === "") {
      setWhiteBar("Trending Map Graphics");
    } else if (event.target.value === "category2") {
      setWhiteBar("Map Graphics Idea");
    }
    console.log("What is the current category? " + category);
  };
  function giveALike(userId, postId) {
    let newData = likeMap(userId, postId);
  }
  function giveAnUnlike(userId, postId) {
    let newData = unlikeMap(userId, postId);
  }
  const deleteAUserPost = async(userId, postId)=> {
    let total = [];
      let repeat = [];
      let users = [];
    if(localStorage.getItem("authentification")){
      if(localStorage.getItem("authentification")==="true"){

      
    
        if (userId !== localStorage.getItem("newUserid")){
          alert("You don't have permission to delete this post");
          
        }else{
          let newData = await deletePost(postId);
          let users = await getMapsByUsername(searchTerm);
          console.log("Checking for undefined: "+users);
          if(users){
        
      
          console.log(users);
          //console.log("what is users: "+JSON.stringify(users[0]));
          for (let user in users) {
            //console.log("What is the user id: "+user._id)
            console.log("what is users: " + users[user]._id);
            repeat = await getPostsByUserId(users[user]._id);

            total = total.concat(repeat);
            console.log("what is total: " + total);
            setUserGraphics(total);
          }
      }
        }
    }}else{
      alert("You have not signed in yet");
    }
  }
  let newData = "";

  useEffect(() => {
    let newData = [];

    const fetchGraphics = async () => {
      try {
        const data = await getTop5Trending();
        setTopGraphics(data);
        newData = await getAllPosts();
        
        setUserGraphics(newData);
        //setAllGraphics(newData);
        console.log("How many graphics are there in total: " + newData.length);
        console.log("is it possible " + newData[0].types);
        setQuestionBuffer(
          newData.filter((post) => post.postType === "Questions")
        );
        setTrendingBuffer(newData.filter((post) => post.postType === "map"));
        setIdeasBuffer(newData.filter((post) => post.postType === "Map Ideas"));
        console.log(
          "What is the length of TrendingBuffer? " + trendingBuffer.length
        );
        console.log("What is the length of questions: " + questions.length);
      } catch (error) {
        console.error("Error fetching top graphics:", error);
      }
    };

    fetchGraphics();
    if (localStorage.getItem("authentification") === "true") {
      setAuthentification(false);
    }
    console.log("is my scoping wrong: " + newData);

    //questions = newData.filter(post=>post.types==="Questions");
    // for (let key in newData){
    //   console.log((key));
    // }

    console.log("What is the length of questions: " + questions.length);
    // ideas = newData.filter((post)=>(post.types==="Map Ideas"));
    // graphics = newData.filter((post)=>(post.types==="Map Graphics"));
    // userGraphics = newData.filter((post)=>(post.userId===localStorage.getItem("newUserid")))
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let content = null;

  // if (category === "category3"){
  //   content=
  //   <Box>
  //   <Typography variant="h4" align="left" sx={{ my: 4, color: 'white' }}>
  //       User Posts:
  //     </Typography>
  //     <Box
  //         sx={{
  //           display: "flex-column",
  //           width: "3250px",
  //           gap: "10px",
  //           mt: 5,
  //           transition: "transform 0.5s",
  //           //transform: `translateX(${scrollAmount}px)`,
  //         }}
  //         >
  //           {userGraphics.map((post) => (
  //             <Typography
  //               variant="h2"

  //               sx={{
  //                 fontSize: "20px",
  //                 color: "#FAFAFA",
  //                 mb: 2,
  //                 ml: 5,
  //                 display: "flex",
  //                 flexGrow: "1",
  //                 fontWeight: "bold",
  //               }}
  //               //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
  //               // component={NavLink}
  //               // to={"/communityQuestionPost/:"+text}
  //             >
  //               {post.content}
  //             </Typography>
  //           ))}
  //           {/* {newQuestions.filter((text) => text.toLowerCase().includes(searchTerm.toLowerCase())).map((text, index) => (
  //             <Typography
  //               variant="h2"
  //               onClick={setupQuestionPost(text)}
  //               sx={{
  //                 fontSize: "20px",
  //                 color: "#FAFAFA",
  //                 mb: 2,
  //                 ml: 5,
  //                 display: "flex",
  //                 flexGrow: "1",
  //                 fontWeight: "bold",
  //               }}
  //               //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
  //               component={NavLink}
  //               to={"/communityQuestionPost/:"+text}
  //             >
  //               {text}
  //             </Typography>
  //           ))} */}
  //         </Box>
  //         </Box>;
  // }

  // if (category === "category2"){
  //   content=
  //   <Box>
  //   <Typography variant="h4" align="left" sx={{ my: 4, color: 'white' }}>
  //       New Ideas:
  //     </Typography>
  //     <Box
  //         sx={{
  //           display: "flex-column",
  //           width: "3250px",
  //           gap: "10px",
  //           mt: 5,
  //           transition: "transform 0.5s",
  //           //transform: `translateX(${scrollAmount}px)`,
  //         }}
  //         >
  //           {/* {questions.map((post) => (
  //             <Typography
  //               variant="h2"
  //               onClick={setupQuestionPost(text)}
  //               sx={{
  //                 fontSize: "20px",
  //                 color: "#FAFAFA",
  //                 mb: 2,
  //                 ml: 5,
  //                 display: "flex",
  //                 flexGrow: "1",
  //                 fontWeight: "bold",
  //               }}
  //               //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
  //               component={NavLink}
  //               to={"/communityQuestionPost/:"+text}
  //             >
  //               {post.content}
  //             </Typography>
  //           ))} */}
  //           {ideas.map((post) => (
  //             <Typography
  //               variant="h2"
  //               onClick={setupIdeasLocal(post)}
  //               sx={{
  //                 fontSize: "20px",
  //                 color: "#FAFAFA",
  //                 mb: 2,
  //                 ml: 5,
  //                 display: "flex",
  //                 flexGrow: "1",
  //                 fontWeight: "bold",
  //               }}
  //               //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
  //               // component={NavLink}
  //               // to={"/communityQuestionIdea/:"+text}
  //             >
  //               {post.content}
  //             </Typography>
  //           ))}
  //         </Box>
  //         </Box>;
  // }
  if (category === "category2") {
    content = (
      <Box>
        <Typography variant="h4" align="left" sx={{ my: 4, color: "white" }}>
          Map Ideas:
        </Typography>
        <Box
          sx={{
            display: "flex-column",
            height: "1000px",
            width: "3250px",
            gap: "10px",
            mt: 5,
            transition: "transform 0.5s",
            //transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {ideasBuffer
            .filter((post) => post.postName.includes(searchTerm))
            .map((post) => (
              <Typography
                variant="h2"
                onMouseEnter={() => setupQuestionLocal(post)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:" + post.postName}
              >
                {post.postName}
              </Typography>
            ))}
          {/* {newQuestions.filter((text) => text.toLowerCase().includes(searchTerm.toLowerCase())).map((text, index) => (
              <Typography
                variant="h2"
                onClick={setupQuestionPost(text)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:"+text}
              >
                {text}
              </Typography>
            ))} */}
        </Box>
      </Box>
    );
  }
  if (category === "category3") {
    content = (
      <Box>
        <Typography variant="h4" align="left" sx={{ my: 4, color: "white" }}>
          Username Posts:
        </Typography>
        <Box
          sx={{
            display: "flex-column",
            width: "100%",
            height: "100%",
            gap: "10px",
            mt: 5,
            transition: "transform 0.5s",
            //transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {userGraphics.map((graphic, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={graphic._id}
              m={2}
              data-cy="community-trending-graphics"
            >
              <StyledCard>
                <Paper
                  key={index}
                  elevation={4}
                  data-cy="trending-graphic"
                  sx={{ width: "500px", height: "400px", bgcolor: "grey" }}
                >
                  <img
                    src={graphic.postImages}
                    alt={graphic.postName}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Paper>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    onMouseEnter={() => setupQuestionLocal(graphic)}
                    component={NavLink}
                    to={"/communityGraphicPost/:" + graphic.postName}
                  >
                    {graphic.postName}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() =>
                      giveALike(localStorage.getItem("newUserid"), graphic._id)
                    }
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton
                    aria-label="unlike a post"
                    onClick={() =>
                      giveAnUnlike(localStorage.getItem("newUserid"), graphic._id)
                    }
                  >
                    Unlike
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Button size="small" color="primary">
                    More
                  </Button>
                  <IconButton aria-label="delete" onClick={()=>{
                        deleteAUserPost(graphic.userId, graphic._id);
                      }}>
                      <HighlightOffIcon
                       
                      />
                  </IconButton>
                </CardActions>
              </StyledCard>
            </Grid>
          ))}
          {/* {questionBuffer.filter((post) => post.postName.includes(searchTerm)).map((post) => (
              <Typography
                variant="h2"
                onMouseEnter={()=>setupQuestionLocal(post)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                // component={NavLink}
                // to={"/communityUserNamePost/:"+post.postName}
              >
                {post.postName}
              </Typography>
            ))} */}
          {/* {newQuestions.filter((text) => text.toLowerCase().includes(searchTerm.toLowerCase())).map((text, index) => (
              <Typography
                variant="h2"
                onClick={setupQuestionPost(text)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:"+text}
              >
                {text}
              </Typography>
            ))} */}
        </Box>
      </Box>
    );
  }

  if (category === "category1") {
    content = (
      <Box>
        <Typography variant="h4" align="left" sx={{ my: 4, color: "white" }}>
          New Questions:
        </Typography>
        <Box
          sx={{
            display: "flex-column",
            width: "3250px",
            gap: "10px",
            mt: 5,
            transition: "transform 0.5s",
            //transform: `translateX(${scrollAmount}px)`,
          }}
        >
          {questionBuffer
            .filter((post) => post.postName.includes(searchTerm))
            .map((post) => (
              <Typography
                variant="h2"
                onMouseEnter={() => setupQuestionLocal(post)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:" + post.postName}
              >
                {post.postName}
              </Typography>
            ))}
          {/* {newQuestions.filter((text) => text.toLowerCase().includes(searchTerm.toLowerCase())).map((text, index) => (
              <Typography
                variant="h2"
                onClick={setupQuestionPost(text)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:"+text}
              >
                {text}
              </Typography>
            ))} */}
        </Box>
      </Box>
    );
  }
  if (category === "") {
    content = (
      <Box>
        <Typography variant="h4" align="left" sx={{ my: 4, color: "white" }}>
          Trending Map Graphics
        </Typography>

        <Grid container spacing={4}>
          {/* {graphics.map((post) => (
              <Typography
                variant="h2"
                onClick={setupQuestionPost(text)}
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                // component={NavLink}
                // to={"/communityQuestionPost/:"+text}
              >
                {post.content}
              </Typography>
            ))} */}
          {trendingBuffer
            .filter((graphic) => graphic.postName.includes(searchTerm))
            .slice(startIndex, endIndex)
            .map((graphic, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={graphic._id}
                data-cy="community-trending-graphics"
              >
                <StyledCard>
                  <CardMedia
                    component="img"
                    height="140"
                    image={graphic.postImages}
                    alt={graphic.postName}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      onMouseEnter={() => setupQuestionLocal(graphic)}
                      component={NavLink}
                      to={"/communityGraphicPost/:" + graphic.postName}
                    >
                      {graphic.postName}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton
                      aria-label="add to favorites"
                      onClick={() =>
                        giveALike(
                          localStorage.getItem("newUserid"),
                          graphic._id
                        )
                      }
                    >
                      <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton
                    size="small"
                    aria-label="unlike a post"
                    onClick={() =>
                      giveAnUnlike(localStorage.getItem("newUserid"), graphic._id)
                    }
                    >
                      Unlike
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <Button size="small" color="primary">
                      More
                    </Button>
                    
                  </CardActions>
                </StyledCard>
              </Grid>
            ))}
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <Pagination
            data-cy="pagination-trending-graphics"
            count={Math.ceil(graphics.length / itemsPerPage)}
            page={currentPage}
            onChange={(_, page) => setCurrentPage(page)}
            color="primary"
            showFirstButton
            showLastButton
          />
        </Box>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ paddingBottom: 4, height: "100%" }}>
      <AppBar position="static" color="default" elevation={0}>
        <StyledToolbar sx={{ color: "black" }}>
          {/* Left side - Title */}
          <Typography
            variant="h6"
            noWrap
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            {whiteBar}
          </Typography>

          {/* Center - Search input */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "flex" },
              justifyContent: "center",
            }}
          >
            <Select
              value={category}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ "aria-label": "Select category" }}
              sx={{ mr: 2 }}
            >
              <MenuItem value="">Trending Map Graphics</MenuItem>
              <MenuItem value={"category2"}>Map Graphic Idea</MenuItem>
              <MenuItem value={"category1"}>Question</MenuItem>
              <MenuItem value={"category3"}>User Name</MenuItem>

              {/* ... other categories */}
            </Select>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                id="random-search-bar"
                data-cy="community-search-bar"
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
                onKeyDown={handleUserSearch}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    console.log("Enter key pressed");
                    if (category === "category1") {
                      console.log(
                        "Do I have the correct search term?" + searchTerm
                      );
                      getQuestionsBySearch(searchTerm);
                    }
                    if (category === "category2") {
                      console.log(
                        "Do I have the correct search term?" + searchTerm
                      );
                      getIdeasBySearch(searchTerm);
                    }
                    if (category === "category3") {
                      console.log(
                        "Do I have the correct search term?" + searchTerm
                      );
                      getMapsByUsername(searchTerm);
                    }
                    if (category === "") {
                      console.log(
                        "Do I have the correct search term?" + searchTerm
                      );
                      getMapsBySearch(searchTerm);
                    }
                    // else if (category==="category3"){
                    //   console.log("Do I have the correct search term?"+searchTerm);
                    //   getMapsByUsername(searchTerm);
                    // }else if (category==="category2"){
                    //   console.log("Do I have the correct search term?"+searchTerm);
                    //   getIdeasBySearch(searchTerm);
                    // }
                    // write your functionality here
                  }
                }}
              />
            </Search>
          </Box>

          {/* Right side - Post button */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button
              //onClick={navigateTo('/communityPostMapGraphic/')}
              component={Link}
              to={`/communityPostMapGraphic/`}
              variant="contained"
              startIcon={<AddIcon />}
              sx={{ mr: 2 }}
              disabled={authentification}
            >
              Post
            </Button>
          </Box>
        </StyledToolbar>
      </AppBar>
      {content}
    </Container>
  );
}

export default CommunityTwo;

{
  /* <Typography variant="h4" align="left" sx={{ my: 4, color: 'white' }}>
        Trending Map Graphics
      </Typography>


      <Grid container spacing={4}>
        {topGraphics
          .filter((graphic) => graphic.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .slice(startIndex, endIndex)
          .map((graphic, index) => (
            <Grid item xs={12} sm={6} md={4} key={graphic.id}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={graphic.image}
                  alt={graphic.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {graphic.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <Button size="small" color="primary">
                    More
                  </Button>
                </CardActions>
              </StyledCard>
            </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Pagination
          count={Math.ceil(topGraphics.length / itemsPerPage)}
          page={currentPage}
          onChange={(_, page) => setCurrentPage(page)}
          color="primary"
          showFirstButton
          showLastButton
        />
      </Box>

      <Typography variant="h4" align="left" sx={{ my: 4, color: 'white' }}>
        New Questions:
      </Typography>
      <Box 
          sx={{
            display: "flex-column",
            width: "3250px",
            gap: "10px",
            mt: 5,
            transition: "transform 0.5s",
            //transform: `translateX(${scrollAmount}px)`,
          }}
          >
            
            {newQuestions.map((text, index) => (
              <Typography
                variant="h2"
                
                sx={{
                  fontSize: "20px",
                  color: "#FAFAFA",
                  mb: 2,
                  ml: 5,
                  display: "flex",
                  flexGrow: "1",
                  fontWeight: "bold",
                }}
                //onClick={updatePostIdAndNavigate(index, '/communityQuestionPost/:'+index)}
                component={NavLink}
                to={"/communityQuestionPost/:"+index}
              >
                {text}
              </Typography>
            ))}
          </Box> */
}


{/* <div class="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-uk0si">
  <img class="MuiCardMedia-root MuiCardMedia-media MuiCardMedia-img css-rhsghg" src="https://cdn.kicksdigital.com/depictdatastudio.com/2018/09/depict-data-studio-charts-heat-maps.png" height="140" alt="Hello"/>
  <div class="MuiCardContent-root css-1qw96cp">
    <a class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom css-4an0mh" href="/communityGraphicPost/:Hello">Hello</a>
  </div>
  <div class="MuiCardActions-root MuiCardActions-spacing css-3zukih">
    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" aria-label="add to favorites">
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon">
        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
      </svg>
      <span class="MuiTouchRipple-root css-w0pj6f"></span>
    </button>
    <button class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk" tabindex="0" type="button" aria-label="share">
      <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShareIcon">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"></path>
      </svg>
      <span class="MuiTouchRipple-root css-w0pj6f"></span>
    </button>
    <button class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall css-1rtnrqa" tabindex="0" type="button">
      More
      <span class="MuiTouchRipple-root css-w0pj6f"></span>
    </button>
  </div>
</div> */}


