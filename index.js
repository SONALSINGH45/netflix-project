import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import Sdata from "./Sdata";      

// function Card(props){
//   return(
    
//     <>
//   <div className='cards'>
//     <div className='card'> 
//       <img src={props.imgsrc} alt="my pic" className= "cards__img"     />
//       <div className='card__info'>    
//          <span className= "card__category">   A Netflix orignal series    </span>
//          <h3 className= "card__title"> {props.sname}</h3>
//          <a href={props.link} target="_blank">

//          <button> watch now</button>
//          </a>

//     </div>
//     </div>
//   </div>

  
//   </>
//   )
// }

ReactDOM.render(
  <>
  <h1> list of netflix series</h1>
  <Card
  imgscr="https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTy2fZR_5D9uj6dv2mYfVuDGKss7C0S3EnGHZ2t_P4PS763HXggS3Xuy35Yyu-nTdf0lVQFcFpfQMAXWpknz2P-ZAD6OhuqaFNY.jpg?r=b2a"
  title="A netflix orignal series"
  sname="Vikings"
  link="https://www.netflix.com/in/title/70301870"

/>
<Card 
imgscr="https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcFEn_zKgJRcPRjzj-Ju7Hy4uEaCSJ2moMilzUCM-QD5mQ2rUv0Llxd0urCx7zlYn8Qj8yXmtXilguADxDPzeKYEll6JAwHRQD0t2qV6IRyeaKUqC6rsko7jvMRecLY2F88PIRzjyfWvVy-9YMy-vpG13IXw1t5zd39FqA.jpg?r=f09"
title="A netflix orignal series"
sname="stranger things"
link="https://www.netflix.com/in/title/80057281"
/>
<Card
imgscr="https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQMn5N8_PLNXZwUSWBHBz13xESYG9ylpXFhn6dRuMTzKltEnAOW3s3fTebyvZI_scREIV8KW5UBq9mhQ5l9QJLSNSKwKmhrk_s3hg9DwJ8QBLmpCJrnnafFXjtb36fmahO4N.jpg?r=eb7"
title="A netflix orignal series"
sname="She"
link="https://www.netflix.com/in/title/81183494"
/>
<Card
imgscr="https://occ-0-4344-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABY0V35KZlRAMfDi7_pe3EiHpisg1yr4AUDwPg4tqDvqw8ftfLVk4sjB7-h_w4XoiTN0xMHFY8hNXKeeI9s5_6zexaabaJkIyEGHtZ5yGBExL2F55n73ArzQ7cvYigMnofvys.jpg?r=c3c"
title="A netflix orignal series"
sname="The witcher"
link="https://www.netflix.com/in/browse/genre/83"
/>
  </>,
  document.getElementById('root')
);