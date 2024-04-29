import {
  loadGLTF,
  loadTexture,
  loadTextures,
  loadVideo,
} from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener("DOMContentLoaded", () => {
  async function start() {
    const mindThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: "assets/target.mind",
      uiLoading: "#scanning-overlay",
    });

    const { renderer, scene, camera } = mindThree;
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    const loadFont = () => {
      return new Promise((resolve, reject) => {
        const loader = new THREE.FontLoader();

        loader.load(
          "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
          (font) => {
            resolve(font); // Resolve the promise with the loaded font
          },
          undefined, // Progress callback (optional)
          (error) => {
            reject(error); // Reject the promise with the error
          }
        );
      });
    };

    const font = await loadFont();

    const target_imageca5607a97a8_iconGeometry = new THREE.PlaneGeometry(1, 1);
    const target_imageca5607a97a8_texture = await loadTexture(
      "assets/pattern-images.png"
    );
    const target_imageca5607a97a8_image = new THREE.MeshBasicMaterial({
      map: target_imageca5607a97a8_texture,
    });
    const target_imageca5607a97a8 = new THREE.Mesh(
      target_imageca5607a97a8_iconGeometry,
      target_imageca5607a97a8_image
    );
    target_imageca5607a97a8.scale.set(1, 1, 1);
    target_imageca5607a97a8.position.set(0, 0, 0);
    target_imageca5607a97a8.rotation.set(-0.001, 0, 0);

    const gltf_ecdebd50_ed3ded3d8 = await loadGLTF("assets/ganesh .gltf");
    gltf_ecdebd50_ed3ded3d8.scene.scale.set(0.01, 0.01, 0.01);
    gltf_ecdebd50_ed3ded3d8.scene.position.set(1.3, -0.4, 0.2);
    gltf_ecdebd50_ed3ded3d8.scene.rotation.set(0.07, -3.12, 0);

    const logo_42ac4b51_246a42ac4_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_42ac4b51_246a42ac4_texture = await loadTexture(
      "assets/circle-wa-sm_113.png"
    );
    const logo_42ac4b51_246a42ac4_image = new THREE.MeshBasicMaterial({
      map: logo_42ac4b51_246a42ac4_texture,
    });
    const logo_42ac4b51_246a42ac4 = new THREE.Mesh(
      logo_42ac4b51_246a42ac4_iconGeometry,
      logo_42ac4b51_246a42ac4_image
    );
    logo_42ac4b51_246a42ac4.scale.set(0.2, 0.2, 0.2);
    logo_42ac4b51_246a42ac4.position.set(0.8, -1, 0);
    logo_42ac4b51_246a42ac4.rotation.set(-0.001, 0, 0);
    logo_42ac4b51_246a42ac4.userData.clickable = true;
    const logo_800a760f_f6b8800a7_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_800a760f_f6b8800a7_texture = await loadTexture(
      "assets/circle-web-sm_114.png"
    );
    const logo_800a760f_f6b8800a7_image = new THREE.MeshBasicMaterial({
      map: logo_800a760f_f6b8800a7_texture,
    });
    const logo_800a760f_f6b8800a7 = new THREE.Mesh(
      logo_800a760f_f6b8800a7_iconGeometry,
      logo_800a760f_f6b8800a7_image
    );
    logo_800a760f_f6b8800a7.scale.set(0.2, 0.2, 0.2);
    logo_800a760f_f6b8800a7.position.set(1.3, -1, 0);
    logo_800a760f_f6b8800a7.rotation.set(-0.001, 0, 0);
    logo_800a760f_f6b8800a7.userData.clickable = true;
    const logo_cf2288c5_f4b2cf228_iconGeometry = new THREE.CircleGeometry(
      0.5,
      32
    );
    const logo_cf2288c5_f4b2cf228_texture = await loadTexture(
      "assets/circle-mail-sm_125.png"
    );
    const logo_cf2288c5_f4b2cf228_image = new THREE.MeshBasicMaterial({
      map: logo_cf2288c5_f4b2cf228_texture,
    });
    const logo_cf2288c5_f4b2cf228 = new THREE.Mesh(
      logo_cf2288c5_f4b2cf228_iconGeometry,
      logo_cf2288c5_f4b2cf228_image
    );
    logo_cf2288c5_f4b2cf228.scale.set(0.2, 0.2, 0.2);
    logo_cf2288c5_f4b2cf228.position.set(1.8, -1, 0);
    logo_cf2288c5_f4b2cf228.rotation.set(-0.001, 0, 0);
    logo_cf2288c5_f4b2cf228.userData.clickable = true;

    document.body.addEventListener("click", (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      const mouse = new THREE.Vector2(mouseX, mouseY);
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        let o = intersects[0].object;

        while (o.parent && !o.userData?.clickable) {
          o = o.parent;
        }

        // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.

        if (o.userData.clickable) window.showLoadingScreen();

        if (o.userData.clickable && o === logo_42ac4b51_246a42ac4) {
          setTimeout(() => {
            window.location.href =
              "https://wa.me/8175814482?text=hii how are you";
          }, 100);
        }

        if (o.userData.clickable && o === logo_800a760f_f6b8800a7) {
          setTimeout(() => {
            window.location.href = "https://bharatbox.sandbox.game/";
          }, 100);
        }

        if (o.userData.clickable && o === logo_cf2288c5_f4b2cf228) {
          setTimeout(() => {
            window.location.href = "mailto:sandeep@reworks.in";
          }, 100);
        }
      }
    });

    const anchor = mindThree.addAnchor(0);
    anchor.group.add(target_imageca5607a97a8);
    anchor.group.add(gltf_ecdebd50_ed3ded3d8.scene);
    anchor.group.add(logo_42ac4b51_246a42ac4);
    anchor.group.add(logo_800a760f_f6b8800a7);
    anchor.group.add(logo_cf2288c5_f4b2cf228);

    anchor.onTargetFound = () => {};

    anchor.onTargetLost = () => {};

    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
