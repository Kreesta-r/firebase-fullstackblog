import { useEffect, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { uploadBytes, getDownloadURL, ref } from 'firebase/storage'; // Import storage related functions
import { auth, db, storage } from '../../firebase';
import { useNavigate } from "react-router-dom";
import "./createpost.css";

function CreatePost({ isAuth }) {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null); // State to store the selected image file
  const [uploadMethod, setUploadMethod] = useState("file"); // Default to file upload method
  const [category, setCategory] = useState(""); // State to store the selected category

  const postCollectionRef = collection(db, "posts");

  const createPost = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      let imageURL = null;
      if (uploadMethod === "file" && image) { // Check the selected upload method
        const storageRef = ref(storage, `images/${image.name}`);
        await uploadBytes(storageRef, image);
        imageURL = await getDownloadURL(storageRef);
      } else if (uploadMethod === "link") {
        // Directly use the image link
        imageURL = image;
      }
      await addDoc(postCollectionRef, {
        title,
        body,
        imageURL, // Save the image URL along with other post details
        author: { name: auth.currentUser.displayName , id: auth.currentUser.uid },
        category, // Save the category
        timestamp: new Date() // Save the current timestamp
      });
      navigate("/");
    } catch (err) {
      console.error(err);
      // You can add error handling here (e.g., display an error message)
    }
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className='create-post'>
      <div className="create-container">
        <h1 className="create-title">Create Post</h1>
        <form onSubmit={createPost} className="create-form">
          <label className='labels'>Title:</label>
          <input type="text" placeholder="Title" className="create-input" onChange={(e) => { setTitle(e.target.value) }} />
          <label className='labels'>Post Description:</label>
          <textarea type="text" placeholder="Description" className="create-textarea" onChange={(e) => { setBody(e.target.value) }} />
          <label className='labels'>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="create-input">
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
          <div className="upload-methods">
            <label className='labels'>Upload Image:</label>
            <label className="upload-option">
              <input type="radio" value="file" checked={uploadMethod === "file"} onChange={() => setUploadMethod("file")} />
              Upload Picture File
            </label>
            <label className="upload-option">
              <input type="radio" value="link" checked={uploadMethod === "link"} onChange={() => setUploadMethod("link")} />
              Input Image Link
            </label>
          </div>
          {uploadMethod === "file" && <input type="file" onChange={handleImageChange} className="create-input" />}
          {uploadMethod === "link" && <input type="text" placeholder="Image Link" onChange={(e) => setImage(e.target.value)} className="create-input" />}
          <button type="submit" className="create-button">Publish</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost;
