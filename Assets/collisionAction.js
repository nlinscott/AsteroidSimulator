#pragma strict

function Start () {

}

function OnCollisionEnter(theCollision : Collision){
	var name = theCollision.gameObject.collider.name;
	if( name != "Terrain"){
		Debug.Log(name);
	}
}