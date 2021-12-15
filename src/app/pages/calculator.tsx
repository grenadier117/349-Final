import { Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const numbers = ['c', '', '', '/', 1,2,3 ,'x',4,5,6, '+',7,9,0, '-'];
const controls = ['+', '-', '/', 'x']

const useStyles = makeStyles({
  numberContainer: {
    // width: '200px',
    // height: '400px'
    backgroundColor: 'white',
    textAlign: 'right',
  },
  numberCell: {
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    height: '200px',
    justifyContent: 'center',
    border: '1px solid lightgray',
    cursor: 'pointer',
  },
  box: {
    height: '100%',
    width: '100%',
  },
  output: {
    padding: '24px',
  },
})

export const Calculator = () => {
  const [output, setOutput] = React.useState<any>(0);
  const [inputOne, setInputOne] = React.useState<number | undefined>(undefined);
  const [inputTwo, setInputTwo] = React.useState<number | undefined>(undefined);
  const [control, setControl] = React.useState<string | undefined>(undefined);
  const classes = useStyles();

  const onClick = item => event => {
    if (item === 'c') {
      setInputOne(undefined)
      setControl(undefined);
      setInputTwo(undefined)
      setOutput(0);
      return;
    }
    console.info('@JAKe - ', item);
    if (inputOne === undefined) {
      // if (isControl(item)) return;
      setInputOne(item);
      setOutput(item);
    } else if (inputOne !== undefined && isControl(item)) {
      setControl(item);
      setOutput(`${inputOne} ${item}`)
    } else if (inputOne) {
      setInputTwo(item);
      let val: number | undefined;
      switch (control) {
        case '/':
          val = inputOne / parseInt(item);
          setInputTwo(val);
          setOutput(val);
          break;
        case '+':
          val = inputOne + parseInt(item);
          setInputTwo(val);
          setOutput(val);
          break;
        case '-':
          val = inputOne - parseInt(item);
          setInputTwo(val);
          setOutput(val);
          break;
        case 'x':
          val = inputOne * parseInt(item);
          setInputTwo(val);
          setOutput(val);
          break;
        default: break;
      }
      setInputOne(val);
      setControl(undefined)
      setInputTwo(undefined);
    }
  }

  const isControl = value => value === '/' || value === '+' || value === '-' || value === 'x';
  
  return <Grid container className={classes.numberContainer}>
    <Grid item xs={12} className={classes.output}>
      <Typography variant="h4">
        {output}
      </Typography>
    </Grid>
    {numbers.map(item => (
      <Grid item xs={3} onClick={onClick(item)} className={classes.numberCell}>
        <Box classes={classes.box}>
          <Typography variant={'h4'}>
            {`${item}`}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
}