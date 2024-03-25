<template>
  <div style="margin-bottom: 80px;">
    <h1>Welcome to my portfolio!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Pablo González</strong>, a junior game programmer who enjoys writing effective,
         well-organized code and thrives on challenges and new opportunities.
      </div>

      <div style="margin-top: 20px;">I've worked on some  <router-link to="/game-projects">games</router-link>, 
      besides that, I've worked on other types of <router-link to="/other-projects">projects</router-link> related
       to the gaming environment, although my skills can be summarized <router-link to="/resume">here</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game programmer. You can 
      reach me at <a href="mailto:pablogonzalva2001@gmail.com">pablogonzalva2001@gmail.com</a> or
       <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Jhon" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 20px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>