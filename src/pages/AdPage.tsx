import React from 'react'
import { TadsWidget, renderTadsWidget } from 'react-tads-widget'

const AdPage: React.FC = () => {
  const rewardUserByClick = () => {
    console.log('User rewarded for click')
    alert('🎉 You earned a reward for clicking!')
  }

  const rewardUserByShow = () => {
    console.log('User rewarded for watching ad')
    alert('🎁 Thanks for watching! You got 100 coins!')
  }

  const onAdsNotFound = () => {
    console.log('No ads found')
    alert('No ads available right now. Try again later!')
  }

  const showFullscreenAd = () => {
    renderTadsWidget({
      id: 'YOUR_WIDGET_ID_HERE',  // Replace with your real ID from tads.me
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
          id="YOUR_WIDGET_ID_HERE"  // Replace with your real ID
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

