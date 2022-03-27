import React, { useState, useEffect, useCallback } from "react";
import { Tag } from "../components/Tag";
import { CustomButton } from "../components/CustomButton";
import { auth, logOut } from "../services/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  defaultPortfolioItem,
  getFullPortfolio,
  initNewPortfolioIfNeeded,
  initNewPortfolioItem,
  updatePortfolioField,
} from "../services/Database";

export function EditPage({}) {
  const navigate = useNavigate();
  const uid = auth.currentUser?.uid;

  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [portfolioItems, setPortfolioItems] = useState([]);

  // Load content if logged in, redirect if not logged in
  useEffect(() => {
    // console.log("Current User", auth.currentUser);
    if (auth.currentUser) {
      initNewPortfolioIfNeeded(uid)
        .then(async () => renderItems())
        .catch((error) => alert(error));
    } else {
      navigate("/");
    }
  }, []);

  // Render all items
  const renderItems = useCallback(async () => {
    const portfolio = await getFullPortfolio(uid);
    setName(portfolio.name);
    setTagline(portfolio.tagline);
    setTags(portfolio.tags);
    setPortfolioItems(portfolio.items);
    setLoading(false);
  });

  // Update tag in database after the state of tag changees
  useEffect(async () => {
    if (!loading) {
      await updatePortfolioField(uid, "tags", tags);
      setTagInput("");
    }
  }, [tags]);

  return (
    <>
      <div className="box-border flex min-h-screen w-screen flex-col gap-5 bg-lightblue p-16 font-serif text-lg">
        {/* Header */}
        <div className="box-border flex justify-between">
          <h1>Lilac</h1>
          <div className="flex flex-col items-end">
            <a
              className="cursor-pointer font-bold text-plum hover:text-black"
              onClick={() => {
                logOut();
                navigate("/");
              }}
            >
              Log Out
            </a>
            <p className="text-base">
              Logged in as{" "}
              <span className="underline">{auth.currentUser?.email}</span>
            </p>
          </div>
        </div>

        {/* View Button */}
        <div className="flex items-center gap-10">
          <p className="text-4xl font-bold">My Portfolio</p>
          <CustomButton
            highlight
            clickHandler={() => navigate("/view/" + auth.currentUser.uid)}
          >
            View
          </CustomButton>
        </div>

        {/* Content of the Portfolio */}
        {loading ? (
          <p className="italic">Loading...</p>
        ) : (
          <>
            {/* Name of the User */}
            <div className="flex flex-col gap-2">
              <p className="text-xl italic">Name</p>
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  className="w-full border-2 border-black py-2 px-4 outline-none"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />
                <CustomButton
                  clickHandler={async () => {
                    updatePortfolioField(uid, "name", name);
                  }}
                >
                  Save
                </CustomButton>
              </div>
            </div>

            {/* Tagline of the Portfolio */}
            <div className="flex flex-col gap-2">
              <p className="text-xl italic">Job Title / Tagline</p>
              <div className="flex justify-between gap-5">
                <input
                  type="text"
                  className="w-full border-2 border-black py-2 px-4 outline-none"
                  onChange={(event) => setTagline(event.target.value)}
                  value={tagline}
                />
                <CustomButton
                  clickHandler={async () => {
                    updatePortfolioField(uid, "tagline", tagline);
                  }}
                >
                  Save
                </CustomButton>
              </div>
            </div>

            {/* Tags (to be Used in Items and for Filtering) */}
            <div className="mb-10 flex flex-col gap-2">
              <p className="text-xl italic">Tags</p>
              {/* Rendering Tags with Delete Functionality */}
              <div className="flex gap-2 flex-wrap">
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
              {/* Input and Button to Add Tag */}
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
                      if (!tags.includes(tagInput) && tagInput.trim().length) {
                        setTags([...tags, tagInput]);
                        setTagInput("");
                        resolve();
                      } else reject();
                    })
                  }
                >
                  Add
                </CustomButton>
              </div>
            </div>

            {/* Portfolio Items */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="text-2xl italic">Portfolio</p>
                {/* Button to add portfolio */}
                <CustomButton
                  highlight
                  clickHandler={async () => {
                    let itemRef = await initNewPortfolioItem(uid);
                    // console.log(itemRef.id);
                    navigate("/edit-item", {
                      state: {
                        id: itemRef.id,
                        data: defaultPortfolioItem,
                        availTags: tags,
                      },
                    });
                    Promise.resolve();
                  }}
                >
                  Add Item
                </CustomButton>
              </div>

              {/* Rendering portfolio excerpts */}
              <div className="flex flex-col gap-5">
                {portfolioItems?.length
                  ? portfolioItems.reverse().map((item, index) => (
                      <PortfolioItem
                        title={item.title || ""}
                        description={item.description || ""}
                        tags={item.tags || []}
                        key={index}
                        editHandler={async () => {
                          navigate("/edit-item", {
                            state: {
                              id: item.id,
                              data: item,
                              availTags: tags,
                            },
                          });
                          Promise.resolve();
                        }}
                      />
                    ))
                  : "Start building your portfolio by adding your first portfolio item! 👣"}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

// Portfolio excerpt component
function PortfolioItem({ title, tags, description, editHandler }) {
  if (tags) {
    var TagItems = tags.map((tag) => {
      return <Tag key={tag}>{tag}</Tag>;
    });
  }

  return (
    <div className="flex justify-between gap-5">
      <div className="flex grow flex-col gap-1 border-2 border-black bg-white p-4">
        <p className="text-2xl font-bold">{title}</p>
        <div className="flex gap-2">{TagItems}</div>
        <p>{description}</p>
      </div>

      <CustomButton clickHandler={editHandler}>Edit</CustomButton>
    </div>
  );
}
