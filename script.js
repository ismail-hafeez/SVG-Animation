
function day() {
	var svg_building = d3.select('.main')   
			.attr('width', '100%')
			.attr('height', 708);

	// sky background using a gradient
	var defs = svg_building.append("defs");

	// Define gradient for the sky
	var gradient = defs.append("linearGradient")
		.attr("id", "sky-gradient")
		.attr("x1", "0%")
		.attr("y1", "0%")
		.attr("x2", "0%")
		.attr("y2", "100%");

	gradient.append("stop")
		.attr("offset", "0%")
		.attr("stop-color", "#c7e3ee"); 

	gradient.append("stop")
		.attr("offset", "100%")
		.attr("stop-color", "#4682B4"); 

	// sky
	svg_building.append("rect")
		.attr('id', 'sky')
		.attr('width', '100%')
		.attr('height', 550)
		.attr('fill', 'url(#sky-gradient)'); 
	// stars
	for (let i = 0; i < 100; i++) { 
        svg_building.append('circle')
            .attr('class', 'star')
            .attr('cx', Math.random() * 1500) 
            .attr('cy', Math.random() * 400)   
            .attr('r', Math.random() * 2 + 1)  
            .attr('fill', '#e4ebec')
            .attr('opacity', 0);
    }

	function createBuilding(x, y, h, w, color, id='abc') {
			
		svg_building.append('rect')
			.attr('id', id)
			.attr('width', w)
			.attr('height', h)
			.attr('x', x)
			.attr('y', y)
			.attr('rx', 2)
			.attr('ry', 2)
			.attr('fill', color);
	}

	function lowerBuilding(buildingId, newHeight, loweredY, duration = 2000) {
		
		const originalY = parseFloat(svg_building.select(`#${buildingId}`).attr("y"));

		const originalHeight = parseFloat(svg_building.select(`#${buildingId}`).attr("height"));
		
		svg_building.select(`#${buildingId}`)
			.transition()
			.delay(2500)
			.duration(duration)
			.attr('height', newHeight)
			.attr('y', loweredY)
			.transition()
			.duration(1000)
			.attr('height', originalHeight) 
			.attr('y', originalY);           
	}
		

	/* EMPIRE STATE BUILDING */

	// building main
	createBuilding(200, 200, 350, 120, "#b9b96f");
	// left
	createBuilding(170, 250, 300, 60, "#c2c280");
	// right
	createBuilding(290, 250, 300, 60, "#c2c280");
	// top
	createBuilding(220, 180, 20, 80, "#c3c384");
	createBuilding(235, 170, 10, 50, "#c3c384");
	createBuilding(253.5, 120, 50, 15, "#c3c384");
	// windows left
	createBuilding(175, 260, 250, 20, "#b9b96f", 'window1');
	createBuilding(205, 260, 250, 20, "#b9b96f", 'window2')
	// windows right
	createBuilding(295, 260, 250, 20, "#b9b96f", 'window3');
	createBuilding(325, 260, 250, 20, "#b9b96f", 'window4');
	// windows middle
	createBuilding(240, 220, 290, 40, "#c2c280", 'window5');

	/* WORLD TRADE CENTER */

	// tower 1
	createBuilding(450, 50, 500, 75, "darkgray", 'tower11'); 
	// black rect
	createBuilding(450, 60, 20, 75, "gray", 'tower12');
	createBuilding(450, 205, 15, 75, "gray", 'tower13');
	createBuilding(450, 340, 15, 75, "gray", 'tower14');
	// windows
	var window_count = 6;
	var start_x = 442;
	var start_y = 80;
	for (let i = 1;i < 18;i++) {

		if (i == 6 || i == 12) {
			start_y += 35;
			continue;
		}

		start_y += 20;
		start_x = 442;

		for (let j = 1;j < 5;j++) {
			createBuilding(start_x + (j * 15), start_y, 10, 10, "lightgray", `window${window_count++}`);
			start_x += 2;
		}
	}

	// tower 2
	createBuilding(550, 50, 500, 75, "darkgray", 'tower22');
	// black rect
	createBuilding(550, 60, 20, 75, "gray", 'tower23');
	createBuilding(550, 205, 15, 75, "gray", 'tower24');
	createBuilding(550, 340, 15, 75, "gray", 'tower25');
	// windows
	start_x = 542;
	start_y = 80;
	for (let i = 1;i < 18;i++) {

		if (i == 6 || i == 12) {
			start_y += 35;
			continue;
		}

		start_y += 20;
		start_x = 542;

		for (let j = 1;j < 5;j++) {
			createBuilding(start_x + (j * 15), start_y, 10, 10, "lightgray", `window${window_count++}`);
			start_x += 2;
		}
	}

	/* SQUARISH BUILDING */

	// building top
	svg_building.append('rect')
			//.attr('id', id)
			.attr('width', '300')
			.attr('height', '80')
			.attr('x', 700)
			.attr('y', 165)
			.attr('rx', '80')
			.attr('ry', '100')
			.attr('fill', '#ac8246');
	// building
	createBuilding(700, 200, 350, 300, "#95682a");
	// windows top
	start_x = 700;
	for (let i = 1;i < 5;i++) {
		createBuilding(start_x + (i * 15), 210, 100, 50, "#ac8246", `window${window_count++}`);
		start_x += 55;
	}
	// windows middle
	start_x = 700;
	for (let i = 1;i < 5;i++) {
		createBuilding(start_x + (i * 15), 330, 50, 50, "#ac8246", `window${window_count++}`);
		start_x += 55;
	}
	// windows middle
	start_x = 700;
	for (let i = 1;i < 5;i++) {
		createBuilding(start_x + (i * 15), 400, 50, 50, "#ac8246", `window${window_count++}`);
		start_x += 55;
	}
	// windows bottom
	createBuilding(715, 470, 30, 260, "#ac8246", `window${window_count++}`);

	/* FANCY BUILDING */

	// Building top
	svg_building.append('circle')
			.attr('cx', 1135)
			.attr('cy', 270)
			.attr('r', 70)
			.attr('fill', "#ab9a68")
			.attr('stroke', '#ab9a68');
	// Building bottom
	createBuilding(1050, 400, 150, 170, "#cbb77c");
	// Building middle
	createBuilding(1065, 250, 150, 140, "#e5ce8a");
	// windows top
	start_x = 1060;
	for (let i = 1;i < 3;i++) {
		createBuilding(start_x + (i * 15), 270, 50, 50, "#cbb77c", `window${window_count++}`);
		start_x += 55;
	}
	// windows middle 1
	start_x = 1070;
	for (let i = 1;i < 5;i++) {
		createBuilding(start_x + (i * 10), 330, 20, 20, "#cbb77c", `window${window_count++}`);
		start_x += 20;
	}
	// windows middle 2
	start_x = 1070;
	for (let i = 1;i < 5;i++) {
		createBuilding(start_x + (i * 10), 360, 20, 20, "#cbb77c", `window${window_count++}`);
		start_x += 20;
	}
	// windows bottom 1
	start_x = 1055;
	for (let i = 1;i < 6;i++) {
		createBuilding(start_x + (i * 10), 410, 20, 20, "#e5ce8a", `window${window_count++}`);
		start_x += 20;
	}
	// windows bottom 1
	start_x = 1055;
	for (let i = 1;i < 6;i++) {
		createBuilding(start_x + (i * 10), 410, 20, 20, "#e5ce8a", `window${window_count++}`);
		start_x += 20;
	}
	// windows bottom 2
	start_x = 1055;
	for (let i = 1;i < 6;i++) {
		createBuilding(start_x + (i * 10), 440, 60, 20, "#e5ce8a", `window${window_count++}`);
		start_x += 20;
	}

	// GREEN PATCH
	svg_building.append("rect")
		.attr('x', 0)
		.attr('y', 540)
		.attr('width', '100%')
		.attr('height', 25)
		.attr('fill', 'green'); 

	// ROAD 
	svg_building.append("rect")
		.attr('x', 0)
		.attr('y', 560)
		.attr('width', '100%')
		.attr('height', 130)
		.attr('fill', '#343434'); 

	// YELLOW STRIPS
	createBuilding(0, 570, 6, 1520, "yellow");
	createBuilding(0, 670, 6, 1520, "yellow");

	/* CAR */

	var colors = ['red', 'blue', 'magenta'];
	var index = 0;

	// Left to Right
	function carLR(color) {

		var color = colors[index % colors.length];  
   		index++; 

		// Body
		svg_building.append("rect")
			.attr('x', 10)
			.attr('y', 555)
			.attr('width', 70)
			.attr('height', 40)
			.attr('fill', color)
			.transition()
			.duration(12000)
			.attr('x', 1600)
			.remove()  
        	.on("end", function() { carLR(); });

		// Bonet
		svg_building.append("rect")
			.attr('x', 75)
			.attr('y', 570)
			.attr('width', 35)
			.attr('height', 25)
			.attr('fill', color)
			.transition()
			.duration(12000)
			.attr('x', 1670)
			.remove() ; 

		// Rear Wheel
		svg_building.append("circle")
			.attr('cx', 30)
			.attr('cy', 595)
			.attr('r', 10)
			.attr('fill', 'black')
			.transition()
			.duration(12000)
			.attr('cx', 1620)
			.remove() ;

		// Front Wheel
		svg_building.append("circle")
			.attr('cx', 85)
			.attr('cy', 595)
			.attr('r', 10)
			.attr('fill', 'black')
			.transition()
			.duration(12000)
			.attr('cx', 1685)
			.remove();
	}

	// WHITE STRIPS
	start_x = 5;
	for (let i = 1;i < 15;i++) {
		createBuilding(start_x + (i * 10), 615, 10, 80, "white");
		start_x += 98;
	}

	var index2 = 0;
	var colors2 = ['yellow', 'green', 'cyan'];

	// Right to Left
	function carRL(color) {

		var color2 = colors2[index2 % colors2.length];  
   		index2++; 

		// Body
		svg_building.append("rect")
			.attr('x', 1500)
			.attr('y', 610)
			.attr('width', 70)
			.attr('height', 40)
			.attr('fill', color2)
			.transition()
			.duration(5000)
			.attr('x', -100)
			.remove()  
        	.on("end", function() { carRL(); });

		// Bonet
		svg_building.append("rect")
			.attr('x', 1470)
			.attr('y', 625)
			.attr('width', 35)
			.attr('height', 25)
			.attr('fill', color2)
			.transition()
			.duration(5000)
			.attr('x', -130)
			.remove() ; 

		// Rear Wheel
		svg_building.append("circle")
			.attr('cx', 1490)
			.attr('cy', 650)
			.attr('r', 10)
			.attr('fill', 'black')
			.transition()
			.duration(5000)
			.attr('cx', -110)
			.remove() ;

		// Front Wheel
		svg_building.append("circle")
			.attr('cx', 1550)
			.attr('cy', 650)
			.attr('r', 10)
			.attr('fill', 'black')
			.transition()
			.duration(5000)
			.attr('cx', -50)
			.remove();
	}

	carLR(); 
	carRL();

	// GREEN PATCH
	svg_building.append("rect")
		.attr('x', 0)
		.attr('y', 685)
		.attr('width', '100%')
		.attr('height', 25)
		.attr('fill', 'green'); 

	svg_building.append('rect')
        .attr('id', 'night-overlay')
		.attr('x', 0)
		.attr('y', 0)
        .attr('width', '100%')
        .attr('height', 708)
        .attr('fill', 'black')
        .attr('opacity', 0)  
        .style('filter', 'blur(0px)');

	/* SUN */
	svg_building.append('circle')
		.attr('id', 'sun')
		.attr('cx', 1400) 
		.attr('cy', 80) 
		.attr('r', 60)  
		.attr('fill', 'yellow') 
		.style('cursor', 'pointer') 
		.on('click', function() {
			night();
		}); 

	function nine11() {
		/* AIRPLANE */

		// wing 2
		svg_building.append('line')
		.attr('x1', 1690)
		.attr('y1', 50)
		.attr('x2', 1750)
		.attr('y2', 5)
		.attr('stroke', '#0b61a0')
		.attr('stroke-width', 10)
		.transition()
		.duration(7000)  
		.attr('x1', -210) 
		.attr('x2', -120)
		.on("end", function() { nine11(); });
		// body
		svg_building.append('rect')
		.attr('x', 1600)
		.attr('y', 40)
		.attr('rx', 20)
		.attr('ry', 20)
		.attr('height', 20)
		.attr('width', 200)
		.attr('fill', '#0b61a0')
		.transition()
		.duration(7000)
		.attr('x', -300);
		// tail
		svg_building.append('line')
		.attr('x1', 1790) 
		.attr('y1', 50)
		.attr('x2', 1820)
		.attr('y2', 20)
		.attr('stroke', '#0b61a0')
		.attr('stroke-width', 13)
		.transition()
		.duration(7000)
		.attr('x1', -110)
		.attr('x2', -80);
		// wing 1
		svg_building.append('line')
		.attr('x1', 1690) 
		.attr('y1', 50)
		.attr('x2', 1750) 
		.attr('y2', 90)
		.attr('stroke', '#0b61a0')
		.attr('stroke-width', 10)
		.transition()
		.duration(7000)  
		.attr('x1', -210) 
		.attr('x2', -120);

		/* lowering tower1 */

		// main tower
		lowerBuilding("tower11", 300, 250);
		// black rect
		lowerBuilding("tower12", 20, 260);
		lowerBuilding("tower13", 20, 405);
		lowerBuilding("tower14", 20, 540);

		// windows
		var lower_window = 6;
		var lower_y = 280;

		for(let i = 0;i < 17;i++) {

			if (i == 5 || i == 11) {
				lower_y += 35;
				continue;
			}

			lower_y += 20;

			for(let j = 0;j < 4;j++)
				lowerBuilding(`window${lower_window++}`, 10, lower_y);
		}
		/* lowering tower2 */

		// main tower
		lowerBuilding("tower22", 300, 250);
		// black rect
		lowerBuilding("tower23", 20, 260);
		lowerBuilding("tower24", 20, 405);
		lowerBuilding("tower25", 20, 540);

		// windows
		var lower_y = 280;

		for(let i = 0;i < 17;i++) {

			if (i == 5 || i == 11) {
				lower_y += 35;
				continue;
			}

			lower_y += 20;

			for(let j = 0;j < 4;j++)
				lowerBuilding(`window${lower_window++}`, 10, lower_y);
		}

	}
	
	nine11();
}

