/* eslint-disable react/prop-types */
import React from 'react';
import './SharedButtons.css';
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
} from 'react-share';

import './responsive.css';

const SharedButtons = ({ score }) => {
    const shareUrl = 'https://python-speech-game.firebaseapp.com/';
    const shareTitle = `I helped a machine learn, I answered ${
        score / 10
    } times. Try to teach more than me, come on!`;

    return (
        <div className="sharedButtons">
            <FacebookShareButton
                url={shareUrl}
                quote={shareTitle}
                className="shareButtonFaceboook"
            >
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton
                url={shareUrl}
                title={shareTitle}
                className="shareButtonTelegram"
            >
                <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton
                url={shareTitle}
                title={shareTitle}
                className="shareButtonTwitter"
            >
                <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton
                url={shareUrl}
                title={shareTitle}
                className="shareButtonWhats"
            >
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
    );
};

export default SharedButtons;
