#pragma strict

var laser : ParticleSystem;
var laserCamera : Camera;
var mainCamera : Camera;
var arrayOfRocks : GameObject[];

var guiStyle: GUIStyle;
var guiStyleRed: GUIStyle;
var guiStyleYellow: GUIStyle;
var guiStyleGreen: GUIStyle;
var guiStyleDefault : GUIStyle;
var guiStyleWhite : GUIStyle;

var distance : int;


function Start () {
	laser.enableEmission = true;
}



function Update () {
	for(var i = 0; i < arrayOfRocks.length; ++i){
		distance = Vector3.Distance(arrayOfRocks[i].transform.position, transform.position);
		if( distance < 60 ){
			if(Input.GetKeyDown(KeyCode.C)){
				StartCoroutine(initLaser(arrayOfRocks[i]));
				Debug.Log(arrayOfRocks[i].name);
			}
		}
	}
}

function initLaser(rock : GameObject){
	
	mainCamera.enabled = false;
	laserCamera.enabled = true;
	laser.Play();
	
	yield WaitForSeconds(2);
	rock.renderer.enabled = false;

	mainCamera.enabled = true;
	laserCamera.enabled = false;
}

function OnGUI () {
	// Make a background box
	var rockProximity;

	GUI.Box (Rect (10,10,225,300), "", guiStyle);
	
	GUI.Label (Rect (165,110,300,100), "80%", guiStyleDefault);
	
	GUI.Label (Rect (165,160,300,100), "" + Mathf.Round( transform.position.y * 10)/10, guiStyleDefault);
	
	rockProximity = "Red";
	if (Vector3.Distance(arrayOfRocks[0].transform.position, transform.position) < 200) {rockProximity = "Yellow";}
	if (Vector3.Distance(arrayOfRocks[0].transform.position, transform.position) < 60) {rockProximity = "Green";}
	
	if(!arrayOfRocks[0].renderer.enabled){
		rockProximity = "Mined";
	}
	
	
	if (rockProximity == "Red") GUI.Label (Rect (90,240,300,100), arrayOfRocks[0].name, guiStyleRed);
	if (rockProximity == "Yellow") GUI.Label (Rect (90,240,300,100), arrayOfRocks[0].name, guiStyleYellow);
	if (rockProximity == "Green") GUI.Label (Rect (90,240,300,100), arrayOfRocks[0].name, guiStyleGreen);
	
	if(rockProximity == "Mined"){
		GUI.Label (Rect (90,240,300,100), "Mined", guiStyleDefault);
	}
	
	rockProximity = "Red";
	if (Vector3.Distance(arrayOfRocks[1].transform.position, transform.position) < 200) {rockProximity = "Yellow";}
	if (Vector3.Distance(arrayOfRocks[1].transform.position, transform.position) < 60) {rockProximity = "Green";}
	
	if(!arrayOfRocks[1].renderer.enabled){
		rockProximity = "Mined";
	}
	
	if (rockProximity == "Red") GUI.Label (Rect (90,255,300,100), arrayOfRocks[1].name, guiStyleRed);
	if (rockProximity == "Yellow") GUI.Label (Rect (90,255,300,100), arrayOfRocks[1].name, guiStyleYellow);
	if (rockProximity == "Green") GUI.Label (Rect (90,255,300,100), arrayOfRocks[1].name, guiStyleGreen);
	
	if(rockProximity == "Mined"){
		GUI.Label (Rect (90,255,300,100), "Mined", guiStyleDefault);
	}
	
	
	rockProximity = "Red";
	if (Vector3.Distance(arrayOfRocks[2].transform.position, transform.position) < 200) {rockProximity = "Yellow";}
	if (Vector3.Distance(arrayOfRocks[2].transform.position, transform.position) < 60) {rockProximity = "Green";}
	
	if(!arrayOfRocks[2].renderer.enabled){
		rockProximity = "Mined";
	}
	
	if (rockProximity == "Red") GUI.Label (Rect (90,270,300,100), arrayOfRocks[2].name, guiStyleRed);
	if (rockProximity == "Yellow") GUI.Label (Rect (90,270,300,100), arrayOfRocks[2].name, guiStyleYellow);
	if (rockProximity == "Green") GUI.Label (Rect (90,270,300,100), arrayOfRocks[2].name, guiStyleGreen);
	
	if(rockProximity == "Mined"){
		GUI.Label (Rect (90,270,300,100), "Mined", guiStyleDefault);
	}
	
	GUI.Label (Rect (10,310,300,100), "Press C to use the Laser.", guiStyleWhite);
	GUI.Label (Rect (10,324,300,100), "Use WSAD to move.", guiStyleWhite);
}	

