import React from "react";
import { Box, Grid, Typography, Link, styled } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinDropIcon from "@mui/icons-material/PinDrop";
import InsertLinkIcon from "@mui/icons-material/InsertLink";

const UserDetailsWrapper = styled(Box)`
  padding: 25px;
  border: 1px solid orange;
  border-radius: 15px;
  background-color: #ffffff;
`;
const Img = styled("img")({
  marginBottom: "5px",
  display: "block",
  width: "250px",
  height: "250px",
  borderRadius: "50%",
});
const CustomLink = styled(Link)`
  padding-left: 5px;
`;

const UserDetailsComponent = ({ user }) => {
  const { login, avatar_url, bio, html_url, location, twitter_username, blog } =
    user;
  return (
    <UserDetailsWrapper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Img src={avatar_url} alt="profile" />
              <Typography
                sx={{ display: "flex" }}
                component="span"
                variant="body2"
                color="text.primary"
                gutterBottom
              >
                <InsertLinkIcon />
                <CustomLink href={html_url} underline="none">
                  {html_url}
                </CustomLink>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4" gutterBottom>
                {login}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {bio}
              </Typography>
              <Typography
                sx={{ display: "flex" }}
                component="span"
                variant="body2"
                color="text.primary"
                gutterBottom
              >
                <PinDropIcon /> {location}
              </Typography>
              <Typography
                sx={{ display: "flex" }}
                component="span"
                variant="body2"
                color="text.primary"
                gutterBottom
              >
                <TwitterIcon />
                <CustomLink
                  href="https://twitter.com/Shubrato"
                  underline="none"
                >
                  {twitter_username}
                </CustomLink>
              </Typography>
              <Typography
                sx={{ display: "flex" }}
                component="span"
                variant="body2"
                color="text.primary"
                gutterBottom
              >
                <LanguageIcon />
                <CustomLink href={blog} underline="none">
                  {blog}
                </CustomLink>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </UserDetailsWrapper>
  );
};

export default UserDetailsComponent;
