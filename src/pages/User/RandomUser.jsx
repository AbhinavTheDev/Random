import React, {useEffect, useState} from "react";
import "./RandomUser.css";

const CountryFlag = ({ countryCode }) => {
  const flagUrl = `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png`;

  return (
    <img src={flagUrl} alt={`${countryCode} flag`} style={{ width: '32px', height: 'auto' }} />
  );
};

function RandomUser() {
   const [title, setTitle] = useState("");
   const [img, setImg] = useState("");
   const [name, setName] = useState("");
   const [username, setUsername] = useState("");
   const [location, setLocation] = useState({ lat: "", lng: "" });
   const [cell, setCell] = useState("");
   const [city, setCity] = useState("");
   const [nation, setNation] = useState("");
   const [dob, setDob] = useState("");
   const [phone, setPhone] = useState("");
   const [timezone, setTimezone] = useState("");
   const [timezoneCity, setTimezoneCity] = useState("");
   const [registered, setRegistered] = useState("");
   const [state, setState] = useState({ isRotated: false, reload: false });

   const handleRotation = () => {
    setState(prevState => ({
      isRotated: !prevState.isRotated,
      reload: !prevState.reload,
    }));
  };
useEffect(() => {
  const fetchUserData = async () => {
    try {
  const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers/user/random", {
  method: "GET",
  headers: {
    accept: "application/json",
  },
});
if (!response.ok){
  throw new Error("Network reponse is not OK")
}
const result = await response.json();
setTitle(result.data.name.title);
setImg(result.data.picture.large);
setName(result.data.name.first + " " + result.data.name.last);
setUsername(result.data.login.username);
setLocation({ lat: result.data.location.coordinates.latitude, lng: result.data.location.coordinates.longitude });
setCell(result.data.cell);
setCity(result.data.location.city);
setNation(result.data.nat);
const DobDate = new Date(result.data.dob.date);
const formatDobDate = DobDate.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
setDob(formatDobDate);
setPhone(result.data.phone);
setTimezone(result.data.location.timezone.offset );
setTimezoneCity(result.data.location.timezone.description.split(',').map(city => city.trim())[0]);
const registerDate = new Date(result.data.registered.date);
const formatregisterDate = registerDate.toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
setRegistered(formatregisterDate);
} catch (error) {
  throw new Error("Error in fetching Data")
}
}
fetchUserData();
}, [state.reload]);

const mapURL = "https://maps.google.com/?q=";
const mapLink = `${mapURL}${location.lat},${location.lng}`;
const callURL = "tel:";
const callLink = `${callURL}${setCell}`;
    return (
        <>
        <div className="container">
        <div className="card">
          <div className="header">
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
            </div>
            <div className="title">Profile Overview</div>
            <div 
            onClick={handleRotation} 
            style={{ 
              transform: state.isRotated ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'transform 0.5s ease-in-out',
              cursor: 'pointer',
              }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"
                />
                <path d="M20 4v5h-5" />
              </svg>
            </div>
          </div>
          <div className="img">
            <div id="nameTitle">{title}</div>
            <div className="imgcontainer">
              <img
                id="profileImg"
                src={img}
                alt="image"
              />
            </div>
          </div>
          <div className="name">{name}</div>
          <div className="username">{username}</div>
          <hr />
          <div className="contact">
            <a target="_blank" href={mapLink} rel="noopener noreferrer">
            <div className="loc">
              <div className="maplogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-map-pin-filled"
                  width="20"
                  height="20"
                  viewBox="0 0 20 26"
                  strokeWidth="2.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                    strokeWidth="0"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="location">Location</div>
            </div></a>
            <a target="_blank" href={callLink} rel="noopener noreferrer">
            <div className="call">
              <div className="callLogo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-phone"
                  width="20"
                  height="20"
                  viewBox="0 0 24 25"
                  strokeWidth="2.5"
                  stroke="#000000"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                  />
                </svg>
              </div>
              <div className="callme">Call Me</div>
            </div>
          </a>
          </div>
          <hr />
          <div className="info">
            <div className="cityDiv">
              <div id="infoTitle">City</div>
              <div id="content">{city}</div>
            </div>
            <div className="nationDiv">
              <div id="infoTitle">Nationality</div>
              <div id="content"> <CountryFlag countryCode={nation} /> {nation}</div>
            </div>
            <div className="DOBDiv">
              <div id="infoTitle">Date of birth</div>
              <div id="content">{dob}</div>
            </div>
            <div className="phoneDiv">
              <div id="infoTitle">Phone No.</div>
              <div id="content">{phone}</div>
            </div>
            <div className="zoneDiv">
              <div id="infoTitle">Time Zone</div>
              <div id="content">{timezone} ({timezoneCity})</div>
            </div>
            <div className="registerDiv">
              <div id="infoTitle">Registered Since</div>
              <div id="content">{registered}</div>
            </div>
          </div>
          <div className="chai">
            <a target="_blank" href="https://chaicode.com"><img
              id="chaiCode"
              src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
              alt="ChaiAurCodeLogo"
            /></a>
          </div>
          <div id="footerContainer">
            <div id="footer">&copy; chai aur code</div>
          </div>
        </div>
      </div>
      </>
  );
}

export default RandomUser
