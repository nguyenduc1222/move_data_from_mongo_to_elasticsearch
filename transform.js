function transform(msg) {

    if(msg.data.work) {

    	var workName = "";
        var workLocation = "";
        var workPosition = "";
    	for(var i = 0; i < msg.data.work.length; i++){

	        workName = workName + msg.data.work[i].employer.name + ",";		
    		if(msg.data.work[i].location)
    			workLocation  = workLocation  + msg.data.work[i].location.name + ",";
    		if(msg.data.work[i].position)
    			workPosition = workPosition + msg.data.work[i].position.name + ",";

    		if(msg.data.work[i].end_date == "0000-00") {
               	msg.data.work[i].end_date = "1970-01-01";
        	}

            if(msg.data.work[i].start_date == "0000-00") {
               	msg.data.work[i].start_date = "1970-01-01";
        	}
    	}

        msg.data.workName = workName;
        msg.data.workLocation = workLocation;
        msg.data.workPosition = workPosition;
    }



    if(msg.data.education) {

        var educationName = "";
        var educationLocation = "";
        var educationType = "";

        for(var i = 0; i < msg.data.education.length; i++){
            educationName = educationName + msg.data.education[i].school.name + ",";
            if(msg.data.education[i].location)
                educationLocation = educationLocation + msg.data.education[i].location.name + ",";
            if(msg.data.education[i].type)
                educationType = educationType + msg.data.education[i].type + ",";
        }
        msg.data.educationName = educationName;
        msg.data.educationLocation = educationLocation;
        msg.data.educationType = educationType;
    }


    if(msg.data.languages) {
        var languageName = "";
        for(var i = 0; i < msg.data.languages.length; i++){
            languageName = languageName + msg.data.languages[i].name + ",";  
        }
        msg.data.languageName = languageName;
    }

    return msg;
}
