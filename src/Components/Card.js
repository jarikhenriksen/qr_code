import QR_Code from "./QR_Code";
import Card_Text from "./Card_Text";
import './Card.css'

function Card() {
    return (
        <div className="card">
            <QR_Code />
            <Card_Text />
        </div>
    );
};

export default Card