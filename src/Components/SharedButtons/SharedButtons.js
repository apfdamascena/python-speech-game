import React from 'react';
import './SharedButtons.css';
import {
    FacebookShareButton, TelegramShareButton,
    TwitterShareButton, WhatsappShareButton
} from 'react-share';
import {
    FacebookIcon, TelegramIcon,
    TwitterIcon, WhatsappIcon
} from 'react-share';

const SharedButtons = () => {
    const shareUrl = 'https://python-speech-game.firebaseapp.com/';
    const shareTitle = 'Game in python';
    return (
        <div className="sharedButtons">
            <FacebookShareButton
                url={shareUrl} quote={shareTitle}
                className="shareButtonFaceboook"
            ><FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton
                url={shareUrl} title={shareTitle}
                className="shareButtonTelegram"
            ><TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
                url={shareTitle} title={shareTitle}
                className="shareButtonTwitter"
            ><TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
                url={shareUrl} title={shareTitle}
                className="shareButtonWhats"
            ><WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
}

export default SharedButtons;