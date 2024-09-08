import { ITEMS_NEWS } from "../../../constant/CONST";
import CardNews from "../../atoms/CardNews";

export default function Jumbotron() {
  return (
    <>
      {/* px-6 py-4 lg:px-24 lg:py-6 */}
      <div className="p-5 lg:mx-16">
        {ITEMS_NEWS.slice(0, 1).map((item) => (
          <CardNews isHeader imageURL={item.image} caption={item.caption} />
        ))}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-5 lg:pt-10">
          {ITEMS_NEWS.slice(1).map((item) => (
            <CardNews imageURL={item.image} caption={item.caption} />
          ))}
        </div>
      </div>
    </>
  );
}
