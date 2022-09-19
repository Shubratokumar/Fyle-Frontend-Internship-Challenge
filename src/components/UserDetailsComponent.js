import React from 'react';
import { Box, Grid, Typography, styled } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinDropIcon from '@mui/icons-material/PinDrop';

const UserDetailsWrapper = styled(Box)`
    padding : 25px ;
    border: 1px solid orange;
    border-radius: 15px;
`;
const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: "250px",    
    height: "250px",
    borderRadius: "50%",
  });


const UserDetailsComponent = ({user}) => {
    const { login, avatar_url, bio, html_url, location, twitter_username, blog } = user;
    return (
        <UserDetailsWrapper>
            <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Img src={avatar_url} alt="profile" />
                                <Typography variant="subtitle2" gutterBottom>
                                    <LanguageIcon/> {html_url}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="h4" gutterBottom>
                                    {login}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    {bio}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    <PinDropIcon/> {location}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    <TwitterIcon/> {twitter_username}
                                </Typography>
                                <Typography variant="subtitle2" gutterBottom>
                                    <LanguageIcon/> {blog}
                                </Typography>                                
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>            
        </UserDetailsWrapper>
    );
};

export default UserDetailsComponent;