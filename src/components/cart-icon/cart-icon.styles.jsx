import styled from "styled-components"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

export const CartIconContainer = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

export const ShoppingIconStyle = styled(ShoppingIcon)`
      width: 40px;
      height: 40px;
`

export const ItemCount = styled.span`
      position: absolute;
      font-size: 12px;
      font-weight: bold;
      bottom: 8px;
`

// .cart-icon-container {
//     width: 45px;
//     height: 45px;
//     position: relative;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
  
//     .shopping-icon {
//       width: 40px;
//       height: 40px;
//     }
  
//     .item-count {
//       position: absolute;
//       font-size: 12px;
//       font-weight: bold;
//       bottom: 8px;
//     }
//   }
  