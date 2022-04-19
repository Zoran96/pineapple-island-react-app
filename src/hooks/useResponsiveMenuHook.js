import { useState } from "react";

function useResponsiveMenuHook() {
  const [responsiveMenu, setResponsiveMenu] = useState(false)
  const body = document.querySelector('body')

  {responsiveMenu ? body.classList.add('disable-scroll') : body.classList.remove('disable-scroll')}

  return {responsiveMenu, setResponsiveMenu}
}

export default useResponsiveMenuHook