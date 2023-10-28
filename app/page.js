import Image from 'next/image'

export default function Home() {

  return (
    <main style={{backgroundColor: 'white', height: '100vw',
    padding: '20vw'}}>
      <div>
        <input
          type="text"
          style={{
            color: 'black',
            border: '1px solid black',
            width: '30vw',
          }}
        />
        <button 
          style={{
            backgroundColor: 'blue',
            color: 'white',
          }}
        >Search</button>
      </div>
    </main>
  )
}
