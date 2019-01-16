import styled, { css } from 'styled-components'
import Background from '../IMG/design.png'
import { Item } from 'semantic-ui-react'


const sizes = {
  giant: 1824,
  desktop: 1117,
  tablet: 768,
  phone: 376,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  // const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

const cardShadow = "inset 3px 4px 5px #000, 5px 6px 7px rgba(0, 0, 0, .3), inset 1px 2px 3px #fff"
const cardShadow2 = "inset 3px 4px 5px rgba(45, 45, 45, .2)"


export const WelcomeBackground = styled.div`
  background-image: url(${Background});
  height: auto
  overflow: visible
  display: flex
  justify-content: center
  align-items: center`

export const Img = styled.img`
	margin: 80px auto 20px auto
	width: 300px;
	height: 300px;
	border-radius: 50%
	object-fit: cover;
	border: 6px solid #00f9ff;
	box-shadow: ${cardShadow}
	${media.tablet`
	    width: 300px !important;
		 height: 300px !important;
	  `
	}
`

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 10px solid ;
	box-shadow: ${cardShadow}

`

export const ProjectImage = styled(Item.Image)`
	border: 5px solid #00f9ff;
`
