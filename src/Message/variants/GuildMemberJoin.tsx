import { Message_author } from "@types";
import { IconsBase, SystemMessageContentBase } from "@root/Message/elements";
import MessageAuthor from "@root/Message/MessageAuthor";
import LargeTimestamp from "@root/Message/LargeTimestamp";
import React from "react";
import { SystemMessageBase } from "@root/Message/style/message";

interface GuildMemberJoinProps {
  createdAt: number;
  author: Message_author;
}

function joinMessage(createdAt: number, author: Message_author): JSX.Element {
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
    <SystemMessageBase>
      <IconsBase.Add />
      <SystemMessageContentBase>
        {joinMessage(props.createdAt, props.author)}
        <LargeTimestamp timestamp={props.createdAt} />
      </SystemMessageContentBase>
    </SystemMessageBase>
  );
}

export default GuildMemberJoin;
