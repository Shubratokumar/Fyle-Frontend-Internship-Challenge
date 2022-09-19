import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import axios  from "axios";
import UserDetailsComponent from './UserDetailsComponent';
import RepoCardCompoment from './RepoCardCompoment';

const Container = styled(Box)`
    padding: 30px 135px;
    
`;
const ComponentWrapper = styled(Box)`
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #ffffff;
`;
const UserContainer = styled(Box)`
    margin: 10px;
    padding: 10px, 20px;
`;
const ReposContainer = styled(Box)`
    margin: 10px;
    padding: 15px, 20px;
`;

const Home = () => {

    const [ user, setUser ] = useState({});
    const [ repos, setRepos ] = useState([]);
    console.log(repos);

    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`https://api.github.com/users/Shubratokumar`);
            setUser(data);
        })()
    }, []);

    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`https://api.github.com/users/Shubratokumar/repos`);
            setRepos(data);
        })()
    }, []);

    

    return (
        <Container>
            <ComponentWrapper>
                <UserContainer>
                    <UserDetailsComponent user={user} />
                </UserContainer>
                <ReposContainer>
                    {
                        repos?.map((repo) => (
                            <RepoCardCompoment repo={repo} key={repo?.id}/>
                        ))
                    }
                </ReposContainer>
            </ComponentWrapper>
        </Container>
    );
};

export default Home;