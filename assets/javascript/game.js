
//global variables/arrays/objects needed
//player obj = {items:
//              stats:
//              hp:
//              others: }

//array for storing pixel data
//
//
//var pixels = new Array([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
var pixels = new Array("mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","cave","grass","grass","forest","mountain","mountain","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","forest","mountain","forest","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","mountain","mountain","mountain","mountain","river","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","sidequest","grass","grass","grass","grass","forest","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","enemyhideout2","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","forest","forest","forest","forest","enemyhideout3","grass","grass","grass","grass","grass","river","grass","grass","forest","forest","forest","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","river","grass","grass","grass","forest","forest","forest","forest","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","forest","river","river","river","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","enemyhideout4","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","river","river","river","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","river","river","bridge","river","river","river","river","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","mountain","enemyhideout1","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","quest","river","river","river","river","river","river","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader1","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader2","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","port","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","healer","grass","grass","grass","grass","grass","grass","grass","grass","grass","playerstart","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water");
var player_position;
var playerposid;

//on ready
    // when everything is coming together make a "press space to start screen"
    //function to fill the game world with *pixels* (40x20) done
    //function to spawn player
    
    //draw map
    for(let i=0;i<pixels.length;i++)
    {   var pixel = $("<div>");
        pixel.addClass(pixels[i]);
        pixel.attr("data-number",i);
        pixel.text(pixel.attr("data-number"))
        pixel.attr("id","pos"+i);
        $("body").append(pixel);
    }
    //spawn player
    var playersprite = $("<img>");
    playersprite.addClass("playersprite");
    playersprite.attr("src", "assets/images/player.png");
    player_position = $(".playerstart").attr("data-number");
    $(".playerstart").prepend(playersprite);
    playerposid = "#pos"+player_position;
    

    console.log("hello");
    console.log(player_position);
    console.log(playerposid);

    //get key input
        //if trying to walkinto unwalkable spot, do nothing else move to spot
        //if position= interactable... interact
        //press i for inventory
        //press j for journal
        $(document).keyup(function(e) {
            
            switch (e.which) {
            // space button
            case 32:

            break;
            // Move Buttons (Keyboard Down)
            case 40:
                $(playerposid).empty();
                player_position=player_position+40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
                
              break;
      
              // Move Buttons (Keyboard Right)
            case 39:
                 $(playerposid).empty();
              player_position++;
              playerposid="#pos"+player_position;
              $(playerposid).prepend(playersprite);
              break;
      
              // Move Buttons (Keyboard Up)
            case 38:
            $(playerposid).empty();
                player_position=player_position-40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
              break;
      
              // Move Buttons (Keyboard Left)
            case 37:
            $(playerposid).empty();
             player_position--;
             playerposid="#pos"+player_position;
             $(playerposid).prepend(playersprite);
              break;
      
            default:
              break;
            }
            console.log(playerposid);
            console.log(player_position);
            

          });



    
    //function for interacting, pull up large ... absolute pos div that acts as game screen
        //get key or button input to talk, fight, and interact with the scenario
        //wire buttons to game logic*rolls damage etc*

    //