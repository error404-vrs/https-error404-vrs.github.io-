import LangagesList from './LangagesList';
const languagesData = [
  { name: 'JavaScript', yearsOfXp: 5 },
  { name: 'Python', yearsOfXp: 3 },
  { name: 'Java', yearsOfXp: 4 },
  { name: 'C++', yearsOfXp: 2 },
];
function languages() {
  return (
    <div>
      <LangagesList languages={languagesData} />
    </div>
  );
}
export default languages;