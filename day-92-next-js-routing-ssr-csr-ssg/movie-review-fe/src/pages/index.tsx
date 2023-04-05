import React from "react"
import Link from "next/link"
//BACK END
export async function getServerSideProps() {
  const theaterRequest = await fetch('http://localhost:8282/theaters/list')
  const theaterData = await theaterRequest.json()
  console.log(theaterData)
  return {  //props oor dammjuulaad dooshoo FE ruugee props oor damjuulj bn
    props: {
      theater: theaterData
    }
  }
}

//FRONT END
export default function Home(props:any):JSX.Element {
  console.log(props)
  const side = typeof window ? "client" : "server"

  return (
    <>
      <div>Welcome, </div>
      <div>You're currently on the {side}- side</div>
      <Link href="/about">About Page</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/greeting/turu?age=21">Greeting</Link>
      {/* <Link href="/posts/2020-12-12/first">Posts Page</Link> */}
      <Link href={{pathname: "/posts/2020-12-12/first",
                    query: {date: "2020-12-12", slug: "first"}
    }}>Posts Page</Link>
    </>
  )
}
