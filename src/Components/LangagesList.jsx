function Langage({ name, yearsOfXp }) {
    return (
      <div className="p-4 rounded-sm shadow-2xl bg-gradient-to-br font-bold from-gray-900 via-gray-800 to-gray-900">
        <h1 className="text-xl font-bold">{name}</h1>
        <h3 className="">{yearsOfXp} années d'expérience</h3>
      </div>
    );
  }
  function LangagesList({ languages }) {
    return (
      <div className="w-[97%] ml-auto mr-auto mb-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((langage, index) => (
            <Langage  key={index} name={langage.name} yearsOfXp={langage.yearsOfXp} />
          ))}
        </div>
        <hr className="mt-12" />
      </div>
    );
  }
  export default LangagesList;