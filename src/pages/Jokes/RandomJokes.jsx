import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./RandomJokes.css"

export default function RandomJokes() {
    const [joke, setJoke] = useState("");
    const date = new Date(new Date() - Math.random() * 1e12).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "short",
        day: "numeric",
      }
    );
    const time = new Date(new Date() - Math.random() * 1e12).toLocaleTimeString(
      "en-US",
      {
        hour: "2-digit",
        minute: "2-digit",
      }
    );
    const fetchJokesData = async () => {
      try {
    const response = await fetch("https://api.freeapi.app/api/v1/public/randomjokes/joke/random", {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  });
  if (!response.ok){
    throw new Error("Network reponse is not OK")
  }
  const result = await response.json();
  setJoke(result.data.content);
} catch (error) {
    throw new Error("Error in fetching Data")
  }
  }
    useEffect(() => {
      fetchJokesData();
      }, []);

    return (
   <>
    <div id="container">
      <div id="contentContainer">
        <div id="content">
          <div id="head">
            <Link to="/random-user">
            <div id="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-narrow-left"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l4 4" />
                <path d="M5 12l4 -4" />
              </svg>
            </div>
            </Link>
            <div id="title">Post</div>
          </div>
          <div id="header">
            <div id="details">
              <img
                src="https://s3-alpha-sig.figma.com/img/8f9a/a88a/f84c0b0523188e60955912d822eb8566?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TflSxcOuYvBBhd7DP5-EEvfmStahk1UXCrBXsBa2yreh5N31fFUYFU6mfPu4dW9SRJ8dQbWTekDymGUruTPembAFDp2sQB0MODjP3Ow26cCMcKrMSE1kv8JTJ56ARUW338d5b3LglPHXxa9t8Sj4GDSFcuh4q0~lQE94yPtD3~e7OlcDaKQ9DJnh7jiF5~hKbpY57zhMZjBevAKNKA7D8ndmCbgdirYz~HdH3lPCY6o0yCGCJqgD5OperbezopeI5TawIP1jgAYQ0Rc0bachZslA1cbjAfHFKpc1f0cuHBWKbjNpYdi6i1cRhX2UchW9eK00JtPMV-e79nc3-hSKGA__"
                alt="Elon"
              />
              <div id="name">
                <div id="collection">
                  <div id="Elon">Elon Musk</div>
                  <div id="verified">
                    <svg
                      height="14"
                      viewBox="0 0 512 512"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z"
                        fill="#1da1f2"
                      />
                    </svg>
                  </div>
                </div>
                <div id="username">@elonmusk</div>
              </div>
            </div>
            <div id="more">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-dots"
                width="20"
                height="20"
                viewBox="0 0 20 24"
                stroke-width="2"
                stroke="#c3ccd4"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
          </div>
          <div id="main">
            <div id="joke">
{joke}
            </div>
            <div id="engagement">
              {time} · {date} · <span>{Math.floor(Math.random() * 1000) / 10}M</span> Views
            </div>
          </div>
          <hr />
          <div id="btns">
            <div id="comment">
              <div id="logo1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.29px"
                  height="11.09px"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="none"
                  fill="#c3ccd4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g>
                    <path
                      d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"
                    />
                  </g>
                </svg>
              </div>
              <div id="content1">{Math.floor(Math.random() * 100) / 10}K</div>
            </div>
            <div id="repost">
              <div id="logo2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.29px"
                  height="11.09px"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="none"
                  fill="#c3ccd4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g>
                    <path
                      d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div id="content2">{Math.floor(Math.random() * 100) / 10}K</div>
            </div>
            <div id="like">
              <div id="logo3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.29px"
                  height="11.09px"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="none"
                  fill="#c3ccd4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g>
                    <path
                      d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div id="content3">{Math.floor(Math.random() * 100)}K</div>
            </div>
            <div id="bookmark">
              <div id="logo4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.29px"
                  height="11.09px"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="none"
                  fill="#c3ccd4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g>
                    <path
                      d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div id="content4">{Math.floor(Math.random() * 100) / 10}K</div>
            </div>
            <div id="share">
              <div id="logo5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.29px"
                  height="11.09px"
                  viewBox="0 0 24 24"
                  stroke-width="0"
                  stroke="none"
                  fill="#c3ccd4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <g>
                    <path
                      d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <hr />
          <div id="footerContainer">
            <div id="footer">&copy; chai aur code</div>
          </div>
        </div>
      </div>
      <a target="_blank" href="https://chaicode.com/" rel="noopener noreferrer">
      <div id="imgContainer">
        <img
          id="chaicode"
          src="https://s3-alpha-sig.figma.com/img/6dbf/e4f9/9eddf1549be82b67d870f4041b254cab?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I~hENpWCNY3kb~sXvHQg7uae8G-s~6A9TGLruWNZKOzNvUzveOIGAiFJGEx8Jly2kp1ReBZPy6IZcDu1JYHsrVMvKqaUlUZKlKDp92kjG8BD8Q4nYY9Y9jB6qXSgnP-HHKnn-d8KMx0AtTjTKalRKfcXZL-5b6vfHNpbhP7g-IHOo6tOMm7xxOg5QSfWxhP7QjegE2ROXUso618crIUeaPa5naFHSgRTaa3fGO5VW7x--RvX7EO7guhQa3UrZZcKnQTJnSk4iwUr8YG3nMFBvwu4~dEVjj~hu-e0Kal8oIcbHpIbiXzFHloOyQFn8QVdjx5jgI1T9X9weXWt~csZww__"
          alt="ChaiCode"
        />
      </div>
      </a>
    </div>
   </>
    )
}