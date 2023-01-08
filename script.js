const wallpaperMenu = document.getElementById("overlay"),
  wallpaperBtn = document.getElementById("wallpaper-btn"),
  overlayClose = document.getElementById("close"),
  downloadButtons = [...document.getElementsByClassName("download-button")],
  wallpapers = [...document.getElementsByClassName("wallpaper-carousel")],
  carouselButtons = [...document.querySelectorAll("[carousel-button]")],
  contactButton = document.querySelector("[contact]");

const mainLink = "https://drive.google.com/uc?export=download&id=";

function downloadWallpaper(imageId) {
  window.open(`${mainLink}${imageId}`, "_blank");
}

// Hostinger redirect
[...document.querySelectorAll("[hostinger]")].forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href =
      "https://www.hostg.xyz/aff_c?offer_id=6&aff_id=95130";
  });
});
// Nord VPN redirect
[...document.querySelectorAll("[nordvpn]")].forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = "https://nordvpn.com/";
  });
});

// Show overlay
wallpaperBtn.addEventListener("click", (event) => {
  event.preventDefault();
  wallpaperMenu.style.display = "flex";
});
// Close overlay
overlayClose.addEventListener("click", (_) => {
  wallpaperMenu.style.display = "none";
});

// Download buttons
downloadButtons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const element = event.currentTarget;
    [...element.parentElement.firstElementChild.children].forEach((element) => {
      if (element.hasAttribute("active-data")) {
        downloadWallpaper(element.firstElementChild.id);
      }
    });
  });
});

// Carousel buttons
carouselButtons.forEach((button) => {
  const ulElements = [...button.parentElement.firstElementChild.children];
  if (button.hasAttribute("prev")) {
    button.addEventListener("click", (_) => {
      for (let i = 0; i < ulElements.length; i++) {
        if (ulElements[i].hasAttribute("active-data")) {
          if (i - 1 >= 0) {
            ulElements[i].removeAttribute("active-data");
            ulElements[i - 1].setAttribute("active-data", "");
            break;
          }
        }
      }
    });
  }
  if (button.hasAttribute("next")) {
    button.addEventListener("click", (_) => {
      for (let i = 0; i < ulElements.length; i++) {
        if (ulElements[i].hasAttribute("active-data")) {
          if (i + 1 < ulElements.length) {
            ulElements[i].removeAttribute("active-data");
            ulElements[i + 1].setAttribute("active-data", "");
            break;
          }
        }
      }
    });
  }
});

// Contact
contactButton.addEventListener("click", () => {
  // No more form website
  window.location.href = ""
});
