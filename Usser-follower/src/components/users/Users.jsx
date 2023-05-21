import { useState } from "react";

import ellipse from "../img/Ellipse.png";
import {
  MainTitle,
  LogoIcon,
  List,
  BtnFollow,
  ListItem,
  ImgThumb,
  Ellipse,
  UserInfo,
  InfoSection,
  Avatar,
} from "./Users.styled";

function Users () {
  const [userInfo, setUserInfo] = useState();
  const [followedUsersID, setFollowedUsersID] = useState();

  const toggleFollowing = (id) => {
    if (followedUsersID.includes(id)) {
      setFollowedUsersID(followedUsersID.filter((userId) => userId !== id));
    } else {
      setFollowedUsersID([...followedUsersID, id]);
    }

    setUserInfo((prevUserInfo) => {
      return prevUserInfo.map((user) => {
        if (user.id === id) {
          return {
            ...user,
            followers: followedUsersID.includes(id)
              ? user.followers - 1
              : user.followers + 1,
          };
        }
        return user;
      });
    });
  };

  return (
    <>
      <MainTitle> Users Follover </MainTitle>
      <List>
        {userInfo.map(({ id, avatar, tweets, followers }) => {
          return (
            <ListItem key={id}>
              <LogoIcon />
              <div>
                <Ellipse src={ellipse} alt="ellipse" />
                <ImgThumb>
                  <Avatar src={avatar} alt="user" width={50} />
                </ImgThumb>
              </div>
              <InfoSection>
                <UserInfo className="tweets">{tweets} TWEETS </UserInfo>
                <UserInfo className="followers">
                  {followers.toLocaleString("en-us")} FOLLOWERS{" "}
                </UserInfo>

                <BtnFollow
                  onClick={() => toggleFollowing(id)}
                  className={
                    followedUsersID.includes(id) ? "following" : "follow"
                  }
                >
                  {followedUsersID.includes(id) ? "Following" : "Follow"}
                </BtnFollow>
              </InfoSection>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Users;