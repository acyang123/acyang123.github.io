function ConversionPart2() {
    //
    var SignedDecimalInt = parseInt(document.getElementById("2_SignedInt").value);
    var negative=false;
    var signedInt=SignedDecimalInt.toString();
    if (signedInt.charAt(0)=="-")
    {
      negative=true;
      unsigned=signedInt.substring(1);
    }
    else {
      unsigned=signedInt;
    }
    var outputValue = "";
    var outputValueTwosComplement = "";
    current=unsigned;
    while (current>=2)
    {
      outputValue=""+current%2+""+outputValue;
      current=(current-current%2)/2;
    }
    if (current>0)
    {
      outputValue=""+current+""+outputValue;
    }
    var binaryRep=outputValue.toString();
    var length=binaryRep.length;
    if (length<=24)
    {
      len=binaryRep.length;
      while (len<24)
      {
        binaryRep=""+0+binaryRep;
        len=binaryRep.length;
      }
    }
    length=binaryRep.length;
    var carried=false;
      for (i=length-1;i>=0;i--)
      {
        var letter=binaryRep.charAt(i)
        if (letter==1&&carried==false)
        {
          outputValueTwosComplement=""+1+""+outputValueTwosComplement;
          carried=true;
        }
        else if(letter==0&&carried==false)
        {
          outputValueTwosComplement=""+0+""+outputValueTwosComplement;
        }
        else
        {
          var str=0;
          if (letter==0)
          {
            str=1;
          }
          outputValueTwosComplement=""+str+""+outputValueTwosComplement;
        }
      }

      outputValue=binaryRep;
    // Show the output on the screen
    FormatAndShowOutput([outputValue, outputValueTwosComplement, SignedDecimalInt], 2);
}
