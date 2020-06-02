			
			// go up button on scroll appear
			



var goUpBtn = document.getElementById("go-up-button");

document.addEventListener("scroll", function(){
	goUpBtn.style.display = "block";

});

	// Hide btn
goUpBtn.addEventListener("click", function(){
	this.style.display = "none";
});





			// Section 2 mini meny




var business = document.getElementById("business");
var startup = document.getElementById("startup");
var agency = document.getElementById("agency");
var saas = document.getElementById("saas");

var par1 = document.getElementById("sec2-paragraph1");
var par2 = document.getElementById("sec2-paragraph2");

business.addEventListener("click", function(){
	par1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod a sequi illum, dignissimos enim eum dolores quos voluptatum alias aspernatur necessitatibus neque, dolorem iste consequuntur provident iure. Minima, aspernatur, omnis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
	par2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et qui nisi earum architecto quisquam totam quasi quam ipsum beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.";
});

startup.addEventListener("click", function(){
	par1.innerHTML = "What Is a Startup?";
	par2.innerHTML = "A startup is a young company founded by one or more entrepreneurs to develop a unique product or service and bring it to market. By its nature, the typical startup tends to be a shoestring operation, with initial funding from the founders or their friends and families.";
});

agency.addEventListener("click", function(){
	par1.innerHTML = "What Is an agency?";
	par2.innerHTML = "An agency is a business, firm, or organization that provides a specific service. Often, but not always, agencies work on behalf of another group, business, or person. We also use the term when describing an intervention or action that produces a particular effect.";
});

saas.addEventListener("click", function(){
	par1.innerHTML = "What Is a saas?";
	par2.innerHTML = "Software as a service (SaaS) is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet. SaaS is one of three main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).";
});




