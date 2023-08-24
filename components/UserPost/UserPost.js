import React from 'react';
import {View,Image,Text} from 'react-native';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import style from './style';
import { inlineStyles } from 'react-native-svg';

const UserPost = (props) => {
    return (
    <View>
        <View style={style.userInformationContainer}>
            <View style={style.userInformation}>
                <View style={style.image}>
                    <Image source={require('../../assets/images/default-profile.png')} />
              </View>
                 <View style={style.userPostInformation}>
                    <Text  style={style.name}>
                         {props.firstName} {props.lastName}
                     </Text>
                     {props.location && (
              <Text style={style.location}>{props.location}</Text>
            )}
                   </View>
            </View>
            <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={22} />
        </View>
        <Image source={require('../../assets/images/default_post.png')}/>
        <View>
            <View>
                <FontAwesomeIcon icon={faHeart} />
                <Text>{props.likes}</Text>
            </View>

            <View>
                <FontAwesomeIcon icon={faComment} />
                <Text>{props.likes}</Text>
            </View>

            <View>
                <FontAwesomeIcon icon={faBookmark} />
                <Text>{props.likes}</Text>
            </View>
        </View>
    </View>
    )
}

UserPost.prototype = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    bookmarks:PropTypes.number.isRequired,
    location:PropTypes.string,
}
export default UserPost;