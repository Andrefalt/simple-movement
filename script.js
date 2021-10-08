document.addEventListener('keydown', (tecla)=>{
  var element = document.querySelector('#elementid');
  element.style.position = "absolute";
  var hor = getComputedStyle(element).left;
  var ver = getComputedStyle(element).bottom;
  /*
  The variable lue can be changed for example, to make a character's speed higher when he levels up.
  A variável lue pode ser alterada para por exemplo, deixar um personagem mais rápido ao subir de nível.
  */
  var lue = 2;
  switch(tecla.key){
    case "a": {
      element.style.left = `${Number(hor.split("px")[0])-lue}px`
      break;
    }
    case "d": {
      element.style.left = `${Number(hor.split("px")[0])+lue}px`;
      break;
    }
    case "w": {
      element.style.bottom = `${Number(ver.split("px")[0])+lue}px`
      break;
    }
    case "s": {
      element.style.bottom = `${Number(ver.split("px")[0])-lue}px`;
      break;
    }
  }
  }
)
