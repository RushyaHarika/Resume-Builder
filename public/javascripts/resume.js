var app = angular.module('resumeApp',[]);
app.controller('resumeController',function($scope){
	  $scope.educationArr = [];
      $scope.skillsArr = [];
      $scope.onlineProfileArr = [];
      $scope.certificatesArr = [];
      $scope.projectsArr = [];
      var i=10;

$scope.resume = function(name,contact,address,education,skills,careerObjective,onlineProfile,certificates,projects){
      var doc = new jsPDF();
      
	  $scope.educationArr.push(education);
	  $scope.skillsArr.push(skills);
      $scope.onlineProfileArr.push(onlineProfile);
      $scope.certificatesArr.push(certificates);
      $scope.projectsArr.push(projects);


      		doc.setFontSize(20);
	  		doc.text(name.fn+" "+name.ln,10,i); i=i+10;
	  		doc.setFontSize(11);
	  		doc.text(address.city+","+address.state,10,i); i=i+5;
			doc.text(contact.email,10,i); i=i+5;
			doc.text(contact.phone,10,i); i=i+10;
			doc.setFontSize(20);
			doc.text("Carreer Objectve",10,i); i=i+5;
			var c = $scope.careerObjective.co;
			doc.setFontSize(11);
			
			doc.text(c,15,i); i=i+10;
			doc.setFontSize(20);
			i=i+5; doc.text("Education",10,i); i=i+5;
			doc.setFontSize(11);
			for(var j in $scope.educationArr){
				
				doc.text($scope.educationArr[j].degree,15,i);
				i=i+5;
				
				doc.text($scope.educationArr[j].fieldOfStudy,15,i);
				i=i+5;
				
				doc.text($scope.educationArr[j].school,15,i);
				i=i+5;
				
				doc.text($scope.educationArr[j].percentage+" "+"percentage/GPA",15,i);
				i=i+5;
				
				doc.text($scope.educationArr[j].duration,15,i);
				i=i+10;
				
			}

			doc.setFontSize(20);
			doc.text("Skills",10,i); i=i+5;
			doc.setFontSize(11);
			for(var j in $scope.skillsArr)
				{
				
				var t = $scope.skillsArr[j].skill;
				doc.text(String(t),15,i);
				i=i+5;
			}

			doc.setFontSize(20);
			i=i+5; doc.text("Online Profile",10,i); i=i+5;
			doc.setFontSize(11);
			for(var j in $scope.onlineProfileArr){
				doc.text($scope.onlineProfileArr[j].profile,15,i);
				i=i+5;
			}

			doc.setFontSize(20);
			i=i+5; doc.text("Certificates/Licenses",10,i); i=i+5;
			doc.setFontSize(11);
			for(var j in $scope.certificatesArr){
				doc.text($scope.certificatesArr[j].certificate,15,i);
				i=i+5;
			}

			doc.setFontSize(20);
			i=i+5; doc.text("Projects/Internships",10,i); i=i+5;
			doc.setFontSize(11);
			for(var j in $scope.projectsArr){
				doc.text($scope.projectsArr[j].pro,15,i);
				i=i+5;
			}


			i = 10;
			doc.save('Resume.pdf')
		}

		
		$scope.edu = function(education){
			$scope.educationArr.push(education);
			$scope.education = {};
			console.log($scope.educationArr);
		}

		$scope.skill = function(skills){
			$scope.skillsArr.push(skills);
			$scope.skills = {};
		}

		$scope.op = function(onlineProfile){
			$scope.onlineProfileArr.push(onlineProfile);
			$scope.onlineProfile = {};
		}

		$scope.certificate = function(certificates){
			$scope.certificatesArr.push(certificates);
			$scope.certificates = {};
		}

		$scope.project = function(projects){
			$scope.projectsArr.push(projects);
			$scope.projects = {};
		}


			
      		


	 });
//	});
//})