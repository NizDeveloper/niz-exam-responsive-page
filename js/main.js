// Menu mobile
const menuOpen = document.querySelector(".button_nav_open")
const menuClose = document.querySelector(".button_nav_close")
//
const nav375 = document.querySelector(".nav375")
const opacityNav = document.querySelector(".opacity_nav")


menuOpen.addEventListener("click", () => {
  nav375.classList.add("active")
  nav375.classList.add("active_padding")
  opacityNav.classList.add("shadow")
})


menuClose.addEventListener("click", () => {
  nav375.classList.remove("active")
  opacityNav.classList.remove("shadow")

  setTimeout(() => {
    nav375.classList.remove("active_padding")
  }, 50);
})



// Drop del nav
const dropNav375 = document.querySelectorAll(".drop_nav_375")
//
const linksDrop375 = document.querySelectorAll(".list_drop_nav375")
const expand = document.querySelectorAll(".expand")


for (let i = 0; i < dropNav375.length; i++) {
  dropNav375[i].addEventListener("click", () => {
    linksDrop375[i].classList.toggle("active")
    
    expand[i].classList.toggle("activesvg")
  })
}




// // Hover del nav
// const linkHover = document.querySelectorAll(".drop_active")
// const drop = document.querySelectorAll(".drop")

// for (let i = 0; i < linkHover.length; i++) {
//   linkHover[i].addEventListener("mouseover", () => {
//     drop[i].classList.add("active_drop")
//     linkHover[i].classList.add("fondo")
//   })


//   linkHover[i].addEventListener("mouseout", () => {
//     drop[i].classList.remove("active_drop")
//     linkHover[i].classList.remove("fondo")
//   })
// }






//Portfolio section
const all = document.querySelector("#all")
const canada = document.querySelector("#canada")
const dubai = document.querySelector("#dubai")
const australia = document.querySelector("#australia")
const germany = document.querySelector("#germany")
//
const cards = document.querySelectorAll(".card")
//
const canadaItem = document.querySelectorAll(".canada")
const dubaiItem = document.querySelectorAll(".dubai")
const australiaItem = document.querySelectorAll(".australia")
const alemaniaItem = document.querySelectorAll(".alemania")


all.classList.add("foco_active")

all.addEventListener("click", () => {
  all.classList.add("foco_active")
  
  canada.classList.remove("foco_active")
  australia.classList.remove("foco_active")
  dubai.classList.remove("foco_active")
  germany.classList.remove("foco_active")


  cards.forEach(item => {
    item.classList.remove("display_none")

    setTimeout(() => {
      item.classList.remove("desactive")
      item.classList.add("active")
    }, 100);
  });
})


canada.addEventListener("click", () => {
  canada.classList.add("foco_active")
  
  all.classList.remove("foco_active")
  dubai.classList.remove("foco_active")
  australia.classList.remove("foco_active")
  germany.classList.remove("foco_active")


  canadaItem.forEach(item => {
    item.classList.remove("display_none")

    setTimeout(() => {
      item.classList.remove("desactive")
      item.classList.add("active")
    }, 100);
  });


  dubaiItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  alemaniaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  australiaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })
})


dubai.addEventListener("click", () => {
  dubai.classList.add("foco_active")
  
  all.classList.remove("foco_active")
  canada.classList.remove("foco_active")
  australia.classList.remove("foco_active")
  germany.classList.remove("foco_active")


  dubaiItem.forEach(item => {
    item.classList.remove("display_none")

    setTimeout(() => {
      item.classList.remove("desactive")
      item.classList.add("active")
    }, 100);
  });


  canadaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  australiaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  alemaniaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })
})


australia.addEventListener("click", () => {
  australia.classList.add("foco_active")
  
  all.classList.remove("foco_active")
  canada.classList.remove("foco_active")
  dubai.classList.remove("foco_active")
  germany.classList.remove("foco_active")


  australiaItem.forEach(item => {
    item.classList.remove("display_none")

    setTimeout(() => {
      item.classList.remove("desactive")
      item.classList.add("active")
    }, 100);
  });


  canadaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  dubaiItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  alemaniaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })
})

germany.addEventListener("click", () => {
  germany.classList.add("foco_active")
  
  all.classList.remove("foco_active")
  canada.classList.remove("foco_active")
  dubai.classList.remove("foco_active")
  australia.classList.remove("foco_active")


  alemaniaItem.forEach(item => {
    item.classList.remove("display_none")

    setTimeout(() => {
      item.classList.remove("desactive")
      item.classList.add("active")
    }, 100);
  });


  canadaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  dubaiItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })

  australiaItem.forEach(item => {
    item.classList.remove("active")
    item.classList.add("desactive")
    
    setTimeout(() => {
      item.classList.add("display_none")
    }, 500);
  })
})



// Slider 1
const containSlider = document.querySelector(".slider_view")
const slider = document.querySelector(".slider")
//
const control = document.querySelectorAll(".control_slider")
//
let contador = 0
let foco = 0
let eliFoco = -1


setInterval(() => {
  contador++

  if (contador != 7) {
    slider.classList.add("transition")
    slider.style.transform = `translateX(-${11.11 * contador}%)`
  }
  else {
    slider.classList.remove("transition")
    slider.style.transform = `translateX(0%)`
    
    contador = 0
  }
}, 3000);


