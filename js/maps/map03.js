map03 = `{
	"tileSize": 40,
	"mapCols": 23,
	"mapRows": 12,
	"startX": 0,
	"startY": 120,
	"tileSheetSrc": "./img/tilesetMap03.png",
	"nextMap": "end",
	"prevMap": "map02",
	"items":[{"posX":850, "posY":500, "name":"purplePotion"}, {"posX":800, "posY":160, "name":"cupLife"}],
	"enemies": [{"posX": 500, "posY": 180, "life": 10, "power": 3, "speed": 50, "size": 80, "imgSrc": "./img/bossNormal2.png", "type": "boss"}],
	"heroe": {"life": 6, "startPosX": 280, "startPosY": 520, "imgSrc": "./img/hero.png"}, 			 
	"gameMap": [ 
		2,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  9,  5,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
		6,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  7,
	 	3, 	8, 	8, 	8,  8, 	8, 	8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  8,  4
],
	"tileTypes": {
								"1" : { "walkable": true, "sprite":{"x":0,"y":0,"w":40,"h":40}}, 
								"2" : { "walkable": true,	"sprite":{"x":40,"y":0,"w":40,"h":40}},
								"3" : { "walkable": true,	"sprite":{"x":80,"y":0,"w":40,"h":40}},
								"4" : { "walkable": true,	"sprite":{"x":120,"y":0,"w":40,"h":40}},  
								"5" : { "walkable": true,	"sprite":{"x":160,"y":0,"w":40,"h":40}},  
								"6" : { "walkable": true,	"sprite":{"x":0,"y":40,"w":40,"h":40}},  
								"7" : { "walkable": true,	"sprite":{"x":40,"y":40,"w":40,"h":40}},
								"8" : { "walkable": true,	"sprite":{"x":80,"y":40,"w":40,"h":40}},
								"9" : { "walkable": true,	"sprite":{"x":120,"y":40,"w":40,"h":40}}						
							}
}`;