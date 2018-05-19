
//global variables/arrays/objects needed
//player obj = {items:
//              stats:
//              hp:
//              others: }
    function dice(x)
    {
        return Math.floor(Math.random()*x);
    }
//array for storing pixel data
//
//
//var pixels = new Array([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[])
var pixels = new Array("mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","cave","grass","grass","forest","mountain","mountain","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","forest","mountain","forest","forest","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","mountain","water","water","water","water","water","water","water","water","mountain","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","mountain","mountain","mountain","mountain","river","mountain","mountain","mountain","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","mountain","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","sidequest","grass","grass","grass","grass","forest","forest","forest","forest","forest","forest","forest","forest","forest","forest","river","forest","forest","forest","forest","enemyhideout2","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","forest","forest","forest","forest","enemyhideout3","grass","grass","grass","grass","grass","river","grass","grass","forest","forest","forest","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","river","grass","grass","grass","forest","forest","forest","forest","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","forest","river","river","river","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","water","water","water","mountain","mountain","grass","grass","forest","enemyhideout4","grass","grass","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","river","river","river","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","river","river","bridge","river","river","river","river","grass","grass","grass","grass","water","water","water","water","water","water","water","water","water","mountain","enemyhideout1","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","quest","river","river","river","river","river","river","water","water","water","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader1","water","water","water","water","water","mountain","forest","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","trader2","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","port","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","healer","grass","grass","grass","grass","grass","grass","grass","grass","grass","playerstart","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water","mountain","mountain","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","grass","water","water","water","water","water");
var asset_types = new Array("mountain","grass","forest","river","water","bridge","port","healer","playerstart","enemyhideout1","enemyhideout2","enemyhideout3","enemyhideout4","quest","sidequest","trader1","trader2","cave");
var impassable_types = new Array("mountain","water","river");
var player_position;
var playerposid;
var gridcheck;
var event = false;
var event_box;
var choice_box;
var choice_text;
var message_box;
var animation_box;
var event_title;
var choice=0;
var choices = new Array();
var event_type=0;
var active_enemies = new Array();
var player= {
    hp:35,
    constitution:35,
    strength:3,
    defense:1,
    dexterity:1,
    magic:1,
    speed:2,
    money:0,
    attack:function(x)
    {
        let dmg = this.strength+dice(8);
        x.hp = x.hp-dmg;
    }

};
var pirate= {
    hp:30,
    constitution:30,
    strength:2,
    defense:1,
    dexterity:3,
    magic:1,
    speed:2,
    attack:function(x)
    {
        let dmg = this.strength+dice(8);
        x.hp= x.hp-dmg;
    }
};

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
    



    function event_screen()
    {   
        event_box= $("<section>");
        event_box.addClass("eventbox");
        //event_box.text("event box");
        $("body").append(event_box);
        choice_box= $("<section>");
        choice_box.addClass("choicebox");
        choice_box.text("choice box");
        $(".eventbox").append(choice_box);
        message_box = $("<section>");
        message_box.addClass("messagebox");
        message_box.text("message box");
        $(".eventbox").append(message_box);
        animation_box=$("<section>");
        animation_box.addClass("animationbox");
        animation_box.text("animations go here");
        $(".eventbox").prepend(animation_box);
        event_title = $("<section>");
        event_title.addClass("eventtitle");
        event_title.html("<h1 style=\"text-align:center\">event title</h1>");
        $(".eventbox").prepend(event_title);

    }

    function pcheck(x)
    {
        gridcheck="#pos"+(x);
        for(let i=0;i<impassable_types.length;i++){
            if($(gridcheck).attr("class")==impassable_types[i]){return false;} 
        }
        if(x>800||x<0){return false;}
        return true;
    }

    function echeck(x)
    {   console.log(x)
       let temp;
        //northernmost hideout
        if(x==221){
            console.log("trigger event");
            event_type=1;
            event=true;
            event_screen();
            event_title.html("<h1 style=\"text-align:center\">PIRATE COVE</h1>");
            choices.push("approach","leave");
            choice_box.empty();
            for(let i=0;i<choices.length;i++)
            {   choice_text = $("<p>");
                choice_text.addClass("choicetext");
                choice_text.text(choices[i]);
                choice_text.attr("id","choice"+i);
                choice_box.append(choice_text);
            }
            choice=0;
            temp = "#choice0";
            $(temp).css({"background-color":"teal"});

        }
        //mountainside hideout
        if(x==441){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==365){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==250){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==704){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==675){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==41){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==575){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==514){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==201){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }
        if(x==465){
            console.log("trigger event");
            event=true;
            event_screen();
            
        }

    }

    function rm_eventbox()
    {   message_box.empty();
        choice_box.empty();
        animation_box.empty();
        event_title.empty();
        event_box.empty();
        event_box.remove();
        event=false;
        choices.length=0;
        event_type=0;
    }

    function battle(x)
    {   choice_box.empty();
        choices.length=0;
        choices.push("attack","flee");

        for(let i=0;i<choices.length;i++)
        {   choice_text = $("<p>");
            choice_text.addClass("choicetext");
            choice_text.text(choices[i]);
            choice_text.attr("id","choice"+i);
            choice_box.append(choice_text);
        }
        choice=0;
        let temp = "#choice0";
        $(temp).css({"background-color":"teal"});
        //pirate cove
        if(event_type==1)
        {  //hp boxes
            temp = "your hp: "+player.hp+"                    pirate hp:"+pirate.hp;
            animation_box.text(temp);
            //message box text describing the scenario
            message_box.html("you enter the pirates lair...<br> you are attacked and must fight for your life!");
            //create an "active enemies" array set to desired opponents
            active_enemies.push(pirate);
        }
    }

    function win()
    {   //pirate cove
        if(event_type==1)
        {   player.money+=100;
            active_enemies.length=0;
            choices.length=0;
            choice_box.empty();
            console.log(choices);
            choices.push("leave");
            for(let i=0;i<choices.length;i++)
            {   choice_text = $("<p>");
                choice_text.addClass("choicetext");
                choice_text.text(choices[i]);
                choice_text.attr("id","choice"+i);
                choice_box.append(choice_text);
            }
            message_box.html("you've bested the pirate and now you take his treasure!")
        }

        
    }



    
    function attack() 
    {   let temp;
        
        player.attack(active_enemies[0]);
        active_enemies[0].attack(player);
        if(active_enemies[0].hp<1){active_enemies[0].hp=0;win();}
        temp = "your hp: "+player.hp+"            pirate hp:"+ pirate.hp;
        animation_box.text(temp);
    }
    
    

    function handle_choice(x)
    {   
        if($(x).text()=="leave"){rm_eventbox();}
        if($(x).text()=="approach"){battle(x);}
        //if($(x).text()=="trade"){}
        //if($(x).text()=="talk"){}
        //if($(x).text()=="purchase healing"){}
        if($(x).text()=="attack"){attack();}
        //if($(x).text()=="flee"){}

    }





    //get key input
        //if trying to walkinto unwalkable spot, do nothing else move to spot
        //if position= interactable... interact
        //press i for inventory
        //press j for journal
        $(document).keyup(function(e) {
            let temp;
            if(event==false){
            switch (e.which) {
            // space button
            case 32:

            break;
            // Move Buttons (Keyboard Down)
            case 40:
            if(!pcheck(player_position+40)){break;} 
                $(playerposid).empty();
                player_position=player_position+40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
                echeck(player_position);
                
              break;
      
              // Move Buttons (Keyboard Right)
            case 39:
                
                if(!pcheck(player_position+1)){break;} 
              $(playerposid).empty();
              player_position++;
              playerposid="#pos"+player_position;
              $(playerposid).prepend(playersprite);
              echeck(player_position);
              break;
      
              // Move Buttons (Keyboard Up)
            case 38:
            if(!pcheck(player_position-40)){break;} 
            $(playerposid).empty();
                player_position=player_position-40;
                playerposid="#pos"+player_position;
                $(playerposid).prepend(playersprite);
                echeck(player_position);
              break;
      
              // Move Buttons (Keyboard Left)
            case 37:
            if(!pcheck(player_position-1)){break;} 
            $(playerposid).empty();
             player_position--;
             playerposid="#pos"+player_position;
             $(playerposid).prepend(playersprite);
             echeck(player_position);
              break;
      
            default:
              break;
            }}else{//event box logic
                temp = "#choice"+choice;
                $(temp).css({"background-color":"black"});
                switch(e.which){
                    case 27: 
                    rm_eventbox();
                    event=false;
                    //space key(will be used to select)
                    case 32:
                    handle_choice(temp);
                    break;
                    //down arrow
                    case 40:
                    //if(choice<=0){break;}
                    if(choice>choices.length){break;}
                    choice++;
                    break;
                    //right arrow
                    case 39:
                    break;
                   
                    //up arrow
                    case 38: 
                    if(choice<=0){break;}
                    choice--;
                    break;
                    //left arrow
                    case 37:
                    break;


                    break;
                    default: break;
                }
                temp = "#choice"+choice;
                $(temp).css({"background-color":"teal"});
            }
            //console.log(playerposid);
            //console.log(player_position);
            

          });



    /*$(".choice_text").on("click","#leave", function(){
        message_box.empty();
        choice_box.empty();
        animation_box.empty();
        rm_eventbox();

    });*/
    //function for interacting, pull up large ... absolute pos div that acts as game screen
        //get key or button input to talk, fight, and interact with the scenario
        //wire buttons to game logic*rolls damage etc*

    //