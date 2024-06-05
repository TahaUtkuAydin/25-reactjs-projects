export default function Suggestions({filteredUsers, onClick}) {
  return (
    <ul>
      {filteredUsers.map((item,index)=> (
        <li key={index} onClick={onClick} >
            {item}
        </li>
      ))}
    </ul>
  )
}
