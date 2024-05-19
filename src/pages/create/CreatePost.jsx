import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage';
import { auth, db, storage } from '../../firebase';
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./createpost.css";

function CreatePost({ isAuth }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [uploadMethod, setUploadMethod] = useState("file");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const postCollectionRef = collection(db, "posts");

  const validateForm = () => {
    if (!title && !body && !category && !image) {
      setError("Type in your post details first");
      return false;
    }
    if (!title) {
      setError("Title cannot be empty");
      return false;
    }
    if (!body) {
      setError("Post description cannot be empty");
      return false;
    }
    if (!category) {
      setError("Category must be selected");
      return false;
    }
    if (!image) {
      setError("An image must be uploaded or linked");
      return false;
    }
    setError("");
    return true;
  };

  const createPost = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      let imageURL = null;
      if (uploadMethod === "file" && image) {
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageURL = await getDownloadURL(storageRef);
      } else if (uploadMethod === "link") {
        imageURL = image;
      }

      await addDoc(postCollectionRef, {
        title,
        body,
        imageURL,
        author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        category,
        timestamp: new Date()
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      // You can add additional error handling here if needed
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [isAuth, navigate]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className='create-post-page'>
      <div className="create-post-container">
        <h1 className="create-post-title">Create Post</h1>
        {error && <p className="create-post-error">{error}</p>}
        <form onSubmit={createPost} className="create-post-form">
          <div className="create-post-form-group">
            <label className='create-post-label'>Title:</label>
            <input
              type="text"
              placeholder="Title"
              className="create-post-input"
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </div>
          <div className="create-post-form-group">
            <label className='create-post-label'>Post Description:</label>
            <ReactQuill 
              value={body} 
              onChange={setBody} 
              className="create-post-textarea" 
            />
          </div>
          <div className="create-post-form-group">
            <label className='create-post-label'>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="create-post-select"
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="sports">Sports</option>
              <option value="style">Style</option>
              <option value="fashion">Fashion</option>
              <option value="entertainment">Entertainment</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
              <option value="business">Business</option>
              <option value="politics">Politics</option>
              <option value="science">Science</option>
              <option value="art">Art</option>
              <option value="world">World</option>
            </select>
          </div>
          <div className="create-post-upload-methods">
            <label className='create-post-label'>Upload Image:</label>
            <label className="create-post-upload-option">
              <input
                type="radio"
                value="file"
                checked={uploadMethod === "file"}
                onChange={() => setUploadMethod("file")}
              />
              Upload Picture File
            </label>
            <label className="create-post-upload-option">
              <input
                type="radio"
                value="link"
                checked={uploadMethod === "link"}
                onChange={() => setUploadMethod("link")}
              />
              Input Image Link
            </label>
          </div>
          {uploadMethod === "file" && <input type="file" onChange={handleImageChange} className="create-post-input" />}
          {uploadMethod === "link" && <input type="text" placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="create-post-input" />}
          <button type="submit" className="create-post-button">Publish</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;
