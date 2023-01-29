import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import * as Styles from "@root/Message/style/message";
import { SystemMessageIconSize } from "@root/Message/style/message";
import { APIMessage } from "discord-api-types/v10";

interface GuildMemberJoinProps {
  createdAt: APIMessage["timestamp"];
  author: APIMessage["author"];
}

function joinMessage(
  createdAt: APIMessage["timestamp"],
  author: APIMessage["author"]
): JSX.Element {
  const member = <MessageAuthor author={author} onlyShowUsername={true} />;

  const messages = [
    <>{member} joined the party.</>,
    <>{member} is here.</>,
    <>Welcome, {member}. We hope you brought pizza.</>,
    <>A wild {member} appeared.</>,
    <>{member} just landed.</>,
    <>{member} just slid into the server.</>,
    <>{member} just showed up!</>,
    <>Welcome {member}. Say hi!</>,
    <>{member} hopped into the server.</>,
    <>Everyone welcome {member}!</>,
    <>Glad you're here, {member}.</>,
    <>Good to see you, {member}.</>,
    <>Yay you made it, {member}!</>,
  ];

  return messages[Number(new Date(createdAt)) % messages.length];
}

function GuildMemberJoin(props: GuildMemberJoinProps) {
  return (
    <Styles.SystemMessage>
      <Styles.SystemMessageIcon
        width={SystemMessageIconSize}
        height={SystemMessageIconSize}
        svg="IconAdd"
      />
      <Styles.SystemMessageContent>
        {joinMessage(props.createdAt, props.author)}
        <LargeTimestamp timestamp={props.createdAt} />
      </Styles.SystemMessageContent>
    </Styles.SystemMessage>
  );
}

export default GuildMemberJoin;
