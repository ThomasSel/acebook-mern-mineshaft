const Comment = (props) => {
  return (
    <>
      <p data-cy="comment">{props.comment.message}</p>
    </>
  );
};

export default Comment;
