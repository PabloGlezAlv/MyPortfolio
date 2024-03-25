import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-7", "Racing Car AI (2023)", "img/projects/ia.png", `
    <div class="paragraph">
    Unity project where a car learns to drive and seeks to achieve the
     fastest lap times on various tracks. This is accomplished using neural networks and genetic algorithms. 
     The following video shows how the AI works and how I made the project.
            
     <div class="paragraph center">
     <iframe class="youtube" src="https://www.youtube.com/embed/W1XbunI1Q3c?si=U24qLRZLPoN4Ud7o" frameborder="0" allowfullscreen></iframe>
 </div>

            <div class="paragraph">
              <div class="notice">
                You can find the source code <a href="https://github.com/PabloGlezAlv/Racing-Car-AI" target="_blank">here</a>
              </div>
            </div>

          

            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "Network System (2023)", "img/projects/ng.png", `
    <div class="paragraph">
    The client and server applications were built using SDL. The game, designed solely to demonstrate the system's functionality, features a global chat among players, 
    location-based matchmaking, and efficient message transmission with interpolation for when the connection falters.
            </div>

            <div class="paragraph center">
     <iframe class="youtube" src="https://www.youtube.com/embed/JJnQPt8jWjo?si=IJIUrkn59o5OBQwG" frameborder="0" allowfullscreen></iframe>
 </div>

      <div class="paragraph">
      <div class="notice">
        You can find the source code <a href="https://github.com/PabloGlezAlv/NetworkGame" target="_blank">here</a>
      </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src= "img/projects/ng1.png" alt="Drawing Overload Screenshot" />
    <img class="pc-screenshot" src= "img/projects/ng2.png" alt="Drawing Overload Screenshot" />
  </div>

      `, "#999999"),
    new ProjectData("project-9", "DirectX Scene (2023)", "img/projects/directx.png", `
     <div class="paragraph">
     DirectX scene project utilizing shaders to generate waves, shadows, post-processing effects, normal mapping, sound, and fog
            </div>

            <div class="paragraph center">
     <iframe class="youtube" src="https://www.youtube.com/embed/DkJhmDkf3xA?si=lsQi2NO2zGFcIzl1" frameborder="0" allowfullscreen></iframe>
 </div>

    <div class="paragraph">
    <div class="notice">
      You can find the source code <a href="https://github.com/PabloGlezAlv/DirectX---CMP502" target="_blank">here</a>
    </div>
  </div>
  
  `), 
  new ProjectData("project-8", "Matchmaking system (2023)", "img/projects/tfgg.png", `
  <div class="paragraph">
  The final degree project involved creating a matchmaking system that studies the psychology of each individual and matches them
   to optimize their enjoyment. The final document can be found <a href="https://drive.google.com/file/d/1Bh1jwbFWSiNvpLpkDNYvRghs8VsqA2MM/view?usp=sharing" target="_blank">here</a>.
          </div>

    <div class="paragraph">
    <div class="notice">
      You can find the source code of the game <a href="https://github.com/jmeitin/TFG-2022-MM" target="_blank">here</a>
    </div>
  </div>

    `, "#000080"), 

    new ProjectData("project-8", "Game Engine: LOVE (2022)", "img/projects/ge.png", `
    <div class="paragraph">
    The engine created and used to develop the game 'Crunch Through Hell' implements Bullet Physics for physics simulations. 
    3D rendering is handled with Ogre, while 2D rendering and input are managed with SDL. Additionally, FMOD is implemented for sound and
    LUA to setup objects in the scene.
            </div>
  
      <div class="paragraph">
      <div class="notice">
        You can find the source code of the engine <a href="https://github.com/Triturados/Motor" target="_blank">here</a> and the API 
        website  <a href="https://triturados.github.io/Juego/CrunchThroughHell/Engine/Documentation/index.html" target="_blank">here</a>
      </div>
    </div>
  
      `, "#555555", true, true), 
];