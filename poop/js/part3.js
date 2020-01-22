
function ConversionPart3() {
  var floatToConvert = parseFloat(document.getElementById("3_Float").value);
  stringFloat=floatToConvert.toString();
  decimalLoc=stringFloat.indexOf(".");
  outputValue="";
  outputDec=""
  current = Math.floor(floatToConvert);
  currentDecimal = floatToConvert-current;
  while (current>=2)
  {
    outputValue=""+current%2+""+outputValue;
    current=(current-current%2)/2;
  }
  if (current>0)
  {
    outputValue=""+current+""+outputValue;
  }
  if (currentDecimal!=0)
  {
    while(outputDec.length+outputValue.length<23)
    {
      currentDecimal=currentDecimal*2;
      if (currentDecimal>=1)
      {
        outputDec=""+1+""+outputDec;
        currentDecimal=currentDecimal-1;
      }
      else {
        outputDec=""+0+""+outputDec;
      }
    }
  }
  else {
    currentDecimal="";
  }
  numPart=""+outputValue.substring(1)+""+outputDec;
  if (numPart.length<23)
  {
    while (numPart.length<23)
    {
      numPart=numPart+"0";
    }
  }

  var signBit=0;
  if (floatToConvert<0)
  {
    signBit=1;
  }

  power=outputValue.length-1;
  power=128+power;
  powerBinary="";
  var currentPower=power;
  while (currentPower>=2)
  {
    powerBinary=""+currentPower%2+""+powerBinary;
    currentPower=(currentPower-currentPower%2)/2;
  }
  if (current>0)
  {
    powerBinary=""+currentPower+""+powerBinary;
  }
  output32BitScientificNotation=""+numPart+""+powerBinary+""+signBit;

  // Show the output on the screen
  FormatAndShowOutput([floatToConvert, output32BitScientificNotation], 3);
}


// If you dare read a comment before starting to program..
// 3434000.5 has a binary representation of
//  1101000110011000010000.1
// In NORMALIZED scientific notation (i.e. scientific notation for Base 2)
// 1.1010001100110000100001 * 2^21
// ... so mantissa is 11010001100110000100001

// For the final 32 bits.. we have
// ... so 1010001100110000100001 for mantissa (because of explicit leading 1)
// ... so for bits (0-22) 10100011001100001000010
// ... so exponent representation in +128 format is 21+128 = 149 = (bits 23-30) 10010101
// ... so final sign bit = (bit 31) 0
