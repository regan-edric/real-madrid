import { ITEMS_NEWS } from "../../../constant/CONST";
import CardNews from "../../atoms/CardNews";

export default function News() {
  return (
    <>
      <div className="px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-5 lg:pt-10">
          {ITEMS_NEWS.slice(1).map((item) => (
            <CardNews imageURL={item.image} caption={item.caption} />
          ))}
        </div>
      </div>
    </>
  );
}
