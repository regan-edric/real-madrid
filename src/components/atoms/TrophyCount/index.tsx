interface ITrophyCount {
  title: string;
  count: number;
  img: string;
}

export default function TrophyCount({ title, count, img }: ITrophyCount) {
  const counter = (count / 36) * 100 + 30;
  return (
    <>
      <div>
        <p className="font-semibold text-sm text-slate-800">{title}</p>
        <div style={{ width: `${counter > 100 ? 100 : counter}%` }}>
          <div className="bg-[#DDE5FD] rounded-e-full ">
            <div className="bg-gradient-to-r from-[#3E30FA] to-[#855EF5] flex items-center justify-between p-3 rounded-e-full transition-all">
              <img src={img} alt={title} className="bg-white h-10" />
              <p className="text-center text-white text-xl font-bold me-5">
                {count}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
