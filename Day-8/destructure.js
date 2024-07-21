let arrArgs = [1, 24, 5];
function destructureArray(...arrArgs) {
  let [num1, num2] = arrArgs;
  console.log(num1);
  console.log(num2);
}
destructureArray(...arrArgs);
