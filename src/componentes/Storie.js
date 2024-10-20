export default function Storie(props) {
    return (
        <div className="storie-container">
            <img src={props.profilephoto} alt="profile-photo" />
            <p>{props.profilename}</p>
        </div>
    );
}