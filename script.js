document.addEventListener('keydown', (tecla)=>{
  var element = document.querySelector('#elementid');
  var hor = getComputedStyle(document.querySelector('#elementid')).left;
  var ver = getComputedStyle(document.querySelector('#elementid')).bottom;
  /*
  The variable lue can be changed for example, to make a character's speed higher when he levels up.
  A variável lue pode ser alterada para por exemplo, deixar um personagem mais rápido quando ele subir de nível.
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
