var currentTick = 0;
var lastTick = 0;
var special = false
var speed = 22;
var ctag = 0

function Draw(){
    currentTick = parseInt(Globals.Curtime() * 1000);
    if (currentTick - (10000 / speed) >= lastTick){
        switch ((ctag) % 11){
            case 0:{
                Local.SetClanTag("l");
                break;
            }
            case 1:{
                Local.SetClanTag("l1");
                break;
            }
            case 2:{
                Local.SetClanTag("l1m");
                break;
            }
            case 3:{
                Local.SetClanTag("l1mp");
                break;
            }
            case 4:{
                Local.SetClanTag("l1mpe");
                break;
            }
            case 5:{
                Local.SetClanTag("l1mpex");
                break;
            }
            case 6:{
                Local.SetClanTag("l1mpe");
                break;
            }
            case 7:{
                Local.SetClanTag("l1mp");
                break;
            }
            case 8:{
                Local.SetClanTag("l1m");
                break;
            }
            case 9:{
                Local.SetClanTag("l1");
                break;
            }
            case 10:{
                Local.SetClanTag("l");
                break;
        }
        if (ctag == 10){
            ctag = 0;
        }else{
            ctag = ctag+1;
        }
        lastTick = currentTick;
    }
}

Cheat.RegisterCallback("Draw", "Draw");