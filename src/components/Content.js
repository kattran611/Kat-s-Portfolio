import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
import cabo from '../IMG/cabo.png'
import {Img, ProfileHeader} from './Background'



const PersonalImage = () => <ProfileHeader> <Img centered src={cabo} size='small' rounded /></ProfileHeader>


export default PersonalImage;
