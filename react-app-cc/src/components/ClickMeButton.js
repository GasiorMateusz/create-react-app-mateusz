import React, {useState} from "react";
import PropTypes from 'prop-types' //validates input type

const ClickMeButton = () => {
    const initText = "Click Me!"
    const click1 = "You clicked me!"
    const click2 = "Stop clicking me!"
    const [buttonText, setButtonText] = useState(initText);

    const onClick = () => {
        if (buttonText === initText) {
            setButtonText(click1)
        }
        if (buttonText === click1) {
            setButtonText(click2)
            setTimeout(() => {
                setButtonText(initText);
            }, 3000);
        }
    }

    return (
        <div>
            <button
                className='btn'
                onClick={onClick}
            >
                {buttonText}
            </button>
        </div>
    )
}

ClickMeButton.propTypes = {
    innerText: PropTypes.string,
}

export default ClickMeButton
