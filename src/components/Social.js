import React from 'react'
import { Icon } from 'semantic-ui-react'

const SocialIcon = () => (
  <span>
	<a href = "https://github.com/kattran611" target="_blank" rel="noopener noreferrer">
		<Icon name = "github"
			size = 'huge'
			link
		/>
	</a>
	<a href = "https://www.facebook.com/kat.c.tran" target="_blank" rel="noopener noreferrer">
		<Icon name = "facebook"
			size = 'huge'
			link
		/>
	</a>
	<a href= "https://www.linkedin.com/in/katrinactran/" target="_blank" rel="noopener noreferrer">
		<Icon name = "linkedin"
			size = "huge"
			link
		/>
	</a>
	<a href= "https://www.instagram.com/_kattran/?hl=en" target="_blank" rel="noopener noreferrer">
		<Icon name = "instagram"
			size = "huge"
			link
		/>
	</a>
 </span>
)
export default SocialIcon;
