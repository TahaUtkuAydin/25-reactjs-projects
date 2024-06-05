import React from 'react'

export default function Users({user}) {
    const {
        avatar_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at,
      } = user;
      function getDate(date) {
        return new Date(date).toLocaleString("en-US",{
            day:"2-digit",
            month:"2-digit",
            year:"numeric"
        })
      }
  return (
    <div className='flex flex-col justify-center items-center gap-4 '>
        <div>

        <img src={avatar_url} alt='user' className='h-[150px] rounded-full ' />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name ||login} </a>
            <p> User joined on {getDate(created_at)} </p>
            <p>Public Repos : {public_repos} </p>
        </div>

    </div>
  )
}
