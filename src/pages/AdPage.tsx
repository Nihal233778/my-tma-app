import React from 'react'
import { TadsWidget, renderTadsWidget } from 'react-tads-widget'

const AdPage: React.FC = () => {
  const rewardUserByClick = () => {
    console.log('User rewarded for click')
    alert('🎉 You earned a reward for clicking!')
  }

  // Remove this function if not used - or keep it for fullscreen ads
  const onAdsNotFound = () => {
    console.log('No ads found')
    alert('No ads available right now. Try again later!')
  }

  const showFullscreenAd = () => {
    renderTadsWidget({
      id: '9699',
      type: 'fullscreen',
    })
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>My Telegram Mini App</h1>
      <p>Watch ads and earn rewards!</p>

      <button 
        onClick={showFullscreenAd}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          backgroundColor: '#0088cc',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          margin: '20px'
        }}
      >
        📺 WATCH FULLSCREEN AD
      </button>

      <div style={{
        marginTop: '20px',
        padding: '20px',
        border: '2px solid #ddd',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
      }}>
        <h3>Sponsored Content:</h3>
        <TadsWidget 
          id="9700"
          type="static" 
          debug={true}
          onClickReward={rewardUserByClick} 
          onAdsNotFound={onAdsNotFound} 
        />
      </div>
    </div>
  )
}

export default AdPage
