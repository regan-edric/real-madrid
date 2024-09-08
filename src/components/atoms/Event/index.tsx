import { CiLocationOn } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";

interface IEvent {
  logoHome: string;
  logoAway: string;
  nameHome: string;
  nameAway: string;
  typeMatch: "UCL" | "La Liga";
  matchDay: string;
  date: string;
  stadium: string;
}

export default function Event({
  logoHome,
  logoAway,
  nameHome,
  nameAway,
  typeMatch,
  matchDay,
  date,
  stadium,
}: IEvent) {
  return (
    <>
      <div className="w-full p-5 lg:p-2 mb-4">
        <div className="bg-[#0f2145] p-5 h-40 mt-4 rounded-xl text-center text-white ">
          <div className="grid grid-cols-3 items-center">
            <div>
              <img className="h-[10vh] mx-auto" src={logoHome} alt={nameHome} />
              <h3 className="mt-2 text-sm font-semibold">{nameHome}</h3>
            </div>
            <div>
              {typeMatch === "La Liga" ? (
                <img
                  className="h-[6vh] mx-auto"
                  src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/34pl8szyvrbwcmfkuocjm3r6t-logo.app.svg?$Mobile$&wid=144&hei=144"
                  alt="La Liga"
                />
              ) : (
                <img
                  className="h-[6vh] mx-auto"
                  src="https://publish-p47754-e237306.adobeaemcloud.com/content/dam/common/statics/public-content/competition/football/34pl8szyvrbwcmfkuocjm3r6t-logo.app.svg?$Mobile$&wid=144&hei=144"
                  alt="UCL"
                />
              )}
            </div>
            <div>
              <img className="h-[10vh] mx-auto" src={logoAway} alt={nameAway} />
              <h3 className="mt-2 text-sm font-semibold">{nameAway}</h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 px-5 py-3 bg-white shadow-lg -top-5 relative rounded-xl">
          <div className="text-xs font-semibold text-slate-800">
            Football · First Team · Male{" "}
          </div>
          <div className="text-slate-800">
            <h1 className="text-xl font-bold">
              {typeMatch === "La Liga" ? "La Liga" : "UCL"}
            </h1>
            <h2 className="font-bold text-base">{matchDay}</h2>
          </div>
          <div className="text-slate-700">
            <div className="flex items-center gap-2">
              <IoCalendarOutline />
              <p>{date}</p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn />
              <p>{stadium}</p>
            </div>
          </div>
          <div className="mt-14">
            <button className="flex items-center gap-2 text-indigo-600 font-semibold">
              <IoMdMore size={20} />
              <div className="text-sm hover:underline transition-all">More</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
