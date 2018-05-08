function abbrevName(name){

   let char = name.indexOf(' ');
   return `${name.charAt(0).toUpperCase()}.${name.charAt(char + 1).toUpperCase()}`;

}