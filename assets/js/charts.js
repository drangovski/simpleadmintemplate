// Doughnut Chart
var ctx = document.getElementById('doughnutChart');
var doughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
    	 datasets: [{
	        data: [ 70, 30],
	        backgroundColor: ['#80cce5','#fde09a'],
	        hoverBackgroundColor: ['#80cce5','#fde09a'],
	    }],
	    labels: [
	        'Returning',
	        'New'
	    ],
	    
    },
    options: {
    	legend: {
            labels: {
            	usePointStyle: true,
            	fontFamily: 'ssregular',
            	fontSize: 13
            }
	    },
	    responsive: true, 
		maintainAspectRatio: false
    }
});


// Line Chart
var ctx = document.getElementById('lineChart');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
    		labels:[
    			'00:00',
    			'03:00',
    			'06:00',
    			'09:00',
    			'12:00',
    			'15:00',
    			'18:00',
    			'21:00',
    			'24:00'
    		], 
    		datasets: [
				{
					label: "Visitors",
					fill: true,
					lineTension: 0.3,
					backgroundColor: "rgba(156,213,94,0.4)",
					borderColor: "#9cd55e",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					boderJoinStyle: 'miter',
					pointBorderColor: "#fff",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 7,
					pointHoverRadius: 9,
					pointHoverBackgroundColor: "#9cd55e",
					pointHoverBorderColor: "9cd55e",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81, 56, 55, 40, 20, 73],
				}
			]
    	},
	options: {
    		scales: {
    			yAxes: [{
    				ticks: {
    					beginAtZero: true
    				}
    			}]
    		},
    		responsive: true, 
			maintainAspectRatio: false,
			legend: {
				display: false
	    },
	}
});

// Bar Chart
var ctx = document.getElementById('barChart');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
    		labels:[
    			'Jan',
    			'Feb',
    			'March',
    			'Apr',
    			'May',
    			'June',
    			'July',
    			'Aug',
    			'Sep',
    			'Oct',
    			'Nov',
    			'Dec'
    		], 
    		datasets: [
				{
					label: "New Visitors",
					fill: true,
					lineTension: 0.3,
					backgroundColor: "rgba(255,139,163,0.4)",
					borderColor: "#ffb1c1",
					borderCapStyle: 'butt',
					borderDash: [],
					borderDashOffset: 0.0,
					boderJoinStyle: 'miter',
					pointBorderColor: "#fff",
					pointBackgroundColor: "#fff",
					pointBorderWidth: 7,
					pointHoverRadius: 9,
					pointHoverBackgroundColor: "#ffb1c1",
					pointHoverBorderColor: "#ffb1c1",
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: [65, 59, 80, 81, 56, 55, 40, 20, 73, 85, 20, 45],
				}
			]
    	},
    	options: {
    		scales: {
    			yAxes: [{
    				ticks: {
    					beginAtZero: true
    				}
    			}]
    		},
    		responsive: true, 
			maintainAspectRatio: false,
			legend: {
				display: false
		    },
    	}
});