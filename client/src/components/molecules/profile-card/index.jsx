import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '../../atoms';

const ProfileCard = ({
  profileImage,
  profileName,
  profileUrl,
  onClick,
  children,
}) => (
  <Card onClick={onClick}>
    {profileImage && (
      <CardMedia
        image={profileImage}
        title={profileName}
      />
    )}
    <CardContent>
      <Typography type="h4">
        {profileName}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

export default ProfileCard;
