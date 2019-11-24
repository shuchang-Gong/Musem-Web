      let currentTab = "";
      function showTabA() {
         if (currentTab != "TabA") {
            currentTab = "TabA";
            showNoTabs();
            document.getElementById("TabA").style.backgroundColor = "lightBlue";
            document.getElementById("SectionA").style.display = "inline";
         }
      }

      function showTabB() {
         if (currentTab != "TabB") {
            currentTab = "TabB";
            showNoTabs();
            document.getElementById("TabB").style.backgroundColor = "lightBlue";
            document.getElementById("SectionB").style.display = "inline";
			getDisplay();
         }
      }

      function showTabC() {
         if (currentTab != "TabC") {
            currentTab = "TabC";
            showNoTabs();
            document.getElementById("TabC").style.backgroundColor = "lightBlue";
            document.getElementById("SectionC").style.display = "inline";
			getNews();
         }
      }
	  
	  function showTabD() {
         if (currentTab != "TabD") {
            currentTab = "TabD";
            showNoTabs();
            document.getElementById("TabD").style.backgroundColor = "lightBlue";
            document.getElementById("SectionD").style.display = "inline";
			showComments();
         }
      }
	  
	  function showTabE() {
         if (currentTab != "TabE") {
            currentTab = "TabE";
            showNoTabs();
            document.getElementById("TabE").style.backgroundColor = "lightBlue";
            document.getElementById("SectionE").style.display = "inline";
			getShop();
         }
      }
	  
	  function showTabF() {
         if (currentTab != "TabF") {
            currentTab = "TabF";
            showNoTabs();
            document.getElementById("TabF").style.backgroundColor = "lightBlue";
            document.getElementById("SectionF").style.display = "inline";
	
         }
      }

      function showNoTabs() {
         document.getElementById("TabA").style.backgroundColor = "transparent";
         document.getElementById("TabB").style.backgroundColor = "transparent";
         document.getElementById("TabC").style.backgroundColor = "transparent";
		 document.getElementById("TabD").style.backgroundColor = "transparent";
		 document.getElementById("TabE").style.backgroundColor = "transparent";
		 document.getElementById("TabF").style.backgroundColor = "transparent";

         document.getElementById("SectionA").style.display = "none";
         document.getElementById("SectionB").style.display = "none";
         document.getElementById("SectionC").style.display = "none";
		 document.getElementById("SectionD").style.display = "none";
		 document.getElementById("SectionE").style.display = "none";
		 document.getElementById("SectionF").style.display = "none";
      }

      window.onload = function () {
         showTabA();
      }
	
	function getDisplay(){
		 const xhr = new XMLHttpRequest();
         const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/items";
         xhr.open("GET", uri, true);
		 xhr.setRequestHeader("Accept","application/json; charset=utf-8");
         xhr.onload = function () {
			 const version_d = document.getElementById("display");
             resp = JSON.parse(xhr.responseText);
			 version_d.innerHTML = showDisplay(resp);
         }
         xhr.send(null);
	}
	
	function showDisplay(content){
		let str = "<p></p>";
		let im = "";
		const addRecord = (content) => {
		 str += "<p class = displayTitle>" + content.Title + "</p>"
		 + "<p> <img src = http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/itemimg?id=" + content.ItemId + " width=300px height=350px></p><p>"  
		 + content.Description + "</p>"
		 + "<HR style=border:3 double #987cb9 width=70% color=#987cb9 SIZE=3><br/>" ;
		}   
		content.forEach(addRecord);
		return str;
	}	
	
	function getSearch(){
		let search = document.getElementById("input0").value;
		const xhr = new XMLHttpRequest();
		const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/search?term=" + search;
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept","application/json; charset=utf-8");
		xhr.onload = function () {
			const version_d = document.getElementById("display");
            resp = JSON.parse(xhr.responseText);
			version_d.innerHTML = showDisplay(resp);
        }
        xhr.send(null);
	}
	
	function getNews() {
         const xhr = new XMLHttpRequest();
         const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/news";
         xhr.open("GET", uri, true);
		 xhr.setRequestHeader("Accept","application/json; charset=utf-8");
         xhr.onload = function () {
			 const version_d = document.getElementById("News");
             resp = JSON.parse(xhr.responseText);
			 version_d.innerHTML = showNews(resp);
         }
         xhr.send(null);
    }
	  
	function showNews(content){
		let str = "<p></p>"
		const addRecord = (content) => {
		str +=  "<p class = newsTitle>  <a href =" + content.linkField + ">" + content.titleField + "></a></p>"
				+ "<p>  <a href =" + content.linkField + "><img src =" + content.enclosureField.urlField + " style = width: 85%; position: relativex>"
				+"</a></p> <p class = dateSize>" + content.pubDateField + "</p>"
				+ "<p>" + content.descriptionField + "</p>" 
				+ "<HR style= border:3 double #987cb9 width=70% color=#987cb9 SIZE=3>" + "<br/>";
		}
		content.forEach(addRecord);
		return str;
	}	
	
	function postComments(){
		let comment = document.getElementById("comment").value;
		let name = document.getElementById("name").value;	
		const xhr = new XMLHttpRequest();
		const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/comment?name=" + name;
		xhr.open("POST", uri, true);
		xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		xhr.send(JSON.stringify(comment));
		xhr.onload = function () {
			 showComments();
         }
	}
		
	function showComments(){
		 let xxx = "";
		 const xhr = new XMLHttpRequest();
         const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/htmlcomments";
         xhr.open("GET", uri, true);
		 xhr.setRequestHeader("Accept","application/json; charset=utf-8");
         xhr.onload = function () {
			 xxx += "<iframe src = http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/htmlcomments width=100% height=800;></iframe>"
			// document.getElementById("input1").innerHTML = xhr.responseText;
			 document.getElementById("input1").innerHTML = xxx;
         }
         xhr.send(null);
	}
	
	function getShop(){
		let search = document.getElementById("input2").value;
		const xhr = new XMLHttpRequest();
		const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shop?term=" + search;
		xhr.open("GET", uri, true);
		xhr.setRequestHeader("Accept","application/json; charset=utf-8");
		xhr.onload = function () {
			const version_d = document.getElementById("shopping");
            resp = JSON.parse(xhr.responseText);
			version_d.innerHTML = showShop(resp);
        }
        xhr.send(null);
	}
	
	function showShop(content){
		let str = "<p></p>";
		const addRecord = (content) => {
		 str += "<p class = displayTitle>" + content.Title + "</p><p>" 
		 +"<img src = http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/shopimg?id=" + content.ItemId + "></p><p>"
		 + content.Description 
		 + "<img src = https://image.shutterstock.com/image-vector/trolley-icon-260nw-752295193.jpg width = 3% height = 3% align = right onclick = showTabF()></p>"
		 + "<HR style=border:3 double #987cb9 width=70% color=#987cb9 SIZE=3><br/>" ;
		}   
		content.forEach(addRecord);
		return str;
	}	
	
	function postInfo(){
		let username = document.getElementById("username").value;
		let passwords = document.getElementById("passwords").value;	
		let address = document.getElementById("address").value;
		const xhr = new XMLHttpRequest();
		const uri = "http://redsox.uoa.auckland.ac.nz/ms/MuseumService.svc/register";
		xhr.open("POST", uri, true);
		xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
		xhr.send(JSON.stringify({"Address":address, "Name":username, "Password":passwords}));
		let message = "User " + username + " registered successfully";
		document.getElementById("change").innerHTML = message;
	}