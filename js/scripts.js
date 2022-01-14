let javaScript = 0;
let python = 0;
let cSharp = 0;

function difficultyMeter(difficulty){
  if(difficulty === 'javaScript'){
    javaScript+=1;
    return javaScript
  }
  else if(difficulty === 'python'){
    python+=1;
    return python
  }
  else{
    cSharp+=1
    return cSharp
  }
}
function whatMeter(what){
  if(what === 'javaScript'){
    javaScript+= 1;
    return javaScript;
  }
  else if(what === 'python'){
    python += 1;
    return python;
  }
  else{
    cSharp +=1
    return cSharp;
  }
}
function whyMeter(why){
  if(why === 'javaScript'){
    javaScript+=1;
    return javaScript;
  }
  else if(why === 'python'){
    python +=1;
    return python;
  }
  else{
    cSharp+= 1;
    return cSharp;
  }
}
function frontOrBackMeter(frontOrBack){
  if(frontOrBack === 'javaScript'){
    javaScript+=1;
    return javaScript;
  }
  else if(frontOrBack === 'python'){
    python +=1;
    return python;
  }
  else{
    cSharp+= 1;
    return cSharp;
  }
}
function funMeter(fun){
  if(fun === 'javaScript'){
    javaScript+=1;
    return javaScript;
  }
  else if(fun === 'python'){
    python +=1;
    return python;
  }
  else{
    cSharp+= 1;
    return cSharp;
  }
}

$(document).ready(function(){
  $("#languageForm").submit(function(event){
    event.preventDefault();

    const difficulty = $("#difficulty").val();
    const what = $("#what").val();
    const why = $("#why").val();
    const frontOrBack = $("#frontOrBack").val();
    const fun = $("#fun").val();

    difficultyMeter(difficulty);
    whatMeter(what);
    whyMeter(why);
    frontOrBackMeter(frontOrBack);
    funMeter(fun);

    console.log(javaScript);
    console.log(python);
    console.log(cSharp);

    if(javaScript > python && javaScript > cSharp){
      $(".result#javaScript").show();
      /*$("#javaScript").toggle();*/
      $('#python').hide();
      $('#cSharp').hide();
    }
    else if(python > cSharp && python > javaScript){
      $(".result").show();
      $("#python").toggle();
      $('#javaScript').hide();
      $('#cSharp').hide();
    }
    else if(cSharp > python && cSharp > javaScript){
      $(".result").show();
      $("#cSharp").toggle();
      $('#javaScript').hide();
      $('#python').hide();
    }
    else{
      $(".result").hide();
    }
    javaScript = 0;
    python = 0;
    cSharp = 0;
  })
});