export default function Team({ img, name }: { img: string; name: string }) {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <img src={img} alt="logo-real-madrid" className="h-[65px]" />
        <p>{name}</p>
      </div>
    </>
  );
}
