import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Arrow, PortfolioLabel } from "../../assets/img/Svg";
import { Tag } from "../components/Tag";
import { getFullPortfolio } from "../services/Database";

export function Portfolio() {
  const params = useParams();
  const emptyPortfolio = {
    name: "",
    tagline: "",
    tags: [],
    items: {},
  };

  const [portfolio, setPortfolio] = useState(emptyPortfolio);
  const [selectedTag, setSelectedTag] = useState("All");
  const [filteredItems, setFilteredItems] = useState(emptyPortfolio.items);

  useEffect(() => {
    getFullPortfolio(params.id)
      .then((p) => {
        setPortfolio(p);
        setFilteredItems(p.items);
        // console.log(p);
      })
      .catch((error) => alert(error));
  }, []);

  useEffect(() => {
    if (selectedTag == "All") {
      setFilteredItems(portfolio.items);
    } else {
      setFilteredItems(
        portfolio.items.filter((item) => item.tags.includes(selectedTag))
      );
    }
    // console.log(Object.entries(filteredItems));
  }, [selectedTag]);

  return (
    <div className="flex min-h-screen w-screen flex-col items-center gap-16 bg-plum font-serif">
      {/* Title Card */}
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 rounded-b-[250px] bg-lightpink p-12 shadow-xl">
        {/* Logo */}
        <svg
          className="animate-spin-slow"
          width="30"
          height="30"
          viewBox="0 0 88 88"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M44 0L48.2996 23.7719L61.8964 3.804L56.1554 27.2695L76.6984 14.5583L61.9094 33.66L85.8465 30.4033L64.5667 41.8384L87.759 48.5993L63.6678 50.3905L82.1051 66L59.3682 57.8376L69.8625 79.5967L52.4113 62.8921L53.1481 87.0385L44 64.68L34.8519 87.0385L35.5887 62.8921L18.1374 79.5967L28.6318 57.8376L5.89488 66L24.3322 50.3905L0.241035 48.5993L23.4333 41.8384L2.15351 30.4033L26.0906 33.66L11.3016 14.5583L31.8446 27.2695L26.1036 3.804L39.7004 23.7719L44 0Z"
            fill="#776D8A"
          />
        </svg>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-6xl font-bold md:text-8xl xl:text-[20vh]">
            {portfolio.name}
          </h1>
          <p className="text-center text-2xl italic md:text-4xl xl:text-6xl">
            {portfolio.tagline}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PortfolioLabel className="w-40 md:w-56 xl:w-64" />
          <p>Made with <Link to={'/'} className="text-plum hover:text-black">Lilac</Link>. Based in Hong Kong.</p>
        </div>
        <Arrow width={15} className={"animate-bounce"} />
      </div>

      {/* Tags */}
      <div className="mx-12 flex max-w-xl flex-wrap items-center justify-center gap-2 rounded-3xl bg-white p-3 shadow-2xl">
        <Tag
          clickable
          selected={selectedTag == "All"}
          clickHandler={() => setSelectedTag("All")}
        >
          All
        </Tag>
        {portfolio.tags &&
          portfolio.tags.map((tag) => (
            <Tag
              clickable
              selected={selectedTag == tag}
              clickHandler={() => setSelectedTag(tag)}
              key={tag}
            >
              {tag}
            </Tag>
          ))}
      </div>

      {/* Portfolio Items  */}
      {filteredItems &&
        Object.entries(filteredItems).map((value, index) => (
          <PortfolioItem key={index} item={value[1]} />
        ))}

      <p className="mb-16 text-center text-white">Copyright 2022 © Lilac</p>
    </div>
  );
}

function PortfolioItem({
  item: { title, description, tags, links, imageURL },
}) {
  return (
    <div className="mx-16 flex max-w-xl flex-col items-center rounded-3xl bg-white shadow-2xl">
      <img
        className="max-h-[75vh] w-full rounded-t-3xl object-cover shadow-lg"
        src={imageURL || "../../assets/img/Placeholder.jpeg"}
      />
      <div className="flex w-full flex-col items-start gap-3 rounded-b-3xl p-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description}
        <div className="flex gap-2 flex-wrap">
          {tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
        </div>
        <div className="flex gap-2">
          {links &&
            Object.entries(links).map(([label, link]) => (
              <a
                key={label + link}
                href={link}
                className="text-plum hover:text-black"
              >
                {label}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
