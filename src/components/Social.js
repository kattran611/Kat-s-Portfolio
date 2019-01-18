import React from 'react'
import { Icon } from 'semantic-ui-react'

const SocialIcon = () => (
  <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>

	<a href="mailto:kat.c.tran@gmail.com" target="_blank" rel="noopener noreferrer">
		<Icon name = "mail"
			size = "huge"
			link
		/>
	</a>
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
</div>
)
export default SocialIcon;
