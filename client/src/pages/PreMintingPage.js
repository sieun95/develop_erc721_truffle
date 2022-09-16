import React from 'react'
import './PreMintingPage.css'

const PreMintingPage = () => {
  return (
    <div className='preMintingPageContainer'>
      PreMintingPage
      <div className='mintingBtnContainer'>
        <button className='mintingBtn'>Mint</button>
      </div>
      <div>
        <h3>민팅 조회</h3>
        <button className='mintingSearch'>조회</button>
      </div>
    </div>
  )
}

export default PreMintingPage