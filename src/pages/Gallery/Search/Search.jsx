import "./Search.css"

export default function Search({filter, setFilter})
{
  return(
    <input
      id="Search"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Search your Nickname..."
    />
  )
}