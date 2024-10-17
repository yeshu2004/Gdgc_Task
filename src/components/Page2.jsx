import Page2Left from "./Page2Left"
import Page2Right from "./Page2Right"

const Page2 = () => {
  return (
    <div className="h-full w-full lg:px-10 px-5 py-10 lg:py-0 lg:flex-row flex flex-col items-center gap-10">
        <Page2Left/>
        <Page2Right/>
    </div>
  )
}

export default Page2