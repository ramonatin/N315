//this is my model and it handles on the service calls
var logoContent = `<div class="mission">    
<p>
  Our Vision <br>
  Everyone wants to become the best version of themselves, but few
  actually do it. We’re our own worst enemies when it comes to achieving
  success, chasing our dreams, and living a life that’s filled with
  passion and purpose. Some of us are self-destructive without realizing
  it, and others are conscious of the fact, but lack the tools and/or
  knowledge in order to improve. But no matter who you are, we are here
  to help you until you succeed your goals.</p>
</div>`;
var homeContent = `<div class="home">
<h1 class="home__header">Welcome to Health & Fitness!</h1>
<p>
  We are so glad that you are here! We acknowledge you for taking the
  first step--investing in yourself.
</p>
<p>
  The knowledge that you will gain here is designed to help you become
  healthier. As a result of being healthier in mind, body, and spirit,
  your weight will normalize. This is not a quick-fix diet. <br />
  You've probably tried many of those, and you know that they don't work
  in the long-term. The evidence-based lifestyle medicine tools that you
  will learn and practice in this class are designed to fit into your
  life and to become part of your life for years to come!
</p>
<p>
  
</p>
</div>`;

var aboutContent = `<div class="about">
<a class="about__header" href="programs.html">Health & Fitness</a>

<div class="about__top">
  <div class="about__para1">
    <p>
      We established the Health & Fitness in 2005, we set out to create a
      program that differed significantly from existing executive health
      practices. Rather than simply offering standard recommendations on
      wellness, we chose to customize every aspect of our program. Every
      member of our team is devoted to working with you to understand your
      particular needs and goals so together we can find solutions that
      fit your lifestyle.
    </p>
  </div>
  <div class="about__para2">
    As the leader of your team, your internist communicates extensively
    throughout the day with your wellness professionals and specialists so
    that you are not repeating yourself and to ensure you get the answers
    you need. Your team is focused on developing a plan for your optimum
    health and wellness that is both achievable and sustainable.
  </div>
</div>
</div>

</div>


`;
var programsContent = ` <div class="program">
<h1>Our Programs</h1>
<div class="program__holder">
<div class="program__image"> 
    <h2>Come and join our programs!</h2>
    <img src="images/training.jpg" alt="program" > 
    
</div>
<div class="program__infos"> 
    <p>
   <b> The Nike Training Club </b> <br>
    The Nike Training Club is like your BFF workout buddy. The trainer will work with you until you succeed. They'll work with your schedules and help you arrange your nutrition, workout routine until you achieve your goals!<br> 
    Where: Anywhere!<br>             
    Pricing: Varies</p>
<p> <b> LiveFit</b>   <br>
    This 12-week program, designed by fitness guru Jamie Eason, is designed to transform your body and make you feel proud. Jamie understands that not all bodies are the same and she has custom designed her program to fit each individual’s unique needs. <br>
    Where: Online guides available for you to train anywhere, anytime <br>
    Pricing: Starting from $12.99/month</p>
<p> <b>9 Round </b> <br>
    This kickboxing fitness program is one hot trend. With new locations popping up all throughout the US, this program focuses on fitness to empower. You get access to full body workouts, personal trainers and professional nutritional advice. <br>
    Where: Over 600 locations nationwide <br>
    Pricing: Starting from $79.99 a month depending on location.</p>

<p> <b>Barre3</b> <br>
    Designed to help you get toned and lose weight, this Portland-founded business has proven results that will help your whole body get in shape. <br>
    Where: Online or in 120+ studio locations (and expanding!) <br>
    Pricing: Starting from $29/month online
</p>
</div>

</div>
</div>
<div class="signup" >
<div class="signup__part">
  <p>Sign Up for Our programs and newsletters</p>
  <div>
  <input type="text" name="Submit" id="">
  <button><p> Submit</p>  </button>
</div>
</div>  

</div>`;
var contactContent = ` <div class="contact">  
                        
<div class="contact__form">
   <h1>Send Us A Message</h1>  
<form method="post" action="">
<input class="input" name="name" type="text" placeholder="Your Name" required><br/>
<input class="input" name="email" type="text" placeholder="Your Email" required><br/>
<textarea class="input" name="message" placeholder="Message" rows="4" required></textarea><br/>
<input class="button" type="submit" value="Submit">
</form>
</div>
</div>
</div>`;

function setCurrentPageContent(pageID) {
  //it recalls the var
  let contentName = pageID + "Content";
  //recall the class from html and evaluate the contentName
  $("#app").html(eval(contentName));
}

// function getLastName(LastName) {
//   console.log(lastName);
// }

export { setCurrentPageContent };

// function getName(firstName) {
//   console.log(firstName);
// }

// export function getLastName(LastName) {
//   console.log(lastName);
// }

// export {getName,getLastName};
