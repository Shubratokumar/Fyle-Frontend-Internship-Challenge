import React from 'react';
import { Link, List, ListItem, ListItemText, Typography, styled } from '@mui/material';
import  InsertLinkIcon  from '@mui/icons-material/InsertLink';


const CustomLink = styled(Link)`
    padding-left: 5px;
`;
const ProgrammingLanguages = styled(Typography)`
    font-size: 18px;
    font-weight: 700;
    padding: 5px;
    border-radius: 5px;
    background-color: #428bca;
    color: white;
`;
const RepoCardCompoment = ({repo}) => {
    const { name, language, description, html_url } = repo;
    return (
        <>
            <List sx={{ 
                    width: '100%', 
                    maxWidth: 360, 
                    bgcolor: 'background.paper', 
                    border: '1px solid rgb(169, 47, 250)', 
                    borderRadius: '10px' 
                }}>
                <ListItem alignItems="flex-start">
                    <ListItemText
                    primary={ 
                        <Typography
                            sx={{ display: 'block' }}
                            component="span"
                            variant="h5"
                            color="text.primary"
                            gutterBottom
                        >
                            {name}
                        </Typography> 
                    }
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'block' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                gutterBottom
                                >
                                    {description === null ? "No description available" : description }
                            </Typography>
                            <ProgrammingLanguages                            
                                component="span"
                                gutterBottom
                            >
                                {language}
                            </ProgrammingLanguages>
                            <Typography
                                sx={{ display: 'flex' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                                gutterBottom
                                >
                                    <InsertLinkIcon/> 
                                    <CustomLink href={html_url} underline="none">
                                        {html_url}
                                    </CustomLink>
                            </Typography>                            
                        </>
                    }
                    />       
                </ListItem>        
            </List>
        </>
    );
};

export default RepoCardCompoment;