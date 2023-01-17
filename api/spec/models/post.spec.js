var mongoose = require("mongoose");

require("../mongodb_helper");
var Post = require("../../models/post");

describe("Post model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.posts.drop(() => {
      done();
    });
  });

  it("has a message", () => {
    var post = new Post({ message: "some message" });
    expect(post.message).toEqual("some message");
  });

  it("can list all posts", (done) => {
    Post.find((err, posts) => {
      expect(err).toBeNull();
      expect(posts).toEqual([]);
      done();
    });
  });

  it("can save a post", (done) => {
    var post = new Post({ message: "some message" });

    post.save((err) => {
      expect(err).toBeNull();

      Post.find((err, posts) => {
        expect(err).toBeNull();

        expect(posts[0]).toMatchObject({ message: "some message" });
        done();
      });
    });
  });

  describe("Comments Schema", () => {
    it("Post has no comments", () => {
      var post = new Post({ message: "some message" });

      expect(post.comments.length).toEqual(0);
    });

    it("comment has a message", () => {
      var post = new Post({ message: "some message" });
      post.comments.push({ message: "this is comment" });
      expect(post.comments[0].message).toEqual("this is comment");
    });

    it("can save a post with a comment", (done) => {
      var post = new Post({ message: "some message" });
      post.comments.push({ message: "this is comment" });

      post.save((err) => {
        expect(err).toBeNull();

        Post.find((err, posts) => {
          expect(err).toBeNull();

          expect(posts[0].comments[0]).toMatchObject({
            message: "this is comment",
          });
          done();
        });
      });
    });

    it("can add a comment to a saved post", async () => {
      var post = new Post({ message: "some message" });

      await post.save();

      const savedPost = await Post.findById(post._id);
      savedPost.comments.push({ message: "this is comment" });
      await savedPost.save();

      const posts = await Post.find();
      expect(posts[0].comments[0]).toMatchObject({
        message: "this is comment",
      });
    });
  });
});
