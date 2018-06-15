
                
                var score = 0;                
                var target = 0;               
                var wins = 0;               
                var losses = 0;              
                var clicks = 0;            
                var buttonArray = [1,0,0,0];                
                var rng = 0                
                var buttonNum = 0
                            
            function reset (){
            
                score = 0
                
                clicks = 0
                
                target = Math.floor(Math.random() * 2500 + 1);                
                $("#target").html(" " + target + " ");                
                $("#score").html(" " + score + " ");
                
                for (var i = 1; i < 4; i++){
                      
                      random();
                      
                      buttonArray.splice (i, 1, rng);
                      console.log(buttonArray[i])
                };
                
            };
            function win () {
                
                    alert ("All Hail The Victor!!")                   
                    wins++
                    $("#wins").html(" " + wins + " ");                                    
                    $("#clicks").append( "<li>"+ "Win number" + wins + " : "  + clicks + "clicks </li>");
                    reset ();
                };
            function loss () {
                
                    alert ("Keep your day job!")                   
                    losses++                   
                    $("#losses").html(" " + losses + " ");                   
                    reset ();
                };

                
            function buttonPress(){  
                        
                        var gem = buttonArray[buttonNum];                        
                        score = score + gem;
                        console.log(score)                        
                        $("#score").html(" " + score + " ");

                        if (score === target){
                            win ();
                        }
                        else if (score > target){
                            loss ();
                        };
                        clicks++;
                    };
        
            function random() {
                    var tempRng = Math.floor(Math.random() * 250) +1;
                    rng = tempRng;                  
                };

            function button1 () {
                    buttonNum = 0;
                    buttonPress();
                };
            function button2 () {
                    buttonNum = 1;
                    buttonPress();
                };
            function button3 () {
                    buttonNum = 2;
                    buttonPress();
                };
            function button4 () {
                    buttonNum = 3;
                    buttonPress();
                };

            $(document).ready(function() {
                    $("#button1").on("click", button1);
                    $("#button2").on("click", button2);
                    $("#button3").on("click", button3);
                    $("#button4").on("click", button4);
                });

            reset ();
