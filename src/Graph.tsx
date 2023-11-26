import {Button, ButtonGroup} from '@mui/material';
import Popover from '@mui/material/Popover';
import {og_list} from './js/og_list'
import {gpt_list} from './js/gpt_list'
// import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import * as React from 'react';
import { styled} from '@mui/material/styles';
// import { makeStyles } from '@mui/styles';
//import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
// import Typist from "react-typist";
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {blob} from './js/terms';
import { useState } from 'react';
import Typewriter from 'react-ts-typewriter';


// terms start at 0 
interface TermNumber {
  term: string
  number: number
  entry: string
}

interface TermsTable {
    terms: Array<TermNumber>
}

interface AllTerms {
    termsDict: Map<string, Array<TermNumber>>
}
interface TermNumber {
  kw: string;
  cluster: Array<string>;
  id: String;
  number: number;
}
//@ts-ignore
export const Centered = styled('div')(({theme}) => ({
  centeredElement: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    backgroundColor: 'white',
    padding: theme.spacing(2),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
// const clicked = (e) => { }
// const poem = () =>  {return {<div> <text> a </text> <br /> <text>t b  </text> <br /> </div>} }
//@ts-ignore
export function MyGrid({triggerAnim}) {
console.log(triggerAnim)
var poem1 = `Th cupol of th moon i slo went down.\n That is a tower, I mused in turn, Arc of horizon sail, or some new\n Plain, Pinpoint of poles of peoples' brains.\n And here the body by its floats,\n Two vessels like a mote that did\n Confine the shadow, two Bodies\n Swimming that was my state, I won't\n Be blinded by the windows reeked\n Of thronged towers, lamps lowered\n Within my eye, reaching far\n To cull the sky I gazed upon,\n Draining its milk to ash that wasted\n The moon. `
poem1 = poem1.replaceAll("\n", "     /     ")
  //@ts-ignore
  poem1 = poem1 
  const [term, setTerm] = useState("remember osun")
  const term_data = blob;
  const [idx, setIdx] = useState(0)

  const og_len = og_list.length
  const full_list = og_list.concat(gpt_list) 
  // const unseenDefault = Array.apply(null, Array(max_len)) .map((y, i) => i) // { return i; }); 
  const [ogCount, setOGCount] = useState(0)
  const [seenIdxs, setSeenIdxs] = useState([0])
  // const [unSeenIdxs, setUnSeenIdxs] = useState(unseenDefault)
  const changeIdx = () => {
  var i = 0;
  while (i < 200) {
    var ogRatio = ogCount / og_len
    var n = 0
    if (Math.random() > ogRatio) {
      n = Math.floor(Math.random() * og_len)
    }
    else { n = Math.floor(Math.random() * full_list.length)}
    // var new = Math.floor(Math.random() * unseenIdxs.length)
    if (!seenIdxs.includes(n)) {
      setSeenIdxs(seenIdxs.concat([idx]))
      setIdx(n)
      if (n < og_len) {
        setOGCount(ogCount + 1)
      }
    // setUnSeenIdxs(unSeenIdxs.concat([idx]))
      break
    }
  }
}
const entry = full_list[idx]
  
  //@ts-ignore
  // const s = term_data["remember osun"]['0']['entry']  
  const lines = entry.split('\n') //  "HI THERE BIG BOY\nAndYOU".split('\n')
 // term_data.description.split('\n');
   // <Typewriter text="This is a default text without any extra props" />
  return ( // <Box sx={{ flex: 1}}> </Box> // <div className="centered-container"> // after line: {index !== lines.length - 1 && <br />}

 
 <div className="layout ">
  <h2> {ogCount}     </h2>
  <h2> {idx}     </h2>
      {lines.map((line, index) => (
          <> 
            <span  className="entry"> {line} <br/> </span>
 </>
      ))}
  <Grid container spacing={14}>
    <Grid>
   <ButtonGroup  size="large" aria-label="large button group">
      <Button onClick={changeIdx} color="warning" variant="contained">Man         </Button>
  </ButtonGroup>
 </Grid>
 <Grid>
   <ButtonGroup  size="large" aria-label="large button group">
      <Button onClick={changeIdx} color="error" variant="contained">           Machine</Button>
  </ButtonGroup>
</Grid>
</Grid>
  <Box sx={{ borderSpacing: 20, display: 'flex', '& > *': { m: 1, } }} >
 </Box>
    </div>
  );
}

// Here's another way to force a type-cast even between incompatible types and interfaces where TS compiler normally complains:

interface PropTypes {
  popped: String
  unpopped: number
}
export function forceCast<T>(input: any): T {
  // ... do runtime checks here
  // @ts-ignore <-- forces TS compiler to compile this as-is
  return input;
}
export const Face = () => {
 const terms = Object.keys(blob)
 console.log(terms.length)
 // console.log(terms)
 const [termIdx, setTermIdx] = useState(0)
 const [termChoices, setTermChoices] = useState([])
 const [termsSeen, setTermsSeen] = useState([])
 const [term, setTerm] = useState([])
 const randomTerm = () => {
    const idx = Math.floor((Math.random() -.01) * terms.length)
    // console.log("terms[idx]", idx, terms[idx])
    //@ts-ignore
    var candidates = blob[terms[idx]]
    //console.log("candidates", terms[idx], candidates)
    console.log("kw", terms[idx])
    console.log('len',  candidates.length)
    // console.log("what is T?", t)
    // const term = forceCast<TermNumber>(t)
    // const candidates = term.cluster
    var i = 0
    var c = null
    while (i <= candidates.length) {
    //@ts-ignore
      c = candidates[i % candidates.length]
      console.log(c)
    //@ts-ignore
      if (termsSeen.includes(c.id)) { i++; }
      else { break }
    }
    if (!(i < candidates.length)) {
    //@ts-ignore
    setTermsSeen(termsSeen.concat([c.id]))
    }
    return c

 }
 // const gridTerms0 = [0, 1, 2, 3, 4, 5].map(_ => randomTerm()) // as Array<TermNumber>
 const gridTerms0 = [].map(_ => randomTerm()) // as Array<TermNumber>
 const gridTerms = forceCast<Array<TermNumber>>(gridTerms0)

 return (
   //<Demo popped="hi" unpopped="ho" />
   // <Box sx={{  height: '100vh' ,   display: 'flex', alignItems: 'center', justifyContent: 'center', justifySelf: 'center' }}>
     // <Grid sx={{ justifySelf: 'center', background :'transparent'}} container spacing={1} columns={4} >
    <Box sx={{ flexGrow: 1}}>
      <>
      <Button variant="outlined">Man</Button>
      <Button variant="outlined">Machine</Button>
</>
{/* 
     <Grid container spacing={1} columns={4} >
      <Grid xs={1}>
         <Item>variable width content</Item>
       </Grid>
       <Grid xs={1}>
         <Item onClick={() => {}}/ >
       </Grid>
       <Grid xs>
         <Item>xs</Item>
       </Grid>
       {gridTerms.map((t, i) => {
       return (<Grid key={i} xs={1}> <Item key={i}> {t.kw}<sub>{t.number}</sub> </Item> </Grid>)
})}
     </Grid>
*/}
  </Box> 

 ); } 
