const Comment = (props) => {
  return (
    <>
      <div>
        <p data-cy="comment">{props.comment.message}</p>
      </div>
    </>
  );
};

export default Comment;
