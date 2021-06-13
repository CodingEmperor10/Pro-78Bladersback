var images = [ "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeyblade.fandom.com%2Fwiki%2FValt_Aoi&psig=AOvVaw2ccqUkpNgHR7dKistHs7a3&ust=1623665556528000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDxwdivlPECFQAAAAAdAAAAABAD",
             "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F635711303638700005%2F&psig=AOvVaw3uszgEPyU32YuGpYjYsTR8&ust=1623665790717000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCODZ2MmwlPECFQAAAAAdAAAAABAD",
             "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbeyblade.fandom.com%2Fwiki%2FLui_Shirosagi&psig=AOvVaw2zEBA3Fj39woOhz7ZSCyvH&ust=1623665986327000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCW-aWxlPECFQAAAAAdAAAAABAD"
            ];

   var names = [
               "Valt Aoi",
               "Aiger Akabane",
               "Lui Shirosagi"     
   ]; 
   var i=0;
function display()
{
    document.getElementById("displayimages").src = images[i];
    document.getElementById("displaynames").innerHTML = names[i];
    i++;
}
