import styled from "styled-components"

import {Link} from "react-router-dom"

export const NavigationContainer = styled.nav`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin: 25px auto 25px;
`

export const LogoContainer = styled(Link)`
      height: 100%;
      width: 70px;
      padding: 5px;
`
export const NavLinksContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
`

export const NavLink = styled(Link)`
        padding: 10px 13px;
        font-size: 24px;
        cursor: pointer;
` 

// nav {

  
//     svg {
//       height: 100%;
//       width: 70px;
//       padding: 5px;
//     }
  
//     .navLinksContainer {
//       width: 50%;
//       height: 100%;
//       display: flex;
//       align-items: center;
//       justify-content: flex-end;
  
//       a {
//         padding: 10px 15px;
//         font-size: 24px;
//         cursor: pointer;
//       }
//     }
//   }
  