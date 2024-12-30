import { DeleteIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Actions from "../components/Actions";
import Comment from "../components/Comment";

const PostPage = () => {
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/post1.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {/* {user.username} */} Mark Zuckerberg
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text
            fontSize={"xs"}
            width={36}
            textAlign={"right"}
            color={"gray.light"}
          >
            {/* {formatDistanceToNow(new Date(currentPost.createdAt))} ago */}
          </Text>

          {/* {currentUser?._id === user._id && (
            <DeleteIcon
              size={20}
              cursor={"pointer"}
              onClick={handleDeletePost}
            />
          )} */}
        </Flex>
      </Flex>

      <Text my={3}>{/* {currentPost.text} */} Lets talk about it</Text>

      {/* {currentPost.img && ( */}
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w={"full"} />
      </Box>
      {/* )} */}

      <Flex gap={3} my={3}>
        <Actions
        // post={currentPost}
        />
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comment
        reply={{
          userProfilePic: "/zuck-avatar.png",
          username: "Mark Zuckerberg",
          text: "I am the CEO of Meta Platforms.",
        }}
        lastReply={false}
      />
      <Comment
        reply={{
          userProfilePic: "/zuck-avatar.png",
          username: "Mark Zuckerberg",
          text: "I am the CEO of Meta Platforms.",
        }}
        lastReply={false}
      />
      <Comment
        reply={{
          userProfilePic: "/zuck-avatar.png",
          username: "Mark Zuckerberg",
          text: "I am the CEO of Meta Platforms.",
        }}
        lastReply={true}
      />
      {/* {currentPost.replies.map((reply) => (
        <Comment
          key={reply._id}
          reply={reply}
          lastReply={
            reply._id ===
            currentPost.replies[currentPost.replies.length - 1]._id
          }
        />
      ))} */}
    </>
  );
};

export default PostPage;
