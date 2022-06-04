import {HeartIcon} from '@heroicons/react/outline'

function Tweet({name, username, avatar, children}){
  return(<div className="flex space-x-3 p-4 border-b border-silver">
  <div>
    <img src={avatar} />
  </div>

  <div>
    <span className="font-bold text-sm">{name}</span>
    <span className="text-sm text-silver"> @{username}</span>

    <p>{children}</p>
    <HeartIcon className="w-6 stroke-1 stroke-silver"/>
  </div>
</div>)
}

export function App(){
  return(
    <>
      <Tweet name="Elon Musk" username="elonmusk" avatar="./src/assets/avatar.png">
      Let's make Twitter maximun fun!
      </ Tweet>

      <Tweet name="Francisco Brenner" username="franciscobrenner" avatar="./src/assets/avatar.png">
      Let's make Twitter maximun awesome!
      </ Tweet>
    </>
  )
}