import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import me from '../IMG/me.jpg'
import {Img, ProfileHeader} from './Background'



const PersonalImage = () => <ProfileHeader> <Img centered src={me} size='small' rounded /></ProfileHeader>


export default PersonalImage;
