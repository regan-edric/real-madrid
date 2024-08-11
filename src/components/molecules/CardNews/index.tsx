export default function CardNews({
  isHeader,
  imageURL,
  caption,
}: {
  isHeader?: boolean;
  imageURL: string;
  caption: string;
}) {
  return (
    <>
      <div className="group  ">
        {isHeader ? (
          <div className="lg:flex items-center justify-between rounded-xl lg:bg-[#F2F5F8]">
            <div className="overflow-hidden rounded-l-xl">
              <img
                src={imageURL}
                alt="mbappe-training"
                className=" group-hover:scale-105 transition-all ease-in-out duration-[1800ms] w-full"
              />
            </div>
            <h1 className="text-lg lg:text-3xl lg:p-8 py-2 font-bold text-slate-700 group-hover:text-indigo-600 transition-all ease-in-out duration-700">
              {caption}
            </h1>
          </div>
        ) : (
          <div>
            <div className="overflow-hidden rounded-xl">
              <img
                src={imageURL}
                alt="mbappe-training"
                className=" group-hover:scale-105 transition-all ease-in-out duration-[1800ms] roundedl--xl w-full"
              />
            </div>
            <h1 className="text-xs lg:text-xl lg:py-8 py-2 font-bold text-slate-700 group-hover:text-indigo-700 transition-all duration-700 line-clamp-2">
              {caption}
            </h1>
          </div>
        )}
      </div>
    </>
  );
}