day();

function night() {
    var svg_building = d3.select('.main');

	// Background lightning flash effect
	var lightning = svg_building.append("rect")
		.attr('x', 0)
		.attr('y', 0)
		.attr('width', '100%')
		.attr('height', 708)
		.attr('fill', 'black');

	// Lightning bolt path
	let lightningPath = "M1200,0 L950,250 L1050,400 L800,708"; 
	svg_building.append("path")
		.attr("d", lightningPath)  
		.attr("stroke", "white")
		.attr("stroke-width", 10)
		.attr("fill", "none")
		.attr("opacity", 0)  
		.transition()
		//.delay(500)  
		.duration(2000)
		.attr("opacity", 1)  
		.transition()
		.duration(500)
		.attr("opacity", 0); 

	lightning.transition()
		.duration(1000)
		.attr('fill', 'white')
		.transition()
		.duration(300)
		.transition()
		.duration(1000)
		.attr('fill', 'black')
		.attr('opacity', 0);

    svg_building.select("#sky")
        .transition()  
        .duration(1000)
        .attr('fill', '#141212'); 

    svg_building.select("#sun")
        .transition()
        .duration(500)
		.attr('opacity', 0.6)
		.attr('fill', '#a49f9b');  

	for (let i = 1;i<164;i++) 
		document.getElementById(`window${i}`).setAttribute("fill", "gold");
	
	svg_building.select("#night-overlay")
		.transition()
		.duration(500)
		.attr('opacity', 0.6)  
		.style('filter', 'blur(4px)');  

	function animateStars() {
		svg_building.selectAll(".star")
			.transition()
			//.delay(300)
			.duration(20000)
			.attr("cx", function() { return Math.random() * 1500; })
			.attr('opacity', 0.5)
			.on("end", animateStars);  
	}

	animateStars();
}


