import { NextPage } from "next";

type props = {
  errorMessege : string
}

const Error: NextPage<props> = ({ errorMessege }) => {
  return (
    <div>{errorMessege}</div>
  )
}

export default Error