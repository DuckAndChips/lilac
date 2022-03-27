import React, { useState, useEffect } from "react";
import { Tag } from "../components/Tag";
import { CustomButton } from "../components/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, logOut } from "../services/Auth";
import {
  deletePortfolioItem,
  initNewPortfolioIfNeeded,
  updatePortfolioItem,
} from "../services/Database";
import { uploadImage } from "../services/Storage";

export function EditItemPage() {
  /* {
  email,
  id,
  portfolioItem: {title: itemTitle, description: itemDescription, tags: itemTags, imageURL: itemImageURL, links: itemLinks}
} */

  // React Router
  const location = useLocation();
  const navigate = useNavigate();

  // State that manages data
  const [title, setTitle] = useState(location.state.data.title);
  const [description, setDescription] = useState(
    location.state.data.description
  );
  const [tags, setTags] = useState(location.state.data.tags);
  const [imageURL, setImageURL] = useState(location.state.data.imageURL);
  const [links, setLinks] = useState(location.state.data.links);

  // Utility states that manages input
  const availTags = location.state.availTags;
  const [linkLabel, setLinkLabel] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [imageLabel, setImageLabel] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  // Redirect if not logged in
  useEffect(() => {
    if (!auth.currentUser) navigate("/");
  }, []);

  return (
    <>
      {/* Header */}
      <div className="box-border flex min-h-screen w-screen flex-col gap-5 bg-lightblue p-16 font-serif text-lg">
        <div className="box-border flex justify-between">
          <h1>Lilac</h1>
          <div className="flex flex-col items-end">
            <a
              className="cursor-pointer font-bold text-plum hover:text-black"
              onClick={logOut}
            >
              Log Out
            </a>
            <p className="text-base">
              Logged in as{" "}
              <span className="underline">{auth.currentUser?.email}</span>
            </p>
          </div>
        </div>

        {/* Header Buttons */}
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between md:gap-10">
          <p className="text-4xl font-bold">Edit Item: {title}</p>
          <div className="flex items-center gap-10">
            <CustomButton
              clickHandler={
                // Delete item and redirect to edit route
                async () => {
                  deletePortfolioItem(
                    auth.currentUser.uid,
                    location.state.id
                  )
                    .then(navigate("/edit"))
                    .catch((error) => Promise.reject(error));
                }
              }
            >
              Delete Item
            </CustomButton>
            <CustomButton
              highlight
              clickHandler={
                // Update items and redirect to edit route
                async () => {
                  let item = {
                    title: title,
                    description: description,
                    tags: tags,
                    imageURL: imageURL,
                    links: links,
                  };
                  //console.log('Attempting to udpate with uid and id of ', auth.currentUser.uid, location.state.id)
                  updatePortfolioItem(
                    auth.currentUser.uid,
                    location.state.id,
                    item
                  )
                    .then(navigate("/edit"))
                    .catch((error) => Promise.reject(error));
                }
              }
            >
              Save and Return to My Portfolio
            </CustomButton>
          </div>
        </div>

        {/* Item Title */}
        <div className="flex flex-col gap-2">
          <p className="text-xl italic">Title</p>
          <div className="flex justify-between gap-5">
            <input
              type="text"
              className="w-full border-2 border-black py-2 px-4 outline-none"
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
            {/* <CustomButton>Save</CustomButton> */}
          </div>
        </div>

        {/* Item Description */}
        <div className="flex flex-col gap-2">
          <p className="text-xl italic">Description</p>
          <div className="flex justify-between gap-5">
            <textarea
              type="text"
              className="w-full border-2 border-black py-2 px-4 outline-none"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
            {/* <CustomButton>Save</CustomButton> */}
          </div>
        </div>

        {/* Item Tags */}
        <div className="flex flex-col gap-2">
          <p className="text-xl italic">Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags &&
              tags.map((tag) => (
                <Tag
                  key={tag}
                  deletable
                  deleteHandler={() => {
                    setTags(tags.filter((t) => t != tag));
                  }}
                >
                  {tag}
                </Tag>
              ))}
          </div>
          <div className="flex justify-between gap-5">
            <input
              type="text"
              placeholder="Add New Tag..."
              className="w-full border-2 border-black py-2 px-4 outline-none"
              onChange={(event) => setTagInput(event.target.value)}
              value={tagInput}
            />
            <CustomButton
              clickHandler={() =>
                new Promise((resolve, reject) => {
                  setTagInput("");
                  if (
                    !tags.includes(tagInput) &&
                    availTags.includes(tagInput) &&
                    tagInput.trim().length
                  ) {
                    setTags([...tags, tagInput]);
                    resolve();
                  } else reject();
                })
              }
            >
              Add
            </CustomButton>
          </div>
        </div>

        {/* Cover Image */}
        <div className="mb-3 flex max-w-lg flex-col gap-2">
          <p className="text-xl italic">Cover Image</p>

          <div className="mb-1 flex items-center justify-between gap-5">
            <input
              type="file"
              value={imageLabel}
              onChange={(event) => {
                let imageFile = event.target.files[0]; // FileList[0] -> File Object
                setImageLabel(event.target.value); // C:\fakepath\image.jpeg
                setImageURL("");
                setImageLoading(true);
                uploadImage(auth.currentUser.uid, imageFile).then((url) => {
                  setImageURL(url);
                  setImageLoading(false);
                });
              }}
              accept="image/*"
            />
            {/* <CustomButton>Upload</CustomButton> */}
          </div>

          {imageURL ? (
            <img
              className="max-h-80 w-min border-2 border-black object-contain shadow-offset-black"
              src={imageURL}
            />
          ) : imageLoading ? (
            <p className="italic">Loading...</p>
          ) : (
            <p>No cover image uploaded.</p>
          )}
        </div>

        {/* Item Links */}
        {/* Rendering Links as Tags with Delete Functionality */}
        <div className="flex flex-col gap-2">
          <p className="text-xl italic">External Links</p>
          <div className="flex flex-wrap gap-2" key={links}>
            {links &&
              Object.entries(links).map(([key, value]) => (
                <Tag
                  key={key + value}
                  deletable
                  deleteHandler={() => {
                    const { [key]: value, ...rest } = links;
                    setLinks(rest);
                  }}
                >
                  {key + " : " + value}
                </Tag>
              ))}
          </div>
          <div className="flex flex-col justify-between gap-2 md:flex-row md:gap-5">
            {/* Link Label and URL Inputs */}
            <input
              type="text"
              placeholder="Link Label"
              className="w-full border-2 border-black py-2 px-4 outline-none"
              onChange={(event) => setLinkLabel(event.target.value)}
              value={linkLabel}
            />
            <input
              type="text"
              placeholder="Link URL"
              className="w-full border-2 border-black py-2 px-4 outline-none"
              onChange={(event) => setLinkURL(event.target.value)}
              value={linkURL}
            />
            {/* Button to Add Link */}
            <CustomButton
              clickHandler={() => {
                // console.log(links);
                return new Promise((resolve, reject) => {
                  if (
                    !(linkLabel in links) &&
                    links[linkLabel] !== linkURL &&
                    linkLabel.trim().length &&
                    linkURL.trim().length
                  ) {
                    let newLinks = Object.fromEntries(
                      Object.entries(
                        Object.assign(links, { [linkLabel]: linkURL })
                      )
                    ); // Force re-render
                    setLinks(newLinks);
                    setLinkLabel("");
                    setLinkURL("");
                    resolve();
                  } else reject();
                });
              }}
            >
              Add
            </CustomButton>
          </div>
        </div>
      </div>
    </>
  );
}
