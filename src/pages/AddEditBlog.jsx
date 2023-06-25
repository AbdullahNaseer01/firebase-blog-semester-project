import React, { useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { db, storage } from "../firebase";
import { useNavigate, useParams } from "react-router-dom";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  tags: [],
  trending: "no",
  category: "",
  description: "",
  comments: [],
  likes: [],
};

const categoryOption = [
  "Fashion",
  "Technology",
  "Food",
  "Politics",
  "Sports",
  "Business",
];

const AddEditBlog = ({ user, setActive }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, tags, category, trending, description } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image uploaded to Firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
    setActive(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  const handleTrending = (e) => {
    setForm({ ...form, trending: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && tags && title && description && trending) {
      if (!id) {
        try {
          await addDoc(collection(db, "blogs"), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog created successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "blogs", id), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Blog updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }

    navigate("/");
  };

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <div className="text-center text-3xl font-bold py-4">
            {id ? "Update Blog" : "Create Blog"}
          </div>
          <div className="flex h-full justify-center items-center">
            <div className="w-full max-w-md">
              <form
                className="bg-white rounded-lg shadow-lg px-8 pt-6 pb-4 mb-4"
                onSubmit={handleSubmit}
              >
                <div className="mb-4">
                  <input
                    type="text"
                    className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-4">
                  <div className="flex flex-wrap">
                    {tags.map((tag, index) => (
                      <div key={index} className="tag">
                        {tag}
                        <span
                          className="delete-icon"
                          onClick={() => {
                            const newTags = [...tags];
                            newTags.splice(index, 1);
                            setForm({ ...form, tags: newTags });
                          }}
                        >
                          &#x2715;
                        </span>
                      </div>
                    ))}
                  </div>
                  <input
                    type="text"
                    className="tag-input"
                    placeholder="Add a tag"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        const newTags = [...tags, e.target.value.trim()];
                        setForm({ ...form, tags: newTags });
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
                <div className="mb-4">
                  <p className="text-gray-700">Is it a trending blog?</p>
                  <div className="flex items-center">
                    <label className="mr-2">
                      <input
                        type="radio"
                        className="mr-1"
                        value="yes"
                        name="radioOption"
                        checked={trending === "yes"}
                        onChange={handleTrending}
                      />
                      Yes
                    </label>
                    <label>
                      <input
                        type="radio"
                        className="mr-1"
                        value="no"
                        name="radioOption"
                        checked={trending === "no"}
                        onChange={handleTrending}
                      />
                      No
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <select
                    value={category}
                    onChange={onCategoryChange}
                    className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                  >
                    <option>Please select a category</option>
                    {categoryOption.map((option, index) => (
                      <option value={option || ""} key={index}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <Editor
                    apiKey="4q3rvg7uaidu2b1zrughb11xna49no81n456ojnxojwp4r2j"
                    value={description}
                    init={{
                      height: 300,
                      menubar: false,
                      plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount",
                      ],
                      toolbar:
                        "undo redo | formatselect | bold italic backcolor | \
                        alignleft aligncenter alignright alignjustify | \
                        bullist numlist outdent indent | removeformat | help",
                    }}
                    onEditorChange={(content) =>
                      setForm({ ...form, description: content })
                    }
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="file"
                    className="w-full py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>
                <div className="text-center">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={progress !== null && progress < 100}
                  >
                    {id ? "Update" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEditBlog;
