import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const RepoCardCompoment = ({repo}) => {
    const { name, language, html_url } = repo;
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {language}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {html_url}
                    </Typography>
                </CardContent>
            </Card>
            
        </div>
    );
};

export default RepoCardCompoment;