import User from "./User";


const CategorySection = ({ title, members }) => {
  if (!members || members.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 ">
      {/* Category Title */}
      <div className="relative place-self-center">
        <h1 className="text-4xl font-bold ">{title}</h1>
        <div
          id="blue_underline"
          className="w-full h-1.5 bg-linear-to-r from-[#11bfff] to-[#844cff]"
        ></div>
      </div>

      {/* Members Grid (2 columns only) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 place-items-center">
        {members.map((user) => (
          <User
            key={user.id}
            name={user.name}
            desc={user.designation}
            img={user.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
