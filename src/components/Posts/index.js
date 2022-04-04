import './index.css'

const Posts = props => {
  const {blogsList} = props
  const {publishedDate, description, title} = blogsList
  console.log(publishedDate)
  return (
    <li className="listComponenets">
      <div className="firstContainer">
        <p className="titleText">{title}</p>
        <p className="discription">{publishedDate}</p>
      </div>
      <p className="discription">{description}</p>
      <hr className="line" />
    </li>
  )
}
export default Posts
