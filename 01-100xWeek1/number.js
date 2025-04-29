function explainParseInt(value) {
    console.log("Original Value:", value);
    var result = parseInt(value);
    console.log("After parseInt:", result);
  }
  
  console.log(parseInt(34.24));
  console.log(parseInt("34.12"));
  
  // let result = parseInt(34);
  // Example Usage for parseInt
  explainParseInt("42");
  explainParseInt("42px");
  explainParseInt("3.14");
  
  
  function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
  }
  
  // Example Usage for parseFloat
  explainParseFloat("3.14");
  explainParseFloat("42");
  explainParseFloat("42px");
  