let javaScript = 0;
let python = 0;
let cSharp = 0;

function meter(trait){
  if(trait === 'javaScript'){
    javaScript+=1;
    return javaScript
  }
  else if(trait === 'python'){
    python+=1;
    return python
  }
  else{
    cSharp+=1
    return cSharp
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

    meter(difficulty);
    meter(what);
    meter(why);
    meter(frontOrBack);
    meter(fun);

    console.log(javaScript);
    console.log(python);
    console.log(cSharp);

    if(((javaScript === 5 || javaScript >= 3) && fun === 'javaScript')||((javaScript === python || javaScript === cSharp) && difficulty === 'javaScript')){
      $(".result").show();
      $("#javaScript").slideDown();
      $('#python').hide();
      $('#cSharp').hide();
    }
    else if(((python === 5 || python >= 3) && fun === 'python')||((python === javaScript || python === cSharp) && (difficulty === 'python'))){
      $(".result").show();
      $("#python").slideDown();
      $('#javaScript').hide();
      $('#cSharp').hide();
    }
    else if(((cSharp === 5 || cSharp >= 3) && fun === 'cSharp')||((cSharp === javaScript || cSharp === python) && (difficulty === 'cSharp' || frontOrBack === 'cSharp'))){
      $(".result").show();
      $("#cSharp").slideDown();
      $("#javaScript").hide();
      $("#python").hide();
    }
    else{
      $(".result").hide();
    }
    javaScript = 0;
    python = 0;
    cSharp = 0;
  })
});
