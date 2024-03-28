

let canvas = document.getElementById("renderCanvas");
let engine = new BABYLON.Engine(canvas, true);

let createScene = function() {
    let scene = new BABYLON.Scene(engine);
    // Charger le fichier .babylon
    // Charger le modèle .fbx
    BABYLON.SceneLoader.ImportMesh("", "/src/models/", "personnage.glb", scene, function (meshes) {
        // Vous pouvez personnaliser le modèle chargé ici, si nécessaire
        // Par exemple, vous pouvez ajuster la position, la rotation ou l'échelle du modèle

        meshes.forEach(function(mesh) {
            // Exemple : ajuster la position du modèle
            mesh.position = new BABYLON.Vector3(0, 0, 0);

        });
    });
    let camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    // let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
    return scene;
}

let scene = createScene();

engine.runRenderLoop(function() {
    scene.render();
}, true);

window.addEventListener("resize", function() {
    engine.resize();
}, true);
