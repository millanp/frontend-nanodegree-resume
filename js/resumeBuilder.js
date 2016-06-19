/*
This is empty on purpose! Your code to build the resume will go here.
*/
var bio = {
    name: "Snoop dogg",
    role: "Gangsta",
    contacts: {
        mobile: "(666) 555-6666",
        email: "snoop@dogg.com",
        github: "https://github.com/snoopdogg/",
        twitter: "@SnoopDogg",
        location: "3807 NE 87th St",
    },
    welcomeMessage: "Smoke weed everyday",
    skills: [
        "rapper",
        "thug/gangster",
        "weed smoker",
    ],
    biopic: "http://a3.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE4MDAzNDEwMjg1MTM1Mzc0.jpg",
    display: function() {
    	$('#topContacts')
    		.append(HTMLheaderName.replace("%data%", this.name))

    }
};

var education = {
    schools: [{
        name: "Harvard University",
        location: "Boston, MA",
        degree: "Comparative theology",
        majors: ["Major A", "Major B"],
        dates: "2001-2002",
        url: "http://seattletransitblog.com",
    }],
    onlineCourses: [{
        title: "Javascript Design Patterns",
        school: "Udacity",
        date: "2015-present",
        url: "https://classroom.udacity.com/courses/ud989/lessons/3437288625/"
    }],
    display: function() {

    }
};

var work = {
    jobs: [{
        employer: "Myself",
        title: "Top Dogg",
        location: "New York, NY",
        dates: "1800-present",
        description: "te best job in da world"
    }],
    display: function() {

    }
};

var view = {
	init: function() {

	}
	render: function() {
		function renderWork() {
			
		}
		function renderBio() {
			
		}
		function renderEdu() {
			
		}
	}
};

var octopus = {
	init: function() {
		view.init();
		model.init();
	}
};