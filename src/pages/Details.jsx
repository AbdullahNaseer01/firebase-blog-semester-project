import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  Timestamp,
  updateDoc,
  orderBy,
  where,
} from "firebase/firestore";
import { isEmpty } from "lodash";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CommentBox from "../components/CommentBox";
import Like from "../components/Like";
import FeatureBlogs from "../components/FeatureBlogs";
import RelatedBlog from "../components/RelatedBlog";
import Tags from "../components/Tags";
import UserComments from "../components/UserComments";
import { db } from "../firebase";
import Spinner from "../components/Spinner";

const Detail = ({ user }) => {
  const userId = user?.uid;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [comments, setComments] = useState([]);
  let [likes, setLikes] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const getRecentBlogs = async () => {
      const blogRef = collection(db, "blogs");
      const recentBlogs = query(
        blogRef,
        orderBy("timestamp", "desc"),
        limit(5)
      );
      const docSnapshot = await getDocs(recentBlogs);
      setBlogs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };

    getRecentBlogs();
  }, []);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  const getBlogDetail = async () => {
    setLoading(true);
    const blogRef = collection(db, "blogs");
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    const blogs = await getDocs(blogRef);
    let tags = [];
    blogs.docs.map((doc) => tags.push(...doc.get("tags")));
    let uniqueTags = [...new Set(tags)];
    setTags(uniqueTags);
    setBlog(blogDetail.data());
    if (blogDetail.data().tags && blogDetail.data().tags.length > 0) {
      const relatedBlogsQuery = query(
        blogRef,
        where("tags", "array-contains-any", blogDetail.data().tags),
        limit(3)
      );
      setComments(
        blogDetail.data().comments ? blogDetail.data().comments : []
      );
      setLikes(blogDetail.data().likes ? blogDetail.data().likes : []);
      const relatedBlogSnapshot = await getDocs(relatedBlogsQuery);
      const relatedBlogs = [];
      relatedBlogSnapshot.forEach((doc) => {
        relatedBlogs.push({ id: doc.id, ...doc.data() });
      });
      setRelatedBlogs(relatedBlogs);
    } else {
      setComments([]);
      setLikes([]);
      setRelatedBlogs([]);
    }
    setLoading(false);
  };

  const handleComment = async (e) => {
    e.preventDefault();
    comments.push({
      createdAt: Timestamp.fromDate(new Date()),
      userId,
      name: user?.displayName,
      body: userComment,
    });
    toast.success("Comment posted successfully");
    await updateDoc(doc(db, "blogs", id), {
      ...blog,
      comments,
      timestamp: serverTimestamp(),
    });
    setComments(comments);
    setUserComment("");
  };

  const handleLike = async () => {
    if (userId) {
      if (blog?.likes) {
        const index = likes.findIndex((id) => id === userId);
        if (index === -1) {
          likes.push(userId);
          setLikes([...new Set(likes)]);
        } else {
          likes = likes.filter((id) => id !== userId);
          setLikes(likes);
        }
      }
      await updateDoc(doc(db, "blogs", id), {
        ...blog,
        likes,
        timestamp: serverTimestamp(),
      });
    }
  };

  return (
    <div className="single">
      <div
        className="blog-title-box"
        // style={{ backgroundImage: `url('${blog?.imgUrl}')` }}
      >
        <img className=" md:w-1/2 mx-auto" src={blog?.imgUrl} alt="" />
        <div className="overlay"></div>
        <div className="container">
          <div className="blog-title">
            <span>{blog?.timestamp.toDate().toDateString()}</span>
            <h2>{blog?.title}</h2>
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-8">
            <div className="meta-info">
              By <span className="author">{blog?.author}</span> -{" "}
              {blog?.timestamp.toDate().toDateString()}
              <Like handleLike={handleLike} likes={likes} userId={userId} />
            </div>
            <p>{blog?.description}</p>
            <div>
              <Tags tags={blog?.tags} />
            </div>
            <div className="custombox">
              <div className="scroll">
                <h4 className="small-title">{comments?.length} Comment</h4>
                {isEmpty(comments) ? (
                  <UserComments
                    msg="No comments yet posted on this blog. Be the first to comment."
                  />
                ) : (
                  <>
                    {comments?.map((comment, index) => (
                      <UserComments key={index} {...comment} />
                    ))}
                  </>
                )}
              </div>
            </div>
            <CommentBox
              userId={userId}
              userComment={userComment}
              setUserComment={setUserComment}
              handleComment={handleComment}
            />
          </div>
          <div className="col-md-4">
            <div className="blog-heading py-2 mb-4">Tags</div>
            <Tags tags={tags} />
            <FeatureBlogs title="Recent Blogs" blogs={blogs} />
          </div>
        </div>
      </div>
      <RelatedBlog id={id} blogs={relatedBlogs} />
    </div>
  );
};

export default Detail;
