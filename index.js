// Get all the images
image_array = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg'
  ]

  function get_random_image(){
    // Get a random index
 
    random_index = Math.floor(Math.random() * image_array.length);
    random_index1 = Math.floor(Math.random() * image_array.length);
    random_index2 = Math.floor(Math.random() * image_array.length);
    // Get an image at the random_index
    selected_image = image_array[random_index]
    selected_image1 = image_array[random_index1]
    selected_image2 = image_array[random_index2]

    // Display the image
    
    document.getElementById('image_shower').src = `./images/${selected_image}`
    document.getElementById('image_shower1').src = `./images/${selected_image1}`
    document.getElementById('image_shower2').src = `./images/${selected_image2}`

    

    let bau = 0;
    let cua = 0;
    let tom = 0;
    let ca = 0;
    let ga = 0;
    let nai = 0;

    switch(random_index) {
      case 0:
        // code block
        nai++;
        break;
      case 1:
        // code block
        bau++;
        break;
      case 2:
        ga++;
        break;
      case 3:
        ca++;
        break;
      case 4:
        cua++;
        break;
      case 5:
        tom++;
        break;
    }

    switch(random_index1) {
      case 0:
        // code block
        nai++;
        break;
      case 1:
        // code block
        bau++;
        break;
      case 2:
        ga++;
        break;
      case 3:
        ca++;
        break;
      case 4:
        cua++;
        break;
      case 5:
        tom++;
        break;
    }

    switch(random_index2) {
      case 0:
        nai++;
        break;
      case 1:
        bau++;
        break;
      case 2:
        ga++;
        break;
      case 3:
        ca++;
        break;
      case 4:
        cua++;
        break;
      case 5:
        tom++;
        break;
    }
    document.getElementById("bau").innerHTML = "Bầu:  " + bau;
    document.getElementById("cua").innerHTML = "Cua:  " + cua;
    document.getElementById("tom").innerHTML = "Tôm:  " + tom;
    document.getElementById("ca").innerHTML = "Cá:  " + ca;
    document.getElementById("ga").innerHTML = "Gà:  " + ga;
    document.getElementById("nai").innerHTML = "Nai:  " + nai;

  }
   function timer(){
        disp();
        my_time=setTimeout('timer()',100);
        
      }
  function reset(){
        reset1();
      }
  function reset1(){

        document.getElementById('i1').style.width= "700px";
        document.getElementById('i1').style.height= "700px";
        document.getElementById('i1').style.bottom= "150px";
        document.getElementById('i1').style.left= "375px";

        document.getElementById("msg").innerHTML="";
      }
  function disp(){
        document.getElementById('i1').style.width= "700px";
        document.getElementById('i1').style.height= "700px";
        document.getElementById('i1').style.bottom= "160px";
        document.getElementById('i1').style.left= "-150px";

        document.getElementById("msg").innerHTML="";
      }