import React from 'react';
import Card from './Card';

function ProfileCard(props) {
  return (
    <Card
      title = "Goni Kim"
      backgroundColor = "#dee7ff"
    >
      <p>안녕하세요. 고니에요</p>
      <p>리액트 개발중</p>

    </Card>
  );
}

export default ProfileCard;