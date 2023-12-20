// EmojiGame.js
import {Component} from 'react'
import Navbar from '../NavBar'
import WinOrLoss from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      highScore: 0,
      currentScore: 0,
      emojisList: [...emojisList],
      clickedEmojisId: [],
      gameWon: false,
    }
  }

  playAgain = () => {
    const {currentScore, highScore} = this.state
    let score = highScore
    if (currentScore >= highScore) {
      score = currentScore
    }
    const container1 = document.getElementById('container-1')
    const container2 = document.getElementById('container-2')
    container1.classList.toggle('display-container')
    container2.classList.toggle('display-container')
    this.setState({
      highScore: score,
      currentScore: 0,
      clickedEmojisId: [],
      gameWon: false,
      clickedTwice: false,
    })
  }

  clicked = id => {
    const {clickedEmojisId, emojisList, currentScore} = this.state
    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    if (clickedEmojisId.includes(id)) {
      const container1 = document.getElementById('container-1')
      const container2 = document.getElementById('container-2')
      container1.classList.toggle('display-container')
      container2.classList.toggle('display-container')
      this.setState({gameWon: false, clickedTwice: true})
    } else {
      const newClickedEmojisId = [...clickedEmojisId, id]
      const newCurrentScore = currentScore + 1

      if (newCurrentScore === 12) {
        this.setState({
          clickedEmojisId: newClickedEmojisId,
          currentScore: newCurrentScore,
          emojisList: shuffledEmojisList(),
          gameWon: true,
        })
        const container1 = document.getElementById('container-1')
        const container2 = document.getElementById('container-2')
        container1.classList.toggle('display-container')
        container2.classList.toggle('display-container')
      } else {
        this.setState({
          clickedEmojisId: newClickedEmojisId,
          currentScore: newCurrentScore,
          emojisList: shuffledEmojisList(),
        })
      }
    }
  }

  render() {
    const {
      highScore,
      currentScore,
      emojisList,
      gameWon,
      clickedTwice,
    } = this.state
    return (
      <div className="main-container">
        <div id="container-1">
          {!gameWon && (
            <Navbar highScore={highScore} currentScore={currentScore} />
          )}
          <ul>
            {emojisList.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                clicked={this.clicked}
                details={eachEmoji}
              />
            ))}
          </ul>
        </div>
        <div
          className={`display-container ${gameWon ? 'display-container' : ''}`}
          id="container-2"
        >
          <WinOrLoss
            highScore={highScore}
            currentScore={currentScore}
            playAgain={this.playAgain}
            gameWon={gameWon}
            clickedTwice={clickedTwice}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame
