import { useState } from "react";
import ButtonNavTab from "../../atoms/ButtonNavTab";
import TrophyCount from "../../atoms/TrophyCount";
import { TROPHY } from "../../../constant/CONST";

export default function TrackRecord() {
  const [isActiveFootball, setIsActiveFootball] = useState(true);

  return (
    <>
      <section className="p-5 mb-96">
        <h1 className="text-center text-3xl font-bold text-indigo-600">
          A Legendary <br /> Track Record
        </h1>
        <div className="bg-slate-100 my-5 flex w-fit mx-auto rounded-full items-center justify-center">
          <ButtonNavTab
            onClick={() => {
              setIsActiveFootball(!isActiveFootball);
            }}
            isActive={isActiveFootball}
          >
            Football
          </ButtonNavTab>
          <ButtonNavTab
            onClick={() => {
              setIsActiveFootball(!isActiveFootball);
            }}
            isActive={!isActiveFootball}
          >
            Basketball
          </ButtonNavTab>
        </div>
        <div>
          {isActiveFootball ? (
            <div className="flex flex-col gap-4">
              {TROPHY.map((items) => (
                <TrophyCount
                  key={items.id}
                  count={items.count}
                  img={items.img}
                  title={items.title}
                />
              ))}
            </div>
          ) : (
            <p>Basketball</p>
          )}
        </div>
      </section>
    </>
  );
}
