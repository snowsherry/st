<template>
  <div>
    <div class="bd" style="margin-top: 0.4rem;">

      <div class="app">

        <h1 class="logo"><img src="../assets/lr/LR_logo.png" alt=""></h1>

        <h2>Lucky Rummy</h2>

        <h3>Crepoly Technologies Private Limited</h3>

        <p>100% Welcome Prize</p>


      </div>

      <ul class="list">

        <li>

          <strong>4.8</strong>

          <p>5000+Review</p>

        </li>

        <li>

          <i class="icon-download"></i>

          <p>7.8MB</p>

        </li>

        <li>

          <i class="icon-age"></i>

          <p>18years+</p>

        </li>

        <li>

          <strong>5,000,000+</strong>

          <p>downloads</p>

        </li>

      </ul>

      <a href="javascript:void(0)" @click="handleInstall" >
        <button class="btn" type="button" >{{msg}}</button></a>

      <div class="myswiper swiper-container swiper-container-horizontal swiper-container-android">

        <ul class="swiper-wrapper">

          <li class="swiper-slide swiper-slide-active" >

            <img src="../assets/lr/lr_img_1.jpg" alt="">

          </li>

          <li class="swiper-slide swiper-slide-next">

            <img src="../assets/lr/lr_img_2.jpg" alt="">

          </li>

          <li class="swiper-slide" style="width: 621.667px; margin-right: 20px;">

            <img src="../assets/lr/lr_img_3.jpg" alt="">

          </li>
          <li class="swiper-slide" style="width: 621.667px; margin-right: 20px;">

            <img src="../assets/lr/lr_img_4.jpg" alt="">

          </li>
          <li class="swiper-slide" style="width: 621.667px; margin-right: 20px;">

            <img src="../assets/lr/lr_img_5.jpg" alt="">

          </li>

        </ul>

      </div>

      <div class="desc">

        <h3>Play FREE RUMMY at Lucky Rummy – the best poker app in India</h3>

        <p>Enter the world of free, online poker full of fun!
          <br> Join Lucky Rummy to feel the thrill of real entertainment! Advance with your poker bonus.<br>
          Compete against the best poker players and prove you’re a true poker star!</p>


        <strong>Additional Features to Enhance your Poker Experience</strong>

        <p>★ Professional: Extensive poker stats, poker table variety, true multiplayer experience.<br>
          ★ Free Bonus: Countless opportunities to earn free chips, think big and win big, easier than ever!<br>
          ★ Progressive: Very generous poker tournament offerings with a supportive bonus system.<br>
          ★ Incredible Design: Top-of-the-line visual interface, creating a very slick poker game design.<br>
          ★ Game-Aspects: More activities strategy possibilities coming soon!</p>

        <p>Experience the unique features and enjoy a variety of game modes in Lucky Rummy for extreme funs! Download now to show us your luck and skills.</p>


        <strong>Contact us:</strong>
        <p>We pride ourselves on giving best service to our users and amazing game experience. If you have any question about our product and services, please contact us:<br>
          Phone:+917406108946<br>
          Whatsapp:+917406069666<br>
          Address: S-515, 5th Floor Manipal Centre, No. 47, Mezzanine, Dickenson Road Bangalore Bangalore KA 560042 IN</p>
      </div>


      <p style="text-align: center; font-size: .26rem;">
        <a href="./privacypolicy.html" style="color: #3F51B5;font-size: .26rem;">Terms, Condition</a>
        and
        <a href="./privacypolicy.html" style="color: #3F51B5;font-size: .26rem;">Privacy Policy</a>
      </p>

    </div>
  </div>
</template>

<script>
  import '../assets/js/swiper'
  import {doDownload,isIOS} from "../assets/js/util";

  export default {
        name: "index",
        data(){
          return{
            src:"https://drummycash.higgsyx.com/rummycash/download/luckyrummy.apk",
            isInstall:false,
          }
        },
      computed:{
          msg(){
            return !this.isInstall?'Install':"Downloading, Plz confirm"
        }
      },
    methods:{
      handleInstall(){
        if(isIOS()){
          alert('Please use Android device to install app')
          return;
        }
        this.isInstall=true;
        doDownload(this.src);
        let key='timestamp';
        let value=localStorage.getItem(key);
        if(!value){
          value=new Date().getTime()+Math.ceil(Math.random()*100);
            localStorage.setItem(key,value)
          fbq('trackCustom','install_FB_Lucky_Rummy');
          gtag('event', 'click', {
            'event_category': 'Install',
            'event_label': 'install_FB_Lucky_Rummy',
            'value':value
          });
        }

      }
    },
        mounted() {
          var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1.2,
            centeredSlides: true,
            spaceBetween: 20
          });
        }
  }
</script>

<style>

</style>
