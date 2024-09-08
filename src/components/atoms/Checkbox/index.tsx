export default function CheckBox() {
  return (
    <>
      <div className="py-2">
        <input
          className="pr-4"
          type="checkbox"
          name="firstTeam"
          id="football"
        />
        <label htmlFor="football">First Team - Men</label>
      </div>
    </>
  );
}
