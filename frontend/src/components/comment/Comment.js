const Comment = (props) => {
  return (
    <div className="h-12 border-t-2 flex items-center">
      <p data-cy="comment" className="pl-28">
        {props.comment.message}
      </p>
    </div>
  );
};

export default Comment;
