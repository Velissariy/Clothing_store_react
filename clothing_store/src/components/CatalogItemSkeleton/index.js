import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={360}
    height={532}
    viewBox="0 0 360 532"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="67" y="83" rx="0" ry="0" width="0" height="1" />
    <rect x="64" y="82" rx="0" ry="0" width="3" height="1" />
    <rect x="10" y="12" rx="0" ry="0" width="317" height="385" />
    <rect x="11" y="410" rx="0" ry="0" width="315" height="110" />
  </ContentLoader>
)

export default MyLoader