import styled from '@emotion/styled';
import getRandomHexColor from 'utilities/getRandomHexColor';

export const StatTab = styled.section`
padding-top: 30px;
margin-bottom: 30px;
width: 300px;
text-align: center;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
   border-radius: 0px 0px 4px 4px;
`

export const StatList=styled.ul`
display:flex;
justify-content:center;
padding:10px 10px;
background-color:#ededed;
margin-top:20px
`

export const StatItem=styled.li`
display: flex;
flex-direction: column;
font-weight:700;
padding-bottom:10px;
padding-right:10px;
width:30px;
height:30px;
background-color:${props=>getRandomHexColor()};
`