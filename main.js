import "./style.css";
import avatar from "./public/avatar.jpg";

document.querySelector("#app").innerHTML = `
  <div class="container">
  <div class="profile">
  <div class="profile_container">
    <div class="profile_image">
      <img src='${avatar}' alt="Christian Siku">
    </div>
    <div>
      <h1 class="profile_name">
        <span class="first_name">Christian</span>
        <span class="last_name">Siku</span>
      </h1>
      <p class="profile_title">Software Developer</p>
      <p class="description profile_description">
      As a software developer, I am dedicated to increasing the accessibility of open source technologies, creating tools that empower individuals, and fostering a sense of community. My areas of expertise include utilizing technologies such as React, Next, TypeScript, Redux, Ruby, Ruby on Rails, JavaScript, PHP, APIs, PostgreSQL, and MySQL.
      </p>
      <a class="download_Button" href=#" download="#">Download Resume</a>
    </div>
  </div>
</div>
  </div>`;