for (let i = 0; i < control.length; i++) {
  control[i].addEventListener("click", () => {
    control.forEach(item => {
      item.classList.remove("foco")
    })
    control[i].classList.add("foco")


    slider.classList.add("transition")
    slider.style.transform = `translateX(-${11.11 * i}%)`
    contador = i
    foco = i
    eliFoco = i - 1
  })
}

setInterval(() => {
  foco++
  eliFoco++

  if (foco != 6) {
    control[foco].classList.add("foco")
  } else {
    foco = 0
    control[0].classList.add("foco")
  }

  if (eliFoco != 5) {
    control[eliFoco].classList.remove("foco")
  } else {
    eliFoco = -1
    control[5].classList.remove("foco")
  }
}, 3000);



// Slider 2 / Slider Manual
const sliderIcons = document.querySelector(".slider_icons")
//
const cardSlider = document.querySelectorAll(".card_slider")

let indexIcon = 0;

let grabbin = false;
let clickX;
let moviento;
let soltarX

sliderIcons.addEventListener("mousedown", (e) => {
  clickX = parseInt(e.clientX);

  grabbin = true;

  sliderIcons.classList.add("grabbin")
})



sliderIcons.addEventListener("mousemove", (e) => {
  if(grabbin == true) {
    // Izquierda
    if (clickX < soltarX) {
      indexIcon -= 0.2

      if (indexIcon < -1) {
        sliderIcons.classList.add("cero_transition")
        sliderIcons.style.transform = `translateX(-60%)`
        indexIcon = 60
      }
      
      sliderIcons.style.transform = `translateX(-${indexIcon}%)`
    }
  
    // Derecha
    if (clickX > soltarX) {
      indexIcon += 0.2
  
      sliderIcons.style.transform = `translateX(${-(indexIcon * 1)}%)`

    }

    if (indexIcon > 60) {
      sliderIcons.style.transform = `translateX(-60%)`

      setTimeout(() => {
        sliderIcons.classList.add("cero_transition")
        sliderIcons.style.transform = `translateX(0%)`
        indexIcon = 0
      }, 300);
    }
  }
})


sliderIcons.addEventListener("mouseup", (e) => {
  soltarX = parseInt(e.clientX);

  grabbin = false;

  sliderIcons.classList.remove("grabbin")
})


setInterval(() => {
  let autoSlide = parseInt((indexIcon / 10))

  autoSlide++

  if (autoSlide <= 7)  {
    sliderIcons.classList.remove("cero_transition")
    sliderIcons.style.transform = `translateX(${-(autoSlide * 10)}%)`
  }
  else {
    autoSlide = 0

    sliderIcons.style.transform = `translateX(${-(autoSlide * 10)}%)`
    sliderIcons.classList.add("cero_transition")
  }
}, 3000);



// Acordeon
const element = document.querySelectorAll(".element")
//
const drop_acordeon = document.querySelectorAll(".acordeon_drop")
const expand_acordeon = document.querySelectorAll(".expand_acordeon")


element[0].addEventListener("click", () => {
  drop_acordeon[0].classList.toggle("drop_active")
  expand_acordeon[0].classList.toggle("active")


  drop_acordeon[1].classList.remove("drop_active")
  drop_acordeon[2].classList.remove("drop_active")
  drop_acordeon[3].classList.remove("drop_active")

  expand_acordeon[1].classList.remove("active")
  expand_acordeon[2].classList.remove("active")
  expand_acordeon[3].classList.remove("active")
})


element[1].addEventListener("click", () => {
  drop_acordeon[1].classList.toggle("drop_active")
  expand_acordeon[1].classList.toggle("active")


  drop_acordeon[0].classList.remove("drop_active")
  drop_acordeon[2].classList.remove("drop_active")
  drop_acordeon[3].classList.remove("drop_active")

  expand_acordeon[0].classList.remove("active")
  expand_acordeon[2].classList.remove("active")
  expand_acordeon[3].classList.remove("active")
})


element[2].addEventListener("click", () => {
  drop_acordeon[2].classList.toggle("drop_active")
  expand_acordeon[2].classList.toggle("active")


  drop_acordeon[0].classList.remove("drop_active")
  drop_acordeon[1].classList.remove("drop_active")
  drop_acordeon[3].classList.remove("drop_active")

  expand_acordeon[0].classList.remove("active")
  expand_acordeon[1].classList.remove("active")
  expand_acordeon[3].classList.remove("active")
})


element[3].addEventListener("click", () => {
  drop_acordeon[3].classList.toggle("drop_active")
  expand_acordeon[3].classList.toggle("active")


  drop_acordeon[0].classList.remove("drop_active")
  drop_acordeon[1].classList.remove("drop_active")
  drop_acordeon[2].classList.remove("drop_active")

  expand_acordeon[0].classList.remove("active")
  expand_acordeon[1].classList.remove("active")
  expand_acordeon[2].classList.remove("active")
})



// Boton scroll
const button_scroll = document.querySelector(".scroll_top")
const header = document.querySelector(".header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    button_scroll.classList.remove("hidden")
    header.classList.add("scroll")
  } else {
    button_scroll.classList.add("hidden")
    header.classList.remove("scroll")
  }
})