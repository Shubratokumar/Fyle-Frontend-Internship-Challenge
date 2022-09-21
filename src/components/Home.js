import React, { useState, useEffect } from 'react';
import { Box, styled } from '@mui/material';
import axios  from "axios";
import UserDetailsComponent from './UserDetailsComponent';
import RepoCardCompoment from './RepoCardCompoment';
import PaginationComponent from './PaginationComponent';

const Container = styled(Box)`
    padding: 30px 135px;    
`;
const ComponentWrapper = styled(Box)`
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;
    background-color: #d9f8f0;
`;
const UserContainer = styled(Box)`
    margin: 10px;
    padding: 10px 20px;    
`;
const ReposContainer = styled(Box)`
    margin: 10px;
    padding: 15px 20px;
`;
const RepoCardWrapper = styled(Box)`
    margin: 0 auto;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
`;
const PaginationWarpper = styled(Box)`
    margin-top: 15px;
`;

const Home = () => {

    const [ user, setUser ] = useState({});
    const [ repos, setRepos ] = useState([]);
    const [ page, setPage ] = useState(1);
    
    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`https://api.github.com/users/Shubratokumar`);
            setUser(data);
        })()
    }, []);

    useEffect(() => {
        (async () =>{
            const { data } = await axios.get(`https://api.github.com/users/Shubratokumar/repos?page=${page}&per_page=10`);
            setRepos(data);
        })()
    }, [page]);

    

    return (
        <Container>
            <ComponentWrapper>
                <UserContainer>
                    <UserDetailsComponent user={user} />
                </UserContainer>
                <ReposContainer>
                    <RepoCardWrapper >
                        {
                            repos?.map((repo) => (
                                <RepoCardCompoment repo={repo} key={repo?.id}/>
                            ))
                        }
                    </RepoCardWrapper>
                    <PaginationWarpper>
                        <PaginationComponent totalPages={10} setPage={setPage}  />
                    </PaginationWarpper>
                </ReposContainer>
            </ComponentWrapper>
        </Container>
    );
};

export default Home;