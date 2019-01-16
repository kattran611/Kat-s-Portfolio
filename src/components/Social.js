import React from 'react'
import { Icon } from 'semantic-ui-react'

const SocialIcon = () => (
  <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
	<a href = "https://github.com/kattran611"  centered target="_blank" rel="noopener noreferrer">
		<Icon name = "github"
			size = 'huge'
			link
		/>
	</a>
	<a href = "https://www.facebook.com/kat.c.tran" centered target="_blank" rel="noopener noreferrer">
		<Icon name = "facebook"
			size = 'huge'
			link
		/>
	</a>
	<a href= "https://www.linkedin.com/in/katrinactran/" centered target="_blank" rel="noopener noreferrer">
		<Icon name = "linkedin"
			size = "huge"
			link
		/>
	</a>
	<a href= "https://www.instagram.com/_kattran/?hl=en" centered target="_blank" rel="noopener noreferrer">
		<Icon name = "instagram"
			size = "huge"
			link
		/>
	</a>
</div>
)
export default SocialIcon;
