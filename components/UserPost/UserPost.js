import React from 'react';
import {View,Image,Text} from 'react-native';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

const UserPost = (props) => {
    return (
    <View>
        <View>
            <View>
              <Image source={require('../../assets/images/default-profile.png')} />
                    <Text>
                         {props.firstName} {props.lastName}
                     </Text>
                    {props.location&&<Text>{props.location}</Text>}
            </View>
            <FontAwesomeIcon icon={faEllipsisH} />
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