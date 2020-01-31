function submitComment() {
  // gather data
  const inputField = document.getElementById("name");
  console.log(inputField);
  const name = inputField.value;
  console.log(name);

  const textArea = document.getElementById("msg");
  const msg = textArea.value;
  console.log(msg);

  //   // create the elements you need
  const comment = document.createElement("section");
  console.log(comment);
  const h3 = document.createElement("h3");
  console.log(h3);
  const p = document.createElement("p");
  console.log(p);

  h3.innerHTML = `${name} said:`;
  p.innerHTML = msg;
  comment.classList.add("comment");
  console.log(comment);
  comment.appendChild(h3);
  comment.appendChild(p);
  const commentSection = document.getElementById("comment");
  commentSection.appendChild(comment);

  inputField.value = null;
  textArea.value = null;
}
console.log(msg);

 function doesNotPassAllValidations(name,msg)
   if( name===false|| msg ===false){
     alert('You forgot to fill in your name or message!')
   return true;
   }
   if (msg.length>280){
     console.log(msg.length);
    alert
    false("Your comment is too long")
   }

 return false

 function doesNotPassAllValidations()
 if( true)
 submitComment
 {
  return true
 }
