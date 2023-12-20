import './index.css'

const Navbar = props => {
  const {highScore, currentScore} = props
  return (
    <nav>
      <div className="score-container-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="image-container margin-container-1"
        />
        <h1 className="margin-container-1">Emoji Game</h1>
      </div>
      <div className="score-container-1">
        <p className="margin-container-2">Score: {currentScore}</p>
        <p className="margin-container-2">Top Score: {highScore}</p>
      </div>
    </nav>
  )
}
export default Navbar
