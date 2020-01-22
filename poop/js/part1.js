function ConversionPart1() {

    var UnsignedInt = parseInt(document.getElementById("1_UnsignedInt").value);
    var UnsignedIntBaseFrom = parseInt(document.getElementById("1_UnsignedIntBaseToConvertFrom").value);
    var UnsignedIntBaseTo = parseInt(document.getElementById("1_UnsignedIntBaseToConvertTo").value);
    var initVal=UnsignedInt.toString();
    var length=initVal.length;
    var current=0;
    var val=0;
    if (UnsignedIntBaseFrom!=10)
    {
      for (i=0;i<length;i++)
      {

        val=initVal.charAt(i);
        val=parseInt(val);
        current=(current)*UnsignedIntBaseFrom+val;
      }
    }
    else {
      current=UnsignedInt;
    }
    var outputValue = "";
    if (UnsignedIntBaseTo==10)
    {
      outputValue=current;
    }
    else {
      while (current>=UnsignedIntBaseTo)
      {
        outputValue=""+current%UnsignedIntBaseTo+""+outputValue;
        current=(current-current%UnsignedIntBaseTo)/UnsignedIntBaseTo;
      }
      if (current>0)
      {
        outputValue=""+current+""+outputValue;
      }
    }
  // Show the output on the screen
  FormatAndShowOutput([UnsignedInt, UnsignedIntBaseFrom, UnsignedIntBaseTo, outputValue], 1);

}
