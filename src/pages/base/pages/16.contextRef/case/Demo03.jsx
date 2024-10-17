import { useRef, useImperativeHandle } from 'react';
import Button from 'components/Button/index.jsx'
import Input from './Input.jsx'

export default function Demo03() {
  const postRef = useRef(null);

  function handleClick() {
    postRef.current.scrollAndFocusAddComment();
  }

  return (
    <>
      <Button onClick={handleClick} primary>Write a comment</Button>
      <Post ref={postRef} />
    </>
  );
}

const Post = ({ref}) => {
  const commentsRef = useRef(null);
  const addCommentRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollAndFocusAddComment() {
        commentsRef.current.scrollToBottom();
        addCommentRef.current.focus();
      }
    };
  }, []);

  return (
    <>
      <article>
        <p>Welcome to my Blog!</p>
      </article>
      <CommentList ref={commentsRef} />
      <AddComment ref={addCommentRef} />
    </>
  );
}


const CommentList = ({ref}) => {
  const divRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      scrollToBottom() {
        const node = divRef.current;
        node.scrollTop = node.scrollHeight;
      }
    };
  }, []);

  let comments = [];
  for (let i = 0; i < 50; i++) {
    comments.push(<p key={i}>Comment #{i}</p>);
  }

  return (
    <div className="border p-4 rounded h-32 overflow-y-auto" ref={divRef}>
      {comments}
    </div>
  );
};


function AddComment(props) {
  return (
    <Input placeholder="Add comment..." ref={props.ref} className="mt-4" />
  )
}
