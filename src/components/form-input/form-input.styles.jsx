import styled from "styled-components"


const shrinkLabel = `
  top: -14px;
  font-size: 12px;
  color: $main-color;
`

const main_color = "grey"
const sub_color = "black"

export const FormSingleContainer = styled.div`
  position: relative;
  margin: 45px 0;
`

export const FormInputLabel = styled.label`
    color: ${sub_color};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel};
    }
  }
`

export const FormInputField = styled.input`
    background: none;
    background-color: white;
    color: ${sub_color};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${sub_color};
    margin: 25px 0;

        &:focus {
              outline: none;
            }
        
            &:focus ~ ${FormInputLabel} {
             ${shrinkLabel};
            }
          }

    `

// $sub-color: grey;
// $main-color: black;

// @mixin shrinkLabel {
//   top: -14px;
//   font-size: 12px;
//   color: $main-color;
// }

// .group {
//   position: relative;
//   margin: 45px 0;

//   .form-input {
//     background: none;
//     background-color: white;
//     color: $sub-color;
//     font-size: 18px;
//     padding: 10px 10px 10px 5px;
//     display: block;
//     width: 100%;
//     border: none;
//     border-radius: 0;
//     border-bottom: 1px solid $sub-color;
//     margin: 25px 0;

//     &:focus {
//       outline: none;
//     }

//     &:focus ~ .form-input-label {
//       @include shrinkLabel();
//     }
//   }

//   input[type='password'] {
//     letter-spacing: 0.3em;
//   }

//   .form-input-label {
//     color: $sub-color;
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;

//     &.shrink {
//       @include shrinkLabel();
//     }
//   }
// }