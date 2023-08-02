// ReusableCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HeroReusableIntroCard = ({ title, content, icoName}) => {
  return (
    <Card sx={{ maxWidth: 345, border: 'none', boxShadow: 'none' }}>
      <CardActionArea sx={{height:300}}>
        <div className='ml-3 mt-3'>
          {icoName}
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HeroReusableIntroCard;
