/* 
Author: jialiangzhao
class: cs444
content: This contains the different grades of some students, 
we use the color size and position to distinguish. 

*/




var loopOne=[1];


var chart_1 = make("svg", { width: 500, height: 500, "class": "my-chart",id: "scatterplot_1" });
document.getElementById("chart_1").appendChild(chart_1);
plotAll(chart_1, scores, "circle", {
         cx: function(row){return row.SATV * 450 /600-150; },
         cy: function(row){ return 650 - (row.SATM * 450 /600);},
        r: function(){return 4;}
        });
        plotAll(chart_1, loopOne, "rect", {
            y:function(){return 20;},
            width:function(){return 1;},
            height: function(){return 440;},
            x:function(){return 50;},
                });
        plotAll(chart_1, loopOne, "rect", {
            y:function(){return 460;},
            x:function(){return 50;},
            width:function(){return 440;},
            height: function(){return 1;},
           
                });
      
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "textX";},
            y:function(){return 490;},
            x:function(){return 250;},
         });
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "textY";},
            y:function(){return 220;},
            x:function(){return 0;},
           
         });
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickX1";},
            y:function(){return 100;},
            x:function(){return 25;},
         });
         str=document.getElementById("tickX1");
         str.textContent="700";
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickX2";},
            y:function(){return 250;},
            x:function(){return 25;},
         });
         str=document.getElementById("tickX2");
         str.textContent="600";
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickX3";},
            y:function(){return 400;},
            x:function(){return 25;},
         });
         str=document.getElementById("tickX3");
         str.textContent="400";
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickY1";},
            y:function(){return 475;},
            x:function(){return 100;},
         
         });
         str=document.getElementById("tickY1");
         str.textContent="500";
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickY2";},
            y:function(){return 475;},
            x:function(){return 250;},
         });
         str=document.getElementById("tickY2");
         str.textContent="600";
         plotAll(chart_1, loopOne, "text", {
            id:function(){return "tickY3";},
            y:function(){return 475;},
            x:function(){return 400;},
         });
         str=document.getElementById("tickY3");
         str.textContent="700";
        
         str=document.getElementById("textX");
         str.textContent="SATV";
         str=document.getElementById("textY");
         str.textContent="SATM";



var chart_2 = make("svg", { width: 500, height: 500, "class": "my-chart" ,id: "scatterplot_2"});
document.getElementById("chart_2").appendChild(chart_2);
plotAll(chart_2, scores, "circle", {
         cx: function(row){return row.GPA * 450 /2.5-250; },
         cy: function(row){ return 650 - (row.ACT * 450 /25);},
        r: function(row){return row.SATV * 10 /800;},
        fill: function(row){return rgb(1.5-row.SATM/800,0,1) }
        });
        plotAll(chart_2, loopOne, "rect", {
            y:function(){return 20;},
            width:function(){return 1;},
            height: function(){return 440;},
            x:function(){return 50;},
                });
        plotAll(chart_2, loopOne, "rect", {
            y:function(){return 460;},
            x:function(){return 50;},
            width:function(){return 440;},
            height: function(){return 1;},
           
                });
      
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "textX2";},
            y:function(){return 490;},
            x:function(){return 250;},
         });
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "textY2";},
            y:function(){return 250;},
            x:function(){return 0;},
           
         });
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickX21";},
            y:function(){return 100;},
            x:function(){return 30;},
         });
         str=document.getElementById("tickX21");
         str.textContent="35";
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickX22";},
            y:function(){return 250;},
            x:function(){return 35;},
         });
         str=document.getElementById("tickX22");
         str.textContent="25";
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickX23";},
            y:function(){return 400;},
            x:function(){return 30;},
         });
         str=document.getElementById("tickX23");
         str.textContent="15";
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickY21";},
            y:function(){return 475;},
            x:function(){return 100;},
         
         });
         str=document.getElementById("tickY21");
         str.textContent="2.5";
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickY22";},
            y:function(){return 475;},
            x:function(){return 250;},
         });
         str=document.getElementById("tickY22");
         str.textContent="3";
         plotAll(chart_2, loopOne, "text", {
            id:function(){return "tickY23";},
            y:function(){return 475;},
            x:function(){return 400;},
         });
         str=document.getElementById("tickY23");
         str.textContent="3.5";
        
         str=document.getElementById("textX2");
         str.textContent="GPA";
         str=document.getElementById("textY2");
         str.textContent="ACT";














var chart_3 = make("svg", { width: 500, height: 500, "class": "my-chart" ,id: "scatterplot_3"});
document.getElementById("chart_3").appendChild(chart_3);
plotAll(chart_3, scores, "circle", {
         cx: function(row){return (row.SATV +row.SATM) * 450 /1200 -150; },
         cy: function(row){ return 750 - (row.GPA * 450 /2.5);},
        r: function(row){return 5;},
        fill: function(row){return rgb(0,row.ACT/40,1) }
        });
        
plotAll(chart_3, loopOne, "rect", {
    y:function(){return 20;},
    width:function(){return 1;},
    height: function(){return 440;},
    x:function(){return 50;},
        });
plotAll(chart_3, loopOne, "rect", {
    y:function(){return 460;},
    x:function(){return 50;},
    width:function(){return 440;},
    height: function(){return 1;},
   
        });

 plotAll(chart_3, loopOne, "text", {
    id:function(){return "textX3";},
    y:function(){return 490;},
    x:function(){return 250;},
 });
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "textY3";},
    y:function(){return 250;},
    x:function(){return 5;},
   
 });
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickX31";},
    y:function(){return 100;},
    x:function(){return 30;},
 });
 str=document.getElementById("tickX31");
 str.textContent="3.5";
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickX32";},
    y:function(){return 250;},
    x:function(){return 40;},
 });
 str=document.getElementById("tickX32");
 str.textContent="3";
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickX33";},
    y:function(){return 400;},
    x:function(){return 30;},
 });
 str=document.getElementById("tickX33");
 str.textContent="2.5";
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickY31";},
    y:function(){return 475;},
    x:function(){return 100;},
 
 });
 str=document.getElementById("tickY31");
 str.textContent="800";
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickY32";},
    y:function(){return 475;},
    x:function(){return 250;},
 });
 str=document.getElementById("tickY32");
 str.textContent="1100";
 plotAll(chart_3, loopOne, "text", {
    id:function(){return "tickY33";},
    y:function(){return 475;},
    x:function(){return 400;},
 });
 str=document.getElementById("tickY33");
 str.textContent="1500";

 str=document.getElementById("textX3");
 str.textContent="SAT";
 str=document.getElementById("textY3");
 str.textContent="GPA";