import React , {useState}  from 'react'
import Profilee from './Profilee';
import Pic from '../photos.JPG';
function ProfileeParent() {
    const data = {
        name: 'yesser',
        description: 'I am a new developper',
        image : Pic
    }
    const [card, setCard] = useState(false);
    const toggleCard = () => {
        setCard(!card)
    }


    return (
        <div>
            <button onClick={toggleCard}> {card ? "hide me" : "show me" } </button>
            { card ? <Profilee x= {data} /> : <h1> Nothink to show </h1> }
        </div>
    );
};

export default ProfileeParent
