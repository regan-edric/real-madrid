import Team from "../../atoms/Team";

export default function ScoreBoard() {
  return (
    <>
      <div className="bg-[#0F2145] text-white pt-8 pb-5 px-14">
        <div className="text-center  text-base text-slate-200">
          <p className="mb-2 font-bold text-lg text-white">La Liga</p>
          <p>Estadio Santiago Bernabeu</p>
          <p>Football · First Team · Male</p>
        </div>
        <div className="flex justify-evenly items-center pt-5">
          <div>
            <Team
              img="assets/images/logo-match-real-madrid.webp"
              name="Real Madrid"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-5xl flex justify-center items-center gap-8">
              <p>1</p>
              <p className="text-slate-400 text-3xl ">-</p>
              <p>1</p>
            </div>
            <div className="bg-blue-100 text-slate-800 rounded-md text-sm text-center p-1 mx-auto">
              23.30
            </div>
          </div>
          <div>
            <Team img="assets/images/logo-match-chelsea.webp" name="Chelsea" />
          </div>
        </div>
        <button className="border-2 border-blue-50/20 rounded-lg mt-5 py-1 w-full hover:bg-white hover:text-indigo-600 hover:border-indigo-600 transition-all ease-in-out duration-700 font-semibold text-sm">
          Follow the match
        </button>
      </div>
    </>
  );
}
