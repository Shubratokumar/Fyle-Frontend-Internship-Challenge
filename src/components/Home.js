import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import axios  from "axios";
import UserDetailsComponent from './UserDetailsComponent';

const Container = styled(Box)`
    padding: 30px 135px;
`;
const UserContainer = styled(Box)`
    margin: 10px;
    padding: 10px, 20px;
`

const Home = () => {

    const [ user, setUser ] = useState({});

    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`https://api.github.com/users/Shubratokumar`);
            setUser(data);
        })()
    }, [])

    return (
        <Container>
            <UserContainer>
                <UserDetailsComponent user={user} />
            </UserContainer>
        </Container>
    );
};

export default Home;