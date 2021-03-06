import {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { solventes_alifaticos } from './Products'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import '../Styles.css'
import {products} from "../Products"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Alisol_100() {
  const classes = useStyles();
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch({solventes_alifaticos}
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={11} justify='flex-start' className='gitem'>
        <Paper className='papergrid'>
                            <Card className='crdgrid' variant='elevation'>
                                <CardActionArea>
                                    <CardMedia
                                        className='gridimg'
                                        component='img'
                                        alt={solventes_alifaticos.name}
                                        image={require('./pimg/'+ `${solventes_alifaticos.image}`)}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography align='center' variant='h5' component='h2'>
                                        {solventes_alifaticos.name}
                                    </Typography>
                                    <Typography variant='body2' align='center' color='textSecondary' component='p'>
                                        {solventes_alifaticos.presentation}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Paper>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={11} justify='flex-start' className='gitem'>
          <Paper className={classes.paper}>
            <Typography variant="h2" color="initial">Alisol 100</Typography>
            <Typography variant="body1" color="initial">Fabricacion de pinturas, productos de la agricultura, y disolventes de resinas. 
            Tambien se utliza en la formulacion de productos veterinarios y desengrasantes de piezas metalicas, ademas como componentes de 
            barnices, tintas y lacas y en la formulacion de gomas y adhesivos.
            </Typography>

          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}