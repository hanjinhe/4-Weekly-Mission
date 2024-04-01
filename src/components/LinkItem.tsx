import "../css/Article.css";
import { Card } from "./Card";
interface Link {
  title: string;
  url: string;
  description: string;
}

interface LinkItemProps {
  folderId: string;
  userFolder: any;
  links: { data: Link[] };
}
function LinkItem({ folderId, userFolder, links }: LinkItemProps) {
  return (
    <article>
      {links?.data?.length > 0 ? (
        <ul className="article-list">
          {links?.data.map((item: any) => (
            <li className="article-item" key={item.id}>
              <Card
                userFolder={userFolder}
                folderId={folderId}
                item={item}
                links={links}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-links">저장된 링크가 없습니다.</p>
      )}
    </article>
  );
}

export default LinkItem;
