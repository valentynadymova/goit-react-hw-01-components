import styled from '@emotion/styled'

export const ContainerProfile = styled.div`
 padding-top: 30px;
 margin-bottom: 30px;
 width: 200px;
 text-align: center;
box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%), 0px 2px 1px rgb(0 0 0 / 20%);
    border-radius: 0px 0px 4px 4px;
    background-color: lightgrey;
`

export const ProfileAvatar = styled.img`
border-radius: 10px;
width:150px;
height:150px;
display:block;
margin:0 auto;
`

export const ProfileName=styled.p`
font-weight: 700;
padding:10px;
`
export const ProfileTag=styled.p`
padding:7px;
font-style:italic;
`
export const ProfileStats=styled.ul`
list-style:none;
display:flex;
justify-content:space-between;
padding:10px 10px;
background-color:#ededed;
margin-top:20px;
`
export const ProfileLi=styled.li`
display: flex;
flex-direction: column;
font-weight:700;
padding-right:10px;
`