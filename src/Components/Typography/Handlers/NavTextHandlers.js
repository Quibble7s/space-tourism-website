//Function to handle the style of the navlikn component when clicked
export const onNavClickHandler = async (activeStyle, number) => {
  //This is necesary so node knows that we are working on the client side
  if (typeof window !== 'undefined') {
    const navs = await document.getElementsByName('nav');

    for (let i = 0; i < navs.length; i++) {
      const nav = navs[i];

      if (!nav.classList.contains(activeStyle) && nav.id == number) {
        nav.classList.add(activeStyle);
      } else {
        nav.classList.remove(activeStyle);
      }
    }
  }
};
