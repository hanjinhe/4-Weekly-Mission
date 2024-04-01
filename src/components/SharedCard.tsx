import { getLinksFolder } from "../api";
import { useEffect, useState } from "react";
import "../css/Article.css";
import { Card } from "./Card";

interface LinkItem {
  id: number;
  url: string;
  imageSource: string;
  image_source: string;
  title: string;
  createdAt: number;
  created_at: number;
  description: string;
}

interface LinksInfo {
  folder: {
    links: LinkItem[];
  };
}

function SharedCard() {
  const [linksInfo, setLinksInfo] = useState<LinksInfo | null>(null);

  useEffect(() => {
    const sharedLinks = async () => {
      try {
        const data = await getLinksFolder();
        setLinksInfo(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      }
    };
    sharedLinks();
  }, []);

  return (
    <article>
      <ul className="article-list">
        {linksInfo &&
          linksInfo.folder.links.map((item) => (
            <li className="article-item" key={item.id}>
              <Card
                item={item}
                folderId={""}
                userFolder={{
                  data: [],
                }}
                links={undefined}
              />
            </li>
          ))}
      </ul>
    </article>
  );
}

export default SharedCard;
