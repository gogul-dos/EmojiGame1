import './index.css'

const EmojiCard = props => {
  const {details, clicked} = props
  const {id, emojiName, emojiUrl} = details
  const emojiClicked = () => {
    clicked(id)
  }
  return (
    <li>
      <button type="button" className="button-element">
        <img alt={emojiName} src={emojiUrl} onClick={emojiClicked} />
      </button>
    </li>
  )
}
export default EmojiCard
