import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';


export default function SongCard(props) {
  return (
    <Card sx={{ width: "100%", justifyContent: 'center' }}>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom variant="h6">
          Singer: {props.document._source.singer}
        </Typography>
        <Typography variant="h5" component="div">
          Song Name: {props.document._source["song"]}
        </Typography>
        
        
        <Grid container direction='row'>
            <Grid item xs={2}>
                Album
            </Grid>
            <Grid item xs={10}>
            
        {props.document._source.album}
            </Grid>
        </Grid>

        <Grid container direction='row'>
            <Grid item xs={2}>
                lyricist
            </Grid>
            <Grid item xs={10}>
            
        {props.document._source.lyricist}
            </Grid>
        </Grid>

        <Grid container direction='row'>
            <Grid item xs={2}>
                Composer
            </Grid>
            <Grid item xs={10}>
            
        {props.document._source.composer}
            </Grid>
        </Grid>
        <Grid container direction='row'>
            <Grid item xs={2}>
                Metaphor
            </Grid>
            <Grid item xs={10}>
            {props.document._source.metaphor}
            </Grid>
        </Grid>

        <Grid container direction='row'>
            <Grid item xs={2}>
                source domain
            </Grid>
            <Grid item xs={10}>
            {props.document._source['source domain']}
            </Grid>
        </Grid>

        <Grid container direction='row'>
            <Grid item xs={2}>
                target domain
            </Grid>
            <Grid item xs={10}>
            {props.document._source['target domain']}
            </Grid>
        </Grid>

        <Grid container direction='row'>
            <Grid item xs={2}>
                Lyrics
            </Grid>
            <Grid item xs={10}>
                {props.document._source['lyrics']}
                </Grid>
        </Grid>

        <Typography variant="body2">
        </Typography>
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
  );
}