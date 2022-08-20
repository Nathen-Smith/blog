export default function Post() {
  return (
    <div>
      <div>hi</div>
    </div>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export async function getStaticProps({params} : any) {
  // Get external data from the file system, API, DB, etc.
  // const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  // return {
  //   props: ...
  // }
}