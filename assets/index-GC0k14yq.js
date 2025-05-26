(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();async function n(){const t=await(await fetch("/src/templates/header.html")).text(),i=document.createElement("header");i.innerHTML=t,document.body.prepend(i)}async function c(){const t=await(await fetch("/src/templates/footer.html")).text(),i=document.createElement("footer");i.innerHTML=t,document.body.appendChild(i)}const l=[{project_number:"01",p_title:"ManksDev",p_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:"/projects/manksdev.html",thumbnail:"/assets/04-RAS-L-BOCK-min.jpg",p_industry:"Digital Agency",p_deliverables:"Web Design, UI/UX"},{project_number:"02",p_title:"Nannu Apparels",p_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:"/projects/manksdev.html",thumbnail:"/assets/nannu_apparels.jpg",p_industry:"Garments Manufacturer",p_deliverables:"Web Design, UI/UX"},{project_number:"03",p_title:"E3 Change",p_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:"/projects/manksdev.html",thumbnail:"/assets/e3_change.jpg",p_industry:"E-learning",p_deliverables:"Web Design, UI/UX"},{project_number:"04",p_title:"Coin Exchange",p_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",url:"/projects/manksdev.html",thumbnail:"/assets/coin_exchange.jpg",p_industry:"Crypto Exchange",p_deliverables:"Web Design, UI/UX"}],d=[{service_title:"Strategy",service_des:"Clear, actionalble plans to align business vision with long-term goals and measureable success. ",service_thumb:"/assets/e3_change.jpg"},{service_title:"Brand Identity",service_des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",service_thumb:"/assets/e3_change.jpg"},{service_title:"UI / UX",service_des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",service_thumb:"/assets/e3_change.jpg"},{service_title:"Web Design",service_des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",service_thumb:"/assets/e3_change.jpg"},{service_title:"Web Development",service_des:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",service_thumb:"/assets/e3_change.jpg"}];async function p(){const t=await(await fetch("/src/templates/index.html")).text();document.getElementById("app").innerHTML=t}async function u(){const r=document.querySelector(".home_portfolio_items"),t=`
    <div class="portfolio_card flexbox align_start flexgap">
      <div class="col_25">
        <div class="project_number">
          <h6>{project_number}</h6>
        </div>
      </div>

      <div class="col_40">
        <a class="project_image" href="{url}">
          <img src="{thumbnail}" alt="{p_title} thumbnail" />
        </a>
      </div>

      <div class="col_35">
        <div class="portfolio_info">
          <div class="project_title">
            <h3>{p_title}</h3>
          </div>
          <div class="project_description">
            <p>{p_description}</p>
          </div>
          <div class="project_meta flexbox align_start">
            <div class="col_50">
              <div class="industry">
                <p>Industry</p>
                <div>{p_industry}</div>
              </div>
            </div>
            <div class="col_50">
              <div class="deliverables">
                <p>Deliverables</p>
                <div>{p_deliverables}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;l.slice(0,4).forEach(i=>{const o=t.replace(/{project_number}/g,i.project_number).replace(/{p_title}/g,i.p_title).replace(/{p_description}/g,i.p_description).replace(/{url}/g,i.url).replace(/{thumbnail}/g,i.thumbnail).replace(/{p_industry}/g,i.p_industry).replace(/{p_deliverables}/g,i.p_deliverables),e=document.createElement("div");e.innerHTML=o,r.appendChild(e.firstElementChild)})}async function m(){const r=document.querySelector(".service_items"),t=`
    <div class="service_card flexbox flexgap align_start">

      <div class="col_25"></div>

      <div class="col_25">
        <div class="single_service_heading">
          <h3>{service_title}</h3>
        </div>
      </div>

      <div class="col_50">
        <div class="single_service_text">
          <p>{service_des}</p>
        </div>
      </div>

    </div>
  `;d.slice(0,5).forEach(i=>{const o=t.replace(/{service_title}/g,i.service_title).replace(/{service_des}/g,i.service_des).replace(/{service_thumb}/g,i.service_thumb),e=document.createElement("div");e.innerHTML=o,r.appendChild(e.firstElementChild)})}window.addEventListener("DOMContentLoaded",async()=>{await n(),await p(),await c(),await u(),await m()});
