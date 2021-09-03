// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {eachthumbnail, clickthumbnail, isactiveImage} = props
  const {thumbnailAltText, thumbnailUrl, id} = eachthumbnail
  const imageClassnames = isactiveImage
    ? `thumbimagesize active`
    : `thumbimagesize`
  console.log(imageClassnames)

  const onclickthumbitem = () => {
    clickthumbnail(id)
  }

  return (
    <li className="eachthumbimg">
      <button type="button" className="button" onClick={onclickthumbitem}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={imageClassnames}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
