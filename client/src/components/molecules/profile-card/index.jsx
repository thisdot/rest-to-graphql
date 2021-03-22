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
  children,
}) => (
  <Card>
    <Link href={profileUrl} color="textPrimary" underline="none">
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
    </Link>
  </Card>
);

export default ProfileCard;
